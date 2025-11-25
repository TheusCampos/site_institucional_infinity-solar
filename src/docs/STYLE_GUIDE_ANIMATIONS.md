# Scroll Reveal Animations

## Overview

All visible elements on scroll use a consistent fade-in animation triggered when 20% of the element enters the viewport. Duration is 300ms with `ease-out`, and adjacent items stagger by ~75ms.

## Usage

- Add `reveal` to elements that should animate on scroll.
- For lists or grids, add `reveal-stagger` (or `data-reveal-group`) to the parent to enable stagger between children.
- Elements with existing classes like `animate-fade-in-up` or `animate-scale-in` are automatically registered.

## Implementation Details

- CSS classes defined in `src/index.css`:
  - `.reveal` is the initial state.
  - `.reveal-in` is applied when visible (20% threshold).
  - `.reveal-stagger > *` uses `transition-delay` via CSS variable.
- JavaScript in `src/lib/scrollReveal.ts` initializes an `IntersectionObserver` with threshold `0.2`, scans the DOM, and observes new nodes with a `MutationObserver` for React route changes.
- Performance optimized using `will-change` and transitions on `transform`/`opacity` only.
- Respects `prefers-reduced-motion`.

## Accessibility

- Animations are reduced automatically when users prefer reduced motion.
- Avoid chaining heavy animations; keep to opacity/transform.

## Testing

- Verify in Chrome, Firefox, Edge, Safari (latest).
- Test on mobile and desktop; scroll through sections to confirm stagger and threshold behavior.

