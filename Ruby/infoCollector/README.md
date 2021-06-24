Info Collector
==============
The goal of this build project was to familiarize myself with the following concepts in Ruby:

  * Writing a command line application
  * Accepting user input from the command line
  * Conditional statements (`unless`)
  * Sanitizing user input (`chomp`, `strip`)
  * Outputing strings and variables to the command line

Stats:
------
  * **SLOC:** 33 Source Lines of Code
  * **Dev Time:** 30 minutes 17 seconds

Requirements
------------

Write a command-line ruby application that prompts the user to fill in the answers to the following questions:

   * What's your name?
   * How old are you (in years)?
   * What is your favorite color?
   * Who is your favorite author?

Once the user has answered the above questions, the program should output the following (including line breaks):

    Hello, [name]!

    Today, I learned the following things about you:
        - You are [age] years old.  
        - Your favorite color is [color].
        - Your favorite author is [author].

If any of the questions don't have an answer, the program should not output the respective sentence. If the user does not provide their name, the program should output "Hello, Stranger!"

Post Mortem
-----------

For this build, I did not have to do a ton of research as I developed it; it was pretty straight forward. Towards the end, however, I did run into a snag when checking whether or not a given variable was empty or not and had to search around for the answer. When the user choses to not answer a question and presses enter to move on, the `gets` command returns `nil` instead of an empty string like I was expecting. Because of this, I had to alter my initial approach and check to see if an answer was `nil` _or_ an empty string instead of just an empty string.
