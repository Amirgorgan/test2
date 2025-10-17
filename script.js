var dark_light_mood_button = document.querySelector("#dark_light_mood_button");
var body = document.querySelector("body");
var cals = document.querySelector(".calculator");
var cals_input = document.querySelector(".calculator input");
var buttons = document.querySelectorAll(".calculator button");
// دکمه حالت روشن و تاریک
function dark_light_mood() {
  cals.style.border = "none";
  if (body.style.backgroundColor == "black") {
    body.style.backgroundColor = "white";
    dark_light_mood_button.innerHTML = "Dark Mood";
    dark_light_mood_button.style.backgroundColor = "black";
    dark_light_mood_button.style.color = "white";
    cals.style.border = "solid 2px black";
    cals.style.backgroundColor = "white";
    cals_input.style.backgroundColor = "white";
    cals_input.style.color = "black";
    buttons.forEach((element) => {
      if(element.className !== "orange_color"){
        element.style.color = "black";
      }
    });
  } else {
    body.style.backgroundColor = "black";
    dark_light_mood_button.innerHTML = "Light Mood";
    dark_light_mood_button.style.backgroundColor = "white";
    dark_light_mood_button.style.color = "black";
    cals.style.backgroundColor = "black";
    cals.style.border = "solid 2px white";
    cals_input.style.backgroundColor = "black";
    cals_input.style.color = "white";
    buttons.forEach((element) => {
      if(element.className !== "orange_color"){
        element.style.color = "white";
      }
    })
  }
}
// تعریف متغیر اد تو اینپوت ، این متغیر ما همه کاره است و قرار است تمامی کار های ماشین حساب را انجام دهد
function add_to_input(something) {
  var cs = ""; // این مهم ترین متغیر ما می باشد و قرار است متن ورودی ما باشد
  
  // در صورتی که دکمه پاک کردن فراخوانی شود ، مقدار شو اینپوت خالی میشود
  if (something == "clear") {
    show_input.value = "";
  }
  // در صورتی که دکمه حذف کردن فراخوانی شود ، آخرین مقدار شو اینپوت خالی میشود
  else if (something == "delete") {
    // درصورتی که شو اینپوت خالی نبود آخرین مقدار را حذف کند
    if (show_input.value.length != 0) {
      show_input.value = show_input.value.slice(0, -1);
    }
  }
  // در صورتی که دکمه +/- فراخوانی شود ، اگر آخرین مقدار اینپوت برابر با + یا - بود آن را برعکس کند
  else if (something == "reverse") {
    if (
      show_input.value[show_input.value.length - 1] == "+" ||
      show_input.value[show_input.value.length - 1] == "-"
    ) {
      if (show_input.value[show_input.value.length - 1] == "+") {
        show_input.value = show_input.value.slice(0, -1);
        show_input.value += "-";
      } else {
        show_input.value = show_input.value.slice(0, -1);
        show_input.value += "+";
      }
    }
  }
  // در صورتی که = فراخوانی شود ، جواب آن را در شو اینپوت قرار دهد
  else if (something == "=") {
    cs = show_input.value;
    cs = cs.replace("undefined", "");
    cs = cs.replaceAll("×", "*");
    cs = cs.replaceAll("÷", "/");
    // در اینجا تلاش میشود تا نتیجه را بدست آورد و اگر نتوانست بنویسد که یک مقدار صحیح را وارد کنید
    try {
      if(String(eval(cs)).length > 10){
        show_input.value = eval(cs).toFixed(10); // در اینجا به طور خودکار مقدار را به 10 رقم درست میکند toFixed()
      }else{
        show_input.value = eval(cs);
      }
    } catch {
      alert("Please Enter The Correct Input!");
      show_input.value = "";
    }
  }
  // در اینجا ما کدی نوشتیم که از تکرار عملگر تکراری جلوگیری شود
  else {
    var list_of_operators = ["×", "÷", "+", "-" , "."];
    if (show_input.value.length < 15) {
      if (
        list_of_operators.includes(something) &&
        list_of_operators.includes(show_input.value[show_input.value.length - 1])
      ) {
        show_input.value = show_input.value.slice(0, -1);
        show_input.value += something;
        return;
      } else {
        show_input.value += something;
        for (var i = 0; i < show_input.value.length; i++) {
          cs += show_input.value[i];
        }
      }
    }
  }
}