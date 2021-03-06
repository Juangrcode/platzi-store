import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MaterialModule } from '../material/material.module';
import { CartComponent } from '../cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ExponentialPipe,
        HighlightDirective,
        HeaderComponent,
        FooterComponent,
        CartComponent,
    ],
    exports: [
        ExponentialPipe,
        HighlightDirective,
        HeaderComponent,
        FooterComponent,
        CartComponent,
    ],
    imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
