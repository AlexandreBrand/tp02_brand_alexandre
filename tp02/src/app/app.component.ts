import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp02';

  resultFormulaire :any;

  transite(arg:any):void{
    this.resultFormulaire = arg;
  }
}
