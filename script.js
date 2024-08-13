/**
 * script.js
 */

// const ol = document.querySelector("ol")
// const styles = getComputedStyle(ol)

// const properties = [
//   "--angle",
//   "--total",
//   "--arc",
//   "--trim",
//   "--place",
//   "--rem",
//   "--turn",
//   "--fraction",
//   "--twist",
//   "--first",
//   "--size"
// ]

// const entries = properties.reduce(( entries, property) => {
//   entries[property] = styles.getPropertyValue(property)
//   return entries
// }, {})

// console.log("entries", JSON.stringify(entries, null, '  '));


// const fraction = 100 / 360 // 0.27....

// const steps = []
// for ( let ii = 0; ii < 361; ii += 1 ) {
//   const step = (fraction * ii).toFixed(2)
//   steps.push(`  ${step}% { --angle: ${ii}; }
//   `)
// }

// const string = steps.join("")
// console.log("string:", string);

const total  = 400
const frames = 200
const fraction = total / frames

const steps = []
for ( let ii = 0; ii <= frames; ii += 1 ) {
  const step = (fraction * ii) // .toFixed(2)
  const pad  = ii % 2 ? "" : "  "
  steps.push(`  ${ii / 2}% ${pad}{ --angle: ${step}; }
  `)
}

const string = steps.join("")
console.log("string:\n ", string);

