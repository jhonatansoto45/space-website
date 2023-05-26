import { Component } from '@angular/core';
import { MenuItem } from '../../../interfaces/space.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  {
  listMenu: MenuItem[] = [
    {
      id: '00',
      name: 'HOME',
      url: './space/home',
    },
    {
      id: '01',
      name: 'DESTINATION',
      url: './space/destination',
    },
    {
      id: '02',
      name: 'CREW',
      url: './space/crew',
    },
    {
      id: '03',
      name: 'TECHNOLOGY',
      url: './space/technology',
    },
  ];

  openPopup: boolean = false;

  constructor() {}

  openMenu(): void {
    this.openPopup = !this.openPopup;
  }

  hideMenu(): void {
    this.openPopup = false;
  }
}
