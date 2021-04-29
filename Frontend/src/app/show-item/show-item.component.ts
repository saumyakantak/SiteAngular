import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemDetail } from '../item-detail';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {

  productList: Product;
  res;
  res2;
  id:string;
  config:{"message":string;
          "post":{"id":number;
                  "title":string;
                  "price":number;
                  "imageUrl":string;
                  "description":string;
                  "createdAt":string;
                  "updatedAt":string;
                  "userId":number
                }
          }

  constructor(private productsService:ProductsService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.queryParamMap.get('id');

    this.productsService.viewProduct(this.id).subscribe((data:any)=> {
      
      this.res=JSON.stringify(data);
      this.config={
        message:data.message,
        post:data.post
      }
      this.res2=this.config.post;
      // alert(this.res);
    });
  }

}
