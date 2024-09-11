//In this project, you'll build a decimal and binary converter and learn about both number systems. You'll also learn about recursion by using it to perform the conversions.
//keydown event listener.
//parseInt()
//isNaN()
//String()




//1.
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result  = document.getElementById("result");              //Ovo je output element u html-u. Ne znam dal smo to do sad imali.
const animationContainer = document.getElementById("animation-container");      //Stap 87. Now you'll start building the animation itself. First, use the document.getElementById() method to select the element with the id animation-container and assign it to a variable called animationContainer.


const animationData = [                     //Step 83. Now you're ready to start on the animation itself. You'll use an array of objects to store data for each frame of the animation. First, create a new variable called animationData and assign it an empty array.
  {                                         //Step 84. Next, you'll create an object to represent the first frame of your animation. Your object should have three properties or keys: inputVal, marginTop, and addElDelay. inputVal will represent the value of the input each time your recursive function runs. marginTop will be the top margin for DOM elements you'll add to the page. And addElDelay will be the delay between adding DOM elements to the page. Add an object to animationData with an inputVal property set to 5, a marginTop property set to 300, and an addElDelay property set to 1000.
    inputVal: 5,
    marginTop: 300,
    addElDelay: 1000,
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000,
    removeElDelay: 20000,
  },
  {
    inputVal: 2,
    marginTop: -200,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    marginTop: -200,
    addElDelay: 2000,
    msg: 'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 5000,
    removeElDelay: 10000,
  }                                 
];       

//4.
const decimalToBinary = (input) => {    
    if (input === 0 || input === 1) {
        return String(input);               //String() pretvara u string
      } else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);    //Vrti dok ne dodje do input === 0 ili 1. Za slucaj input = 10. Odradi return "" i na to doda + 1 % 2 + 2 % 2 + 5 % 2 + 10 % 2; napravi string "1010" 
      } 
};

//5. Next, you'll create a simple animation to help you understand what's happening each step of the way.
const showAnimation = () => {               //Na koraku 80. pocinjemo da dodajemo setTimeout. Ima i u wordu. U korak 88. obrisemo. Tako da se ni ne vidi sta smo radili ali setTimeout se spominje i objasnili smo kako radi.
    result.innerText = "Call Stack Animation";
    animationData.forEach((obj) => {
        setTimeout(() => {
        animationContainer.innerHTML += `
        <p class="animation-frame" id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;">
        decimalToBinary(${obj.inputVal})
        </p>
        `;
        }, obj.addElDelay); 

        setTimeout(() => {
        document.getElementById(obj.inputVal).textContent = obj.msg;          //U zagradi ne ide "" jer je promenljiva.
        }, obj.showMsgDelay);

        setTimeout(() => {
        document.getElementById(obj.inputVal).remove();         //Uklanja paragraf sa tim id-jem.
        }, obj.removeElDelay );

        setTimeout(() => {
        result.textContent = decimalToBinary(5);
        numberInput.value = ""        //OVO SAM JA DODAO. NEMA U ORIGINALNOM KODU.
        }, 20000)
    })
};


//2. i ovde ne mogu bas sa brojevima da ispratim jer se vracamo pa prepravljamo. Tako da ima stvari ovde koje menjamo posle koraka 3.
const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value)    //Ovo radim da ne bi morao sve ovo "parseInt(numberInput.value)" da pisem kad budem koristio ispod. Sad u objasnjenjima ispod mi se mozda pojavljuje nesto sto nema posto sam izmenio.
    if (!numberInput.value || isNaN(inputInt)) {               //!numberInput.value zbog ! radi truthy/ falsy obrnuto. Znaci ako je 0, null... prijavice true. perseInt i isNaN ima u wordu.
        alert("Please provide a decimal number");
        return;                                                 //After alerting the user if the number input is empty of the value is not a number, you can use the return keyword to break out of this function early. This will prevent future code in this function from running.
    };

    if (inputInt === 5) {
        showAnimation();
        return;
    }

    result.textContent = decimalToBinary(inputInt);       //parseInt() treba jer valjda iako je number input kad uradimo value dace nam string i onda sa parseInt pretvorimo u broj. Ovde koliko sam skontao resava ako napisemo 1e1 sto je jednako 1*10^1. Nece priznati to nego ce uzeti da smo uneli 1. Ima na googlu sta radi.
    numberInput.value = "";                 //Ovo je ono kad unesemo broj i stisemo da ga proverimo ono sto je u inputu nestane da bi odma mogli da unesemo novu vrednost bez brisanja.
};

