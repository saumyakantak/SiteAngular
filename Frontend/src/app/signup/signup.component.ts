import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  config: { message: string; id: number; };

  constructor(private sendService:AuthService) { }

  name;
  email;
  password;

  ngOnInit(): void {
  }

  submitForm(){ 
    this.sendService.Signup(this.name, this.email,this.password).subscribe((data:any)=>{
      this.config={
        message:data.message,
        id:data.userId
      }
      alert(JSON.stringify(this.config.message));
    })
    
  }

}
