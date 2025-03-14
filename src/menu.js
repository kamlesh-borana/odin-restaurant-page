const menu = [
    {
        category: "Appetizers",
        items: [
            {
                name: "Bruschetta (3 pieces)",
                price: "$8",
            },
            {
                name: "Calamari",
                price: "$12",
            },
            {
                name: "Soup of the Day",
                price: "$6",
            },
        ],
    },
    {
        category: "Main Courses",
        items: [
            {
                name: "Grilled Salmon",
                price: "$22",
            },
            {
                name: "Steak Frites",
                price: "$28",
            },
            {
                name: "Vegetarian Pasta",
                price: "$18",
            },
        ],
    },
    {
        category: "Desserts",
        items: [
            {
                name: "Chocolate Lava Cake",
                price: "$10",
            },
            {
                name: "Crème brûlée",
                price: "$9",
            },
            {
                name: "Ice Cream",
                price: "$6",
            },
        ],
    },
    {
        category: "Drinks",
        items: [
            {
                name: "Soda",
                price: "$3",
            },
            {
                name: "Juice",
                price: "$4",
            },
            {
                name: "Coffee",
                price: "$3.50",
            },
            {
                name: "Tea",
                price: "$3",
            },
        ],
    },
];

export default function loadMenu() {
    const contentDiv = document.querySelector("#content");

    const headingElement = document.createElement("h1");
    headingElement.textContent = "Our Menu";

    const imageElement = document.createElement("img");
    imageElement.src = "https://images.unsplash.com/photo-1557499305-bd68d0ad468d?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    contentDiv.append(headingElement, imageElement);

    const menuContainerElement = document.createElement("div");
    menuContainerElement.classList.add("menu-container");

    menu.forEach((m) => {
        const menuCategoryContainerElement = document.createElement("div");
        const menuCategoryHeadingElement = document.createElement("h2");
        menuCategoryHeadingElement.textContent = m.category;

        const menuListElement = document.createElement("ul");
        m.items.forEach((item) => {
            const menuListItemElement = document.createElement("li");
            menuListItemElement.textContent = `${item.name} - ${item.price}`;

            menuListElement.appendChild(menuListItemElement);
        });

        menuCategoryContainerElement.append(menuCategoryHeadingElement, menuListElement);
        menuContainerElement.append(menuCategoryContainerElement);
    });

    contentDiv.append(menuContainerElement);
}