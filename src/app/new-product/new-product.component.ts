import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'; 

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
	product = {
		title: "",
		price: 0,
		url: ""
	}
  constructor(private _product: ProductService) { }

  ngOnInit() {
  }

  createNewItem(){
  	this._product.createItem(this.product);
  	this.product = {
			title: "",
			price: 0,
			url: ""
		}
  }
}
