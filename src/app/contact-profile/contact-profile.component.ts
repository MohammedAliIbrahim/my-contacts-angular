import { Component, OnInit } from '@angular/core';
import {ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.css']
})
export class ContactProfileComponent implements OnInit {


  id:number;
  selectedContact={};
  constructor(_contactsService:ContactsService ,_ActivatedRoute:ActivatedRoute ) {

    this.id=Number(_ActivatedRoute.snapshot.paramMap.get("id"));

    _contactsService.getContactById(this.id).subscribe(response=>{

      this.selectedContact=response.data;
      
      
          })


   }

  ngOnInit() {
  }

}
