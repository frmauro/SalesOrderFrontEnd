export enum OrderStatus{
    WAITING_PAYMENT = "WAITING_PAYMENT",
    PAID = "PAID",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELED = "CANCELED"
}


export namespace OrderStatus {

    export function values() {
      return Object.keys(OrderStatus).filter(
        (type) => isNaN(<any>type) && type !== 'values'
      );
    }
  }