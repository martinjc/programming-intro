---
layout: page
order: 5
title: Conditions and Branching
---

It is useful to have some values that either **are** or **aren't**.

-   yes/no
-   on/off
-   1/0
-   true/false

True and false are most often used for this. They are commonly know as bool or boolean values.

## Boolean expressions

We can write Boolean expressions which result in either a true or false value

-   is variable A greater than variable B?
-   is this String equal to that String value?
-   is this value contained inside this list?
-   are these two things equal?

Typically we use comparison operators to construct these expressions. For example, to see if the value in one variable is greater than the value in another variable:

```
set B = 3
set A = 5
print(A < B)
```

or to compare if the values stored in two variables are equal:

```
set B = 3
set A = 5
print(A == B)
```

### Comparison operators

Comparison operators might include:

-   less than (<) and less than or equal to (<=)
-   greater than (>) and greater than or equal to (>-)
-   equal to (==) and not equal to (!=)

Which operators are available and how we write them may depend on the details of the programming language we are using, but the general idea of how they work should stay the same from language to language.

## Branching

If we know if something is true or false, we can change what our code does in each situation. This is called branching and it allows our program to run different parts depending on the result of a boolean expression

INSERT IMAGE HERE

These are known as conditional statements. `if` is commonly used as the main conditional statement, typically with else used to add additional branches. Occasionally a statement like `switch` may be available which also allows branching, but we'll focus on `if` for now.

```
set B = 3
set A = 5
if A < B
    print("foo")
else
    print("bar")
```

We can add further conditional branching with more boolean expressions

```
set B = 3
set A = 5
if A < B
    print("foo")
else if A > B
    print("bar")
else
    print("bee")
```

## Logical operators

We can combine boolean expressions using logical operators.

-   and/&&/& - both expressions must be true
-   or/||/| - either expression can be true

Which operators are available and how we write them will depend on the details of the programming language we are using, but the general principles of how they work will usually be the same

```
set B = 3
set A = 1
if A < B or A > B
    print("foo")
else
    print("bar")
```

We can negate boolean expressions using the logical operator not/!. 'not' or '!' flips true to false, and vice versa.

```
set B = 3
set A = 1
if !(A < B)
    print("foo")
else
    print("bar")
```
