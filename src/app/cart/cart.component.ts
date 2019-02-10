import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute } from '@angular/router';
import {IProduct} from '../product';
import {ProductsService} from '../service/products.service';

@Component({

  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	items: Item[] = [];
	total :number =0;
	item:Item;
  	id:number;
 	
  constructor(private activatedRoute: ActivatedRoute,
  		      private ps:ProductsService) { }
  ngOnInit() { 
  	this.activatedRoute.params.subscribe(params =>{
  		this.id = params['id'];	
  		this.loadCart();
  	})
  }

  foo=false;
  
  loadCart(){
  	for(var i = 0 ; i < this.items.length ; i++){
  		if(this.items[i].product.id == this.id){
  			this.items[i].quantity+=1;
  			this.foo = true;
 		 	console.log(this.items[i]);

  		}
  	}
  	if(this.foo==false){
  		this.items.push({
  				product: this.ps.getProductById(this.id),
				quantity: 1
			});
  		console.log(this.foo);
  	}
  	console.log(this.items);
  }
}