import { str } from './mod'

str = 'str'
console.log(str)

function fn(a: any, b = 'b', c: any) {
  // noop
}
fn(1, '2', 3)

const regexp = new RegExp('foo|bar')
console.log(regexp)

export const sum = (a: number, b: number): number => a + b
export const bar = (bar: string) => ''
export const isMatch = (str: string): boolean => /=\d{10}/.test(str);

