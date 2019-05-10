import { Component } from '@angular/core';
import Cropper from 'cropperjs';

/**
 * @class AppComponent
 * Central logic of the app - picture editing and exporting happens here
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public pictureSource: string = null;

    onPictureLoaded(source: string) {
        this.pictureSource = source;
    }
}
