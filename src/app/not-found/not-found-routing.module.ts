import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { NotFoundModule } from './not-found.module';

const routes: Routes = [
    {
        path: '',
        component: NotFoundModule,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NotFoundRoutingModule {}
