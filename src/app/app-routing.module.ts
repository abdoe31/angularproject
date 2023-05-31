import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './add/add.component';
import { PhotoComponent } from './photo/photo.component';
import { AlbumComponent } from './album/album.component';
import { HomeComponent } from './home/home.component';
import { RouterModule ,Routes} from '@angular/router';
const routes: Routes =  [
  { path:''  , component:HomeComponent}
  ,{path: 'users' , component:HomeComponent}
  ,{path :"user/:id",component:AlbumComponent}
  ,{path :"user/:id/album/:pc",component:PhotoComponent}
  ,{path:"add" ,component:AddComponent}
  ,{path:"add/:id", component:AddComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
