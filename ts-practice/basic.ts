console.log('hello typeScript');

//number型
let age: number =  22;  //型注釈によりnumber型となる
let height =  180.25;   //型推論によりnumber型となる
let hexadecimal: number = 0xff; //16進数
let notAnumber: number = NaN;  //非数
let positiveInfinity: number = Infinity; //無限大を表す数値

//string型
let firstName: string = "kaji"; //型注釈によりstring型となる
let greetimg = "TypeScript"; //型推論によりstring型となる
let Introduce = `My name is ${firstName} `; //型推論によりstring型となる

//boolean型
let isCurrect: boolean = false; //型注釈によりboolean型となる
let fact = true; //型推論によりboolean型となる


//リテラル型の変数の代入
let newAge: number ;
const adultAge = 18;
newAge = adultAge;
console.log(newAge);

//ユニオン型
let id : number | string ;  //number型とstring型のユニオン型
let role: number | string | boolean; //３つ以上も可能

//ユニオン型の変数の代入
id = 10;
id = 'udemy';

//ユニオン型とリテラル型の組み合わせ
let eventType : "onClick" | "onChange" | "hover"; //リテラル型のユニオン型
eventType = "onClick" //ユニオン型のメンバーである特定の文字列だけ代入可能

const themeColor: "light" | "dark" = "light";

//型エイリアス
type Role = number | string;   //number型とstring型のユニオン型にRoleという名前をつける
type EventType = "onClick" | "onChange" | "hover"; //リテラル型のユニオン型にEventTypeという名前をつける

//型注釈による型エイリアスの利用
let firstRole :Role  //Role型を指定
let lastRole: Role   //Role型を使い回す

//型エイリアスのユニオン型
type Animal = Cat | Dog;
type Cat = "mei" | "poke" | "cat";
type Dog =  "pochi" | "shiba";

let pet: Animal = "pochi";

//型注釈によるオブジェクト型の指定
let book: {
    title: string;
    author: string;
    price: number;
} = {
    title: 'モダンjavascript徹底解剖',
    author: 'john',
    price: 1200
};

//型エイリアスを用いたオブジェクト型の定義
type Book = {
    title: string;
    author: string;
    price: number;
}

let books :Book = {
    title: 'Reactで作るTodoアプリ',
    author: 'triger',
    price: 1000
}

//ネストされたオブジェクト型
type Employee = {
    id: string;
    name: string;
    address: {
        street: string;
        city: string;
        zipCode: string;
    };
};

//型エイリアスで書き換えることも可能
type NewAdress = {
    street: string;
    city: string;
    zipCode: string;
};

type NewEmployee = {
    id: string;
    name: string;
    address: NewAdress;
}

//オプショナルプロパティ
type Person = {
    name: string;
    age?: number;  //ageはオプショナル
}

const vite :Person = {
    name: 'vite'  //オブジェクトにageプロパティが含まれていなくても問題なし
};

//読み取り専用プロパティ　後から値を変更することができない
type ImmutablePerson = {
    readonly name: string;
    age:  number;
};

const alice :ImmutablePerson = {
    name: 'Alice',
    age: 12,
};
//ageのみ値の変更が可能
alice.age =  15;


//Array型
//配列の型推論
const nums = [1,2,3,4,5];  //number[]型
const personNames = ['yuki','kenta','taro'];//String[]型
const nums2 = [1,2,3,'4']; //(string | number)[]型

//型注釈によるArray型の指定
let fruits: string[];  
fruits = ['banana','pear'];
console.log(fruits[0].toUpperCase());

//Tupple型

//
