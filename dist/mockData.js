"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderForm = {
    id: "c7eb7303-c53f-417d-8d51-cce67e5959e1",
    items: [
      {
        id: "1",
        image: "https://i.imgur.com/q9JJUlb.png",
        name: "Iphone 11",
        listPrice: "999.00",
        price: "979.00",
        shipping: {
          delivery: {
            days: "1 dia",
            value: "9.70"
          },
          pickup: true
        }
      },
      {
        id: "2",
        image: "https://i.imgur.com/jUCR6P9.png",
        name: "Playstation 5",
        listPrice: "1999.00",
        price: "1859.00",
        shipping: {
          delivery: {
            days: "5 dias",
            value: "19.00"
          },
          pickup: false
        }
      },
      {
        id: "3",
        image: "https://i.imgur.com/O3uVmfc.png",
        name: "Samsung Galaxy",
        listPrice: "349.00",
        price: "329.00",
        shipping: {
          delivery: {
            days: "14 dias",
            value: "1.50",
          },
          pickup: true
        }
      },
      {
        id: "4",
        image: "https://i.imgur.com/Jc9jIFC.png",
        name: 'Televisão 55"',
        listPrice: "999.00",
        price: "914.00",
        shipping: {
          pickup: true
        }
      },
      {
        id: "5",
        image: "https://i.imgur.com/RExG7WA.png",
        name: "Ventilador",
        listPrice: "19.00",
        price: "17.99",
        shipping: {
          delivery: {
            days: "7 dias",
            value: "2.90",
          },
          pickup: false
        }
      },
      {
        id: "6",
        image: "https://i.imgur.com/EeZS5OD.png",
        name: "Xbox 360",
        listPrice: "199.00",
        price: "170.00",
        shipping: {
          delivery: {
            days: "5 dias",
            value: "10.00"
          },
          pickup: true
        }
      },
      {
        id: "7",
        image: "https://i.imgur.com/EeZS5OD.png",
        name: "Xbox X",
        listPrice: "2999.00",
        price: "2399.00",
        shipping: {
          delivery: {
            days: "2 dias",
            value: "7.00"
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
            value: "19.00",
        },
        {
            months: "24",
            value: "29.00",
        }
    ]
};
exports.default = { orderForm, extendedWarranty };
