function stringChop(str, size) {
  // your code here
  if (!str) return []; // handles null, undefined, ""

  let ans = [];
  let j = 0;

  for (let i = 0; i < str.length; i += size) {
    let result = "";

    for (let k = 0; k < size && i + k < str.length; k++) {
      result += str[i + k];
    }

    ans[j++] = result;
  }

  return ans;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
