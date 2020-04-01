
/* 
1. 
(A)請寫一個程式把裡面的字串反過來。
(B)請寫一個程式把裡面的字串,每個單字本身做反轉,但是單字的順序不變。
*/
function reverseA(str) {
  return str.split('').reverse().join('');
}
console.log('1-A',reverseA('junyiacademy'));

function reverseB(str) {
    return str.split(' ').reverse().join(' ');
  }
console.log('1-B',reverseB("flipped class room is important"));





/* 2. 請寫一個程式,Input 是一個數字,Output 是從 1 到這個數字,扣除掉所有 3 的
倍數以及 5 的倍數,但是需要保留同時是 3 和 5 的倍數的總數字數。
*/
function allNumber(num){
    var allNumber = new Array();
    var n = num;
    var i;
    for( i = 1; i <= n; i++){
      allNumber[i-1] = i ;
    }
    return allNumber;
  }
  
//減掉3的倍數與5的倍數
function cutNumber(num){
    var threeFiveNumber = new Array();
    var n = num;
    var i;
    for( i = 1; i <= n ; i++){
        if( i % 3 == 0 || i % 5 == 0) {
        threeFiveNumber[i-1] = i;
        }
    }
    //找出沒有數值的並刪除
    var cutNumber = threeFiveNumber.filter(function () { 
        return true 
    });
    return cutNumber ;
}    
  
//保留同時是3和5的倍數也就是15的倍數
function plusNumber(num){
    var fifteenNumber = new Array();
    var n = num;
    var i;
    for( i = 1; i <= n; i++){
        if( i % 15 ==0 ) {
        fifteenNumber[i-1] = i;
        }
    }
    //刪除空的值
    var plusNumber = fifteenNumber.filter(function(){
        return true;
    });
    return plusNumber;
}
  
//最終計算
function findCountNumber(num){
    return allNumber(num).length - cutNumber(num).length + plusNumber(num).length;
}
  
console.log('2',findCountNumber(15));




/*
3. 房間裡有三個袋子,一個只裝鉛筆,一個只裝原子筆,第三個有鉛筆也有原子筆。
袋子是不透明的,單從袋子的外表上看不出任何差異,你不知道哪個袋子裝什麼。
除了袋子上各貼了一個標示("鉛筆"、"原子筆"、"混和"),且標示都是錯的
(e.g. 標示鉛筆的袋子可能是混和的或是只裝原子筆)。
你只能選一個袋子,拿出裡面一支筆,看是鉛筆還是原子筆,然後你要推論出這三
個袋子分別的情況。請列出你的作法,以及解釋為什麼這樣可以找到答案。

答 : 
假設三袋分別為 ("鉛筆"、"原子筆"、"混和")
先找出鉛筆的袋子，看是鉛筆或是原子筆

若為鉛筆，則此袋標示是對的，袋子為 ("鉛筆"、"原子筆"、"混和") 或  ("鉛筆"、"混和"、"原子筆")
若為原子筆，則此袋標示是錯的，袋子為 ("原子筆"、"鉛筆"、"混和") 或  ("原子筆"、"混和"、"鉛筆")

只能用刪去法找到最接近的答案，無法真實判斷，除非再新增一個判斷條件，例如可以選一個袋子觸摸
*/





/*
4. 有三個人一起到迪士尼遊玩,中午肚子餓了,去餐廳點了一份現在最夯的冰雪奇緣
雙人組,要價 900 元,付錢後,服務生發現今天套餐大特價,只要 750 元,因此
服務生應該退還 150 元給這三個人,但是這位服務生一時鬼迷心竅,決定暗槓 60
元,只退了 90 元給這三個遊客。
那麼:三人各出 300 元 - 服務生還給他們一人 30 元 = 三人各出 270 元。270
元 × 3 人+ 服務生私吞的 60 元 = 810 + 60 = 870 !? 怎麼不是 900 元呢?還
有 30 元去哪了呢?請用敘述的方式,儘量清楚解釋問題出在哪裡。
*/