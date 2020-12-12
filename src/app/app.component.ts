import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';



  
  show(){
    document.querySelector('.main-menu').classList.toggle('show')
  }

  mini(){
    document.querySelector('.main-menu').classList.toggle('show')
  }

  removeSkill(){
    document.querySelector('.main-menu').classList.toggle('show')
  }

  removeEducation(){
    document.querySelector('.main-menu').classList.toggle('show')
  }

  remove(){
    document.querySelector('.main-menu').classList.toggle('show')
  }

  details(){
    document.querySelector('.main-menu').classList.toggle('show')
  }
}
