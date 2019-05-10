import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-save-file-popup',
    templateUrl: './save-file-popup.component.html',
    styleUrls: ['./save-file-popup.component.scss'],
})
export class SaveFilePopupComponent implements OnInit {
    public fg: FormGroup;
    constructor(private fb: FormBuilder) {
        this.fg = this.fb.group({
            filename: this.fb.control('Untitled', Validators.required),
        });
    }

    ngOnInit() {}
}
