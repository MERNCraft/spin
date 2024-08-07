/**
 * script.js
 */

const ol = document.querySelector("ol")
const styles = getComputedStyle(ol)

const properties = [
  "--angle",
  "--total",
  "--arc",
  "--trim",
  "--place",
  "--rem",
  "--turn",
  "--fraction",
  "--twist",
  "--first",
  "--size"
]

const entries = properties.reduce(( entries, property) => {
  entries[property] = styles.getPropertyValue(property)
  return entries
}, {})

console.log("entries", JSON.stringify(entries, null, '  '));
