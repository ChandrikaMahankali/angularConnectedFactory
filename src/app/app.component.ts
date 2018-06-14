import { Component, OnInit } from '@angular/core';
import { Adal6Service } from 'adal-angular6';
import { DataService } from './data.service';

const config = {
  // tenant: 'd5e2e799-83d1-499a-8c19-b397e99fc5c6',
  // clientId: '9590977b-50e3-4403-bc30-e6062bf6e2db'
  instance: 'https://login.microsoftonline.com/',
      tenant: 'acpcloud1545outlook.onmicrosoft.com',
      clientId: '9590977b-50e3-4403-bc30-e6062bf6e2db',
      extraQueryParameter: 'nux=1',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'app';
  data = [];
  constructor(private service: Adal6Service, private dataService: DataService) {
    this.service.init(config);
  }

  ngOnInit() {
    // Handle callback if this is a redirect from Azure
    this.service.handleWindowCallback();

    // Check if the user is authenticated. If not, call the login() method
    if (!this.service.userInfo.authenticated) {
      this.service.login();
    //   this.dataService.getData(this.service.userInfo.token)
    // .subscribe(data => {
    //   this.data.push(data);
    // });
    }

    // Log the user information to the console
    console.log('username ' + this.service.userInfo.username);
    console.log('authenticated: ' + this.service.userInfo.authenticated);
    console.log('name: ' + this.service.userInfo.profile.name);
    console.log('token: ' + this.service.userInfo.token);
    console.log(this.service.userInfo.profile);

    // this.dataService.getData(this.service.userInfo.token)
    // .subscribe(data => {
    //   this.data.push(data);
    // });
  }

  // Logout Method
  public logout() {
    this.service.logOut();
  }
}
