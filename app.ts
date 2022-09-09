//Replace Single element 'b' in given list['a','b','c','d','e'] with [1,2,3] in typescript?
// const chars = {'a':'x','b':'y','c':'z'};
// let s = '234abc567bbbbac';
// s = s.replace(/[abc]/g, m => chars[m]);
// console.log(s);


function encode1(s: string, k: number): void {
    let newS: string = "";
    for (let i: number = 0; i < s.length; ++i) {
        let val: number = s.charCodeAt(i);
        let dup: number = k;
        if (val + k > 122) {
            k -= (122 - val);
            k = k % 26;
            newS += String.fromCharCode(96 + k);
        } else {
            newS += String.fromCharCode(val + k);
        }
        k = dup;
    }
    console.log(newS);
}

encode1("abc", 28);



