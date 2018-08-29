import { Component, OnInit } from '@angular/core';
import { LandService } from '../land.service'
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  lands: any;
  filterArr: any;
  filter: string;
  constructor(public service: LandService) {
    this.showConfig();
  }

  ngOnInit() {
    this.showConfig();
    this.filterArr = this.lands;
  }
  showConfig() {
    this.service.showConfig().subscribe(data => {
      this.lands = data;
      this.filterArr = this.lands;
    })
  }
  search() {
    this.filterArr = this.lands.filter(p => p.name.includes(this.filter) || p.capital.includes(this.filter));
  }
}
