import { style } from "@vanilla-extract/css"

import { sprinkles } from "./sprinkles.css"

export const root = sprinkles({
  all: "unset",
  display: "flex",
  flexDirection: "row",
  zIndex: "0"
})

export const density = {
  regular: sprinkles({ gap: "8px" }),
  compact: style({})
}
