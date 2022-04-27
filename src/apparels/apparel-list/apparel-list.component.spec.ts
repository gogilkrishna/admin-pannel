import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparelListComponent } from './apparel-list.component';

describe('ApparelListComponent', () => {
  let component: ApparelListComponent;
  let fixture: ComponentFixture<ApparelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApparelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
