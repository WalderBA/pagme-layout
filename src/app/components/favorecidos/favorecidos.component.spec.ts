import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorecidosComponent } from './favorecidos.component';

describe('FavorecidosComponent', () => {
  let component: FavorecidosComponent;
  let fixture: ComponentFixture<FavorecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavorecidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavorecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
