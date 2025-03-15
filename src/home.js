import restaurantHomeImage from "./home.jpg";

export default function loadHome() {
    const headingElement = document.createElement("h1");
    headingElement.textContent = "The Gilded Spoon Restaurant";

    const imageElement = document.createElement("img");
    imageElement.src = restaurantHomeImage;

    const headlineElement = document.createElement("h2");
    headlineElement.textContent = 'Indulge Your Senses at "The Gilded Spoon"';

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = "Welcome to The Gilded Spoon, where culinary artistry meets unparalleled ambiance.Our chefs craft exquisite dishes using only the freshest, locally-sourced ingredients, transforming each meal into a memorable experience.From the moment you step through our doors, you'll be enveloped in an atmosphere of warmth and elegance, perfect for a romantic dinner, a celebratory gathering, or a simple escape from the everyday.Discover a symphony of flavors and impeccable service at The Gilded Spoon – your table awaits.";

    const contentDiv = document.querySelector("#content");
    contentDiv.append(headingElement, imageElement, headlineElement, descriptionElement);
}