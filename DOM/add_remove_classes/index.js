var mainHeading = document.getElementById("main-heading");

var btn = document.getElementById("btn-click");

var sidebar = document.getElementById("sidebar");

var toggleBtn = document.getElementById("toggle-icon");


mainHeading.classList.add("big");


toggleBtn.addEventListener("click", function () {
    if (sidebar.classList.contains("show")) {
        sidebar.classList.remove("show");
        sidebar.classList.add("hide");
    }
    else {
        sidebar.classList.add("show");
        sidebar.classList.remove("hide");
    }

});


// I add this for practice
btn.addEventListener("click", function () {
    if (mainHeading.classList.contains("big")) {
        mainHeading.classList.remove("big");
        mainHeading.classList.add("hide");
    }
    else {
        mainHeading.classList.remove("hide");
        mainHeading.classList.add("big");
    }
});
