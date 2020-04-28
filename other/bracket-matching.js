function isBracketMatching(input) {
  const bracketsStack = [];
  const bracketsMap = {
    "{": "}",
    "[": "]",
    "(": ")"
  };
  input.split("").forEach(current => {
    if (Object.keys(bracketsMap).find(x => x === current)) {
      bracketsStack.push(current);
    } else {
      const poppedValue = bracketsStack.pop();
      if (current !== bracketsMap[poppedValue]) return false;
    }
  });
  return bracketsStack.length === 0;
}
