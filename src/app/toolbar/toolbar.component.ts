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
     * Input for cropping - in order to keep the same state between appComponent and this one
     * @type boolean
     */
    @Input() public cropping = false;
    @Input() public loading = false;
    /**
     * Event fired when the boolean changes value - used for 2-way data-binding
     * @type EventEmitter
     */
    @Output() croppingChange = new EventEmitter<boolean>();

    /**
     * Event fired when user wants to rotate picture
     * @type EventEmitter
     */
    @Output() rotate = new EventEmitter<string>();

    /**
     * Event fired when user wants to save picture into file (export)
     * @type EventEmitter
     */

    @Output() saveFile = new EventEmitter<string>();

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
        this.croppingChange.emit(!this.cropping);
    }

    /**
     * Emits value to app component (that user wants to rotate picture on the left)
     * @method rotateLeft
     */
    public rotateLeft() {
        this.rotate.emit('left');
    }

    /**
     * Emits value to app component (that user wants to rotate picture on the right)
     * @method rotateRight
     */
    public rotateRight() {
        this.rotate.emit('right');
    }

    /**
     * Emits value to app component (that user wants to save file)
     * @method save
     */
    public save() {
        this.saveFile.emit(this.filename);
    }
}
