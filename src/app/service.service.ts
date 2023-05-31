import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  user_url = "https://jsonplaceholder.typicode.com/users/"
  album_url = "https://jsonplaceholder.typicode.com/albums"
  photo_url = "https://jsonplaceholder.typicode.com/photos"


  constructor(public client: HttpClient) { }


public GetAllUers(){

return this.client.get(this.user_url);


}
public Getusernyid(id:any){

  return this.client.get(this.user_url+id);
  }
  
  public GetAlbumuserid(id:any){

    return this.client.get(this.album_url+"?userId="+id);
    }

    public Getphotobyalbumid(id:any){

      return this.client.get(this.photo_url+"?albumId="+id);
      }
}
