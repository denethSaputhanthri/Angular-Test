import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Customer{
  name:string;
  age:number;
  address:string;
}
@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  customer :Customer={
    name:'',
    age:0,
    address:'',
  }

  name:string="";

  Clickme(){
    alert("hii yaluwe")
  }

}
