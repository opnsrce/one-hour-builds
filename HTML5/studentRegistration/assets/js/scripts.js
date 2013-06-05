function loadCamera() {
    'use strict';

    var canvas = document.getElementById("photo"),
        context = canvas.getContext("2d"),
        video = document.getElementById("video"),
        videoObj,
        errBack;

    videoObj = {
        "video": true
    };

    errBack = function(error) {
        console.log("Video capture error: ", error.code);
    };

    // Put video listeners into place
    if (navigator.getUserMedia) { // Standard
        navigator.getUserMedia(videoObj, function(stream) {
            video.src = stream;
            video.play();
        }, errBack);
    } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
        navigator.webkitGetUserMedia(videoObj, function(stream) {
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
        }, errBack);
    }

    video.addEventListener('canplay', function (e) { // Force the video to autoplay in Chrome
        video.style.display = video.style.display;
    });
    document.getElementById("snap").addEventListener("click", function() {
        context.drawImage(video, 0, 0, 100, 100);
        video.parentNode.removeChild(video);
        canvas.style.display = 'block';
    });
}

window.addEventListener('DOMContentLoaded', function(e) {
    'use strict';

    var form = document.getElementById('student_registration_form'),
        student,
        studentList = document.getElementById('student_list');

    form.addEventListener('submit', function(e) {
        e.cancelBubble = true;
        e.returnValue = false;

        if (e.preventDefault !== undefined) {
            e.preventDefault();
        }
        if (e.stopPropagation !== undefined) {
            e.stopPropagation();
        }

        student = new Student({
            firstName: document.getElementById('first_name').value,
            lastName: document.getElementById('last_name').value,
            age: document.getElementById('age').value,
            grade: document.getElementById('grade').value,
            photo: document.getElementById('photo').toDataURL("image/png")
        });

        if (student.save() !== true) {
            alert('Something went wrong while saving the record. Please try again');
        } else {
            alert('Student ' + student.firstName + ' ' + student.lastName + ' was saved successfully');
            form.reset();
            studentList.innerHTML += '<li>' + student.firstName + ' ' + student.lastName + '</li>';
        }
    }, false);
    loadCamera();
}, false);