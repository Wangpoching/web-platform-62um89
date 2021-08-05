// 請把解題函式寫在這個裡面
function solve(arr) {
  let stastic = {};
  for (value of arr) {
    if (' ' + value.id in stastic) {
      stastic[' ' + value.id].push(value.value);
    } else {
      stastic[' ' + value.id] = [value.value];
    }
    console.log(stastic);
  }
  let result = [];
  for (key in stastic) {
    if (stastic[key].length === 1) {
      result.push({ id: Number(key), value: stastic[key][0] });
    } else {
      result.push({ id: Number(key), value: stastic[key] });
    }
  }
  return result;
}

// 事先為你準備好的測驗正確性的函式，如果你很確定不會改壞的話，可以改動
function test() {
  let isCorrect = true;
  for (let i = 0; i < testCases.length; i++) {
    const result = solve(testCases[i].input);
    if (!deepEqual(testCases[i].output, result)) {
      isCorrect = false;
      console.log('Wrong Answer!');
      console.log('預期答案：');
      console.log(JSON.stringify(testCases[i].output));
      console.log('你的答案：');
      console.log(JSON.stringify(result));
      break;
    }
  }
  if (isCorrect) {
    console.log('過關！');
  }

  function deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
}
