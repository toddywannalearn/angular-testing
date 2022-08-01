import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  clickElement,
  expectText,
  findElement,
  setFieldValue,
} from '../helper/element.spec-helper';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });
  //arrange
  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('increment the count', () => {
    //act
    clickElement(fixture, 'increment-btn');

    fixture.detectChanges();

    //assert
    expectText(fixture, 'counter-value', '1');
  });

  it('decrement the count', () => {
    //act
    clickElement(fixture, 'decrement-btn');

    fixture.detectChanges();

    //assert
    expectText(fixture, 'counter-value', '-1');
  });

  it('reset the counter value', () => {
    const newCount = '5';

    //act
    setFieldValue(fixture, 'input-value', newCount);
    //const resetInputElement = findElement(fixture, 'input-value').nativeElement;
    // Set field value
    //resetInputElement.value = newCount;
    // Dispatch input event
    //resetInputElement.dispatchEvent(new Event('input'));

    clickElement(fixture, 'reset-btn');

    fixture.detectChanges();

    //assert
    expectText(fixture, 'counter-value', '5');
  });
});
