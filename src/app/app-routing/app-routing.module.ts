import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from '../pages/pocetna/pocetna.component';
import { OnamaComponent } from '../pages/onama/onama.component';
const routes: Routes = [
 {
 path: '',
 component: PocetnaComponent,
 pathMatch: 'full'
 },
 {
 path: 'Onama',
 component: OnamaComponent,
 }
];
@NgModule({
 imports: [
 RouterModule.forRoot(routes)
 ],
 exports: [
 RouterModule
 ],
 declarations: []
})
export class AppRoutingModule { }