import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export function findElement<T>(
  fixture: ComponentFixture<T>,
  testId: string
): DebugElement {
  return fixture.debugElement.query(By.css(`[data-testid="${testId}"]`));
}

export function clickElement<T>(
  fixture: ComponentFixture<T>,
  testId: string
): void {
  const element = findElement(fixture, testId);
  const event = makeClickEvent(element.nativeElement);

  element.triggerEventHandler('click', event);
}

export function makeClickEvent(target: EventTarget): Partial<MouseEvent> {
  return {
    preventDefault(): void {},
    stopPropagation(): void {},
    stopImmediatePropagation(): void {},
    type: 'click',
    target,
    currentTarget: target,
    bubbles: true,
    cancelable: true,
    button: 0,
  };
}

export function expectText<T>(
  fixture: ComponentFixture<T>,
  testId: string,
  text: string
): void {
  const element = findElement(fixture, testId);
  const actualText = element.nativeElement.textContent;

  expect(actualText).toBe(text);
}

export function setFieldValue<T>(fixture: ComponentFixture<T>, testId: string, value: string): void {
    setFieldElementValue(findElement(fixture, testId).nativeElement, value);
}

export function setFieldElementValue(
    element: HTMLInputElement | HTMLTextAreaElement,
    value: string,
  ): void {
    element.value = value;
    
    dispatchEvent(new Event('input'));
  }
