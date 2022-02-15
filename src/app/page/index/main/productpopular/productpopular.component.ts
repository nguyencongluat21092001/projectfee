import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-productpopular',
  templateUrl: './productpopular.component.html',
  styleUrls: ['./productpopular.component.css']
})
export class ProductpopularComponent implements OnInit {

  productList:any = [];
  product:any;

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.refreshProductList();
  }
  refreshProductList(){
    this.sharedService.getProductList().subscribe(data =>{
      this.productList = data;
    });
  }
}
