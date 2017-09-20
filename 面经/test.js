// 4
// var line = 'addaac';
while(line = readline()) {
    var obj = {};
    var oddNum = 0;
    for(var i = 0, len = line.length; i < len ; i++) {
        if(obj[line[i]]) {
            obj[line[i]]++;
        } else {
            obj[line[i]] = 1;
        }
    }
    for(var key in obj) {
        if(obj[key] % 2 == 1) {
            oddNum++;
        }
    }
    if(oddNum == 0) {
        oddNum = 1;
    }
    print(oddNum);
}

while(line=readline()) {
    var mostLen = 0;
    for(var i = 1, len = line.length; i < len; i++) {
        if(oddString(line.slice(0, len - i))) {
            mostLen = len - i;
            break;
        }
    }
    print(mostLen);
}
 
function oddString(str) {
    var len = str.length;
    if(len % 2 == 1) return false;
    for(var i = 0; i < len/2; i++) {
        if(str[i] !== str[len / 2 + i]) {
            return false;
        }
    }
    return true;
}