// strictNullChecks
// Type 'undefined' is not assignable to type 'string'.
// If we want to change the title to be undefined then make changes in the tsConfig.json file
// stric: true to be changed to false

// let title: string = "Intro";
// title = undefined;

let subTitle: string | undefined = "prakash";

// void function doen't return a useful value
function log(msg: string): void {
  console.log(msg);
}

// never return
function fail(msg: string): never {
  throw new Error(msg);
}

// Donot use ANY => TRY TO IGNORE AS MUCH AS POSSIBLE

const valueAny: any = JSON.parse('{"x": 1}');

valueAny.notThere.toFixed(2); // this compiles but can break/explode at run time
