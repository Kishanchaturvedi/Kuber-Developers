$(document).ready(() => {


    var blog = new Swiper(".blog-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var gallary1 = new Swiper(".gallary-swiper-1", {
        loop: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        speed: 3000,
        slidesPerView: "auto",
        spaceBetween: 15,
        direction: 'horizontal',

    });

    var gallary2 = new Swiper(".gallary-swiper-2", {
        loop: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        speed: 3000,
        slidesPerView: "auto",
        spaceBetween: 15,
        direction: 'horizontal',

    });

})


function openNav(){
    document.getElementById("mobileNav").classList.toggle('open-nav')
    document.getElementById("navOverlay").classList.toggle('d-none')
}
function closeNav(){
    document.getElementById("mobileNav").classList.toggle('open-nav')
    document.getElementById("navOverlay").classList.toggle('d-none')
}

// form validation
$(document).ready(function () {
    $("#myForm").submit(function (event) {
        event.preventDefault();

        var isValid = true;

        // Validate name
        if ($("#inputName").val().trim() === "") {
            $("#nameError").show();
            isValid = false;
        } else {
            $("#nameError").hide();
        }

        // Validate phone
        if ($("#inputPhone").val().trim() === "") {
            $("#phoneError").show();
            isValid = false;
        } else {
            $("#phoneError").hide();
        }

        // Validate email
        var email = $("#inputEmail").val().trim();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email === "" || !emailPattern.test(email)) {
            $("#emailError").show();
            isValid = false;
        } else {
            $("#emailError").hide();
        }

        if (isValid) {
            alert("Form submitted successfully!");
            // Perform form submission or AJAX request here
        }
    });
});

