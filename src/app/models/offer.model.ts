export class Price {
  constructor(public costPrice: number, public discountPrice: number) {}
}
export class OfferData {
  constructor(
    public available: boolean,
    public cloudinaryImageId: string,
    public deliveryTimeInMins: string,
    public name: string,
    public restaurant: string,
    public price: Price
  ) {}
}
export class OfferResponseData {
  constructor(public result: OfferData[]) {}
}
