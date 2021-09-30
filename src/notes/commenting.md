---
layout: page
order: 7
title: Commenting
---

{% panopto "ceca15cf-4efa-4e88-9c1f-adb300fbaf14" %}

We have already discussed the need to give our variables **meaningful** names so that we, the humans who will read the code can make sense of what the code is trying to do. This is true whenever we are allowed to name something in a program: we should name it in such a way as to add more clarity to the code about its purpose and function.

Writing clear code makes our future selves happy. When we return to a piece of code six months down the line, if it is plainly written and understandable we can update it, adapt it and maintain it with a miniumum of effort.

We have another tool in our toolbox to help with making our code understandable: **commenting**.

Comments are tiny statements of code that are not compiled or run by the machine. They are there purely for the benefit of the reader. We denote them using a particular marker or set of markers, depending on the programming language. We can write small comments about a single line of code, or larger block comments about entire sections of code.

It is important to note that we should focus on commenting **why** our code works a certain way. The **what** should be understandable from reading the code. A good rule of thumb here is that if when reading your code you think it needs a comment to explain **what** the code is doing, that is a good sign that the code is too complicated and needs breaking down or simplifying in some way. This is the notion of self-documenting code: code that is so clear and readable that we can quickly see what it is doing and need no further explanations. If our code is this straighforward, all we need to do is document with comments the **why**, the reasons that we have implemented code in a certain way.

You should also look at the concepts of document comments - comments that are written within code and automtically extracted to form the documentation for the code (these may often contain more of the **what** than ordinary comments), and you may also be interested to read about the concepts of 'tests as documentation', or using tests for your code to show the purpose and functionality of your code. We'll look at these topics further in future.
