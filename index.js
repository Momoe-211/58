console.log("Hello world"); //""内は文字列として認識
console.log("aaa bbb ccc");
console.log(123 + 234); //数値
console.log(11 ** 2);

//constについて
//constは書き換えができない。
const peach = "もも"; //名前：なるべく一意性のあるもの
console.log(`私の名前は${peach}です！！`);
console.log("好きな食べものは" + peach + "です");
// peach = "りんご";はできない！！

//letについて
//letは書き換えできる。
let i = 0;
i = i + 2;
i = i + 2;
i = i + 2;
console.log(i);

//配列
const fruits = ["りんご", "もも", "ぶどう", "みかん",];
console.log(fruits[1]);

const game = ["PS4",
    "3DS",
    "PSVita",
    "モンハン", "PSP2∞", "アサシンクリード"],
];
console.log(game[3][1]);
//配列は0から数える→[ 0 , 1 , 2 , ...]
//配列内の要素全部に,をつけると[Alt + ↑↓]等で並び替えるときに楽