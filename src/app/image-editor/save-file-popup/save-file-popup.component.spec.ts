import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFilePopupComponent } from './save-file-popup.component';

describe('SaveFilePopupComponent', () => {
  let component: SaveFilePopupComponent;
  let fixture: ComponentFixture<SaveFilePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveFilePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveFilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
