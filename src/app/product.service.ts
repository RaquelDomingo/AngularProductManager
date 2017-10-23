import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
	products  = [{title: 'Camera', price:499, url:'../../assets/dslr.png'}];
  constructor() { }
  createItem(product){
  	this.products.push(product);
  }
  getAllProducts(){
    return this.products;
  }
  delete(i){
    this.products.splice(i,1);
    return this.products;
  }
  getSingleProduct(index){
    return [this.products[index]];
  }
  updateProduct(product, index){
    this.products[index] = product;
  }
}