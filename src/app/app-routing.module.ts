import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'comprar', loadChildren: './comprar/comprar.module#ComprarPageModule' },
  { path: 'comprar/:id/:preco/:image', loadChildren: './comprar/comprar.module#ComprarPageModule'},  { path: 'add-dog', loadChildren: './add-dog/add-dog.module#AddDogPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
