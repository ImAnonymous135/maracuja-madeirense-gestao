import { Component, OnInit } from '@angular/core';
import { getValueColor } from '../globals/global-functions';
import { months } from '../globals/global-variables';
import { BarMonthValues } from '../models/bar-month-values.model';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  public getValueColor = getValueColor;
  public monthStats: BarMonthValues[] = new Array(12).fill({ expenseTotal: 0, incomeTotal: 0, total: 200 });
  public year: number = new Date().getFullYear();
  public months: string[] = months;

  constructor() { }

  public ngOnInit(): void {
  }

  public setYearValue(value: number): void {
    this.year = value;
  }

}
