```javascript
// Mobile Navigation

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// Close mobile menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navMenu").classList.remove("active");

    });

});


// Table Reservation

function reserveTable() {

    const name = document.getElementById("name").value;
    const people = document.getElementById("people").value;
    const date = document.getElementById("date").value;

    if (name === "" || people === "" || date === "") {

        alert("Please fill in all the details.");

        return;

    }

    alert(
        "Thank you, " + name +
        "! Your table for " + people +
        " people has been requested."
    );

}
```
