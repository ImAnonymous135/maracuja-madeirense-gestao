import { Component, Input, OnInit } from '@angular/core';
import { week } from 'src/app/globals/global-variables';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() year: number;
  @Input() month: number;

  public weekDays: string[] = week;
  public days: string[] = [];

  private date: Date;

  constructor() { }

  public ngOnInit(): void {

    this.date = new Date(this.year, this.month);
    this.getMonthDays();
  }

  private getMonthDays(): void {
    const lastDay = new Date(this.year, +this.month + 1, 0);
    let startDay = this.date;
    let startDayNumber = startDay.getDate();

    while (startDayNumber <= lastDay.getDate()) {
      this.days.push(startDayNumber.toString());
      startDayNumber++;
    }

    const previousMonthDays = startDay.getDay();

    for (let index = 0; index < previousMonthDays; index++) {
      this.days.splice(0, 0, "");
    }

  }

}
