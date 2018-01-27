// 4
// var line = 'addaac';
while (line = readline()) {
  var obj = {};
  var oddNum = 0;
  for (var i = 0, len = line.length; i < len; i++) {
    if (obj[line[i]]) {
      obj[line[i]]++;
    } else {
      obj[line[i]] = 1;
    }
  }
  for (var key in obj) {
    if (obj[key] % 2 == 1) {
      oddNum++;
    }
  }
  if (oddNum == 0) {
    oddNum = 1;
  }
  print(oddNum);
}

while (line = readline()) {
  var mostLen = 0;
  for (var i = 1, len = line.length; i < len; i++) {
    if (oddString(line.slice(0, len - i))) {
      mostLen = len - i;
      break;
    }
  }
  print(mostLen);
}

function oddString(str) {
  var len = str.length;
  if (len % 2 == 1) return false;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len / 2 + i]) {
      return false;
    }
  }
  return true;
}

// 异步的执行顺序
setTimeout(() => console.log(1))
async function async1() {
  console.log(2);
  await async2();
  console.log(3)
}
async function async2() {
  console.log(4)
}
async1()
new Promise(resolve => {
    console.log(5);
    resolve();
    console.log(6)
  })
  .then(() => console.log(7))
new Promise(resolve => {
    console.log(8);
    resolve();
  })
  .then(() => console.log(9))
console.log(10)
// 1 3 6 9 10 8 7 4 2 5
