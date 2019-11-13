import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { addItem } from './card-item.action';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() item;
  constructor(private store: Store<{item: any}>) {}


  addToCart(item) {
    this.store.dispatch(addItem({item: item}));
  }

  ngOnInit() {
  }

}
