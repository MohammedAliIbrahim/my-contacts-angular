import { Component, OnInit } from '@angular/core';
import {ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {


  allContacts=[];



  constructor(_contactsService:ContactsService) { 

    _contactsService.getAllContacts().subscribe(response=>{

this.allContacts=response.data;


    })

    
  }

  ngOnInit() {
  }

}
