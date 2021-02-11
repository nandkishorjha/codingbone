import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';


const matdesign = [MatButtonModule, MatSidenavModule]


@NgModule({
  imports: [matdesign],
  exports: [matdesign]
})
export class MaterialModule { }
