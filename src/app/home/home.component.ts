import { Component, inject, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housing-location";
import { HousingService } from "../housing.service";
import { TestComponent } from "../test/test.component";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, TestComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
        <section class="results">
          <app-test testClass="test2"></app-test>
        </section>
      </form>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
