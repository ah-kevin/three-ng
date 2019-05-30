import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
  menus;

  constructor() {
    this.menus = [
      {
        title: 'three.js快速入门', url: 'lesson1',
        submenu: [
          {title: '1.第一个3D场景', url: '1'},
        ]
      }
    ];
  }


}
