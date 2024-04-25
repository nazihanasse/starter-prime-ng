import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FeatureRoutingModule } from "./feature-routing.module";
import {PmComponent} from "./forms/pm/pm.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzStepsModule} from "ng-zorro-antd/steps";

const modules = [CommonModule, FormsModule, ReactiveFormsModule, NzButtonModule,
  NzTableModule, NzRadioModule, NzFormModule, NzCheckboxModule, NzInputModule, NzSelectModule, NzStepsModule]

@NgModule({
  declarations: [
    PmComponent
  ],
  imports: [CommonModule, FeatureRoutingModule, modules],
})
export class FeatureModule { }
