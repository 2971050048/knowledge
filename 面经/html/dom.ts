// 1、取得一个页面用了哪些标签
// https://github.com/jirengu/frontend-interview/issues/22

const all: HTMLElement[] = Array.from(document.querySelectorAll('*')) // 取得所有标签
const nodeList: string[] = all.map(node => node.nodeName.toLowerCase()) // 所有标签名的小写
const result: string[] = Array.from(new Set(nodeList)) // 去重

// 2、stopPropagation测试
// https://codepen.io/perhapszql/pen/VrNERp
let grandParentNode: HTMLElement = document.querySelector('.grandParent')
let parentNode: HTMLElement = document.querySelector('.parent')
let childNode: HTMLElement = document.querySelector('.child')

grandParentNode.addEventListener('click', (e) => {
  console.log('grandParent capture')
  // e.stopPropagation()
}, true)

grandParentNode.addEventListener('click', (e) => {
  console.log('grandParent bubble')
  // e.stopPropagation()
}, false)

parentNode.addEventListener('click', (e) => {
  console.log('parent capture')
  // e.stopPropagation()
}, true)

parentNode.addEventListener('click', (e) => {
  console.log('parent bubble')
  // e.stopPropagation()
}, false)

childNode.addEventListener('click', (e) => {
  console.log('child capture')
  // e.stopPropagation()
}, true)
childNode.addEventListener('click', (e) => {
  console.log('child bubble')
  // e.stopPropagation()
}, false)

// 3、增删改查
// https://codepen.io/perhapszql/pen/NwJZVx?editors=1010

let buttonList: NodeListOf<HTMLElement> = document.querySelectorAll('button')
let liList: NodeListOf<HTMLElement> = document.querySelectorAll('#list>li')
// 为 <ul> 添加一个id bar
buttonList[0].addEventListener('click', (e) => {
  let ulBar: HTMLElement = document.querySelector('li>ul')
  ulBar.id = ulBar.id + ' bar'
  window.alert(document.querySelector('li>ul').getAttribute('id'))
  e.stopPropagation()
})
// 删除第 3 个 <li>
buttonList[1].addEventListener('click', (e) => {
  let liThree: HTMLElement = liList[2]
  liThree.parentNode.removeChild(liThree)
  e.stopPropagation()
})
// 在第 4 个 <li> 后面增加一个 <li> , 其文字内容为 <v2ex.com />
buttonList[2].addEventListener('click', (e) => {
  let liFive: HTMLElement = liList[4]
  let tag: HTMLElement = document.createElement('li')
  tag.innerText = '<v2ex.com />'
  liFive.parentNode.insertBefore(tag, liFive)
  e.stopPropagation()
})
// 点击任意 <li> 弹窗显示其为当前列表中的第几项。
let ul: HTMLElement = document.querySelector('#list')
ul.addEventListener('click', (e) => {
  let target: HTMLElement = <HTMLElement>e.target
  while (target.parentNode !== ul) {
    target = <HTMLElement>target.parentNode
  }
  for (let i = 0, len = liList.length; i < len; i++) {
    if (target === liList[i]) {
      window.alert(i + 1)
      break;
    }
  }
  e.stopPropagation()
})
