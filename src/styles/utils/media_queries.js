import { __BREAKPOINTS } from "./variables"

export const media = breakpoint => css => `@media screen and (min-width: ${breakpoint}px) { ` + css + ` }`
export const lg = css => media(__BREAKPOINTS.lg)(css)
export const md = css => media(__BREAKPOINTS.md)(css)
export const sm = css => media(__BREAKPOINTS.sm)(css)
export const xs = css => media(__BREAKPOINTS.xs)(css)
export const xxs = css => media(__BREAKPOINTS.xxs)(css)
