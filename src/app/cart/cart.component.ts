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
	total :number = 0;
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

  index=-1;
  
  loadCart(){
  	for(var i = 0 ; i < this.items.length ; i++){
  		if(this.items[i].product.id == this.id){
  			this.index = i;
  		}
  	}

  	if(this.index == -1){
  		this.items.push({
  				product: this.ps.getProductById(this.id),
				quantity: 1
			});
  		this.index=this.items.length-1;
  	}
  	else {
  		this.items[this.index].quantity+=1;
  	}
  	this.total+=this.items[this.index].product.price;
  	this.index = -1;
  	console.log(this.total);

  }
}