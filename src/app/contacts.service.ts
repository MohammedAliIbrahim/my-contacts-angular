import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

apiUrlGetAll="https://reqres.in/api/users?page=1";

apiUrlById="https://reqres.in/api/users/";

apiUrlCreate="https://reqres.in/api/users/";

  constructor(private http:HttpClient) { }


 getAllContacts():Observable<any>{


  return this.http.get(this.apiUrlGetAll);


}

getContactById(id:number):Observable<any>{


  return this.http.get(this.apiUrlById+id)
}


addContact(contact:any):Observable<any>{


  return this.http.post(this.apiUrlCreate,contact);

}


}
