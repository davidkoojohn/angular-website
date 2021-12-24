import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesMessagesComponent } from './heroes-messages.component';

describe('HeroesMessagesComponent', () => {
  let component: HeroesMessagesComponent;
  let fixture: ComponentFixture<HeroesMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
