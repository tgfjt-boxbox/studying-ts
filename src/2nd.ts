class Sample2 {
	constructor(public name:string, private age:number) {
	}
	public getName(): string {
		return this.name;
	}
}

var mySample = new Sample2('hoge', 20);

mySample.getName();
// エラー
mySample.age;


interface IHoge {
	str: string;
	methodA(): string;
}

class Fuga implements IHoge {
	constructor(public str:string) {
	}
	methodA(): string {
		return "I'm " + this.str;
	}
}

var f = new Fuga("fuga!");



module sampleM1 {
	export var str = "string";
}

module sampleM2 {
	export class Hoge {
		hello(word: string): string {
			return "Hello, " + word;
		}
	}

	class Fuga {
  }

	export interface IMiyo {
		hello(word: string): string;
	}
}

module sampleC {
  import Piyo = sampleM2.Hoge;
   // exportしていないものは参照できない
  import Fuga = sampleM2.Fuga;
  // interfaceもOK
  import Miyo = sampleM2.IMiyo;
  import FooBar = sampleM1.str;

  export var str = new Piyo().hello(FooBar);
}
