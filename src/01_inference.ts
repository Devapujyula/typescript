// goal -> understand when to let Typescript infer types
// ts -> knows JS very well
// when ts will writes the types / u r going to write

let count = 0; // ts sees a number
const site = "prakashAI"; // ts sees the exact literal "prakashAI"
const scors = [10, 20, 30];

// over annotation isn't bad -> just noise

export function add(a: number, b: number): number {
  return a + b;
}

// you should also annotate when the type is not abvious

let maybe: string | number;
maybe = Math.random() > 0.5 ? "test" : 10;
