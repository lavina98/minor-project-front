import { TestSummaryComponent } from './test-summary/test-summary.component';
import { TestComponent } from './test/test.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TestSelectComponent } from './test-select/test-select.component';
const approutes: Routes = [
    {path: 'test', component: TestComponent},
    {path: 'test-select', component: TestSelectComponent},
    {path: 'test-summary', component: TestSummaryComponent}
];

@NgModule({

  imports: [
      RouterModule.forRoot(approutes)],
  exports: [
      RouterModule
  ]
})


export class AppRoutingModule {

}
