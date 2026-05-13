declare namespace ProductManagement {
  interface Product {
    id: string;
    brand: string;
    name: string;
    color: string;
    code: string;
    price: number;
    image?: string;
  }
}
