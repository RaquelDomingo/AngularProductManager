import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
	product;
	index;
  constructor(private _product: ProductService,private _route: ActivatedRoute ) {
  	this._route.paramMap
  		.switchMap( params => {
  			this.index = params.get('spicy');
  			return this._product.getSingleProduct(params.get('spicy'));
  		})
  		.subscribe(data => { this.product = data })
  }

  ngOnInit() {
  }
  confirmEdit(){
  	this._product.updateProduct(this.product, +this.index)
  }
  deletethis(){
  	this._product.delete(+this.index);
  }

}
