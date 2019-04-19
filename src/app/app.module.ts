import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

const matModules = [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatTooltipModule,
];
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        FormsModule,
        matModules,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
