import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistrymapComponent } from './ministrymap.component';

describe('MinistrymapComponent', () => {
  let component: MinistrymapComponent;
  let fixture: ComponentFixture<MinistrymapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistrymapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinistrymapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
