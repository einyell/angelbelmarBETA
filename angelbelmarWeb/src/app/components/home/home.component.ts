import { Component, OnInit } from '@angular/core';
//@ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

const target1 = document.querySelector('.text1');
const target2 = document.querySelector('.text2');

const writer1 = new Typewriter(target1, {
  typeSpeed: 40 
})

const writer2 = new Typewriter(target2, { 
  typeSpeed: 70 
})

writer1
  .type("I'm a ")
  .removeCursor()
  .then(writer2.start.bind(writer2))
  .changeTypeColor('#F4E9DA')
  .start()

writer2
.changeTypeColor('#85C17E')
.type("Front-End Developer")

  .rest(700)
  .clear()
  .changeTypeColor('#2CABDB')
  .type("Software Engineer")
  .rest(700)
  .clear()
  .changeTypeColor('#E7AC00')
  .type("Web Designer")
  .rest(700)
  .clear()
  .changeTypeColor('green')
  .then(writer1.start.bind(writer1))
  }

  
}