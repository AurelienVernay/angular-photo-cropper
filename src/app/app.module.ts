import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PictureLoaderComponent } from './picture-loader/picture-loader.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const matModules = [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatTooltipModule,
    DragDropModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
];
@NgModule({
    declarations: [AppComponent, PictureLoaderComponent, FooterComponent, ToolbarComponent],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        ...matModules,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
