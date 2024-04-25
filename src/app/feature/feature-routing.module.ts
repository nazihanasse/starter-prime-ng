import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutContainerComponent } from "../core/components/layout-container/layout-container.component";
import {PmComponent} from "./forms/pm/pm.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutContainerComponent,
    children: [
      {
        path: 'theme',
        loadChildren: () => import('./theme/theme.module').then((m) => m.ThemeModule),
      },
      {
        path: '11s',
        loadChildren: () => import('./theme/theme.module').then((m) => m.ThemeModule),
      },
      {
        path: 'new-cat',
        component: PmComponent
      },
      {
        path: "",
        redirectTo: "/theme",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule { }
