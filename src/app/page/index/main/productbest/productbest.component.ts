import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-productbest',
  templateUrl: './productbest.component.html',
  styleUrls: ['./productbest.component.css']
})
export class ProductbestComponent implements OnInit {

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
