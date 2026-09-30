```javascript
// ================= NAVIGATION =================

function toggleMenu() {

    const nav = document.getElementById("nav");

    nav.classList.toggle("active");

}


// Close mobile navigation when clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("nav").classList.remove("active");

    });

});


// ================= MENU FILTER =================

const filters = document.querySelectorAll(".filter");

const foodCards = document.querySelectorAll(".food-card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        // Remove active class
        filters.forEach(button => {
            button.classList.remove("active");
        });

        // Add active class
        filter.classList.add("active");

        const category = filter.dataset.filter;


        foodCards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ================= HEART BUTTON =================

const hearts = document.querySelectorAll(".heart");


hearts.forEach(heart => {

    heart.addEventListener("click", () => {

        heart.classList.toggle("liked");

        if (heart.classList.contains("liked")) {

            heart.innerHTML = "♥";

        } else {

            heart.innerHTML = "♡";

        }

    });

});


// ================= RESERVATION =================

const modal = document.getElementById("reservationModal");


function openReservation() {

    modal.classList.add("show");

}


function closeReservation() {

    modal.classList.remove("show");

}


// Close modal when clicking outside

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        closeReservation();

    }

});


// ================= RESERVATION SUBMIT =================

function submitReservation() {

    const name =
        document.getElementById("customerName").value;

    const phone =
        document.getElementById("customerPhone").value;

    const date =
        document.getElementById("reservationDate").value;

    const guests =
        document.getElementById("guestCount").value;


    if (
        name === "" ||
        phone === "" ||
        date === "" ||
        guests === ""
    ) {

        alert("Please fill in all the details.");

        return;

    }


    alert(
        "Thank you, " +
        name +
        "! Your table request for " +
        guests +
        " on " +
        date +
        " has been received."
    );


    closeReservation();

}


// ================= SCROLL REVEAL =================

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


document
    .querySelectorAll(
        ".food-card, .review-card, .feature, .story-content"
    )
    .forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity .7s ease, transform .7s ease";

        observer.observe(element);

    });


// Add visible class styling dynamically

const style = document.createElement("style");

style.innerHTML = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(style);
```
