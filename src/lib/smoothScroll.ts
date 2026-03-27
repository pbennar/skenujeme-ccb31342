export function smoothScrollTo(targetId: string) {
  const el = document.getElementById(targetId);
  if (!el) return;
  
  const start = window.scrollY;
  const end = el.getBoundingClientRect().top + start;
  const distance = end - start;
  const duration = 1200; // ms — slow & smooth
  let startTime: number | null = null;

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement> | MouseEvent) {
  const target = e.currentTarget as HTMLAnchorElement;
  const href = target.getAttribute("href");
  if (href?.startsWith("#") && href.length > 1) {
    e.preventDefault();
    smoothScrollTo(href.slice(1));
  }
}
