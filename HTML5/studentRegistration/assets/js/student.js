var Student = (function() {
    'use strict';

    var lastStudentId = 1,
        S;

    S = function(studentInfo) {
        this.id = lastStudentId;
        this.firstName = studentInfo.firstName;
        this.lastName = studentInfo.lastName;
        this.age = studentInfo.age;
        this.grade = studentInfo.grade;
        this.photo = studentInfo.photo;

        lastStudentId += 1;
    };

    S.prototype = {
        constructor: S,
        save: function() {
            var successfulSave = false;
            try {
                localStorage.setItem('student' + this.id, JSON.stringify(this));
                successfulSave = true;
            } catch (e) {
                successfulSave = false;
            }

            return successfulSave;
        }
    };

    return S;
}());