export interface IOrder {
    id: number,
    companyId: 18,
    created: string,
    createdBy: string,
    paymentMethod: string,
    totalPrice: number,
    status: number,
    orderRows: IOrderRow[]
}
export interface IOrderRow {
    ProductId: number,
    Amount: number
}