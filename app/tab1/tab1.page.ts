import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
    currentLanguage: string = this.translateService.currentLang;


    constructor(private translateService: TranslateService) {
        console.log("Current language is " + this.translateService.currentLang + ", " + this.currentLanguage);
    }

  languageChange() {
      this.translateService.use(this.currentLanguage);
  }
}
