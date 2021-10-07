import { Injectable } from '@angular/core';
import { IProduct } from './products/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: IProduct[] = [];
  constructor() { }
}
