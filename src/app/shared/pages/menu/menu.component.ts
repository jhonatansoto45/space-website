import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/space.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
