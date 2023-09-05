export class OrderItem {
  constructor(
    public costForOne: number,
    public itemCost: number,
    public name: string,
    public quantity: number
  ) {}
}
export class Price {
  constructor(
    public discount: number,
    public packingCost: number,
    public subTotal: number,
    public total: number
  ) {}
}
export class OrderData {
  constructor(
    public id: string,
    public imageId: string,
    public location: string,
    public orderDateTime: string,
    public paymentMode: string,
    public address: { from: string; to: string },
    public deliveryDateTime: string,
    public price: Price,
    public restaurant: string,
    public status: string,
    public orderItems: OrderItem[]
  ) {}
}
export class OrderResponseData {
  constructor(public orders: OrderData[], public total_orders: number) {}
}
