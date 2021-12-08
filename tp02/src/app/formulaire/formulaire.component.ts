import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  user_name : string = "";
  user_prenom : string = "";
  user_adresse : string = "";
  user_ville : string = "";
  user_cp : string = "";
  user_tel : string = "";
  user_mail : string = "";
  user_civil : string = "";
  user_pwd : string = "";
  user_login : string = "";
  user_pays : string = "";

  @Output() data = new EventEmitter<{}>();


  constructor() { }

  ngOnInit(): void {
  }

  ValidName():Boolean{
    return(this.user_name.length>0)
  }

  ValidPrenom():Boolean{
    return(this.user_prenom.length>0)
  }

  ValidCp():Boolean{
    return(this.user_cp.length==5)
  }

  ValidTel():Boolean{
    var telephoneFormat=/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;////Regular expression
	  return(telephoneFormat.test(this.user_tel))
  }

  ValidMail():Boolean{
    var emailFormat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return(emailFormat.test(this.user_mail))
  }

  ValidPwd():Boolean{
    var passw= /^[A-Za-z]\w{7,14}$/;
    return(passw.test(this.user_pwd))
  }

  onClick(){
    this.data.emit({"user_name":this.user_name,
                  "user_prenom":this.user_prenom,
                  "user_adresse":this.user_adresse,
                  "user_cp":this.user_cp,
                  "user_ville":this.user_ville,
                  "user_tel":this.user_tel,
                  "user_mail":this.user_mail,
                  "user_civil":this.user_civil,
                  "user_login":this.user_login,
                  "user_pays":this.user_pays,
                  "user_pwd":this.user_pwd         
                });
  }

}
