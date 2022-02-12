import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliancesComponent } from './page/appliances/appliances.component';
import { ContactComponent } from './page/contact/contact.component';
import { FansComponent } from './page/fans/fans.component';
import { IndexComponent } from './page/index/index.component';
import { IntroduceComponent } from './page/introduce/introduce.component';
import { LightningComponent } from './page/lightning/lightning.component';
import { FaqComponent } from './page/pages/faq/faq.component';
import { LoginComponent } from './page/pages/login/login.component';
import { PageComponent } from './page/pages/page/page.component';
import { RegisterComponent } from './page/pages/register/register.component';
import { ShooppingcartComponent } from './page/pages/shooppingcart/shooppingcart.component';
import { ProductComponent } from './page/product/product.component';
import { WaterheaterComponent } from './page/waterheater/waterheater.component';

const routes: Routes = [
{path:'',component:IndexComponent},
{path:'introduce',component:IntroduceComponent},
{path:'contact',component:ContactComponent},
{path:'product',component:ProductComponent},
{path:'page',component:PageComponent},
{path:'shooppingcart',component:ShooppingcartComponent},
{path:'faq',component:FaqComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'fans',component:FansComponent},
{path:'appliances',component:AppliancesComponent},
{path:'waterheater',component:WaterheaterComponent},
{path:'lightning',component:LightningComponent},

{
  path: '**',
  redirectTo:'page404',
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
