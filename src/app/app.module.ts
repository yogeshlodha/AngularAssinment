import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { MockData } from './mock-data';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryApiDemoComponent } from './components/in-memory-api-demo.component';
import { AddUserComponent } from './components/AddUser/adduser.component';
import { UserDetailsComponent } from './components/UserDetails/userdetails.component';
import { UserListComponent } from './components/UserList/userlist.component';
import { UserErrorComponent } from './components/UserError/usererror.component';

@NgModule({
  declarations: [
    AppComponent,
    InMemoryApiDemoComponent,
    AddUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UserErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockData, { delay: 500 }),
    RouterModule.forRoot([
      { path: 'user-list', component: UserListComponent },
      { path: 'user/:id', component: UserDetailsComponent },
      { path: 'add-user', component: AddUserComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
