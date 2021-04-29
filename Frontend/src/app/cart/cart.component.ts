import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList:Cart;
  res;
  res2;
  msg:{message:string};
  token;

  constructor(private cartService: CartService, private orderService:OrderService, private router:Router, private location:Location) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((data:Cart)=> {
      
      //alert(data);
      this.res=JSON.stringify(data.product);
      this.cartList={
        message:data.message,
        product: data.product
      }
      this.res2=this.cartList.product;
      // alert(this.res);
    });
    this.token=localStorage.getItem("token");
  }

  delCart(id){
    this.cartService.deleteCart(id).subscribe((resp)=>{

     })
    window.location.reload();
  }


  getOrder= function () {
    this.orderService.postOrder().subscribe((resp)=>{
          alert(JSON.stringify(resp));
        })
    setTimeout( ()=>{this.router.navigateByUrl('/order')}, 1500);
  };

  Login(){
    this.router.navigateByUrl("/login");
  }
}
