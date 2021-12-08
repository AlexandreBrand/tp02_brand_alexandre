import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp02';

  resultFormulaire :string = "";

  transite(arg:string):void{
    console.log(arg);
    this.resultFormulaire = arg;
  }
}
