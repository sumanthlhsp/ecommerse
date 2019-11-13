import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent implements OnInit {

  items: any = [];
  isLoading = true;
  count = 0;

  constructor(private http: HttpClient, private store: Store<{item: any}>) { 
    store.pipe(select('item')).subscribe(data => {
      this.count = data.length;
    });
  }

  ngOnInit() {
    this.http.get("https://api.myjson.com/bins/qhnfp").subscribe(data => {
      this.items = data;
      this.items[0].discount = '';
      this.isLoading = false;
    })
  }

}
