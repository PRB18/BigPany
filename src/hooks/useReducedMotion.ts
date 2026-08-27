import { useReducedMotion as useFramerReducedMotion } from 'framer-motion'

/**
 * Returns true if the user has requested reduced motion via
 * `prefers-reduced-motion: reduce` media query.
 * Wrap all non-essential animations in a check of this value.
 */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false
}
