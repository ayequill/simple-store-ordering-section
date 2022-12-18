import { v4 as uuidv4 } from "https://jspm.dev/uuid";

export const productArray = [
    {
        name: "Air Jordan Mid",
        details: 'Mens Shoe',
        id: uuidv4 (),
        price: 120,
        img: "/img/jordan1Mid.webp"
    },
    {
        name: "Air Jordan 3 Retro",
        details: 'Women Shoe',
        price: 140,
        img: "/img/Air Jordan 3 Retro.webp",
        id: uuidv4 (),
    },
        {
        name: "Jordan Stay Loyal",
        details: 'Mens Shoe',
        price: 150,
        img: "/img/jordan stay loyal.webp",
        id: uuidv4 ()
    }
]
export const modal = document.querySelector('.modal');