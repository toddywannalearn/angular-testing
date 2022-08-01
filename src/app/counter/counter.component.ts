import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  currentValue: number = 0;

  @Output()
  countChange = new EventEmitter<number>();

  constructor() { }

  increment(): void {
    this.currentValue++;
    this.notify();
  }

  decrement(): void {
    this.currentValue--;
    this.notify();
  }

  reset(inputValue: string): void {
    const value = parseInt(inputValue);
    if(value){
      this.currentValue = value; 
      this.notify();
    }
  }

  private notify(): void {
    this.countChange.emit(this.currentValue);
  }

}
