import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() currentProducts: Food;

  constructor() { }

  ngOnInit() {
  }

}
