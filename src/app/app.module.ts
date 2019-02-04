import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { AProductsComponent } from './admin/aproducts/aproducts.component';
import { UProductsComponent } from './user/uproducts/uproducts.component';
import { UProductDetailsComponent } from './user/uproduct-details/uproduct-details.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    CartComponent,
    AProductsComponent,
    UProductsComponent,
    UProductDetailsComponent,
    EditProductComponent,
    AddProductComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
