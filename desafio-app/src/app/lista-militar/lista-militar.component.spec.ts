import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMilitarComponent } from './lista-militar.component';

describe('ListaMilitarComponent', () => {
  let component: ListaMilitarComponent;
  let fixture: ComponentFixture<ListaMilitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMilitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMilitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
