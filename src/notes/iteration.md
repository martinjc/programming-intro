---
layout: page
order: 6
title: Iteration
---

{% panopto "ebe935a7-15b7-4b0c-9dc3-af0e00c47269" %}

Sometimes we might want to repeat some code a number of times...

-   twice
-   five times
-   a thousand times
-   as many times as necessary until some condition becomes true

Rather than write the same code over and over we can instead **loop** our code. This will repeat our code as many times as we want/need. This repetition is called **iteration**. Depending on the details of the programming language, we can use many different types of loop to iterate over our code.

## While loop

A common type of loop runs while some expression is true; this is often called a `**while**` loop (or a `do ... while` loop)

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

## infinite loops

A common issue when we start creating loops is the creation of **infinite** loops. These loops keep looping forever, which can block the rest of our program from running, or can cause the computer to hang, or even crash.

Infinite loops commonly occur when the **condition** that checks whether the loop should carry on running **doesn't change** in the running of the loop. This is not normally an issue for a `for` loop, but can be a problem in a `while` or a `do ... while`.

{% questions questions %}
