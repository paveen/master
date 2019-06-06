import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: AboutComponent },
  { path: 'portfolio', component: AboutComponent },
  { path: 'career', component: AboutComponent },
  { path: 'contact', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }