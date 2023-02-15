import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles"

import { mode } from "./mode.css"
import { type Color, vars } from "./vars.css"

const colorProperties = defineProperties({
  conditions: {
    darkMode: {
      selector: `${mode.dark} &`
    },
    lightMode: {
      selector: `${mode.light} &`
    },
    darkModeActive: {
      selector: `${mode.dark} &:active:hover:not(:disabled, [data-disabled])`
    },
    lightModeActive: {
      selector: `${mode.light} &:active:hover:not(:disabled, [data-disabled])`
    },
    darkModeChecked: {
      selector: `${mode.dark} &:is([data-state="checked"], [data-state="on"])`
    },
    lightModeChecked: {
      selector: `${mode.light} &:is([data-state="checked"], [data-state="on"])`
    },
    darkModeCheckedHover: {
      selector: `${mode.dark} &:is([data-state="checked"], [data-state="on"]):hover:not(:disabled, [data-disabled])`
    },
    lightModeCheckedHover: {
      selector: `${mode.light} &:is([data-state="checked"], [data-state="on"]):hover:not(:disabled, [data-disabled])`
    },
    darkModeDisabled: {
      selector: `${mode.dark} &:is(:disabled, [data-disabled])`
    },
    lightModeDisabled: {
      selector: `${mode.light} &:is(:disabled, [data-disabled])`
    },
    darkModeFocusVisible: {
      selector: `${mode.dark} &:focus-visible`
    },
    lightModeFocusVisible: {
      selector: `${mode.light} &:focus-visible`
    },
    darkModeFocusWithin: {
      selector: `${mode.dark} &:focus-within`
    },
    lightModeFocusWithin: {
      selector: `${mode.light} &:focus-within`
    },
    darkModeHighlighted: {
      selector: `${mode.dark} &[data-highlighted]`
    },
    lightModeHighlighted: {
      selector: `${mode.light} &[data-highlighted]`
    },
    darkModeHover: {
      selector: `${mode.dark} &:hover:not(:disabled, [data-disabled])`
    },
    lightModeHover: {
      selector: `${mode.light} &:hover:not(:disabled, [data-disabled])`
    },
    darkModeOpen: {
      selector: `${mode.dark} &[data-state="open"]`
    },
    lightModeOpen: {
      selector: `${mode.light} &[data-state="open"]`
    },
    darkModePlaceholder: {
      selector: `${mode.dark} &::placeholder`
    },
    lightModePlaceholder: {
      selector: `${mode.light} &::placeholder`
    }
  },
  defaultCondition: false,
  properties: {
    backgroundColor: vars.color,
    borderColor: vars.color,
    borderBottomColor: vars.color,
    color: vars.color,
    outlineColor: vars.color
  }
})

const unconditionalProperties = defineProperties({
  properties: {
    all: ["unset"],
    boxSizing: ["border-box"],
    display: ["flex", "grid", "inline-flex", "revert"],
    alignItems: ["center"],
    alignSelf: ["center"],
    flexDirection: ["column", "row"],
    justifyContent: ["center", "space-between"],
    objectFit: ["contain", "cover"],
    overflow: ["hidden"],
    overflowX: ["auto", "hidden"],
    overflowY: ["auto"],
    position: ["absolute", "fixed", "relative"],
    textAlign: ["center", "end", "inherit", "start"],
    textOverflow: ["ellipsis"],
    touchAction: ["none"],
    animationFillMode: ["forwards", "backwards", "both"],
    transitionProperty: [
      "opacity",
      "transform",
      "color",
      "border-color",
      "outline-color"
    ],
    userSelect: ["none"],
    visibility: ["hidden"],
    whiteSpace: ["nowrap", "pre-wrap"],
    wordBreak: ["break-word"],

    borderRadius: vars.borderRadius,
    borderBottomRightRadius: vars.borderRadius,
    borderBottomLeftRadius: vars.borderRadius,
    borderTopRightRadius: vars.borderRadius,
    borderTopLeftRadius: vars.borderRadius,
    borderStyle: vars.borderStyle,
    borderBottomStyle: vars.borderStyle,
    borderRightStyle: vars.borderStyle,
    borderWidth: vars.borderWidth,
    borderBottomWidth: vars.borderWidth,
    outlineStyle: vars.borderStyle,
    outlineOffset: vars.space,
    outlineWidth: vars.borderWidth,

    boxShadow: vars.boxShadow,
    cursor: vars.cursor,

    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    letterSpacing: vars.letterSpacing,
    lineHeight: vars.lineHeight,

    width: vars.size,
    minWidth: vars.size,
    maxWidth: vars.size,
    height: vars.size,
    minHeight: vars.size,
    maxHeight: vars.size,

    gap: vars.space,

    top: vars.space,
    bottom: vars.space,
    left: vars.space,
    right: vars.space,

    margin: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,

    padding: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    paddingBlock: vars.space,
    paddingInline: vars.space,

    animationDuration: vars.transitionDuration,
    transitionDuration: vars.transitionDuration,
    animationTimingFunction: vars.transitionTimingFunction,
    transitionTimingFunction: vars.transitionTimingFunction,

    zIndex: vars.zIndex
  }
})

