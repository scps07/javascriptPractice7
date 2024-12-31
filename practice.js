// (() => {
//            console.log('hello world')
// })()
const booker = function (){
    let counter = 0;
    return function (){
        counter ++
        console.log(`the passenger is ${counter}`);
    }
}
const book = booker();
// book()
// book()
// book()
// book()

let f ;
const g = function(){
    const a = 23;
    f = function (){
        console.log(a*2)
    }
};
const h = function(){
    const b = 25;
    f = function(){
        console.log(b*2)
    }
}
// g();
// f(); /*reassin the value of a f */
// h();
// f();

const passengerwait = function(n,wait){
    const persons = n / 3;
    setTimeout(function(){
        console.log(`the passerger is ${n}`)
        console.log(`we devide them into ${persons} and you wait ${wait}seconds for bus`)

    },wait*1000)
    console.log(`wait ${wait} second for ans`)
};
// passengerwait(300,5)


// working with arrys

const arr = ['a','b','c','d','e'];

// console.log(arr.slice(1,-1))
// console.log(arr.splice(2,4));
// in splice method second parmiter is number of delete
// console.log(arr.splice(2,1));
// console.log(arr);

const number = [9,8,7,6,5,4,3,2,1];
// console.log(number.reverse());
// console.log(number);

const arrNum = arr.concat(number);
// console.log(arrNum);

// console.log(number.at(-2))
// console.log('samour'.at(-3))

// lopping over the arry

const movements = [4934,-434,534,-434,444,333,-33434,-6465];

// movements.forEach(function(move){
//     if(move>0){
//         console.log(`you have deposite ${move}`);
//     }else{
//         console.log(`You have witdraw ${Math.abs(move)}`);
//     }
// });
// movements.forEach(function(mov,i,arr){
//     // if(mov > 0){
//     //     console.log(`No${i+1}: you have deposite the money ${mov}`);
//     // }else{
//     // console.log(`No${i+1}: you have deposite the money ${Math.abs(mov)}`)
//     // }
//     console.log(`${arr}`);
// });

const sam = new Map ([
    ['Name','samour chandra'],
    ['Nam','mokbul'],
    ['Na','mostofa'],
]);
// sam.forEach(function(value,key,set){
//     console.log(`${key}:${value}`)
// });
const currencys = new Map([
    ['Tk','Bangladesh'],
    ['Rs','india'],
    ['Doller','Uk'],
]);
// currencys.forEach(function(value,key,map){
//     console.log(`${key}:${value}`)
// })