import { Component, OnInit } from '@angular/core';

import { Food } from '../food';
import { PRODUCTS } from '../mock-food';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  bestFood: Food = {
    name: "Power Food",
    color: "red",
    quantity: 20,
    quality: 20
  };
  allProducts: Food[] = PRODUCTS;
  currentFood: Food;
  selectFood(product: Food) {
    this.currentFood = product;
  }



  constructor() { }

  ngOnInit() {
  }

}
