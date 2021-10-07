import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { IProduct } from "../products/product";
import { ProductService } from "../products/product.service";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
  })
  export class CartComponent implements OnInit {

    constructor(private cart: CartService, private data: ProductService) { }
    cartItems: IProduct[]=[];
    ngOnInit() {
      this.cartItems = this.cart.cartItems;
    }
    remove(indx:any) {
      this.cart.cartItems.splice(indx, 1);
    }
    checkOut() {
      
    }
  
  }
  