---
layout: page
title: "Variables"
order: 3
---

When we are programming, we need to remember 'something'; a '**value**'.

This might be a letter, or a number. Or perhaps a sequence of letters. It might be the concept of 'true' or the concept of nothing. It is some data, and it is a thing that we need to remember and use in our program.

So we store it in a **variable**.

{% panopto "3f80de7b-59a4-44b8-85ab-adb300fbaca3" %}

## Two analogies

There is an often applied analogy that a variable is like a box, with a label on it. If I need to store a value I can put it in my box, and whenever I want to retrieve that value I can go and find the box with the right label on it and look inside and get my value back out again.

This analogy is mostly rubbish, for the following reasons:

1. Boxes can hold loads of things, depending on the size of the box. I have a box next to me that contains a broken mouse, a bit of blutac and a small lego figure made by my child. Variables only hold one thing at a time[^1]
2. If I take a thing out of the box, the box no longer holds the thing. If I read the value in a variable, the value still exists inside the variable, and I can go back later and check on it[^2]

Another analogy for a variable is that it is like a chalk slate. We can write a value on the slate, and whenever we look at the slate we will see that value again. If we want, we can rub the value off the slate and replace it. This is a better analogy, as variables do work a bit more like chalk slates than boxes. However it neglects the concept of a label, and really, who would label a slate?

## Variables are variables

They're a bit like a box with a label, that acts like a chalk slate. If that's not a confusing tortured analogy to ruin the life of a newcomer to programming I don't know what is.

### Things to remember about variables

1. You can store **exactly one thing** in a variable[^3]
2. Variables have no concept of history. They remember their current value and that's it.
3. Variables cannot _do_ anything on their own

## Types

Variables can hold different **type**s of **value**.

-   a whole number (an integer, int, long)
-   a decimal number (a float, a double)
-   a single character (a char)
-   a set of characters (a string)
-   the values of true or false (a bool, a boolean)
-   the concept of nothing (none, null, undefined)

A variable might hold a more complicated 'thing' that is made up of other types of things.

-   a sequence of types (array, list)
-   a store of key:value pairs (dict)
-   a complex Object

Sometimes a variable will need to know what type of data it will store ahead of you actually storing that type of data in it. Sometimes it doesn't, and you can create a variable without the variable needing to know exactly what type of data it will store. This depends on the programming language you use.

## Assigning and Accessing Values

When we put a value inside a variable, we call it '**assignment**'. Then we can use the label for a variable to read the value it stores. Reading is non-destructive, it does not remove the value from inside the variable. Assigning a value is destructive, it will replace any existing value inside the variable.

It is generally good practice to **assign** a **value** to a **variable** when it is declared, though this is not actually necessary in all programming languages. In some languages we can **define** or **create** variables without assigning a value to them. These languages will often include a type of value that represents the value in these 'empty' variables.

Sometimes, depending on the language and the type of variable you have created it is not possible to assign a new value to an existing variable. Sometimes, it is.

Sometimes, once we have told a variable it will store a certain **type** of **value**, it can only ever store that type of value. Sometimes a variable can change the type of value it stores. Again, this depends on the programming language we are using and the type of variable we have created.

## Notation

Often (though again, this depends on the programming language you use), declaring and assigning variables looks similar to mathematics. There are a lot of `=` signs flying around, and it can look like we are suggesting or checking that two things are equal. This is not the case.

Let's work with a generic programming language where we use the `set` keyword to **declare** or **define** a variable and `=` to **assign** a **value**. We could therefore declare and assign a value to a variable like so:

```
set A = 3
```

In this example we declare a variable with the name (or label, or identifier) 'A' and assign it the value 3. To use the box analogy we have created a box, written the label 'A' on the outside, and put the value '3' inside. It is important to note that where we use `=` we are assigning a value, not checking for equality.

## Replacing a value

We could have some code like this:

```
set A = 3
set A = 4
```

Here we declare a variable called 'A' and assign the value 3 to it. We then re-declare the variable and assign it the value 4. The variable 'A' will now contain the value '4' and will have no memory or rememberance of ever storing the value '3'.

## Reading a value

We could have some code like this:

```
set A = 3
set B = A
```

Here, we declare a variable called 'A' and assign the value 3 to it. We then declare a variable called 'B', and assign it the same value as is found in the variable 'A'. It is important to note that we are not pointing A and B at the same value '3'. We are reading the value in 'A' and assigning a copy to 'B'. The two variables are fundamentally different things, and are not linked in any way, save for them containing copies of the same value. We could do this:

```
set A = 3
set B = A
set B = 5
```

The variable 'A' would still contain the value '3', while 'B' would contain the value '5'.

## Expressions

We will see more about expressions in a moment, but it is perfectly possible to see code like this:

```
set A = 3 + 6
```

Here we calculate the result of the mathematical expression on the right hand side (which will be '9') and assign this to our variable named 'A'. We are not assigning the expression itself; 'A' will have no knowledge that there was ever a '3', a '6' or even the addition operator '+' involved in calculating its stored value, it only knows the result: '9'.

These expressions may even read from and write to the same variable:

```
set A = 3
set A = A + 1
```

In this example, we assign a variable named 'A' the value '3' as we have many times before. We then read the value in 'A', add 1 to it, and assign the result back into the variable 'A'. 'A' will now contain the value '4'. This is fundamentally the same as this:

```
set A = 3
set B = A + 1
set A = B
```

By reading from and assigning to 'A' directly in the first example we eliminate the need for the intermediate variable 'B'.

## Naming variables

Naming variables is important. Do not use single letter variable names as I have done above[^4] unless you are explicitly dealing with mathematical concepts where it might make sense (x, y, π). Use verbose and meaningful names as they will make your code easier to understand now, (and probably more importantly in twelve weeks time when you have forgotten how and why you chose that name).

```
set Temp = 88
```

'Temp' is a terrible name for a variable for example. Is it 'temporary' or 'temperature' or 'temporal'? Do you know now, and will you remember in six months time when you need to change the code and you're on a deadline and nothing is working right?

## Conclusion

We store different **type**s of **data** in **variables**. Variables have a **name**/**label**/**identifier** that lets us **assign** values to them, and this **name** allows us to **read** those values back again later, or change the value that is stored in the variable.

Variables are like a box with a label, that is like a slate, but also not quite either really.

[^1]: That one thing might be made up of lots of other things, but we'll gloss over that for now.
[^2]: The analogy works better if we're looking inside the box to see what's in there, but that's not how we described it initially.
[^3]: That one thing might be made up of lots of other things, but we'll gloss over that for now. Is there an echo in here?
[^4]: This will not be the last time I write 'do as I say, not as I do'.

## Quiz!

Check your knowledge from this section by answering the questions below. Click on the answer you believe to be correct for each question to see if you are <span class="correct explainer">right</span> or <span class="incorrect explainer">wrong</span>!

{% questions questions %}
