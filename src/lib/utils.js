// Simple utility function to merge classNames
export function cn(...inputs) {
  const classes = []
  
  inputs.forEach((input) => {
    if (!input) return
    
    if (typeof input === "string") {
      classes.push(input)
    } else if (Array.isArray(input)) {
      const inner = cn(...input)
      if (inner) classes.push(inner)
    } else if (typeof input === "object") {
      for (const key in input) {
        if (input[key]) {
          classes.push(key)
        }
      }
    }
  })
  
  return classes.filter(Boolean).join(" ")
}
