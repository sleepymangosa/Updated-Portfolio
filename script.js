const darkBtn = document.getElementById("darkbtn");
const lightBtn = document.getElementById("lightbtn");

darkBtn.addEventListener("click", function() {
    document.body.classList.add("dark");
});

lightBtn.addEventListener("click", function() {
    document.body.classList.remove("dark");
});