import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CounterComponent } from "./counter.component";

@Component({
    selector: 'app-counter',
    template: '',
  })
  export class FakeCounterComponent implements Partial<CounterComponent>{
    @Input()
    public startCount: number = 0;
  
    @Output()
    public countChange = new EventEmitter<number>();
  }
  