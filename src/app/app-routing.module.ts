import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import { ContactRegisterComponent } from './contact-register/contact-register.component';
const routes: Routes = [


{path:'contacts',component:ContactsListComponent},

{path:"contactprofile/:id",component:ContactProfileComponent },
{path: '', redirectTo: '/contacts', pathMatch: 'full'},

{path:'contactregister',component:ContactRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
