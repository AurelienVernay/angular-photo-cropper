import { Component } from '@angular/core';
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
    /**
     * @name PictureLoaded
     * Indicates when the picture has been loaded into canvas.
     * @type boolean
     */
    public pictureLoaded = false;

    /**
     * @name PictureLoading
     * Indicates when the picture is being loaded into canvas.
     * @type boolean
     */
    public pictureLoading = false;

    /**
     * @name cropWrapperDimensions
     * Sets width and height of cropper
     */
    public cropWrapperDimensions: { height: number; width: number } = {
        height: 0,
        width: 0,
    };

    /**
     * getter and setter for cropping - ensures that the cropper is being resized everytime the crop is on
     */
    private _cropping = false;
    public get cropping() {
        return this._cropping;
    }
    public set cropping(value: boolean) {
        this._cropping = value;
        if (value) {
            // enable cropping - compute cropper width and height based on canvas size
            const canvas = document.getElementById('picture-canvas');
            this.cropWrapperDimensions.width = 0.75 * canvas.clientWidth;
            this.cropWrapperDimensions.height = 0.75 * canvas.clientHeight;
        }
    }

    /**
     * @method onLoading
     * responding to event to set values of loading and loaded
     */
    onLoading() {
        this.pictureLoaded = false;
        this.pictureLoading = true;
    }

    /**
     * @method onLoaded
     * responding to event to set values of loading and loaded
     */
    onLoaded() {
        this.pictureLoaded = true;
        this.pictureLoading = false;
    }

    /**
     * @method crop
     * Crops image inside cropper frame and draw into canvas
     */
    public crop() {
        const cropWrapper = document.getElementById('crop-wrapper');
        const canvas = document.getElementById(
            'picture-canvas'
        ) as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        console.log(cropWrapper.style.transform);
        const coords = cropWrapper.style.transform
            .replace('translate3d(', '')
            .replace(')', '')
            .replace(/px/gi, '')
            .split(',');
        console.log(coords);
        const imageData = ctx.getImageData(
            parseInt(coords[0]),
            parseInt(coords[1]),
            cropWrapper.clientWidth,
            cropWrapper.clientHeight
        );
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = cropWrapper.clientWidth;
        canvas.height = cropWrapper.clientHeight;
        ctx.putImageData(imageData, 0, 0);
        this.cropping = false;
    }

    /**
     * @method onRotate
     * responding to event to rotate picture
     */
    public onRotate(direction: 'left' | 'right') {
        this.rotate(direction === 'left' ? 270 : 90, direction);
    }

    /**
     * @method rotate
     * Rotates the picture into canvas
     * @param angle
     * @param direction
     */
    private rotate(angle: number, direction: 'left' | 'right') {
        this.pictureLoading = true;
        const canvas = document.getElementById(
            'picture-canvas'
        ) as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        const dataURL = canvas.toDataURL();
        const image = new Image();
        image.addEventListener('load', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const tmp = canvas.width;
            canvas.width = canvas.height;
            canvas.height = tmp;
            ctx.translate(
                direction === 'right' ? image.height : 0,
                direction === 'right' ? 0 : image.width
            );
            ctx.rotate((angle * Math.PI) / 180);
            ctx.drawImage(image, 0, 0);
            this.pictureLoading = false;
        });
        image.src = dataURL;
    }

    /**
     * @method onSaveFile
     * Saves the picture into a file
     * @param filename the name of the file downloaded
     */
    public onSaveFile(filename: string) {
        const anchor = document.getElementById('download-anchor');
        const image = document.getElementById(
            'picture-canvas'
        ) as HTMLCanvasElement;
        anchor.setAttribute('download', filename);
        anchor.setAttribute('href', image.toDataURL('image/png'));
        anchor.click();
    }
}
