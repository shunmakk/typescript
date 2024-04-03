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

//型注釈によるtuple型の指定　[string,number]型
const person:[string,number] = ['satoshi',20];

//ラベル付きtupple型
type RGB = [red:number, green: number, blue:number];

//タプルの要素のオプション化
type Foo = [frist: number, second?: string, ...rest: any[]];

let a:Foo = [14]; //first要素のみの配列を代入可能
let b:Foo = [21,'takashi'] //frist要素とsecond要素
let c:Foo = [34,'nishi','yuki',34,56,'aaa'] //...restの複数の要素も割り当てることができる

//インターセクション型　AかつBみたいな感じ  

type Engine = {
    engineType : string;
    volume: number;
}

type Wheels = {
    wheelCount: number;
}

type Car = Engine & Wheels

const MyCar: Car  = {
    engineType: 'V8',
    volume: 3000,
    wheelCount: 4,
}
console.log(MyCar.volume, MyCar.engineType);



//any型　　利用は極力を避けるべき サードパティのライブラリや外部APIから返されるデータの型が不明の時、jsからtsへの移行の時とかは使う
//any型の変数の挙動
let value1: any = 1; //any型
value1 = 'any型'
// value1.nocheck(); //型チェックが行われないのでエラーなし

let value2: any = [1,2,3];
let value3 = value1 + value2; //型チェックが行われないのでエラーなし


//unknown型　
//unknown型の変数を別の型が期待される変数に直接代入することはできない
//算術演算もできない

//unknown型の変数を他の型に特定
let value4: unknown = 10;
if(typeof value4 === "number"){
    console.log(value4 + 1);
};

//null型　厳格なnullによる型チェック
const person2  = {
    age: 25,
    firstName: Math.random() > 0.5 ? "Alice" : null
};

//NG.firstプロパティがnullである可能性があるためエラー
// console.log(person2.firstName.toUpperCase());

//OK
console.log(person2.firstName?.toLowerCase());


//関数と型
//関数パラメーターに関しては型推論を行うことはできない

function addNumbers (a:number, b:number){
    return a + b;
}

//関数の戻り値の型注釈
function addNumbers2 (a:number,b:number):number {
    return a + b;
}


//オプショナルパラメーター
//オプショナルパラメーターをつけるには、対象パラメーターに?をつける
//↓の場合、string型とundefined型のユニオン型となる

function printMessage (message?:string){
    if(message){
        console.log(message);
    } else {
        console.log('full');
    }
}

printMessage('Hello World');
printMessage();

//関数型
let myFunction:(arg1: number, arg2:string) => boolean;
//↑number型のarg1とstring型のarg2を引数として受け取り、boolean型を返す

//関数式と関数型
const FunctionNumber : (a:number, b:number) => number = (a,b) =>  a + b;

//関数型と

