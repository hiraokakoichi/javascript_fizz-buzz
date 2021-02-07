function doFizzbuzz() {

    // 入力された値を取得
    var fizz = document.getElementById("fizz_num").value;
    var buzz = document.getElementById("buzz_num").value;

    // ノードを追加するdiv要素(id=append_area)を取得
    var append_area = document.getElementById("append_area");   

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
        // 2桁まで繰り返し
        for(var i=1;;i++){

            // 入力された値をi倍する
            var new_fizz = fizz * i;
            var new_buzz = buzz * i;

            // i倍された値が3桁を超えたらbreak
            if(String(new_fizz).length>=3 || String(new_buzz).length>=3){
                break;
            }

            // div要素(id=append_area)にp要素を追加
            var fizz_elem = document.createElement('p');
            var buzz_elem = document.createElement('p');
            append_area.appendChild(fizz_elem);
            append_area.appendChild(buzz_elem);

            var fizz_h = "Fizz";
            var buzz_h = "Buzz";

            // i倍された値がfizzとbuzzの公倍数であったとき出力する文字列の先頭を"FizzBuzz"にする
            if(new_fizz%buzz == 0){
                fizz_h = fizz_h + buzz_h;
            }
            if(new_buzz%fizz == 0){
                buzz_h = fizz_h + buzz_h;
            }

            // 追加したp要素に挿入するテキストノードを作成
            var text_1 = document.createTextNode(fizz_h + " " + String(new_fizz));
            var text_2 = document.createTextNode(buzz_h + " " + String(new_buzz));

            // 追加したp要素に実行結果を挿入
            fizz_elem.appendChild(text_1);
            buzz_elem.appendChild(text_2);
        }
    }
}