#Module Madness
In this challenge, you will need to spin up a new project (much like we did in lecture). You will create three modules as specified below, create an app.js that will use these modules, and finally, test your work via curl!

Modules
Module One

The first module will export a function that returns a random number after taking in a min and max value as arguments (hint: you can use random number functions from previous assignments). When you call this module, use 100 as your min, and 1000000 as your max.

Module Two

The second module should accept a number and convert it to a USD value.

HINT: You will want to Google examples of this. I found a couple reasonable examples of this in a simple 5-minute search.

Module Three

The third module should require the other two modules (i.e. Module One and Module Two). It should have two function exports:

The first function export should return the result of the first module being passed into the second module.
The second function export should return the text “Account balance: \n”.
app.js
Finally, in the app.js

set up a server,
write a 200 head, and
use res.write to send a message that concatenates the results from the third module, but formatted to provide the user with a dollar amount (see Success below for an example of what this will look like).
Success?
In the end, you terminal should produce the below result when you curl localhost:3000.

Account balance:
$156,301
