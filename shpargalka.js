let num = 100; //переменная- число
let text ="text"; //переменная-текст
let object = { //переменная - объект
	key1:"что-то" ,//ключ со значением
	key2:"что-то еще"
}
onclick = function(){} // клики(нажатие) на различные html элементы

style.height = "100px"; //меняет различные css свойства элементов
document.querySelector() // находит нужный элемент в html по классу 
alert() //всплывающее окно на странице
.innerHTML = num; //заменяет содержимое элемента
let proverka = function() {//создание функции
	alert('privet')
}
setTimeout(proverka,1000) //таймер

let elems = document.querySelectorAll(".название класса") //находит все элементы с одинаковым классом
elems[0]

let array = ["lol","kek",21,"hello"]; //массив
array[0];

for(let index = 0; index<2; index = index + 1){//цикл
	alert(index);
}

//получить то, что написано в <input>
.value;



if (   ==   ) {//условие
	alert("правильно")
} 


let func = function(arg) { //функция с аргументом
	alert(arg)
}
func(5000)


Math.random() //случайное число 
Math.round() //округлить число 

.length //количество элементов 


let x = function(){
	return 17;
}

alert(x())

let timer = function(){
	alert("lol");
}

setInterval(timer,1000)

var i=0;
function interval()
    {
    alert("прошла "+(++i)+" секунд(а)");
    if(i>=5)
        {
        clearInterval(intervalID);
        }
    }
var intervalID=setInterval(interval,1000);
