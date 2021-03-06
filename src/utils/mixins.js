import assign from "object-assign";
import settings from "../../settings.json";
import { rgb } from "./color";

/**
 * Adds outline styles
 * @param  {Number} offset Outline offset amount
 * @return {Object}        CSS styles
 */
function outline(offset = 2) {
  return typeof offset === "number" && {
    outline: "1px lightgray dotted",
    outlineOffset: `${offset}px`,
  };
}

/**
 * Creates a blue hyperlink; for use with inline styles via Radium
 * @return {Object} CSS styles
 */
function blueLink() {
  const hoverColor = "#4699d9";

  return {
    color: settings.color.blue,
    textDecoration: "none",
    transition: `color ${settings.timing.fast} ease-in-out`,

    ":hover": { color: hoverColor },
    ":active": { color: hoverColor },
    ":focus": assign({}, outline(), { color: hoverColor }),
  };
}

/**
 * Creates a nicely underlined hyperlink
 * @param  {String} linkColor Link color
 * @return {Object}           CSS styles object
 */
function underlinedLink(linkColor = settings.color.titleGray) {
  const underlineOffset = 2;
  const underlineWeight = 1;
  const backgroundColor = settings.color.white;
  const underlineColor = `rgba(${rgb(linkColor)}, .4)`;

  return {
    color: linkColor,
    position: "relative",
    textDecoration: "none",
    transition: `color ${settings.timing.fast} ease`,

    // Draw the underline with a background gradient
    backgroundImage: `linear-gradient(
      to top,
      transparent,
      transparent ${underlineOffset}px,
      ${underlineColor} ${underlineOffset}px,
      ${underlineColor} ${(underlineOffset + underlineWeight)}px,
      transparent ${(underlineOffset + underlineWeight)}px
    )`,

    // Create breaks in the underline
    textShadow: `-1px -1px 0 ${backgroundColor},
      1px -1px 0 ${backgroundColor},
      -1px 1px 0 ${backgroundColor},
      1px 1px 0 ${backgroundColor}`,
  };
}

export {
  outline,
  blueLink,
  underlinedLink,
};
