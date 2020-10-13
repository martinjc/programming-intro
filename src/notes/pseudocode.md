---
layout: page
order: 7
title: Pseudocode and Comments
---

## Pseudocode

So far, we've seen examples of programming, but these aren't a real programming language. They borrow bits and pieces from real programming languages, and are simplified slightly from a real programming language. They're not really code, they're a sort-of code.

Writing in pseudocode can be helpful. It allows us to problem solve without getting caught up in language specifics, and to think about generic programming ideas and structures rather than details.

There are no real syntax/grammar rules for pseudocode. We write our instructions for what we want to accomplish in something between plain English and the programming language we intend to use.

Pseudocode and comments might be interchangeable.

We iterate our design, moving from pseudocode to real code on each iteration.

## Commenting

We have already mentioned the idea of writing clear code - we discussed the idea that variables should be named appropriately. This applies to all the times we get to name something in our code.

We can also add comments to our code. These are additions to our code that are not run, but are included for us as authors/readers to help us understand the intention (the why) of the code. We don't comment what the code is doing, in an ideal world this is clear from the code itself.

Comments are usually denoted by a particular marker or symbol

-   // or /_ … _/ or # or <!-- ->

This depends on the language we're writing in.

We can write single small comments in a line of code, or larger comments about entire sections. There are also documentation comments (doc comments) and tests as documentation.

```
set B = 3
set A = 5
// A needs to match B for reasons
while A > B
   print(A)
   set A = A - 1
```
