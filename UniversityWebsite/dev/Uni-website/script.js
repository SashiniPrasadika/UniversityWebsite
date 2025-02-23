document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            let courseList = document.getElementById("course-list");
            data.forEach(course => {
                let li = document.createElement("li");
                li.textContent = `${course.course} - ${course.duration}`;
                courseList.appendChild(li);
            });
        })
        .catch(error => console.error("Error:", error));
});
