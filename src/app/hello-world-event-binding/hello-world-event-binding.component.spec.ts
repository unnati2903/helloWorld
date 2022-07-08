import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldEventBindingComponent } from './hello-world-event-binding.component';

describe('HelloWorldEventBindingComponent', () => {
  let component: HelloWorldEventBindingComponent;
  let fixture: ComponentFixture<HelloWorldEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldEventBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
