// 延时函数，默认延时一秒
function delay(s: number = 1): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, s * 1000)
  })
}

// 每秒钟加1
async function count(): Promise<void> {
  let root: Element = document.querySelector('#root')
  let num: number = parseInt(root.innerHTML)
  while (num > 1) {
    await delay()
    num -= 1
    root.innerHTML = num.toString()
  }
}
count()
