---
layout: page
title: 'Expressions and Statements'
---

# Statements, Expressions and Operators

## Statements
We need to write code that **does something**

* creates a variable
* assign a value to a variable
* run a separate piece of code elsewhere
* print something out to the screen
* pass some value on to another piece of code

**statements** are the building blocks for our code that do these things. Any piece of code we write that has an **effect** is a statement.


## Expressions
Expressions are pieces of code that will be **evaluated** to determine their **value**

* a mathematical operation
* that applies operators to the values stored in variables
* and provides a result

Statements can contain expressions

## Operators

The operators that we can use in expressions will depend on the programming language we are using, but will typically include:

* simple mathematical operators, for example +, -, *, /
* other mathematical operators, for example ^, %
* logical operators, for example |, &, !
* comparison operators, for example ==, <, >

# Statements

A simple assignment statement will assign a value to a variable

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

Statements follow each other, and are executed in order

Later, we'll look at complex statements that contain other statements and have their own functionality

* loop statements that repeat code, or iterate (for, while)
* branching statements that allow code to make decisions (if, if-else)

the names of these complex statements (for, while, if, if-else) are often reserved. This means that they cannot be used for other purposes in our code - for example we usally cannot use 'for' as a variable name. 

