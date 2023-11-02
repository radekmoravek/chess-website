
const reverseWords = require('./index');

test('Jordan return as nadroJ', () =>{
    expect(reverseWords("Jordan")).toBe("nadroJ");
});

test('Radek return as kedaR', () =>{
    expect(reverseWords("Radek")).toBe("kedaR");
});

test('Hello World', () =>{
    expect(reverseWords("Hello World")).toBe("dlroW olleH");
});

test('double  spaced  words', () =>{
    expect(reverseWords("double  spaced  words")).toBe("elbuod  decaps  sdrow");
});