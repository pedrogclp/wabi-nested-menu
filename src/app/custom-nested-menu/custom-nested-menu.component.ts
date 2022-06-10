import { Component, Input, OnInit } from '@angular/core';
import { ICustomNestedMenu } from './custom-nested-menu';

@Component({
  selector: 'app-custom-nested-menu',
  templateUrl: './custom-nested-menu.component.html',
  styleUrls: ['./custom-nested-menu.component.scss']
})
export class CustomNestedMenuComponent implements OnInit {

  @Input() data: ICustomNestedMenu[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);

    console.log(this.data.filter(option => option.parentId === null));
    ;
  }

}
