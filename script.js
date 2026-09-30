// MOBILE MENU
@media(max-width: 600px) {

    .gallery-grid {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }

    .photo1,
    .photo4 {
        grid-row: auto;
        grid-column: auto;
    }

    .gallery-photo {
        height: 280px;
    }
}


// SCROLL TO MENU

function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}


// SCROLL TO CONTACT

function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


// DISCOVER BUTTON

function showMessage() {

    alert(
        "Welcome to Velora Café ☕\n\n" +
        "Where coffee meets beautiful moments."
    );

}


// ORDER BUTTON

function orderNow() {

    alert(
        "☕ Weekend Special\n\n" +
        "Your order request has been received!\n" +
        "We'll contact you shortly."
    );

}


// RESERVATION

function reserveTable() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const people = document.getElementById("people").value;

    if (name === "" || email === "" || people === "") {

        alert("Please fill all the details.");

        return;
    }

    alert(
        "Reservation Request Sent! 🎉\n\n" +
        "Name: " + name + "\n" +
        "Guests: " + people + "\n\n" +
        "Thank you for choosing Velora Café."
    );

}


// CLOSE MOBILE MENU WHEN CLICKING LINK

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


// SIMPLE SCROLL ANIMATION

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


document
    .querySelectorAll(
        ".menu-card, .about-content, .about-image, .gallery-box, .contact-box"
    )
    .forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "all 0.8s ease";

        observer.observe(element);

    });
