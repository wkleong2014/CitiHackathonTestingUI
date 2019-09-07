import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestReportComponent } from './test-report/test-report.component';

const routes: Routes = [
    { path: 'first-page', component: TestReportComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
