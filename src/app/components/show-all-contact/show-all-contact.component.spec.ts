import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllContactComponent } from './show-all-contact.component';

describe('ShowAllContactComponent', () => {
  let component: ShowAllContactComponent;
  let fixture: ComponentFixture<ShowAllContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
