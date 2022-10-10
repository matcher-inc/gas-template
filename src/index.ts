import { sampleFunc } from 'sample_module';

// embed imported module function
(global as any).func1 = sampleFunc;

// embed arrow function
(global as any).func2 = (): void => {
  const msg: string = 'hello hello !!';
  console.log(msg);
};
