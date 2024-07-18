export interface Iproduct {
    _id?: string
    imgSrc: string
    fileKey: string
    name: string
    price: {amount: number, currency: string}
    category: string
    quantity: number
    reviews: {
      rating: number
      count: number
    }
  }