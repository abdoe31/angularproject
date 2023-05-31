import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styles: [
  ]
})
export class PhotoComponent {

  user :any;
  photos:any;
  my_id:any;
  album_id :any;
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

  this.album_id= route.snapshot.params["pc"]


console.log(this.album_id)
service.Getphotobyalbumid( this.album_id) .subscribe({
      
  next: (data)=>{
  this.photos=data
console.log(this.photos)
},
error: (err)=>{
console.log(err)
}}
);

}

}
