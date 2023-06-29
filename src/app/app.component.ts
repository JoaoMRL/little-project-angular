import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petit-projet';
  tabNom =['Joao','Jean','Jojo'];
  tabTest = [
    {"name" :'Width',"pixel":100},
    {"name" :'Height',"pixel":100},
    {"name" :'Top',"pixel":0},
    {"name" :'Left',"pixel":0}
  ];
  addName:string='';
  addTabNom(){
    this.tabNom.push(this.addName);
  }
}
