import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private sendService:ProductsService, private router:Router) { }

  title;
  imageUrl;
  price;
  description;
  token;

  ngOnInit(): void {
    this.token=localStorage.getItem("token");
  }

  submitForm(){
    this.sendService.addProduct(this.title,this.price,this.imageUrl,this.description).subscribe((data:any)=>{
      alert(data.message);
   })
  }

  Login(){
    this.router.navigateByUrl("/login");
  }
}
