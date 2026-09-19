/**
 * Shared Scroll Utilities for Nirmal Portfolio V2
 *
 * Provides cross-browser scroll position detection and reliable smooth
 * scrolling to the top of the page across desktop, mobile, and static export.
 */

/**
 * Returns the current vertical scroll position across different browser engines.
 */
export function getScrollTop(): number {
  if (typeof window === 'undefined') return 0;
  return (
    window.scrollY ||
    window.pageYOffset ||
    document.documentElement?.scrollTop ||
    document.body?.scrollTop ||
    0
  );
}

/**
 * Reliably scrolls the window to the very top with smooth animation.
 */
export function scrollToTop(): void {
  if (typeof window === 'undefined') return;

  try {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  } catch {
    window.scrollTo(0, 0);
  }
}
