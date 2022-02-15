import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './page/contact/contact.component';
import { IntroduceComponent } from './page/introduce/introduce.component';
import { HeaderComponent } from './screen/header/header.component';
import { FooterComponent } from './screen/footer/footer.component';
import { IndexComponent } from './page/index/index.component';
import { MainComponent } from './page/index/main/main.component';
import { ProductpopularComponent } from './page/index/main/productpopular/productpopular.component';
import { PromotionComponent } from './page/index/main/promotion/promotion.component';
import { ProductbestComponent } from './page/index/main/productbest/productbest.component';
import { ProductComponent } from './page/product/product.component';
import { PagesComponent } from './page/pages/pages.component';
import { ShooppingcartComponent } from './page/pages/shooppingcart/shooppingcart.component';
import { FaqComponent } from './page/pages/faq/faq.component';
import { RegisterComponent } from './page/pages/register/register.component';
import { LoginComponent } from './page/pages/login/login.component';
import { PageComponent } from './page/pages/page/page.component';
import { FansComponent } from './page/fans/fans.component';
import { AppliancesComponent } from './page/appliances/appliances.component';
import { WaterheaterComponent } from './page/waterheater/waterheater.component';
import { LightningComponent } from './page/lightning/lightning.component';
import { ProductdetailComponent } from './page/productdetail/productdetail.component';

// phai tu import
import {HttpClientModule} from '@angular/common/http';
//.

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    IntroduceComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    MainComponent,
    ProductpopularComponent,
    PromotionComponent,
    ProductbestComponent,
    ProductComponent,
    PagesComponent,
    ShooppingcartComponent,
    FaqComponent,
    RegisterComponent,
    LoginComponent,
    PageComponent,
    FansComponent,
    AppliancesComponent,
    WaterheaterComponent,
    LightningComponent,
    ProductdetailComponent,
    ProductdetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
