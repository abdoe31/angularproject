import { Component ,OnInit} from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  users: any ;
  temp:any;
  why:any;
  cout = 10;
temp_id:any;
  constructor(public service :ServiceService) {


    service.GetAllUers().subscribe({
      next: (data)=>{
      this.users=data
    },
  error: (err)=>{
    console.log(err)
    }}
  );
  }
  ngOnInit() {}
  displayStyle = "none";
  
  openPopup(id:any) {
if (id!=-1){
     console.log(id)
     id= parseInt(id)
      this.service.Getusernyid(id).subscribe({
        next: (data)=>{
        this.temp=data
        this.temp_id=this.temp.id
        console.log(this.temp_id)
        console.log(this.temp.id)
       this.why="update";
      },
    error: (err)=>{
      console.log(err)
      }}
    );

console.log(this.temp)

}else{

  this.why="add";
  this.temp=null;

}

    this.displayStyle = "block";
    

  }
  closePopup() {
    this.displayStyle = "none";
  }

   
delete(id:any){
id = parseInt(id);
  let x :any;
  x  = this.users.filter ((k:any) => {
  return k.id !== id;})

this.users =x ; 
}
adduser(name:any, email:any,street:any,suite:any,city:any,phone:any){

  if (this.why=="add"){
    this.temp=null;
   let id =  this.cout++;

  let address:any = {street,suite,city}
  this.temp={id  ,name , email,address,phone}
this.temp.name = name;
this.temp.email = email;
this.temp.street = this.temp.address.street;
this.temp.suite = this.temp.address.suite;
this.temp.city = this.temp.address.city;

this.temp.phone = phone;

  this.users.push(this.temp)
  console.log(this.users)
  }else{
  this.temp.name = name;
  this.temp.email = email;
  this.temp.street = this.temp.address.street;
  this.temp.suite = this.temp.address.suite;
  this.temp.city = this.temp.address.city;
  
  this.temp.phone = phone;

  let index  = this.users.findIndex((x:any) => x.id == this.temp_id);
  this.users[index] = this.temp;

  }

}



}
