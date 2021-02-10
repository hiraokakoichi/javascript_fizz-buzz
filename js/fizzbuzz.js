const btn = document.getElementById("button");

btn.addEventListener('click', function() {

    // 入力された値を取得
    let fizz = document.getElementById("fizz_num").value;
    let buzz = document.getElementById("buzz_num").value;

    // ノードを追加するdiv要素(id=append_area)を取得
    let append_area = document.getElementById("append_area");

    // div要素(id=append_area)を初期化
    let parent = document.getElementById('append_area');
    while(parent.firstChild){ //子要素がある限りループを回す
        parent.removeChild(parent.firstChild);
    }
    // バリデーション
    if(((fizz===null || fizz==='') || (buzz===null || buzz==='')) || (!Number.isInteger(Number(fizz)) || !Number.isInteger( Number(buzz))) ){
        // div要素(id=append_area)にp要素を追加
        const error_msg = document.createElement('p');
        append_area.appendChild(error_msg);
        // 追加したp要素に挿入するテキストノードを作成
        const text_3 = document.createTextNode("整数値を入力してください");
        // 追加したp要素に実行結果を挿入
        error_msg.appendChild(text_3);

    }
    else{
        // 数値に変換
        fizz = Number(fizz);
        buzz = Number(buzz);

        for(let i=1; i<100; i++){
            // div要素(id=append_area)にp要素を追加
            let p_elem = document.createElement('p');
            append_area.appendChild(p_elem);

            let fizzbuzz_str = "";

            // iがfizz欄に入力された値の倍数だった場合
            if( i%fizz===0 && i%buzz===0 ){
                fizzbuzz_str = "FizzBuzz";
            }
            else if( i%fizz===0 ){
                fizzbuzz_str = "Fizz";
            }
            else if( i%buzz===0 ){
                fizzbuzz_str = "Buzz";
            }
            else{
                fizzbuzz_str = false;
            }

            // fizzの倍数でもbuzzの倍数でもなければ以下は実行されない
            if( fizzbuzz_str ){
                // 追加したp要素に挿入するテキストノードを作成
                let text_1 = document.createTextNode(fizzbuzz_str + " " + String(i));

                // 追加したp要素に実行結果を挿入
                append_area.appendChild(text_1);

            }

        }
    }
});