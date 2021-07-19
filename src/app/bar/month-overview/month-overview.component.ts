import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { months } from 'src/app/globals/global-variables';

@Component({
  selector: 'app-month-overview',
  templateUrl: './month-overview.component.html',
  styleUrls: ['./month-overview.component.scss']
})
export class MonthOverviewComponent implements OnInit {
  
  public month: {name: string, index: number};
  public year: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getYear();
    this.getMonth();
  }

  private getMonth(): void {
    const index = this.route.snapshot.params['month'];
    this.month = {index: index, name: months[index]};
  }

  private getYear(): void {
    this.year = this.route.snapshot.params['year'];
  }

}
