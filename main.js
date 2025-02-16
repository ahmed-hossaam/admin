document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".menu-toggle");
    const closeSidebarButton = document.querySelector(".close-sidebar");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("show");
    });

  
});

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn");

    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("show");
    });
});
