import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiDemoComponent } from './api-demo.component';
import { ApiDemoService } from './api-demo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ApiDemoComponent
  ],
  providers:[ApiDemoService],
  declarations: [ApiDemoComponent]
})
export class ApiDemoModule { }
