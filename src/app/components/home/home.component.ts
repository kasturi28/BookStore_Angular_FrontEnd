import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  add:String="Add to Cart";

  ngOnInit(): void {
  }

  onClickAdd(){
    this.add="Added"
    alert("Added to cart Successfully");


}
}