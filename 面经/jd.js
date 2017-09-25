var items = [
  {name: 'lizi', price: 8},
  {name: 'perhaps', price: 8}
]
function add(items) {
    items.forEach(function(array) {
        var newName = document.createTextNode(array.name);
        var price = array.price.toFixed(2);
        var newPrice = document.createTextNode(price);
        var newDelete = document.createTextNode('删除');
        var tbody = document.querySelector('tbody');
        var newTr = document.createElement('tr');
        var newTd0 = document.createElement('td'); 
        var newTd1 = document.createElement('td');
        var newTd2 = document.createElement('td'); 
        var newA = document.createElement('a');
        newA.appendChild(newDelete);
        newA.setAttribute('href', 'javascript:void(0);');
        newTd0.appendChild(newName);
        newTd1.appendChild(newPrice);
        newTd2.appendChild(newA);
        newTr.appendChild(newTd0);
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        tbody.appendChild(newTr);
        sum();
    }) 
}

function bind() {
  var links = document.querySelectorAll('a');
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.stopPropagation();
      var tr = event.target.parentNode.parentNode;
      tr.parentNode.removeChild(tr);
      sum();
    })
  })
}
// 总计
function sum() {
    var tfoot = document.querySelector('tfoot');
    var sumTd = tfoot.childNodes[1].childNodes[3];
    var sumVal = 0;
    var allTr = document.querySelector('tbody').querySelectorAll('tr');
    for (var i = 0, len = allTr.length; i < len; i++) {
        sumVal += parseFloat(allTr[i].querySelectorAll('td')[1].innerHTML);
    }
    sumTd.innerHTML = sumVal + '(' + allTr.length + '件商品' + ')'
}

add(items);
bind();
