import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { findComponent } from '../helper/element.spec-helper';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  //smoke test
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders independent counter', () => {

    //arrange
    const counter = findComponent(fixture, 'app-counter');

    //assertion
    expect(counter).toBeTruthy();
  })

  it('passes a start count', () => {
    //arrange
    const counter = findComponent(fixture, 'app-counter');

    //assertion
    expect(counter.properties['startCount']).toBe(5);
  })

  it('listen for count changes', () => {
    //arrange
    spyOn(console, 'log');
    const counter = findComponent(fixture, 'app-counter');
    const count = 5;
    counter.triggerEventHandler('countChange', 5);

    expect(console.log).toHaveBeenCalledWith('countChange event from CounterComponent', count);

  })

  it('renders serviceCounter', () => {
    const component = findComponent(fixture, 'app-service-counter');

    expect(component).toBeTruthy();
  })

  it('renders idGenerator', () => {
    const component = findComponent(fixture, 'app-id-generator');

    expect(component).toBeTruthy();
  })

});
