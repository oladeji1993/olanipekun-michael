import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
