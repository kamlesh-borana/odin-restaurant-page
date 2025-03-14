export default function loadContact() {
    const headingElement = document.createElement("h1");
    headingElement.textContent = "Contact The Gilded Spoon";

    const imageElement = document.createElement("img");
    imageElement.src = "https://images.unsplash.com/photo-1536489318149-dc9f8920c4fd?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = "We'd love to hear from you!";

    const locationHeading = document.createElement("h2");
    locationHeading.textContent = "Our Location";

    const locationDescription = document.createElement("p");
    locationDescription.innerHTML = "123 Main Street<br>Anytown, USA 12345";

    const phoneHeading = document.createElement("h2");
    phoneHeading.textContent = "Phone";

    const phoneDescription = document.createElement("p");
    phoneDescription.textContent = "(555) 123-4567";

    const emailHeading = document.createElement("h2");
    emailHeading.textContent = "Email";

    const emailDescription = document.createElement("p");
    emailDescription.innerHTML = '<a href="mailto:info @thegildedspoon.com">info@thegildedspoon.com</a>';

    const openingHoursHeading = document.createElement("h2");
    openingHoursHeading.textContent = "Opening Hours";

    const openingHoursDescription = document.createElement("p");
    openingHoursDescription.innerHTML = "Monday - Saturday: 11:00 AM - 10:00 PM<br>Sunday: 12:00 PM - 9:00 PM";

    const contentDiv = document.querySelector("#content");
    contentDiv.append(headingElement, imageElement, descriptionElement, locationHeading, locationDescription, phoneHeading, phoneDescription, emailHeading, emailDescription, openingHoursHeading, openingHoursDescription);
}