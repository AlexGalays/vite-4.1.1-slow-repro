import { tokens } from "./vars.css"

export const boxShadows = (shadows: (keyof typeof tokens["boxShadow"])[]) =>
  shadows.map((shadow) => tokens.boxShadow[shadow]).join(", ")
