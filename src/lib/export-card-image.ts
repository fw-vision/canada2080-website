import { toBlob } from "html-to-image";

const DEFAULT_CARD_SIZE = 1080;

export type ExportLabels = {
  preparing?: string;
  retry?: string;
  idleOne?: string;
  idleAll?: string;
  saving?: (index: number, total: number) => string;
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForCardAssets(card: HTMLElement) {
  await document.fonts?.ready;

  await Promise.all(
    [...card.querySelectorAll<HTMLImageElement>("img")].map(async (image) => {
      if (!image.complete) {
        await new Promise<void>((resolve, reject) => {
          image.addEventListener("load", () => resolve(), { once: true });
          image.addEventListener(
            "error",
            () => reject(new Error(`Could not load ${image.src}`)),
            { once: true },
          );
        });
      }
      if (!image.naturalWidth) {
        throw new Error(`Could not load ${image.src}`);
      }
      await image.decode?.().catch(() => undefined);
    }),
  );

  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
}

export async function captureFixedCard(
  card: HTMLElement,
  size = DEFAULT_CARD_SIZE,
): Promise<Blob> {
  const slot = card.closest(".card-slot") as HTMLElement | null;
  if (!slot) throw new Error("Card is missing its export slot");

  const previous = {
    slotWidth: slot.style.width,
    slotHeight: slot.style.height,
    cardTransform: card.style.transform,
  };

  slot.style.width = `${size}px`;
  slot.style.height = `${size}px`;
  card.style.transform = "none";

  try {
    await waitForCardAssets(card);
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    const backgroundColor = getComputedStyle(card).backgroundColor;
    const blob = await toBlob(card, {
      width: size,
      height: size,
      pixelRatio: 1,
      backgroundColor,
      skipFonts: true,
      cacheBust: false,
      style: {
        background: backgroundColor,
        backgroundColor,
        transform: "none",
        transformOrigin: "top left",
      },
    });
    if (!blob) throw new Error("Could not render PNG");
    return blob;
  } finally {
    slot.style.width = previous.slotWidth;
    slot.style.height = previous.slotHeight;
    card.style.transform = previous.cardTransform;
  }
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = filename;
  link.href = url;
  link.style.display = "none";
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
}

export async function exportCard(card: HTMLElement, filename: string) {
  const blob = await captureFixedCard(card);
  downloadBlob(blob, filename);
}

export async function downloadOneCard(
  button: HTMLButtonElement,
  labels: ExportLabels = {},
) {
  const figure = button.closest(".card-figure");
  const card = figure?.querySelector<HTMLElement>(".card[data-card-file]");
  const filename = card?.dataset.cardFile;
  if (!card || !filename) return;

  const label = button.textContent;
  button.disabled = true;
  button.textContent = labels.preparing || "Preparing…";
  try {
    await exportCard(card, filename);
  } catch (error) {
    console.error(error);
    button.textContent = labels.retry || "Try again";
    await sleep(1200);
  } finally {
    button.disabled = false;
    button.textContent = label || labels.idleOne || "Download PNG";
  }
}

export async function downloadAllCards(
  button: HTMLButtonElement,
  labels: ExportLabels = {},
) {
  const cards = [...document.querySelectorAll<HTMLElement>(".card[data-card-file]")];
  const label = button.textContent;
  button.disabled = true;

  try {
    for (let index = 0; index < cards.length; index += 1) {
      const card = cards[index];
      const filename = card.dataset.cardFile;
      if (!filename) continue;
      button.textContent = labels.saving
        ? labels.saving(index + 1, cards.length)
        : `Saving ${index + 1} of ${cards.length}…`;
      await exportCard(card, filename);
      await sleep(350);
    }
  } catch (error) {
    console.error(error);
    button.textContent = labels.retry || "Try again";
    await sleep(1200);
  } finally {
    button.disabled = false;
    button.textContent = label || labels.idleAll || "Download all five";
  }
}

export function bindCardExportControls(labels: ExportLabels = {}) {
  document.querySelectorAll<HTMLButtonElement>("[data-download-card]").forEach((button) => {
    button.addEventListener("click", () => {
      void downloadOneCard(button, labels);
    });
  });

  document.querySelectorAll<HTMLButtonElement>("[data-download-all]").forEach((button) => {
    button.addEventListener("click", () => {
      void downloadAllCards(button, labels);
    });
  });
}
