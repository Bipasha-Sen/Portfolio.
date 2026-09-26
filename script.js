/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", () => {

    const preloader =
        document.querySelector(".preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 700);

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


function updateNavigation() {

    let current =
        "home";


    sections.forEach((section) => {

        const top =
            section.offsetTop - 180;

        const bottom =
            top + section.offsetHeight;


        if (
            window.scrollY >= top &&
            window.scrollY < bottom
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateNavigation
);


updateNavigation();


/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const target =
            document.querySelector(
                link.getAttribute("href")
            );


        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =====================================================
   CURSOR GLOW
===================================================== */

const cursorGlow =
    document.querySelector(".cursor-glow");


window.addEventListener(
    "mousemove",
    (event) => {

        if (!cursorGlow) return;


        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


/* =====================================================
   PROFILE PARALLAX
===================================================== */

const profile =
    document.querySelector(".profile-wrapper");


if (window.innerWidth > 1000) {

    window.addEventListener(
        "mousemove",
        (event) => {

            if (!profile) return;


            const x =
                (window.innerWidth / 2 -
                    event.clientX) / 100;


            const y =
                (window.innerHeight / 2 -
                    event.clientY) / 100;


            profile.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );

}


/* =====================================================
   BUTTON MICRO INTERACTION
===================================================== */

const buttons =
    document.querySelectorAll(
        ".hero-button, .contact-button"
    );


buttons.forEach((button) => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.letterSpacing =
                "0.3px";

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.letterSpacing =
                "normal";

        }
    );

});