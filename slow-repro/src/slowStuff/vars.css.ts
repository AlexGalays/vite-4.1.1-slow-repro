import { createTheme, styleVariants } from "@vanilla-extract/css"

export type Color = keyof typeof vars.color

export const tokens = {
  borderRadius: {
    "0px": "0px",
    "1px": "1px",
    "4px": "4px",
    "6px": "6px",
    "10px": "10px",
    "12px": "12px",
    "100%": "100%"
  },
  borderStyle: {
    none: "none",
    dashed: "dashed",
    solid: "solid"
  },
  borderWidth: {
    "0px": "0px",
    "1px": "1px",
    "2px": "2px",
    "3px": "3px"
  },
  boxShadow: {
    "-1": "0px 1px 0px 0px hsla(0, 0%, 0%, 0.08) inset",
    "0": "none",
    "1": "0px 1px 0px 0px hsla(0, 0%, 0%, 0.04)",
    "2": "0px 2px 1px 0px hsla(0, 0%, 0%, 0.05)",
    "3": "0px 2px 10px 0px hsla(0, 0%, 0%, 0.1)",
    "4": "0px 26px 80px 0px hsla(0, 0%, 0%, 0.2)",
    focus: "0px 0px 0px 2px hsla(251, 63%, 63%, 0.3)"
  },
  color: {
    currentColor: "currentColor",
    greyDark1: "hsl(240, 4%, 9%)",
    greyDark2: "hsl(240, 5%, 12%)",
    greyDark3: "hsl(240, 4%, 14%)",
    greyDark4: "hsl(240, 5%, 16%)",
    greyDark5: "hsl(240, 4%, 19%)",
    greyDark6: "hsl(240, 5%, 22%)",
    greyDark7: "hsl(240, 5%, 25%)",
    greyDark8: "hsl(248, 5%, 33%)",
    greyDark9: "hsl(247, 4%, 45%)",
    greyDark10: "hsl(247, 4%, 51%)",
    greyDark11: "hsl(249, 4%, 64%)",
    greyDark12: "hsl(240, 6%, 93%)",
    greyLight1: "hsl(300, 0%, 100%)",
    greyLight2: "hsl(300, 8%, 97%)",
    greyLight3: "hsl(300, 8%, 95%)",
    greyLight4: "hsl(270, 6%, 93%)",
    greyLight5: "hsl(270, 5%, 91%)",
    greyLight6: "hsl(300, 4%, 89%)",
    greyLight7: "hsl(270, 3%, 86%)",
    greyLight8: "hsl(255, 4%, 79%)",
    greyLight9: "hsl(255, 4%, 57%)",
    greyLight10: "hsl(253, 4%, 54%)",
    greyLight11: "hsl(247, 4%, 45%)",
    greyLight12: "hsl(261, 25%, 11%)",
    inherit: "inherit",
    blue1: "hsla(212, 97%, 43%, 1)",
    purple1: "hsl(252, 19%, 10%)",
    purple2: "hsl(255, 30%, 13%)",
    purple3: "hsl(252, 36%, 18%)",
    purple4: "hsl(253, 40%, 22%)",
    purple5: "hsl(252, 42%, 26%)",
    purple6: "hsl(251, 44%, 31%)",
    purple7: "hsl(250, 47%, 39%)",
    purple8: "hsl(250, 52%, 51%)",
    purple9: "hsl(252, 56%, 57%)",
    purple10: "hsl(251, 63%, 63%)",
    purple11: "hsl(250, 95%, 77%)",
    purple12: "hsl(251, 89%, 96%)",
    purpleAlpha1: "hsla(251, 63%, 63%, 0.3)",
    transparent: "transparent"
  },
  cursor: {
    default: "default",
    move: "move",
    pointer: "pointer",
    text: "text"
  },
  fontFamily: {
    body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    code: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
    inherit: "inherit"
  },
  fontSize: {
    "10px": `${10 / 16}rem`,
    "12px": `${12 / 16}rem`,
    "14px": `${14 / 16}rem`,
    "16px": `${16 / 16}rem`,
    "18px": `${18 / 16}rem`,
    "28px": `${28 / 16}rem`,
    inherit: "inherit"
  },
  fontWeight: {
    "400": "400",
    "500": "500",
    "600": "600",
    inherit: "inherit"
  },
  gradient: {
    checkerboardDark:
      "repeating-conic-gradient(hsl(248, 5%, 33%) 0% 25%, hsl(240, 5%, 12%) 0% 50%) 50% / 10px 10px",
    checkerboardLight:
      "repeating-conic-gradient(hsl(255, 4%, 79%) 0% 25%, hsl(300, 8%, 97%) 0% 50%) 50% / 10px 10px"
  },
  letterSpacing: {
    "-0.15px": "-0.15px",
    "0px": "0px",
    inherit: "inherit"
  },
  lineHeight: {
    "12px": `${12 / 16}rem`,
    "16px": `${16 / 16}rem`,
    "20px": `${20 / 16}rem`,
    "24px": `${24 / 16}rem`,
    "28px": `${28 / 16}rem`,
    "38px": `${38 / 16}rem`,
    inherit: "inherit"
  },
  opacity: {
    "30%": "0.3",
    "50%": "0.5",
    "60%": "0.6",
    "80%": "0.8"
  },
  size: {
    "0px": "0px",
    "8px": "8px",
    "16px": "16px",
    "20px": "20px",
    "24px": "24px",
    "28px": "28px",
    "32px": "32px",
    "36px": "36px",
    "40px": "40px",
    "44px": "44px",
    "100%": "100%",
    "fit-content": "fit-content"
  },
  space: {
    "0px": "0px",
    "2px": "2px",
    "4px": "4px",
    "6px": "6px",
    "8px": "8px",
    "10px": "10px",
    "12px": "12px",
    "16px": "16px",
    "24px": "24px",
    "48px": "48px"
  },
  // Adapted from: https://mui.com/material-ui/customization/transitions/#durations.
  transitionDuration: {
    shortest: "150ms",
    leavingScreen: "195ms", // Recommended when something is leaving screen.
    enteringScreen: "225ms", // Recommended when something is entering screen.
    standard: "300ms" // Most basic recommended timing.
  },
  // Adapted from: https://mui.com/material-ui/customization/transitions/#easings.
  transitionTimingFunction: {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", // This is the most common easing curve.
    easeOut: "cubic-bezier(0, 0, 0.2, 1)", // Objects enter the screen at full velocity from off-screen and slowly decelerate to a resting point.
    easeIn: "cubic-bezier(0.4, 0, 1, 1)", // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)" // The sharp curve is used by objects that may return to the screen at any time.
  },
  zIndex: {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4"
  }
} as const

export const [themeClass, vars] = createTheme(tokens)

export const gaps = styleVariants(tokens.space, (value) => ({ gap: value }))
