import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public countries = [{ label1: "India", value1: "IN" }, { label1: "Japan", value1: "JA" }, { label1: "Germany", value1: "GR" }, { label1: "Russia", value1: "RU" }];
  public optionValueLabel = "label1";
  public optionValueName = "value1";
  public selectedCountries = [];
  ngOnInit() { }

  onChange(event: any) {
    console.log(event);
    this.selectedCountries = event;
  }
}
