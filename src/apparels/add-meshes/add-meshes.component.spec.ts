import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeshesComponent } from './add-meshes.component';

describe('AddMeshesComponent', () => {
  let component: AddMeshesComponent;
  let fixture: ComponentFixture<AddMeshesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMeshesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeshesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
