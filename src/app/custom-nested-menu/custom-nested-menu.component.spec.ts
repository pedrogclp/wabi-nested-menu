import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNestedMenuComponent } from './custom-nested-menu.component';

describe('CustomNestedMenuComponent', () => {
  let component: CustomNestedMenuComponent;
  let fixture: ComponentFixture<CustomNestedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNestedMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomNestedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
