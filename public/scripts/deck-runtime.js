(() => {
  const stages = Array.from(document.querySelectorAll('[data-deck-stage]'));
  if (stages.length === 0) {
    return;
  }

  const focusCurrentLayouts = new Set(['image-caption', 'image-mosaic', 'panel-hold']);

  const bindStage = (stage) => {
    const slides = Array.from(stage.querySelectorAll('[data-slide]'));
    if (slides.length === 0) {
      return;
    }

    const progress = stage.querySelector('[data-deck-progress]');
    const revealed = slides.map((slide) =>
      slide.dataset.mode === 'full'
        ? slide.querySelectorAll('[data-point]').length
        : 0,
    );
    let index = 0;

    const paint = () => {
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === index;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');

        const points = Array.from(slide.querySelectorAll('[data-point]'));
        const count =
          slide.dataset.mode === 'full' ? points.length : revealed[slideIndex];
        const focusCurrent = focusCurrentLayouts.has(slide.dataset.layout || '');

        points.forEach((point, pointIndex) => {
          const visible = pointIndex < count;
          point.classList.toggle('is-visible', visible);
          point.classList.toggle(
            'is-current',
            focusCurrent && visible && pointIndex === count - 1,
          );
        });
      });

      const current = slides[index];
      const totalPoints = current?.querySelectorAll('[data-point]').length ?? 1;
      const shown =
        current?.dataset.mode === 'full' ? totalPoints : revealed[index];
      const fraction =
        (index + shown / Math.max(totalPoints, 1)) / slides.length;
      if (progress instanceof HTMLElement) {
        progress.style.width = `${Math.min(100, fraction * 100)}%`;
      }
    };

    const next = () => {
      const slide = slides[index];
      const points = slide.querySelectorAll('[data-point]').length;
      if (slide.dataset.mode === 'step' && revealed[index] < points) {
        revealed[index] += 1;
        paint();
        return;
      }
      if (index < slides.length - 1) {
        index += 1;
        paint();
      }
    };

    const previous = () => {
      const slide = slides[index];
      if (slide.dataset.mode === 'step' && revealed[index] > 0) {
        revealed[index] -= 1;
        paint();
        return;
      }
      if (index > 0) {
        index -= 1;
        paint();
      }
    };

    const isFocusedStage = () =>
      document.activeElement === stage || stage.contains(document.activeElement);

    const onKey = (event) => {
      if (!isFocusedStage() && stages.length > 1) {
        return;
      }
      const forward = [
        'ArrowRight',
        'ArrowDown',
        'PageDown',
        ' ',
        'Spacebar',
        'Enter',
      ];
      const back = ['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'];
      if (forward.includes(event.key)) {
        event.preventDefault();
        next();
      } else if (back.includes(event.key)) {
        event.preventDefault();
        previous();
      } else if (event.key === 'Home') {
        event.preventDefault();
        index = 0;
        paint();
      } else if (event.key === 'End') {
        event.preventDefault();
        index = slides.length - 1;
        paint();
      }
    };

    if (stages.length === 1) {
      window.addEventListener('keydown', onKey, true);
    } else {
      stage.addEventListener('keydown', onKey);
    }

    stage.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a')) {
        return;
      }
      if (stages.length > 1 && stage instanceof HTMLElement) {
        stage.focus();
      }
      next();
    });

    paint();
    if (stages.length === 1 && stage instanceof HTMLElement) {
      stage.focus();
    }
  };

  stages.forEach(bindStage);
})();