export const sprinkles = createSprinkles(
  colorProperties,
  unconditionalProperties
)

export const colors = {
  currentColor: { darkMode: "currentColor", lightMode: "currentColor" },
  grey1: { darkMode: "greyDark1", lightMode: "greyLight1" },
  grey2: { darkMode: "greyDark2", lightMode: "greyLight2" },
  grey3: { darkMode: "greyDark3", lightMode: "greyLight3" },
  grey4: { darkMode: "greyDark4", lightMode: "greyLight4" },
  grey5: { darkMode: "greyDark5", lightMode: "greyLight5" },
  grey6: { darkMode: "greyDark6", lightMode: "greyLight6" },
  grey7: { darkMode: "greyDark7", lightMode: "greyLight7" },
  grey8: { darkMode: "greyDark8", lightMode: "greyLight8" },
  grey9: { darkMode: "greyDark9", lightMode: "greyLight9" },
  grey10: { darkMode: "greyDark10", lightMode: "greyLight10" },
  grey11: { darkMode: "greyDark11", lightMode: "greyLight11" },
  grey12: { darkMode: "greyDark12", lightMode: "greyLight12" },
  inherit: { darkMode: "inherit", lightMode: "inherit" },
  blue1: { darkMode: "blue1", lightMode: "blue1" },
  purple1: { darkMode: "purple1", lightMode: "purple1" },
  purple2: { darkMode: "purple2", lightMode: "purple2" },
  purple3: { darkMode: "purple3", lightMode: "purple3" },
  purple4: { darkMode: "purple4", lightMode: "purple4" },
  purple5: { darkMode: "purple5", lightMode: "purple5" },
  purple6: { darkMode: "purple6", lightMode: "purple6" },
  purple7: { darkMode: "purple7", lightMode: "purple7" },
  purple8: { darkMode: "purple8", lightMode: "purple8" },
  purple9: { darkMode: "purple9", lightMode: "purple9" },
  purple10: { darkMode: "purple10", lightMode: "purple10" },
  purple11: { darkMode: "purple11", lightMode: "purple11" },
  purple12: { darkMode: "purple12", lightMode: "purple12" },
  purpleAlpha1: { darkMode: "purpleAlpha1", lightMode: "purpleAlpha1" },
  transparent: { darkMode: "transparent", lightMode: "transparent" }
} as const

type ConditionalColor = Readonly<{ darkMode: Color; lightMode: Color }>

export const selectors = {
  active: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeActive: darkMode,
    lightModeActive: lightMode
  }),
  checked: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeChecked: darkMode,
    lightModeChecked: lightMode
  }),
  checkedHover: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeCheckedHover: darkMode,
    lightModeCheckedHover: lightMode
  }),
  disabled: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeDisabled: darkMode,
    lightModeDisabled: lightMode
  }),
  focusVisible: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeFocusVisible: darkMode,
    lightModeFocusVisible: lightMode
  }),
  focusWithin: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeFocusWithin: darkMode,
    lightModeFocusWithin: lightMode
  }),
  highlighted: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeHighlighted: darkMode,
    lightModeHighlighted: lightMode
  }),
  hover: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeHover: darkMode,
    lightModeHover: lightMode
  }),
  open: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModeOpen: darkMode,
    lightModeOpen: lightMode
  }),
  placeholder: ({ darkMode, lightMode }: ConditionalColor) => ({
    darkModePlaceholder: darkMode,
    lightModePlaceholder: lightMode
  })
}
