import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Product;
  res;
  res2;
  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data:Product)=> {
      
      this.res=JSON.stringify(data.totalItems.rows);
      this.productList={
        message:data.message,
        //posts:data.posts,
        totalItems:data.totalItems
      }
      this.res2=this.productList.totalItems.rows;
      //alert(this.res);
    });
  }

addCart(id){
  this.cartService.postCart(id).subscribe((resp:Cart)=>{
    // alert(resp.message);
  })
}


}
