function doFizzbuzz() {

    // 入力された値を取得
    var fizz = document.getElementById("fizz_num").value;
    var buzz = document.getElementById("buzz_num").value;

    // ノードを追加するdiv要素(id=append_area)を取得
    var append_area = document.getElementById("append_area");

    // div要素(id=append_area)を初期化
    var parent = document.getElementById('append_area');
    while(parent.firstChild){ //子要素がある限りループを回す
        parent.removeChild(parent.firstChild);
    }
    // バリデーション
    if(((fizz==null || fizz=='') || (buzz==null || buzz=='')) || (!Number.isInteger(Number(fizz)) || !Number.isInteger( Number(buzz))) ){
        console.log("整数でない");
        console.log(fizz);
        console.log(buzz);
        // div要素(id=append_area)にp要素を追加
        var error_msg = document.createElement('p');
        append_area.appendChild(error_msg);
        // 追加したp要素に挿入するテキストノードを作成
        var text_3 = document.createTextNode("整数値を入力してください");
        // 追加したp要素に実行結果を挿入
        error_msg.appendChild(text_3);

    }
    else{
        // 数値に変換
        fizz = Number(fizz);
        buzz = Number(buzz);
        console.log("整数だ");
        console.log(fizz);
        console.log(buzz);
        // 99桁まで繰り返し
        for(var i=1; i<100; i++){
            // div要素(id=append_area)にp要素を追加
            var p_elem = document.createElement('p');
            append_area.appendChild(p_elem);

            var fizzbuzz_str = "";

            // iがfizz欄に入力された値の倍数だった場合
            if( i%fizz==0 && i%buzz==0 ){
                fizzbuzz_str = "FizzBuzz";
            }
            else if( i%fizz==0 ){
                fizzbuzz_str = "Fizz";
            }
            else if( i%buzz==0 ){
                fizzbuzz_str = "Buzz";
            }
            else{
                fizzbuzz_str = false;
            }

            // fizzの倍数でもbuzzの倍数でもなければ以下は実行されない
            if( fizzbuzz_str ){
                // 追加したp要素に挿入するテキストノードを作成
                var text_1 = document.createTextNode(fizzbuzz_str + " " + String(i));

                // 追加したp要素に実行結果を挿入
                append_area.appendChild(text_1);

            }

        }
    }
}