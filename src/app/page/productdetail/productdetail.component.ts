import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  productDetail:any = [];
  product:any;
  ProductId:any;

  constructor(private route: ActivatedRoute, private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    const ProductId = +this.route.snapshot.params['id'];
    this.sharedService.getProductList().subscribe(data =>{
     data.forEach((item:any)=>{
       if(item.ProductId===ProductId){
         this.productDetail.push(item)
       }
     })
    });
 }
}
