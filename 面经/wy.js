while(line=readline()) {
    var ele_sum = ''; // 当前碎片的字符值
    var i = 0;
    while(line[i] == ' ') { // 去除前方的空格
        i++;
    }
    ele_sum = line[i];
    var count = 1; // 碎片总数
    var aver = 0; // 碎片平均长度
    var realLen = line.length - i;
    for(var len = line.length; i < len; i++) {
        if(line[i] !== ele_sum) {
            ele_sum = line[i];
            count++;
        }
    }
    aver = realLen / count;
    print(aver.toFixed(2));
}

while(line=readline()) {
    var arr = [];
    var x = line;
    var res = 0;
    while(x) {
        if(x % 2 == 0) {
            x = (x - 2) / 2;
            arr.push(2);
        } else {
            x = (x - 1) / 2;
            arr.push(1);
        }
    }
    res = arr.reverse().join('');
    print(res);
}