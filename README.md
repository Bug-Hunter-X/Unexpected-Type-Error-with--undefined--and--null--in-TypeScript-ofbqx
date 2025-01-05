# Unexpected Type Error with 'undefined' and 'null' in TypeScript

This code demonstrates a common yet subtle issue in TypeScript related to type checking with 'null' and 'undefined'.  TypeScript's type system distinguishes between 'null' and 'undefined', even though they both represent the absence of a value.  Directly passing 'undefined' to a parameter expecting 'string | null' will result in a type error.

## Bug
The function `printName` is designed to handle situations where the name parameter might be null. However, if you pass `undefined` to the function, TypeScript will throw a type error because `undefined` isn't automatically considered a subtype of `null`.

## Solution
The problem can be solved by either explicitly handling undefined using a type assertion, or by changing the type annotation to include `undefined` in the union type.