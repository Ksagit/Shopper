export interface Price {
  main: number;
  fractional: number;
}

export interface Product {
  id: number;
  name: string;
  price: Price;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products = [
  {
    id: 1,
    name: "Banany BIO",
    price: {
      main: 3,
      fractional: 49,
    },
  },
  {
    id: 2,
    name: "Mleko 3.2%",
    price: {
      main: 2,
      fractional: 89,
    },
  },
  {
    id: 3,
    name: "Chleb Żytni",
    price: {
      main: 4,
      fractional: 15,
    },
  },
  {
    id: 4,
    name: "Jaja 6 sztuk",
    price: {
      main: 6,
      fractional: 99,
    },
  },
  {
    id: 5,
    name: "Łosoś wędzony",
    price: {
      main: 5,
      fractional: 20,
    },
  },
];
