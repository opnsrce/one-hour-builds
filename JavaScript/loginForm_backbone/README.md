Login Form
==============
The goal of this build project was learn more about the following concepts in Backbone.js:

TBD

Stats
------
  * **SLOC:** 55
  * **Dev Time:** 28m 7s

Requirements
------------
Create a form that allows a user to "login". The login form should have a two fields: "username" and "password" as well as a button labeled "login". When the user clicks the "login" button, the following should occur:

  * If the username is not equal to "user" and the password is not equal to "password", the system should display the following alert message:
    <blockquote>
    The username and password you entered is not valid.
    </blockquote>
  * If the username is equal to "user" and the password is equal to "password", the system should display the following alert message:
    <blockquote>
    The username and password you entered is valid.
    </blockquote>
  * If either the username or password field are blank, the system should not allow the login form to be submitted.

Post Mortem
-----------

This project was pretty straight forward. The only part that caused me any difficulty was when I attempted to bind a ``click`` event to the login button. I was having trouble getting the event to fire and that's because I forget to establish the ``el`` property of the login view. I needed to explicitly set this since I wasn't setting the template for the view. Once I set the property value, things started to work.