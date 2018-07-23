import { NgModule }             from '@angular/core';
import {ModuleWithProviders} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import {NewtemplateComponent} from "./components/newtemplate/newtemplate.component";
import {TemplatetableComponent} from "./components/templatetable/templatetable.component";

const routes: Routes = [
  { path: '', component: TemplatetableComponent },
  { path: 'template', component: NewtemplateComponent },
  { path: 'template/:name', component: NewtemplateComponent }
];

export const appRouting : ModuleWithProviders = RouterModule.forRoot(routes);
