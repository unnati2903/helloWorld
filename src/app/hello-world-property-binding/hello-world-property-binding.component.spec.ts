import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldPropertyBindingComponent } from './hello-world-property-binding.component';

describe('HelloWorldPropertyBindingComponent', () => {
  let component: HelloWorldPropertyBindingComponent;
  let fixture: ComponentFixture<HelloWorldPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldPropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
