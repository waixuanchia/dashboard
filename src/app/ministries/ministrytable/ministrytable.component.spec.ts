import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistrytableComponent } from './ministrytable.component';

describe('MinistrytableComponent', () => {
  let component: MinistrytableComponent;
  let fixture: ComponentFixture<MinistrytableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistrytableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinistrytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
