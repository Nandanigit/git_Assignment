//Replace Single element 'b' in given list['a','b','c','d','e'] with [1,2,3] in typescript?
// const chars = {'a':'x','b':'y','c':'z'};
// let s = '234abc567bbbbac';
// s = s.replace(/[abc]/g, m => chars[m]);
// console.log(s);
function encode1(s, k) {
    var newS = "";
    for (var i = 0; i < s.length; ++i) {
        var val = s.charCodeAt(i);
        var dup = k;
        if (val + k > 122) {
            k -= (122 - val);
            k = k % 26;
            newS += String.fromCharCode(96 + k);
        }
        else {
            newS += String.fromCharCode(val + k);
        }
        k = dup;
    }
    console.log(newS);
}
encode1("abc", 28);
