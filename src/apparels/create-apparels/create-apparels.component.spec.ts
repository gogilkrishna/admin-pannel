import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApparelsComponent } from './create-apparels.component';

describe('CreateApparelsComponent', () => {
  let component: CreateApparelsComponent;
  let fixture: ComponentFixture<CreateApparelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateApparelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateApparelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
