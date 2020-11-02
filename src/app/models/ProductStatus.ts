export enum ProductStatus {
    Active = 1,
    Inactive = 2 
  }
  
  export namespace ProductStatus {
  
    export function values() {
      return Object.keys(ProductStatus).filter(
        (type) => isNaN(<any>type) && type !== 'values'
      );
    }
  }