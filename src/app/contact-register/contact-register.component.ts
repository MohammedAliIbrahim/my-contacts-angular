import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';
import {ContactsService } from '../contacts.service';
@Component({
  selector: 'app-contact-register',
  templateUrl: './contact-register.component.html',
  styleUrls: ['./contact-register.component.css']
})
export class ContactRegisterComponent implements OnInit {

  createdContact={};

  registerform = new FormGroup ({name:new FormControl ("",Validators.required),job:new FormControl ()});



  constructor(private _contactsService:ContactsService) { 

  

  }


  save (){

this.createdContact=this.registerform.value;
    this._contactsService.addContact(this.createdContact).subscribe(response=>{


    console.log(response);
      alert("done");
      
          })
  }

  ngOnInit() {
  }

}
