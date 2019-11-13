import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CardItemComponent } from './card-item/card-item.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './card-item/card-item.reducer';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    AllItemsComponent,
    CartItemsComponent,
    CardItemComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    StoreModule.forRoot({ item: cartReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
