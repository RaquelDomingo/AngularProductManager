import { Component } from '@angular/core';
import { ProductService } from './product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PPM - Project Product Manager';
  products;
	constructor(private _product: ProductService){
		this.products = this._product.getAllProducts();
	}
}
