const darkMode = document.querySelector(".dropdownItemDark"); 
const lightMode = document.querySelector(".dropdownItemLight");
const card1Theme = document.querySelector(".card1Theme");
const card2Theme = document.querySelector(".card2Theme");
const card3Theme = document.querySelector(".card3Theme");
const h1Theme = document.querySelector(".h1Theme");
const bgTheme = document.querySelector(".container-fluid");
const navbarDark = document.querySelector(".navbarDark");
const navbarLight = document.querySelector(".navbarLight");
const card1HeaderTheme = document.querySelector(".card1HeaderTheme");
const card2HeaderTheme = document.querySelector(".card2HeaderTheme");
const card3HeaderTheme = document.querySelector(".card3HeaderTheme");
const card1TextTheme = document.querySelector(".card1TextTheme");
const card2TextTheme = document.querySelector(".card2TextTheme");
const card3TextTheme = document.querySelector(".card3TextTheme");

darkMode.addEventListener("click", () => {
    if (navbarDark.className = "navbar navbarDark navbarLight bg-primary navbar-expand-lg bg-body-primary fixed-top primary") {
        navbarDark.className = "navbar navbarDark navbarLight bg-primaryDark navbar-expand-lg bg-body-primary fixed-top primary"
    }
    if (bgTheme.className = "container-fluid p-0 bg-light") {
        bgTheme.className = "container-fluid p-0 bg-dark"
    }
    if (h1Theme.className = "mt-5 text-center h1Theme text-dark") {
        h1Theme.className = "mt-5 text-center h1Theme text-light"
    }
    if (card1Theme.className = "card1Theme card text-center border-primary mb-3 bg-light") {
        card1Theme.className = "card1Theme card text-center border-primary mb-3 bg-dark"
    }
    if (card2Theme.className = "card2Theme card text-center border-success mb-3 bg-light") {
        card2Theme.className = "card2Theme card text-center border-success mb-3 bg-dark"
    }
    if (card3Theme.className = "card3Theme card text-center border-warning mb-3 bg-light") {
        card3Theme.className = "card3Theme card text-center border-warning mb-3 bg-dark"
    }
    if (card1HeaderTheme.className = "card1HeaderTheme card-header border-primary mb-3 fs-2 text-dark") {
        card1HeaderTheme.className = "card1HeaderTheme card-header border-primary mb-3 fs-2 text-light"
    }
    if (card2HeaderTheme.className = "card2HeaderTheme card-header border-success mb-3 fs-2 text-dark") {
        card2HeaderTheme.className = "card2HeaderTheme card-header border-success mb-3 fs-2 text-light"
    }
    if (card3HeaderTheme.className = "card3HeaderTheme card-header border-warning mb-3 fs-2 text-dark") {
        card3HeaderTheme.className = "card3HeaderTheme card-header border-warning mb-3 fs-2 text-light"
    }
    if (card1TextTheme.className = "card1TextTheme card-text text-dark") {
        card1TextTheme.className = "card1TextTheme card-text text-light"
    }
    if (card2TextTheme.className = "card2TextTheme card-text text-dark") {
        card2TextTheme.className = "card2TextTheme card-text text-light"
    }
    if (card3TextTheme.className = "card3TextTheme card-text text-dark") {
        card3TextTheme.className = "card3TextTheme card-text text-light"
    }
});

lightMode.addEventListener("click", () => {
    if (navbarDark.className = "navbar navbarDark navbarLight bg-primaryDark navbar-expand-lg bg-body-primary fixed-top primary") {
        navbarDark.className = "navbar bg-primary navbar-expand-lg bg-body-primary fixed-top primary"
    }
    if (bgTheme.className = "container-fluid p-0 bg-dark") {
        bgTheme.className = "container-fluid p-0 bg-light"
    }
    if (h1Theme.className = "mt-5 text-center h1Theme text-light") {
        h1Theme.className = "mt-5 text-center h1Theme text-dark"
    }
    if (card1Theme.className = "cardTheme card text-center border-primary mb-3 bg-dark") {
        card1Theme.className = "cardTheme card text-center border-primary mb-3 bg-light"
    }
    if (card2Theme.className = "card2Theme card text-center border-success mb-3 bg-dark") {
        card2Theme.className = "card2Theme card text-center border-success mb-3 bg-light"
    }
    if (card3Theme.className = "card3Theme card text-center border-warning mb-3 bg-dark") {
        card3Theme.className = "card3Theme card text-center border-warning mb-3 bg-light"
    }
    if (card1HeaderTheme.className = "card1HeaderTheme card-header border-primary mb-3 fs-2 text-light") {
        card1HeaderTheme.className = "card1HeaderTheme card-header border-primary mb-3 fs-2 text-dark"
    }
    if (card2HeaderTheme.className = "card2HeaderTheme card-header border-success mb-3 fs-2 text-light") {
        card2HeaderTheme.className = "card2HeaderTheme card-header border-success mb-3 fs-2 text-dark"
    }
    if (card3HeaderTheme.className = "card3HeaderTheme card-header border-warning mb-3 fs-2 text-light") {
        card3HeaderTheme.className = "card3HeaderTheme card-header border-warning mb-3 fs-2 text-dark"
    }
    if (card1TextTheme.className = "card1TextTheme card-text text-light") {
        card1TextTheme.className = "card2TextTheme card-text text-dark"
    }
    if (card2TextTheme.className = "card2TextTheme card-text text-light") {
        card2TextTheme.className = "card2TextTheme card-text text-dark"
    }
    if (card3TextTheme.className = "card3TextTheme card-text text-light") {
        card3TextTheme.className = "card2TextTheme card-text text-dark"
    }
})





