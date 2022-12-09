import { reduceToSixLoop } from "./lotteryLib.mjs";

export const PI = 3.14159265359;
export const E = 2.718281828459;
export const GAMMA = 0.577215;

export const reducer = (accumulator, currentValue) => accumulator + currentValue;
// The following objects are private
const G = 0.915965594177;
const x = 0.110001000000000000000001;

export function adder(...args) {
    return args.reduce(reducer);
}

//convert a string to a array of numbers, using unicode map
export function convertToDigits(s) {
    const a = s.split("");
    const b = a.map((x) => x.charCodeAt(0).toString(10));
    return b;
}

// decode number to char
export function decodeNumber(n) {
    return String.fromCharCode(n);
}

// encode string
export function encodeString(s) {
    return convertToDigits(s).map((x) => reduceToSixLoop(x)).join("");
}

export const getRandomNumber = function (n) {
    return Math.floor(Math.random() * Math.pow(10, n));
};