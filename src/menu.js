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
    contentDiv.appendChild(headingElement);

    menu.forEach((m) => {
        const menuCategoryHeadingElement = document.createElement("h2");
        menuCategoryHeadingElement.textContent = m.category;

        const menuListElement = document.createElement("ul");
        m.items.forEach((item) => {
            const menuListItemElement = document.createElement("li");
            menuListItemElement.textContent = `${item.name} - ${item.price}`;

            menuListElement.appendChild(menuListItemElement);
        });

        contentDiv.append(menuCategoryHeadingElement, menuListElement);
    });
}