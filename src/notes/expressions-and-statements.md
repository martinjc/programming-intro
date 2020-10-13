---
layout: page
title: "Statements, Expressions and Operators"
order: 4
---

## Statements

We need to write code that **does something**

-   create a variable
-   assign a value to a variable
-   run a separate piece of code elsewhere
-   print something out to the screen
-   pass some value on to another piece of code

**statements** are the building blocks for our code that do these things. Any piece of code we write that has an **effect** is a statement.

An assignment statement will assign a value to a variable

```
set A = 3
```

A more complex assignment statement will evaluate an expression to assign a value to a variable

```
set A = 3 - 2
```

Multiple statements combine to create more complex functionality

```
set A = 3 - 2
set B = 5
set C = A + B
```

Statements follow each other, and are carried out in order

Later, we'll look at complex statements that contain other statements and have their own functionality

-   loop statements that repeat code, or iterate (for, while)
-   branching statements that allow code to make decisions (if, if-else)

the names of these complex statements (for, while, if, if-else) are often reserved. This means that they cannot be used for other purposes in our code - for example we usally cannot use 'for' as a variable name.

## Expressions

Expressions are pieces of code that will be **evaluated** to determine their **value**

-   a mathematical operation
-   that applies operators to the values stored in variables
-   and provides a result

Expressions do not have effects, they merely produce a value. Statements can contain expressions, which means that the results of expressions can be used in our statements.

## Operators

The operators that we can use in expressions will depend on the programming language we are using, but will typically include:

-   basic mathematical operators, for example +, -, \*, /
-   other mathematical operators, for example ^, %
-   logical operators, for example |, &, !
-   comparison operators, for example ==, <, >

Operators can be classified by how many things they operate on. Most (but not all) operators are binary, they operate on two values (or 'operands'). Unary operators only operate on a single value. Ternary operators operate on 3 operands.

Operators can be described by where they are placed. Prefix operators appear before their operand(s). Infix operators appear between their operands. Postfix operators appear after their operands.

The mathematical operators (addition, subtraction, multiplication and division) are all binary operators and are typically (though not always) infix:

```
set A = 3 + 4
set B = A - 6
```

It is possible sometimes to use mathematical operators as unary operators, for example, a unary prefix '-' operator

```
set C = -B
```

^ is sometimes used to raise a number to a higher power

```
set D = 2^6
```

though this also might be done using '\*\*', depending on the language

```
set D = 2**6
```

'%' is the modulus operator, it gives the result from integer division

```
set E = 5 % 2
```

E will contain the value 1, since 2 divides 5 twice, with 1 as a remainder.

The binary logical operators 'and' and 'or' allow you to combine boolean values (more on this later), while the unary logical operator 'not' allows you to negate a binary value (true becomes false, and vice versa).

Comparison operators allow you to compare values. We can test for equality (is A equal to B?) or whether a value is less than or greater than (or less than or equal to or greater than or equal to) another value.

You may occasionally see a ternary operator '?', though this is not present in all languages. This has three operands, a boolean expression, a value if the expression is true and a value if the expression is false

```
set F = A == B ? 3 : 2
```

Do not worry too much about this one at the moment, we'll see it again later.

Some languages (but not all!) include additional operators that can shorthand some operations, for example '++' or '--' as increment and decrement operators. These can typically be used postfix or prefix, and are shortcuts for 'this value +1' or 'this value -1'

```
A = A + 1
```

in many languages is the same as:

```
A++
```

Whether these operators are used as prefix or postfix determines whether they perform their function before or after expression evaluation. For example:

```
set A = 1
set B = ++A
```

The prefix '++' operator will be applied to A (increasing the value by 1 to 2) and then the result of that expression stored in B, so both A and B will contain the value '2'.

```
set A = 1
set B = A++
```

The postfix '++' operator will be applied to A _after_ the value of A has been read and stored in B, so in this example A will have the value 2, but B will contain the original value of A before the postfix increment operator was applied, so will contain '1'.
