function printName(name: string | null | undefined): void {
  if (name === null || name === undefined) {
    console.log('No name provided');
    return;
  }
  console.log(`Hello, ${name}!`);
}

printName(null); // Correct behavior
printName(undefined); // Correct behavior