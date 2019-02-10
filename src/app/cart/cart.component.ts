import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../product';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
	items: Item[] = [];
	total: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
  		      private ps: ProductsService) { }
  ngOnInit() { 
  	this.activatedRoute.params.subscribe(params =>{
		let index:number = -1;
  		var id:number= params['id'];
  		let cart = [];		
  		var item:Item =	{		
  		  		product: this.ps.getProductById(id),
				quantity: 1
			}
		
		if(localStorage.getItem('cartstore')!=null){  			
  			cart = JSON.parse(localStorage.getItem('cartstore'));
   			
   			index = -1;
  			for(var i = 0 ; i < cart.length ; i++){
  				if(cart[i].product.id == id){
  					index = i;
  				}
  			}	
  		}
  		if(index == -1){ 
  			cart.push(item);
  		}
   		else{
  			item = cart[index];
  			item.quantity+=1;
  			cart[index]=item;
  		}	
  		localStorage.setItem("cartstore",JSON.stringify(cart))
  		this.loadCart();
  	})
  }
  
  loadCart(){
  	this.total = 0;
  	this.items = [];
	let cart:any[] = JSON.parse(localStorage.getItem('cartstore'));
	for (var i = 0; i < cart.length; i++) {
			let item = cart[i];
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += item.product.price * item.quantity;
		}
  }
}