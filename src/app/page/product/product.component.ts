import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList:any = [];
  product:any;
  dataEdit:any;
  public modelcss:string='d-block'
  ProductName:string=''
  CategoryID:string=''
  Description:string=''
  ProductImage:string=''
  Price:string=''

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.refreshProductList();

  }
  refreshProductList(){
    this.sharedService.getProductList().subscribe(data =>{
      this.productList = data;
    });
 }
 ProductDetail(){
  this.sharedService.getProductList().subscribe(data =>{
    this.productList = data;
  });
}


 showEdit(data:any):void{
  this.dataEdit=data;
  this.modelcss='d-block'
  this.ProductName=data.ProductName;
  this.CategoryID=data.CategoryID;
  this.Description=data.Description;
  this.ProductImage=data.ProductImage;
  this.Price=data.Price;

  document.getElementById('modelcss')?.classList.remove('d-none')
}
}
