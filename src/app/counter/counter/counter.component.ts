import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})



export class CounterComponent implements OnInit {
counter:number;
  constructor(private store:Store<{counter:{counter:number}}>) { }

  ngOnInit() {
    this.store.select('counter').subscribe(data=>{
      this.counter = data.counter;
    });
  }
}
