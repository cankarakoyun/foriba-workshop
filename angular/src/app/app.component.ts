import { Component } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent {
  datas = [];
  constructor(private appService: AppService){
    this.appService.get("http://localhost:4500/datas").subscribe(t => {
      this.datas = t;
    })
  }

 
}
