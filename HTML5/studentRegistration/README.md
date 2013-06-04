StudentRegistration
==============
The goal of this build project was learn more about the following concepts in JavaScript and HTML5:

* How to access the built in webcam of a computer using the camera API.
* How to convert the `canvas` tag into an `img` tag.
* How to capture an image from a video stream.
* How to specify a field as required using HTML5's `required` attribute in a form field.
* How to store objects via the `localstorage` API.


Stats
------
  * **SLOC: 93 (scripts.js)**
  * **Dev Time: 58 Minutes 48 Seconds**

Requirements
------------
Write an application designed to be used by a the Student Registration department of a local high school. The application should allow a staff member to capture the following information about the student via a simple web form:

* First Name
* Last Name
* Grade
* Age

All form fields are required and the Grade and the Age fields should only accept numeric values.

In addition to the above information, the system should also allow the staff member to take a photograph of the student for use on the student's ID card. For the purposes of this project, assume the computer accessing the application has an external webcam attached to it that is facing the student being registered.

Once the staff member has entered all the student's information, they should be to save the information for later retrieval. The system should display a list of all students that have been registered on that particular machine.

Post Mortem
-----------
The interesting thing about this project was how a good majority of the allotted time was taken up simply by the _amount_ of code that had to be written as opposed to the complexity. Maybe it's a sign I need to learn to type faster.

Other than scale, the other area I struggled with (albeit briefly) was the `student` object. When I first coded it, I had the `save` method attempting to convert the object literal `studentObject` into JSON string while said object contained references to `this`. Apparently, this causes an interesting error in the console:

<blockquote>
TypeError: Converting circular structure to JSON
</blockquote>

This turns out to be the programming equivalent of the snake eating its own tail.

One thing I was _not_ able to accomplish within the time limit was a proper styling of the form and its associated elements. I hope to remedy this in the redux branch.