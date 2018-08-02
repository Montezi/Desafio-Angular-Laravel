import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraMilitarComponent } from './altera-militar.component';

describe('AlteraMilitarComponent', () => {
  let component: AlteraMilitarComponent;
  let fixture: ComponentFixture<AlteraMilitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteraMilitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraMilitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
