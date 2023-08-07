"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const orderForm = {
    id: "c7eb7303-c53f-417d-8d51-cce67e5959e1",
    items: [
        {
            id: "1",
            image: "https://i.imgur.com/q9JJUlb.png",
            name: "Iphone 11",
            listPrice: faker_1.faker.commerce.price(100, 1000),
            price: faker_1.faker.commerce.price(100, 1000),
            shipping: {
                delivery: {
                    days: "1 dia",
                    value: faker_1.faker.commerce.price(10, 100)
                },
                pickup: true
            }
        },
        {
            id: "2",
            image: "https://i.imgur.com/jUCR6P9.png",
            name: "Playstation 5",
            listPrice: faker_1.faker.commerce.price(100, 1000),
            price: faker_1.faker.commerce.price(100, 1000),
            shipping: {
                delivery: {
                    days: "5 dias",
                    value: faker_1.faker.commerce.price(10, 100)
                },
                pickup: false
            }
        },
        {
            id: "3",
            image: "https://i.imgur.com/O3uVmfc.png",
            name: "Samsung Galaxy",
            listPrice: faker_1.faker.commerce.price(100, 1000),
            price: faker_1.faker.commerce.price(100, 1000),
            shipping: {
                delivery: {
                    days: "14 dias",
                    value: faker_1.faker.commerce.price(10, 100)
                },
                pickup: true
            }
        },
        {
            id: "4",
            image: "https://i.imgur.com/Jc9jIFC.png",
            name: 'Televisão 55"',
            listPrice: faker_1.faker.commerce.price(100, 1000),
            price: faker_1.faker.commerce.price(100, 1000),
            shipping: {
                pickup: true
            }
        },
        {
            id: "5",
            image: "https://i.imgur.com/RExG7WA.png",
            name: "Ventilador",
            listPrice: faker_1.faker.commerce.price(100, 1000),
            price: faker_1.faker.commerce.price(100, 1000),
            shipping: {
                delivery: {
                    days: "7 dias",
                    value: faker_1.faker.commerce.price(10, 100)
                },
                pickup: false
            }
        },
        {
            id: "6",
            image: "https://i.imgur.com/EeZS5OD.png",
            name: "Xbox 360",
            listPrice: faker_1.faker.commerce.price(100, 1000),
            price: faker_1.faker.commerce.price(100, 1000),
            shipping: {
                delivery: {
                    days: "5 dias",
                    value: faker_1.faker.commerce.price(10, 100)
                },
                pickup: true
            }
        },
        {
            id: "7",
            image: "https://i.imgur.com/EeZS5OD.png",
            name: "Xbox X",
            listPrice: faker_1.faker.commerce.price(100, 1000),
            price: faker_1.faker.commerce.price(100, 1000),
            shipping: {
                delivery: {
                    days: "2 dias",
                    value: faker_1.faker.commerce.price(10, 100)
                },
                pickup: false
            }
        }
    ]
};
const extendedWarranty = {
    methods: [
        {
            months: "12",
            value: faker_1.faker.commerce.price(100, 1000)
        },
        {
            months: "24",
            value: faker_1.faker.commerce.price(100, 1000)
        }
    ]
};
exports.default = { orderForm, extendedWarranty };
