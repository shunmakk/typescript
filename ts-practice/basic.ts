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

//関数型と型エイリアス
type add = (a: number,b:number) => number;

const FunctionNumber2 :add = (a,b) => a + b;

//void型
//void型は、関数の戻り値が存在しないことを示すために使用される型
function greet():void{
    console.log('Hello');
}

//関数型の戻り値の型がvoid型の場合
type Returnvoid = () => void;

//OK,実際にはstring型の値を返す関数の代入
const greenWorld:Returnvoid = () => {
        return 'Hello';
};

//resultの型は　voidとして扱われ、関数の戻り値の型情報は無視される
const result = greenWorld();

//NG. typescriptはresultの型をvoidと見做しているため、string型は使えない
// console.log(result.toUpperCase());

//never型
//関数が戻り値を返さず、かつ呼び出し元に制御を戻すことが決してない状況を表すための特殊な型

//関数の戻り値に対するnever型の指定

////指定されたメッセージを用いてエラーをスローし、その結果プログラムは異常終了する
function throwError(message: string) : never {
    throw new Error(message)
}

////無限ループ
function infiniteLoop():never{
    while(true){
        console.log('NEVER RETURN');
    }
}

//網羅性チェックとnever型
type Shape = "circle" | "square" | "triangle";

////全てのケースを処理するための関数
function handleShapes(shape: Shape){
    switch(shape){
        case "circle" :
            //円を処理する
        break;
        case "square":
            //正方形を処理する
        break;
        case "triangle":
            //三角形を処理する
        break;
        default:
            //shapeが網羅的にチェックされていれば、defaultケースには決して到達できない
            const exhaustiveCheck: never = shape;
            throw new Error(`未処理の形状: ${exhaustiveCheck}`);
    }
}

//関数の使用例
handleShapes("circle")  //OK
// handleShapes("dddd") //NG

//関数オーバーロード

//２つの引数を加算して返すだけの関数とその挙動 any型
function twoAddNumber(a:any,b:any){
    return a + b
}

////引数として number型の値を受け取った場合
let results = twoAddNumber(1,2)  //3
////引数として string型の値を受け取った場合
results = twoAddNumber("1","2")  //"12"
////引数として number型とstring型の値を受け取った場合
results = twoAddNumber(2,"4")  //"24"

//number型とstring型のユニオン型を、それぞれパラメータの型に指定する
////関数に文字列をわたしたときに戻り値に対してstring型のメソッドを使用するとエラーになる
function addNumbers3(a: string | number , b: string | number){
    if(typeof a === "number" && b === "number"){
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}
let results2 = addNumbers3("1","2");
console.log(results2);

//NG  string型のメソッドを呼び出そうとするエラー
results2.includes("1");

//関数オーバーロード　↑上の問題を解決できる
////同じ名前の関数に対して複数の呼び出しシグネチャが定義でき、関数の呼び出し方法に応じて、typescriptコンパイラによる型推論をより正確に行える

////オーバーロードのシグネチャ
function addNumbers4(a:number,b: number): number;
function addNumbers4(a:string,b: string): string;
function addNumbers4(a:number,b: string): string;
function addNumbers4(a:string,b: number): string;


////関数本体
function addNumbers4(a: number | string , b: number | string): number | string{
    if(typeof a === "number" && b === "number"){
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}

////result3はstring型として推論される
let results3 = addNumbers4("1","2");

//string型と定義されているためエラーは起きない
results3.includes('1') //true








