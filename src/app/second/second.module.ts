import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './page/second.component';
import { SecondRoutingModule } from './second.routing';

@NgModule({
  declarations: [SecondComponent],
  imports: [CommonModule, SecondRoutingModule],
})
export class SecondModule {}
