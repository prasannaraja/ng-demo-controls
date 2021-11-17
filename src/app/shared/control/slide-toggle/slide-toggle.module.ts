import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlideToggleComponent } from "../slide-toggle/slide-toggle.component";

@NgModule({
  declarations: [SlideToggleComponent],
  exports: [SlideToggleComponent],
  imports: [CommonModule],
})
export class SlideToggleModule {}
