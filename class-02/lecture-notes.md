# Class 02 Lecture Notes

## JavaScript

JavaScript is a **loosely typed** and **dynamic** language

- loosely typed we don't have to know the type of data we are gonna use to declare a variable

- dynamic meaning you can change the type after the variable has been declared

`let cat;`

`cat = 3;`

`cat = 'squeeeee';`

## Data Types

### Strings

- sequence of characters used to represent text. written in single quotes.
- `'hello'`, `'feownf32432590ew-rfeaf'`

### Numbers

- numeric data type
- full number, negative, decimals

### Boolean

- Logical data type
- `true` `false`
- truthy / falsey

### Undefined

- it has not been defined yet
  - `let dog;`

### Null

- something that has been defined as none
  - `let dog = null;`

## Comparison Operators

- `==` 'loose equality'...value must be the same, but type can be different
  - `6 == '6' // evaluates to true`
- `===` 'strict equality'...value and type must be the same
  - `6 == '6' // evaluates to false` but...
  - `6 === 6 // evaluates to true`
- `!=` 'loose inequality'
  - `6 != '6' // evaluates as false`
  - `6 != 'a' // evaluates as true`
- `!==` 'strict inequality'
  - `6 !== '6' // evaluates as true`
  - `6 !== 6 // evaluates as false`
- `>` greater than; `<` less than
- `>=` greater than or equal to; `<=` less than or equal to

## Logical Operators

- `&&` and;
- `||` or;
- `!` not, also refered to as the bang symbol. Gives you the opposite of whatever it is placed in front of
  - `!true` this will equate to false
