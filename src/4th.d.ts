// Type definitions for sample.js

interface ISampleOptions {
  force?: boolean
}

interface ISampleStatic {
  todo(str: string, options?: ISampleOptions): void;
}

declare module "sample" {
  var sample: ISampleStatic;
  export = sample;
}
