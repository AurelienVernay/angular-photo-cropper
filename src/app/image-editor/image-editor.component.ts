import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';

import { SaveFilePopupComponent } from './save-file-popup/save-file-popup.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-image-editor',
    templateUrl: './image-editor.component.html',
    styleUrls: ['./image-editor.component.scss'],
})
export class ImageEditorComponent implements OnInit, OnDestroy {
    @Input() pictureSource: string;
    @Output() pictureSourceChange = new EventEmitter<string>();
    @ViewChild('picture') picture: ElementRef<HTMLImageElement>;
    @ViewChild('downloadAnchor') downloadAnchor: ElementRef<HTMLAnchorElement>;
    private _ready = new Subject<boolean>();
    private _cropping = false;
    public get cropping() {
        return this._cropping;
    }
    public set cropping(value: boolean) {
        this._cropping = value;
        if (this._cropping) {
            this.cropper.crop();
        } else {
            this.cropper.clear();
        }
    }

    public cropperConfig = {
        viewMode: 2,
        dragMode: <any>'none',
        initialAspectRatio: 16 / 9,
        zoomOnTouch: false,
        zoomOnWheel: false,
        center: false,
        zoomable: true,
        movable: true,
        background: false,
        toggleDragModeOnDblclick: false,
        width: 800,
        ready: () => this._ready.next(true),
    };

    public cropper: Cropper;

    public dialogRef: MatDialogRef<SaveFilePopupComponent>;

    constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

    ngOnInit() {
        this._ready.subscribe(ready => (ready ? this.cropper.clear() : null));
        this.picture.nativeElement.onload = () => {
            this.cropper = new Cropper(
                this.picture.nativeElement,
                this.cropperConfig
            );
        };
        this.picture.nativeElement.src = this.pictureSource;
    }

    ngOnDestroy() {}

    onZoom(ratio: number) {
        this.cropper.zoom(ratio);
    }
    onRotate(degree: number) {
        this.cropper.rotate(degree).zoomTo(1);
    }
    onToggleCrop() {
        this.cropping = !this.cropping;
    }
    onCrop() {
        this.cropper = this.cropper
            .replace(this.cropper.getCroppedCanvas().toDataURL())
            .clear();
        this.cropping = false;
    }

    onSaveFile() {
        //open save file dialog
        this.dialogRef = this.dialog.open(SaveFilePopupComponent);
        this.dialogRef.afterClosed().subscribe(filename => {
            if (filename) {
                this.downloadAnchor.nativeElement.href = this.cropper
                    .getCroppedCanvas()
                    .toDataURL('image/png');
                this.downloadAnchor.nativeElement.download = filename;
                this.downloadAnchor.nativeElement.click();
            }
        });
    }

    onCopyToClipboard() {
        const canvas = this.cropper.getCroppedCanvas();
        canvas.setAttribute('contenteditable', 'true');
        const body = document.body as any;
        let range;
        if (body.createTextRange) {
            range = body.createTextRange();
            range.moveToElementText(canvas);
            range.select();
        } else if (window.getSelection) {
            const selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(canvas);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        canvas.removeAttribute('contenteditable');
        this.snackBar.open(
            `L'image a été copiée dans le presse-papiers !`,
            null,
            {
                duration: 3000,
            }
        );
    }

    onCloseFile() {
        this.pictureSourceChange.emit(null);
    }

    onResetZoom() {
        this.cropper.zoomTo(1);
    }
}
