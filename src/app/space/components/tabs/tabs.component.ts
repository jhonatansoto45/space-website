import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TypeTab } from 'src/app/interfaces/tabs.interface';
import { SpaceService } from 'src/app/services/space.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() typeTab!: TypeTab;
  @Input() data: any[] = [];
  @Input() dataNormal: any[] = []; //* ARRAY CON LOS DATOS

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  activeLink: number = 1;
  dataItem: any = {};

  constructor(private spaceService: SpaceService) {}

  get tab() {
    return TypeTab;
  }

  onItemSelected(tab: { id: number }): void {
    this.activeLink = tab?.id;
    this.dataItem = this.spaceService.findIndex(tab?.id, this.dataNormal);
    this.selected.emit(this.dataItem);
  }
}
