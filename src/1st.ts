var str1: string = "文字列のテスト1";

// エラー
var str2: number = "文字列のテスト2";

var str3 = "文字列のテスト3";

// エラー
str3 = 1;

var list:number[] = [1, 2, 3];
var list:Array<number> = [1, 2, 3];

enum Color {Red, Green, Blue};
var c: Color = Color.Green;

interface ISample {
  name: string;
}

var obj: ISample = {
  name: "tgfjt"
};

/**
 * [hello]
 * @return {void}
 */
function hello() :void {
  alert("hello");
}


var hello2 = () => {
  alert("hello");
};

interface Person {
  firstname: string;
  lastname: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstname + " " + person.lastname;
}

greeter({
  firstname: "ho",
  lastname: "ge"
});

var func: (word: string) => string;

func = function(word: string): string {
  return "Hi, " + word;
};

class Sample {
  name: string;

  // arrow関数では、this は 受け継がれる。
  helloA(): () => string {
    return () => "Hello, " + this.name;
  }

  // 普通にやると、globalになるはず
  helloB(): () => string {
    return function() { return "Hello, " + this.name; };
  }
}



// var foo: {
//  (name: string): string;
// };

// foo = function(name: string): string {
//  return "Hello, " + x;
// };

// foo("TypeScript");


var foo: {
  (x: number): number;
  (x: number, y: boolean): number;
  (x: string): string;
};

foo = function(x: any, y?: boolean): any {
  if (typeof x === "number") {
    console.log("number", x)
  } else {
    console.log("not number", x)
  }
}

foo(123);
foo("TypeScript");




interface ISampleF {
  name: string
  greet: (word: string) => string;
}

var objF: ISampleF = {
  name: 'yoho',
  greet: function(word: string): string {
    return "Hi! " + word;
  }
}
