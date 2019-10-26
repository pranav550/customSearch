import { HomeService } from "./../home.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  arraData: any = [];
  searchText;
  searchResult: any;
  inputResult: any;
  constructor(private service: HomeService) {}

  ngOnInit() {
    this.getResult();
    this.getMyResult();
  }

  getResult() {
    this.service.getArray.subscribe(resp => {
      this.arraData = resp;
    });
  }

  getMyResult() {
    this.service.getInput.subscribe(resp => {
      this.inputResult = resp;
    });

    this.service.getSearch.subscribe(resp => {
      this.searchResult = resp;
    });
  }
}
