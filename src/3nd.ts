module panda {
  export var hello = function(): string {
    return "hello";
  };
}

class Singleton {
  private static _instance:Singleton = null;

  private score:number = 0;

  constructor(public name:string) {
    if (Singleton._instance) {
      return Singleton._instance;
    }
    Singleton._instance = this;
  }

  public static getInstance(name:string):Singleton {
    if (Singleton._instance === null) {
      Singleton._instance = new Singleton(name);
    }
    return Singleton._instance;
  }

  public setScore(value:number):void {
    this.score = value;
  }

  public getScore():number {
    return this.score;
  }

  public getName():string {
    return this.name;
  }
}

var santa = Singleton.getInstance("Santa");
var claus = Singleton.getInstance("Claus");

console.log(santa === claus);


var message: string = "str";
message = true;
