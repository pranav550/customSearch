import { HomeService } from "./../home.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navabar",
  templateUrl: "./navabar.component.html",
  styleUrls: ["./navabar.component.css"]
})
export class NavabarComponent implements OnInit {
  arraData: any = [];
  titleData: any = [];
  searchText;
  inputValue: any;
  result: any;
  constructor(private service: HomeService) {}

  ngOnInit() {
    this.getResult();
  }

  getResult() {
    this.service.getData().subscribe(data => {
      this.arraData = data;
      this.service.result.next(this.arraData);
    });
  }

  getSelected(event) {
    this.inputValue = event.target.value;
    if (this.inputValue.length > 0) {
      this.result = this.arraData.filter(data => {
        return data.title.includes(this.inputValue);
      });
      this.service.search.next(this.result);
      this.service.input.next(this.inputValue);
    }
  }
}
