//---for文---//
//処理を繰り返す構文
for (let t = 0; t < 5; t++) {　
    //「t++」は「t = t+1」の意味。つまり再代入を繰り返すので、「let」を用いる
    console.log(t);
}

//---while文---//
let s = 0;

//「.gitignore」のファイルの中にgitの支配下に置きたくないものを入れる
//「.env」のファイルの中はローカルでだけ。キーとか。

let power = 90;
let i = 0;

do {
    console.log(`今のpower:${power}`);
    if (power >= 99) {
        console.log("power最大！");
        i += 3;
    } else {
        power += 1;
        i++;
    }
} while (i < 3);

console.log(power);

