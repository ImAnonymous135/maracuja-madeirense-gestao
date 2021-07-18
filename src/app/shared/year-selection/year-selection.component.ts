import { Component, EventEmitter, Output } from '@angular/core';
import { startYear } from 'src/app/globals/global-variables';

@Component({
  selector: 'app-year-selection',
  templateUrl: './year-selection.component.html',
  styleUrls: ['./year-selection.component.scss']
})
export class YearSelectionComponent {

  @Output() onValueChanged: EventEmitter<number> = new EventEmitter<number>();

  public selectedYear: number = new Date().getFullYear();
  public startingYear: number = startYear;

  constructor() { }

  public getYears(startYear: number): number[] {
    const years: number[] = [];
    let currentYear: number = new Date().getFullYear();

    while (currentYear >= startYear) {
      years.push(currentYear);
      currentYear--;
    }
    return years;
  }

  public selectionChanged(year: number): void {
    this.onValueChanged.emit(year);
  }
}
