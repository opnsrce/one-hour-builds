var lastStudentId = 1;

function Student(studentInfo) {
    var studentObject = {
        id: lastStudentId++,
        firstName: studentInfo.firstName,
        lastName: studentInfo.lastName,
        age: studentInfo.age,
        grade: studentInfo.grade,
        photo: studentInfo.photo
    };

    studentObject.save = function() {

        try {
            localStorage.setItem('student' + this.id, JSON.stringify(this));
            successfulSave = true;
        } catch (e) {
            successfulSave = false;
        }

        return successfulSave;
    };

    return studentObject;
}

function loadCamera() {
    var canvas = document.getElementById("photo"),
        context = canvas.getContext("2d"),
        video = document.getElementById("video"),
        videoObj = {"video": true},

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

    video.addEventListener('canplay', function(e) {
        video.style.display = video.style.display;
    });
    document.getElementById("snap").addEventListener("click", function() {
    	context.drawImage(video, 0, 0, 150, 150);
        video.parentNode.removeChild(video);
    });
}

window.addEventListener('DOMContentLoaded', function(e) {
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