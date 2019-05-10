import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * Toolbar component - sends event when button are clicked
 */
@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
    /**
     * Event fired when the boolean changes value - used for 2-way data-binding
     * @type EventEmitter
     */
    @Output() toggleCrop = new EventEmitter();

    /**
     * Event fired when user wants to rotate picture
     * @type EventEmitter
     */
    @Output() rotate = new EventEmitter<number>();

    /**
     * Event fired when user wants to save picture into file (export)
     * @type EventEmitter
     */

    @Output() saveFile = new EventEmitter<string>();

    @Output() zoom = new EventEmitter<number>();

    @Output() resetZoom = new EventEmitter();

    @Output() closeFile = new EventEmitter();

    @Output() copyToClipboard = new EventEmitter();
    /**
     * name of exported file
     * @type string
     */
    public filename = 'Image sans titre';

    constructor() {}

    /**
     * Emits value to app component (that user wants to toggle on/off cropping)
     * @method toggleCropping
     */
    toggleCropping() {
        this.toggleCrop.emit();
    }

    /**
     * Emits value to app component (that user wants to rotate picture on the left)
     * @method rotateLeft
     */
    public rotateLeft() {
        this.rotate.emit(-90);
    }

    /**
     * Emits value to app component (that user wants to rotate picture on the right)
     * @method rotateRight
     */
    public rotateRight() {
        this.rotate.emit(90);
    }

    /**
     * Emits value to app component (that user wants to save file)
     * @method save
     */
    public save() {
        this.saveFile.emit(this.filename);
    }

    /**
     *
     */
    public clickZoomIn() {
        this.zoom.emit(0.1);
    }

    /**
     *
     */
    public clickZoomOut() {
        this.zoom.emit(-0.1);
    }

    public clickResetZoom() {
        this.resetZoom.emit();
    }
    public clickSave() {
        this.saveFile.emit(this.filename);
    }

    public clickClose() {
        this.closeFile.emit();
    }
    public clickCopy() {
        this.copyToClipboard.emit();
    }
}
