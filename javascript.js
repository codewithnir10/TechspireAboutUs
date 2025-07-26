window.onload = function() {
    alert("Welcome to Techspire College! Explore and learn more about us.");
};


const highlights = document.querySelectorAll('.highlights div');

highlights.forEach(function(box) {
    box.style.cursor = "pointer";
    box.addEventListener('click', function() {
        box.classList.toggle('active-highlight');
    });
});


const footer = document.querySelector('footer');
footer.style.cursor = "pointer";
footer.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});