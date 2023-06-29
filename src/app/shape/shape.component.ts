import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent {
  largeur:number = 100;
  longeur:number = 100;
  top:number=0;
  left:number=0;
  forme:string="50%";
  newColor:string='#FFFFFF';
  bo:boolean=false;
  boTrue(){
    this.bo = !this.bo;
  }
}
