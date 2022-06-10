import { Component, Input, OnInit } from '@angular/core';
import { CustomNestedMenuClass } from './custom-nested-menu';

@Component({
  selector: 'app-custom-nested-menu',
  templateUrl: './custom-nested-menu.component.html',
  styleUrls: ['./custom-nested-menu.component.scss']
})
export class CustomNestedMenuComponent implements OnInit {

  @Input() dataSource: CustomNestedMenuClass[] = [];
  @Input() parent: CustomNestedMenuClass;

  menu: CustomNestedMenuClass[] = [];

  constructor() {
    this.parent = new CustomNestedMenuClass();
  }

  ngOnInit(): void {
    /* Null for Root */
    this.menu = this.getMenu(this.dataSource, this.parent.id);
  }

  getMenu(dataSource: CustomNestedMenuClass[], parentId: number | null): CustomNestedMenuClass[] {

    let menu = dataSource.filter(option => option.parentId === parentId);

    /* Recursive options */
    if (menu.length > 0) {
      menu.forEach(option => option.childrens = this.getMenu(dataSource, option.id));
    }

    return menu;
  }

}
