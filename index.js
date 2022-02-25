const button = document.getElementById("btn");
const guess = document.getElementById("guess");
const msg1 = document.getElementById("message1");
const msg2 = document.getElementById("message2");
const msg3 = document.getElementById("message3");


var number = Math.trunc(Math.random()*100) + 1;
console.log(number);
var no_of_guesses = 0;
var guessed_nums = [];
var maxNumber = 100;
var minNumber = 1;

button.addEventListener("click", () =>{
    
    var user_guess = +guess.value;
    if(user_guess < 1 || user_guess > 100){
        alert("Lütfen 1 - 100 arası bir sayı giriniz...");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;

        if(user_guess < number){
            minNumber = user_guess;
            msg1.textContent = `Lütfen ${minNumber} ile ${maxNumber} arası tekrar bir sayı giriniz. `;
            msg2.textContent = "Deneme sayısı " + no_of_guesses;
            msg3.textContent = "Girilen sayılar: " + guessed_nums;
        }
        else if(user_guess > number){
            maxNumber = user_guess
            msg1.textContent = `Lütfen ${minNumber} ile ${maxNumber} arası tekrar bir sayı giriniz.`;
            msg2.textContent = "Deneme sayısı: " + no_of_guesses;
            msg3.textContent = "Girilen sayılar: " + guessed_nums;
        }
        else if(user_guess == number){
            succes()
            msg1.textContent = "Tebrikler..!!";
            msg2.textContent = "Tutulan sayı: " + number;
            msg3.textContent = no_of_guesses + " denemede bildiniz";
            button.disabled = true;
        }
        guess.value = "";
        guess.focus();
        
    }
})
var succes = ()=>{
    Swal.fire(
        'Congrats',
        'You Win',
        'success'
      );
}