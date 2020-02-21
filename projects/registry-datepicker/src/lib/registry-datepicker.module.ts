import { NgModule } from '@angular/core';
import { RegistryDatepickerComponent } from './registry-datepicker.component';
import { FocusDirective } from './directives/registry-datepicker.focus.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistryDatepickerComponent, FocusDirective],
  imports: [CommonModule, FormsModule],
  exports: [RegistryDatepickerComponent, FocusDirective]
})
export class RegistryDatepickerModule {
}
