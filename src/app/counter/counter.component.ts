import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnChanges{


  @Input()
  public startCount: number = 0;

  @Output()
  public countChange = new EventEmitter<number>();

  public currentValue: number = 0;

  constructor() { }

  ngOnChanges(): void {
    this.currentValue = this.startCount;
  }

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
