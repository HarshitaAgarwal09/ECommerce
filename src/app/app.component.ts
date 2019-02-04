import { Component, OnInit } from '@angular/core';
import {ProductsService} from './products.service';
import{IProduct} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ecom';
  products:IProduct[];
  constructor(private ps: ProductsService){
  }
  ngOnInit() {
  	this.products = this.ps.getProducts();
  	console.log(this.products);
  }
 getProductById(id:number){

 } 

}