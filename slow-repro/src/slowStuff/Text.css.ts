import { style } from "@vanilla-extract/css"

import { colors, sprinkles } from "./sprinkles.css"

export const root = sprinkles({
  all: "unset",
  display: "revert"
})

export const variant = {
  body1: sprinkles({
    fontFamily: "body",
    fontSize: "14px",
    letterSpacing: "0px",
    lineHeight: "20px"
  }),
  body2: sprinkles({
    fontFamily: "body",
    fontSize: "12px",
    letterSpacing: "0px",
    lineHeight: "16px"
  }),
  body3: sprinkles({
    fontFamily: "body",
    fontSize: "10px",
    letterSpacing: "0px",
    lineHeight: "12px"
  }),
  button1: sprinkles({
    fontFamily: "body",
    fontSize: "14px",
    letterSpacing: "-0.15px",
    lineHeight: "20px"
  }),
  button2: sprinkles({
    fontFamily: "body",
    fontSize: "12px",
    letterSpacing: "0px",
    lineHeight: "16px"
  }),
  caption: sprinkles({
    fontFamily: "body",
    fontSize: "12px",
    letterSpacing: "0px",
    lineHeight: "16px"
  }),
  code: sprinkles({
    fontFamily: "code",
    fontSize: "12px",
    letterSpacing: "0px",
    lineHeight: "16px"
  }),
  h1: sprinkles({
    fontFamily: "body",
    fontSize: "28px",
    letterSpacing: "0px",
    lineHeight: "38px"
  }),
  h2: sprinkles({
    fontFamily: "body",
    fontSize: "18px",
    letterSpacing: "0px",
    lineHeight: "28px"
  }),
  h3: sprinkles({
    fontFamily: "body",
    fontSize: "16px",
    letterSpacing: "0px",
    lineHeight: "24px"
  }),
  h4: sprinkles({
    fontFamily: "body",
    fontSize: "14px",
    letterSpacing: "0px",
    lineHeight: "20px"
  }),
  inherit: sprinkles({
    fontFamily: "inherit",
    fontSize: "inherit",
    letterSpacing: "inherit",
    lineHeight: "inherit"
  }),
  pre: sprinkles({
    fontFamily: "code",
    fontSize: "12px",
    letterSpacing: "0px",
    lineHeight: "16px",
    whiteSpace: "pre-wrap"
  })
}

export const align = {
  start: sprinkles({ textAlign: "start" }),
  center: sprinkles({ textAlign: "center" }),
  end: sprinkles({ textAlign: "end" }),
  inherit: sprinkles({ textAlign: "inherit" })
}

export const color = {
  grey11: sprinkles({ color: colors.grey11 }),
  grey12: sprinkles({ color: colors.grey12 }),
  inherit: sprinkles({ color: colors.inherit })
}

export const inField = style([
  sprinkles({ alignSelf: "center", marginLeft: "4px", marginRight: "4px" }),
  { flex: 1 }
])

export const noWrap = sprinkles({
  overflowX: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
})

export const weight = {
  "400": sprinkles({ fontWeight: "400" }),
  "500": sprinkles({ fontWeight: "500" }),
  "600": sprinkles({ fontWeight: "600" }),
  inherit: sprinkles({ fontWeight: "inherit" })
}
