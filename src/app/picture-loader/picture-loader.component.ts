import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Picture Loader Component
 * Used to load image into canvas from various sources
 */
@Component({
    selector: 'app-picture-loader',
    templateUrl: './picture-loader.component.html',
    styleUrls: ['./picture-loader.component.scss'],
})
export class PictureLoaderComponent {
    /**
     * load method : from a file or from a link
     * @type 'file' | 'link'
     */
    public loadMethod: 'file' | 'link' = null;

    /**
     * Event emitter used to tell app that content is loading
     */
    @Output() loading = new EventEmitter<boolean>();

    /**
     * Event emitter used to tell app that content is loaded
     */
    @Output() loaded = new EventEmitter();

    /**
     * regex used to restrain user input to links (URLs)
     */
    private linkRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

    /**
     * FormGroup in charge of form validation
     */
    public fg: FormGroup;

    constructor(private fb: FormBuilder) {
        this.fg = this.fb.group({
            link: this.fb.control(null, [
                Validators.required,
                Validators.pattern(this.linkRegex),
            ]),
        });
    }

    /**
     * @method loadPicture
     * Loads a picture file from system prompt
     */
    public loadPicture() {
        document.getElementById('fileInput').click();
    }

    /**
     * @method onFileUploaded
     * Callback when file has been selected - load file
     * @param event the event containing the file ref
     */
    onFileUploaded(event: any) {
        const file = event.srcElement.files.item(0);
        if (file) {
            this.loading.emit(true);
            const FR = new FileReader();
            FR.onload = (e: any) => {
                this.drawImage(e.target.result);
            };
            FR.readAsDataURL(file);
        }
    }
    /**
     * @method getErrorMessage
     * @returns the error message to display according to error in form group
     */
    public getErrorMessage() {
        return this.fg.controls['link'].hasError('pattern')
            ? `L'URL doit être valide`
            : this.fg.get('link').hasError('invalid')
            ? `L'URL saisie ne pointe pas vers une image`
            : `L'URL est requise`;
    }

    /**
     * @method onUploadByLink
     * loads picture by URL input
     */
    onUploadByLink() {
        this.drawImage(this.fg.get('link').value);
    }
    /**
     * @method drawImage
     * draws image loaded in canvas. Ensure display ratio is correct
     * @param source the source of the image to draw
     */
    private drawImage(source: string) {
        const canvas = <HTMLCanvasElement>(
            document.getElementById('picture-canvas')
        );
        const mainContainer = document.getElementById('main-container');
        const context = canvas.getContext('2d');
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.addEventListener('load', () => {
            let ratio = 1;
            canvas.width = img.width;
            canvas.height = img.height;
            if (
                img.width > mainContainer.clientWidth ||
                img.height > mainContainer.clientHeight
            ) {
                const heightRatio = mainContainer.clientHeight / img.height;
                const widthRatio = (mainContainer.clientWidth - 20) / img.width;
                ratio = heightRatio < widthRatio ? heightRatio : widthRatio;
                canvas.width = img.width * ratio;
                canvas.height = img.height * ratio;
            }
            context.scale(ratio, ratio);
            context.drawImage(img, 0, 0);
            this.loaded.emit(true);
        });
        img.addEventListener('error', errorDetails => {
            console.error('error occured ! ', errorDetails);
            this.fg.get('link').setErrors({
                invalid: true,
            });
        });
        img.src = source;
    }
}
