---
layout: page
order: 6
title: Iteration
---

Sometimes we might want to repeat some code a number of times…

-   twice
-   five times
-   a thousand times
-   as many times as necessary until some condition becomes true

Rather than write the same code over and over we can instead loop our code. This will repeat our code as many times as we want/need. This repetition is called iteration. Depending on the details of the programming language, we can use many different types of loop to iterate over our code.

## While loop

A common type of loop runs while some expression is true; this is often called a 'while' loop (or a do … while loop)

```
set B = 3
set A = 5
while A > B
    print(A)
    set A = A - 1
```

## for loop

Another common loop runs based on some counter. This will run for a fixed number of iterations, and is often called a 'for' loop

```
set A = 5
for a = 0, a < A, a++
    print(a)
```
