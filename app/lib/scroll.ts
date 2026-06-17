export function smoothScrollTo(
  selector: string,
  duration = 700,
  offset = 64
): Promise<void> {
  return new Promise((resolve) => {
    const element = document.querySelector(selector);
    if (!element) {
      resolve();
      return;
    }

    const target =
      element.getBoundingClientRect().top + window.scrollY - offset;
    const start = window.scrollY;
    const startTime = performance.now();

    function easeInOutCubic(t: number) {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + (target - start) * easeInOutCubic(progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(animate);
  });
}
