// let money: number = 100;
// if (money < 500) money += 100;
// console.log(money);

// function run(doc: any) {
//   console.log(doc);
// }
// let arr: any[] = [1, 2, 3, "1"];
// console.log(arr);

// enum Size {
//   small = 20,
//   medium,
//   large,
// }
// let mySize: Size = Size.large;
// console.log(mySize);

// function func(num: number, years: number): number {
//   if (years <= 2023) return num * 10;
//   return 0;
// }
// let a = func(30, 2020);
// console.log(a);

// type MyObj = {
//   id: number;
//   run: (date: Date) => any;
// };
// let myObj: MyObj = {
//   id: 1,
//   run: (date: Date) => {
//     return date.getFullYear;
//   },
// };
// console.log(myObj);

// function kgToIbs(weight: number | string): number {
//   if (typeof weight === "number") {
//     return weight * 10;
//   } else {
//     return parseInt(weight) * 2;
//   }
// }
// let b = kgToIbs(20);
// let c = kgToIbs("10kg");
// console.log(b + " " + c);

// type myTypeFirst = {
//   myFuncOne: () => void;
// };
// type myTypeSecond = {
//   myFuncTwo: () => void;
// };

// type AllType = myTypeFirst & myTypeSecond;

// let textTitle: AllType = {
//   myFuncOne: () => {},
//   myFuncTwo: () => {},
// };

// function greet(name: string | null | undefined): void {
//   if (name) console.log(name.toUpperCase());
//   else console.log("jafar");
// }
// greet(null);

// type Customor = {
//   birthday: Date;
// };

// function getCustomor(id: number): Customor | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }
// let customor = getCustomor(0);

// let log: any = (mes: string) => {
//   return console.log(mes);
// };
// console.log(log);

// let nav = <HTMLInputElement>document.getElementById("nav");
// nav.value;
// console.log(nav);

// function render(document: any) {
//   document.try();
//   document.jafar();
// }

// class Account {
//   id: number;
//   owner: string;
//   balance: number;
//   constructor(id: number, owner: string, balance: number) {
//     (this.id = id), (this.owner = owner), (this.balance = balance);
//   }

//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error(` ${amount} amount must be greater than`);
//     } else {
//       this.balance = this.balance + amount;
//       console.log(this.balance);
//     }
//   }
// }
// let acount = new Account(1, "alex", 10);
// acount.deposit(0);

// class MyBankBalance {
//   readonly id: number;
//   name: string;
//   private _balance: number;
//   constructor(id: number, name: string, balance: number) {
//     (this.id = id), (this.name = name), (this._balance = balance);
//   }
//   deposit(amount: number): void {
//     if (amount <= 0) throw new Error(` ${amount} amount must be greater than`);
//     this._balance += amount;
//     console.log(`${this.name} your blance ${this._balance} dollor!`);
//   }
//   withdraw(amount: number): void {
//     if (amount >= this._balance)
//       throw new Error(
//         ` ${this.name} You don't have enough funds in your account!`
//       );
//     this._balance -= amount;
//     console.log(`${this.name} your blance ${this._balance} dollor! funds left`);
//   }
//   get Balance(): number {
//     return this._balance;
//   }

//   set Balance(value: number) {
//     if (value < 0) throw new Error(`invalid value`);
//     this._balance = value;
//   }
// }
// let myBankBalance = new MyBankBalance(77, "Potter", 10_000);
// // myBankBalance.deposit(3000);
// myBankBalance.withdraw(4000);
// myBankBalance.deposit(13000);

///////////////////////////////

// class KeyFrameVal<K, V> {
//   constructor(public name: K, public age: V) {}
// }
// let keyFrameVal = new KeyFrameVal<string, string>("1", "d");
// console.log(keyFrameVal);
/////////////////////////////

// class mutant {
//   static kala<k>(value: k) {
//     return [value];
//   }
// }
// let utils = new mutant();
// let kal = mutant.kala(1);
// console.log(kal);
///////////////////////////

interface qolb<A> {
  data: A | null;
  error: string | null;
  infor: string;
}
function fetch1<T>(url: string | null): qolb<T> {
  return { data: null, error: null, infor: "hello" };
}

interface User {
  userName: string;
}
interface Product {
  title: string;
}

let result = fetch1<Product>("url");

console.log(result);
