import { style, styleVariants } from "@vanilla-extract/css"
import { calc } from "@vanilla-extract/css-utils"

import { colors, selectors, sprinkles } from "./sprinkles.css"
import { boxShadows } from "./utils"
import { vars } from "./vars.css"
import * as buttonGroupStyles from "./ButtonGroup.css"
import * as textStyles from "./Text.css"

export const root = style([
  sprinkles({
    alignItems: "center",
    all: "unset",
    borderRadius: "6px",
    borderStyle: "solid",
    borderWidth: "1px",
    boxShadow: "1",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    gap: "4px",
    justifyContent: "center",
    userSelect: "none"
  }),
  {
    selectors: {
      "&:focus-visible": {
        boxShadow: vars.boxShadow.focus
      },
      '&:active:hover:not(:disabled), &[data-state="on"], &[data-state="open"]':
        {
          boxShadow: vars.boxShadow["-1"]
        },
      '&:active:hover:not(:disabled):focus-visible, &[data-state="on"]:focus-visible, &[data-state="open"]:focus-visible':
        {
          boxShadow: boxShadows(["-1", "focus"])
        },
      "&:not(:disabled)": { cursor: vars.cursor.pointer },
      [`${buttonGroupStyles.density.compact} > &:first-child`]: {
        borderBottomRightRadius: vars.borderRadius["0px"],
        borderTopRightRadius: vars.borderRadius["0px"]
      },
      [`${buttonGroupStyles.density.compact} > &:last-child`]: {
        borderBottomLeftRadius: vars.borderRadius["0px"],
        borderTopLeftRadius: vars.borderRadius["0px"]
      },
      [`${buttonGroupStyles.density.compact} > &:not(:first-child)`]: {
        borderLeftWidth: vars.borderWidth["0px"]
      },
      [`${buttonGroupStyles.density.compact} > &:not(:first-child):focus-visible`]:
        {
          borderLeftWidth: vars.borderWidth["1px"],
          marginLeft: calc.multiply(-1, vars.borderWidth["1px"])
        },
      [`${buttonGroupStyles.density.compact} > &:not(:first-child):not(:last-child)`]:
        {
          borderRadius: vars.borderRadius["0px"]
        }
    }
  }
])

export const iconOnly = style({})

export const size = styleVariants({
  small: [
    textStyles.variant.button2,
    sprinkles({ height: "28px" }),
    {
      paddingInline: calc.subtract(vars.space["8px"], vars.borderWidth["1px"]),
      selectors: {
        [`&${iconOnly}`]: {
          paddingInline: calc.subtract(
            vars.space["6px"],
            vars.borderWidth["1px"]
          )
        }
      }
    }
  ],
  medium: [
    textStyles.variant.button1,
    sprinkles({ height: "32px" }),
    {
      paddingInline: calc.subtract(vars.space["8px"], vars.borderWidth["1px"]),
      selectors: {
        [`&${iconOnly}`]: {
          paddingInline: calc.subtract(
            vars.space["6px"],
            vars.borderWidth["1px"]
          )
        }
      }
    }
  ],
  large: [
    textStyles.variant.button1,
    sprinkles({ height: "40px" }),
    {
      paddingInline: calc.subtract(vars.space["16px"], vars.borderWidth["1px"]),
      selectors: {
        [`&${iconOnly}`]: {
          paddingInline: calc.subtract(
            vars.space["10px"],
            vars.borderWidth["1px"]
          )
        }
      }
    }
  ]
})

export const variant = styleVariants({
  primary: [
    sprinkles({
      backgroundColor: {
        ...colors.purple9,
        ...selectors.checked(colors.purple8),
        ...selectors.hover(colors.purple8),
        ...selectors.open(colors.purple8)
      },
      borderColor: colors.purple8,
      color: colors.purple12
    }),
    { ":disabled": { opacity: vars.opacity["30%"] } }
  ],
  secondary: [
    sprinkles({
      backgroundColor: {
        ...colors.grey1,
        ...selectors.checked(colors.grey3),
        ...selectors.hover(colors.grey3),
        ...selectors.open(colors.grey3)
      },
      borderColor: {
        ...colors.grey7,
        ...selectors.focusVisible(colors.purple9)
      },
      color: colors.grey12
    }),
    {}
  ],
  tertiary: [
    sprinkles({
      backgroundColor: {
        darkMode: "greyDark2",
        lightMode: "greyDark2",
        ...selectors.checked({ darkMode: "greyDark6", lightMode: "greyDark6" }),
        ...selectors.hover({ darkMode: "greyDark6", lightMode: "greyDark6" }),
        ...selectors.open({ darkMode: "greyDark6", lightMode: "greyDark6" })
      },
      borderColor: { darkMode: "greyDark6", lightMode: "greyDark6" },
      color: { darkMode: "greyDark12", lightMode: "greyDark12" }
    }),
    { ":disabled": { opacity: vars.opacity["30%"] } }
  ]
})

const child = style({
  selectors: {
    [`${variant.secondary}:disabled > &`]: { opacity: vars.opacity["50%"] }
  }
})

const icon = style([
  child,
  {
    flexShrink: 0,
    selectors: {
      [`${size.small} > &`]: {
        height: vars.size["16px"],
        width: vars.size["16px"]
      },
      [`${size.medium} > &`]: {
        height: vars.size["20px"],
        width: vars.size["20px"]
      },
      [`${size.large} > &`]: {
        height: vars.size["20px"],
        width: vars.size["20px"]
      }
    }
  }
])

export const iconVariant = {
  primary: sprinkles({ color: colors.inherit }),
  secondary: sprinkles({ color: colors.grey11 }),
  tertiary: sprinkles({ color: colors.inherit })
}

export const startIcon = style([icon, { order: 0 }])

export const text = style([child, textStyles.noWrap, { order: 1 }])

export const endIcon = style([icon, { order: 2 }])
