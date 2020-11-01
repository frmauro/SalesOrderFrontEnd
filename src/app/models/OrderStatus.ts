export enum OrderStatus{
    WAITING_PAYMENT = 1,
    PAID = 2,
    SHIPPED = 3,
    DELIVERED = 4,
    CANCELED = 5
}


export namespace OrderStatus {

    export function values() {
      return Object.keys(OrderStatus).filter(
        (type) => isNaN(<any>type) && type !== 'values'
      );
    }
  }