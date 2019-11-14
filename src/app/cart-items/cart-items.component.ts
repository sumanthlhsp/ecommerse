import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { removeItem, removeAll, addItem } from '../card-item/card-item.action';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  noItems = false;
  cartItems = [];
  groupedItems = [];

  getIndex(name) {
    return this.groupedItems.findIndex((v) => v.item.name == name);
  }


  getCount(name) {
    let items = this.cartItems.filter(c => c.item.name == name);
    return items.length;
  }

  getPrice(cart) {
    const count = this.getCount(cart.item.name);
    // const price = cart.item.price - cart.item.price * (cart.item.discount / 100);
    return cart.item.price * count;
  }

  getDiscountedPrice(cart){
    const count = this.getCount(cart.item.name);
    const price = cart.item.price - cart.item.price * (cart.item.discount / 100);
    return price * count;
  }

  getTotalPrice(){
    let price = 0;
    this.groupedItems.forEach(c => {
      price += this.getPrice(c)
    });
    return price;
  }

  getTotalDiscount(){
    const price = this.getFinalPrice();
    const total = this.getTotalPrice();
    return total - price;
  }

  getFinalPrice(){
    let price = 0;
    this.groupedItems.forEach(c => {
      price += this.getDiscountedPrice(c)
    });
    return price
  }

  constructor(private store: Store<{ item: any }>) {
    store.pipe(select('item')).subscribe(data => {
      this.cartItems = data;
      this.groupedItems = [];
      data.forEach(v => {
        if (this.getIndex(v.item.name) < 0) {
          this.groupedItems.push({ ...v });
        }
      });
      this.noItems = (this.cartItems.length == 0);
    });
  }

  removeItem(name) {
    this.store.dispatch(removeItem({ item: name }));
  }

  addItem(item){
    this.store.dispatch(addItem({ item: item }));
  }

  removeAll(name) {
    this.store.dispatch(removeAll({ item: name }));
  }

  ngOnInit() {

  }

}