//3.
convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {                     //keydown event listener. Kad ubacim e kao parametar u call back funkciju belezi sta je ukucano unutar numberInput, a ako stavim console.log onda mi i ispise.
    if (e.key === "Enter"){                                          //Proverava jesam pritisnuo enter.
        checkUserInput();
    }
});              








// const countDownAndUp = (number) => {        //Ovde console log izbaci 3 2 1 0 Reached base case 1 2 3. ovo 1 2 3 je valjda zato sto... Step 65. Now you should see a countdown from 3 to 0, followed by Reached base case, and a count from 1 to 3. This is because, after the recursive loop is finished, the function will continue to execute the code after the recursive call. This is why you see Reached base case before the count from 1 to 3. Ovo od 1 do 3 je valjda zbog onog call stack. Ima u wordu.
//     console.log(number);
  
//     if (number === 0) {
//       console.log("Reached base case");
//       return;
//     } else {
//       countDownAndUp(number - 1);
//       console.log(number);
//     }
//   }; 
//   countDownAndUp(3);




// const callStack = [
//     'a(): returns "freeCodeCamp " + b()',            //OVO SU OBICNO STRINGOVI KOJI OBJASNJAVAJU STA SE DESAVA. Stavili smo ' posto je vec bilo ". Ima u wordu "call stack".
//     'b(): returns "is " + c()',
//     'c(): returns "awesome!"'
// ];
// const a = () => "freeCodeCamp " + b();
// const b = () => "is " + c();
// const c = () => "awesome!";
// console.log(a());




// OVAKO SMO PRVO URADILI ALI MOZE JEDNOSTAVNIJE
//4.
// const decimalToBinary = (input) => {
//     const inputs = [];
//     const quotients = [];
//     const remainders = [];

//     if (input === 0) {                  //Posto je u While loop input > 0 ako nemamo ovo if onda kad unesemo nulu nece nista raditi. Else nam ni ne treba.
//         result.innerText = "0"
//         return;                         //Ako ovde ne stavim return nastavice sa funkcijom i dalje i raditi ako ima sta.
//     }
    
//     while (input > 0) {
//         const quotient = Math.floor(input / 2);                 //Ovde radim sta treba za pretvaranje decimalnih brojeva u binarne. Delim sa dva pa zaokruzujem na nizu vrednost (Ko zna kako da pretvara na pamet jasno mu je odma sta ovo znaci).
//         const remainder = input % 2;                            //Proveravam da li je broj paran ili neparan.
//         inputs.push(input);
//         quotients.push(quotient);
//         remainders.push(remainder);
//         input = quotient;
//     };
//     console.log("Inputs: ", inputs);                             //Ovo ne znam dal sam vidjao. Ovako izbaci inputs kao array, a ako stavim console.log("Inputs: " + inputs); drugacije pokaze. Ovako sa zaresom bukvalno je kao da nabrajamo sta da izbaci u console.log.  
//     console.log("Quotients: ", quotients);
//     console.log("Remainders: ", remainders);
//     result.innerText = remainders.reverse().join("");           //Obrnuo array pa spojio brojeve posto kad pretvaram u binarne tako ide.
// };




//4. OVO JE DRUGI NACIN
// const decimalToBinary = (input) => {
//     let binary = "";

//     if (input ===0) {
//         binary = "0";
//       }
      
//     while (input > 0) {
//         binary = (input % 2) + binary;            //Npr. 10 % 2 = 0 (ovo je ostatak jer je %moduo a ne deljenje). Znaci binary = 0. Sledeci korak 5 % 2  = 1. binary = 1 + binary( sto je 0), znaci binary = 10. Sledecikorak 2 % 2 = 1. binary = 10 + 1 = 101 string.
//         input = Math.floor(input / 2);
//       }
//     result.innerText = binary;  
// };