import { NgModule } from '@angular/core';
import { ADMIN_ROUTES } from './admin.routes';
import { ADMIN_COMPONENT } from '.';
import { SharedModule } from '../../custom-modules/shared.module';
import { MaterialModule } from '../../custom-modules/material.module';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [...ADMIN_COMPONENT, WrapperComponent],
  imports: [
    SharedModule,
    MaterialModule,
    ADMIN_ROUTES
  ],
  exports: [],
  providers: [],
})
export class AdminModule { }
