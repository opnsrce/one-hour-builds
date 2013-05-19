Table Sort
==============
The goal of this build project was learn more about the following concepts in JavaScript:

  * Accessing `data-` attributes of an HTML element using JavaScript (as opposed to jQuery)
  * Writing a sorting function that sorts an array of JSON objects by a common property (e.g., First Name).
  * Navigating the DOM using native JavaScript methods instead of jQuery (e.g., `parentNode` instead of `parent()`)
  * Creating new DOM elements using native JavaScript instead of jQuery.
  * How to efficiently remove all children from underneath an HTML element in the DOM.


Stats
------
  * **SLOC:** 97 (table.js)
  * **Dev Time:** 55 minutes 30 seconds

Requirements
------------

Create the following table and populate it with appropriate data:

| ID            | First Name    | Last Name  | City     | Age |
| ------------- |:-------------:| ----------:|--------: |:---:|
| 1             | John          | Smith      | Omaha    | 23  |
| 2             | Sarah         | Jane       | Elkhorn  | 45  |
| 3             | Mark          | Johnson    | La Vista | 38  |
| 4             | Eric          | Garnet     | San Jose | 18  |

The data provided is only meant to serve as an example. The final result does not need to match exactly. When a user clicks on any table header, the table's data should be sorted by the column header that was clicked.

Bonus Requirements
------------
Scale the number of records in the table up to twenty-thousand and keep the load and sort response times below five seconds.



Post Mortem
-----------

This project turned out to be a little more work than I anticipated. Setting up the project (creating the HTML table and loading the data from a JSON object) was rather straight forward. However, when it came time to sort the table data, I started to run into snags. For starters, I could not remember for the life of me what the property was called where an HTML element keeps its `data-` properties. For the record, it's `dataset` and you access it like this:

`myElement.dataset.propertyNameCamelCased`

When accessing a property, the name of the property has every hyphen translated into its appropriate camel-case value. For example, `my-first-property` becomes `myFirstProperty`.

The second snag I ran into was related to sorting the array when the user clicks on a header. When you call `array.sort` and pass in a function you want it to use, that function is meant to look something like this:

```javascript
function compare(a, b) {
  if (a is less than b by some ordering criterion)
     return -1;
  if (a is greater than b by the ordering criterion)
     return 1;
  // a must be equal to b
  return 0;
}
```

Now, the problem with this format is that it forces us to create a new sort function for each property we want to sort the data by. This is far from an ideal situation. I had to do some additional research but I was able to come up with an approach that allows for a single sort method to be used for all properties:

```javascript
function sortRoster(property) {
    'use strict';
    return function (a, b) {
        var sortStatus = 0;
        if (a[property] < b[property]) {
            sortStatus = -1;
        } else if (a[property] > b[property]) {
            sortStatus = 1;
        }

        return sortStatus;
    };
}
```