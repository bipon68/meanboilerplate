import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'html-to-angular';
   isLogggedIn=true;

  constructor(
    private router: Router
    ,private activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document){
   
            console.log(document.URL);
            console.log(document.URL.split('#/')[1]);
            if(document.URL.split('#/')[1]=='login'){
              console.log("false");
              
             this.isLogggedIn=false;
            }else{
             this.isLogggedIn=true;
             console.log("true");
            }
        
  }
}
