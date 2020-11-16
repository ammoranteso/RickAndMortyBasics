import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';



const modules: any[] = [
  MatCardModule
];
@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule { }
