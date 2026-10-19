// Shared between components/pageTransition (which covers the screen while a
// route loads) and components/animations (which reveals page content), so
// content that starts in view waits for the curtain to lift before animating.
export const pageTransition = {
  /** Seconds until the curtain has cleared the new page; 0 when idle. */
  revealDelay: 0,
};
