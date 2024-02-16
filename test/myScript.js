// 创建函数
function myFunction(){
    // 写入到html元素
    document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数"
}

// 数组
let array = [40, 100, 1, 5, 25, 10]
alert(typeof(array))

// 对象
let obj = {firstName:"Zhongguan", lastName:"Wen", age:22, eyeClor:"brown"}


// switch 语句
var d = new Date().getDay(); 
let x
switch (d) 
{ 
  case 0:x="今天是星期日"; 
  break; 
  case 1:x="今天是星期一"; 
  break; 
  case 2:x="今天是星期二"; 
  break; 
  case 3:x="今天是星期三"; 
  break; 
  case 4:x="今天是星期四"; 
  break; 
  case 5:x="今天是星期五"; 
  break; 
  case 6:x="今天是星期六"; 
  break; 
}

alert(x)

// for循环
for(let i=0; i<7; i++){
    if (i == 4)
        continue
    document.write(i + "<br>")
}

// while循环
let c = 1
while(c < 2){
    document.write(c + "<br>")
    c = c + 1
}

// do ... while

// 错误

try {
        //异常的抛出
} catch(e) {
    document.alert(e)    //异常的捕获与处理
} finally {
        //结束处理
}
