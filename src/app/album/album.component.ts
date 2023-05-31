import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styles: [
  ]
})
export class AlbumComponent {
  user :any;
  albums:any;
  my_id:any;
  constructor(route : ActivatedRoute, service:ServiceService){
    this.my_id= route.snapshot.params["id"]

    service.Getusernyid( this.my_id) .subscribe({
      
      next: (data)=>{
      this.user=data
      console.log(this.user["name"])

    },
  error: (err)=>{
    console.log(err)
    }}
  );
  service.GetAlbumuserid(    this.my_id) .subscribe({
      
    next: (data)=>{
    this.albums=data
    console.log(this.albums)
  },
error: (err)=>{
  console.log(err)
  }}
); 

  }

}
