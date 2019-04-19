import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public pictureLoaded = false;
    public filename = 'Untitled picture';
    loadPicture() {
        this.pictureLoaded = false;
        document.getElementById('fileInput').click();
    }

    onFileUploaded(event) {
        const file = event.srcElement.files.item(0);
        const canvas = <HTMLCanvasElement>(
            document.getElementById('picture-canvas')
        );
        const mainContainer = document.getElementById('main-container');
        const context = canvas.getContext('2d');
        if (file) {
            const FR = new FileReader();
            FR.onload = e => {
                var img = new Image();
                img.addEventListener('load', () => {
                    let ratio = 1;
                    canvas.width = img.width;
                    canvas.height = img.height;
                    if (
                        img.width > mainContainer.clientWidth ||
                        img.height > mainContainer.clientHeight
                    ) {
                        const heightRatio =
                            mainContainer.clientHeight / img.height;
                        const widthRatio =
                            (mainContainer.clientWidth - 20) / img.width;
                        ratio =
                            heightRatio < widthRatio ? heightRatio : widthRatio;
                        canvas.width = img.width * ratio;
                        canvas.height = img.height * ratio;
                    }
                    context.scale(ratio, ratio);
                    context.drawImage(img, 0, 0);
                    this.pictureLoaded = true;
                });
                const target: any = e.target;
                img.src = target.result;
            };
            FR.readAsDataURL(file);
        }
    }

    public saveFile() {
        const anchor = document.getElementById('download-anchor');
        const image = document.getElementById(
            'picture-canvas'
        ) as HTMLCanvasElement;
        anchor.setAttribute('href', image.toDataURL('image/png'));
        anchor.click();
    }

    public rotateLeft() {
        this.rotate(-90);
    }
    public rotateRight() {
        this.rotate(90);
    }
    private rotate(angle: number) {
        const canvas = document.getElementById(
            'picture-canvas'
        ) as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        const dataURL = canvas.toDataURL();
        const image = new Image();
        image.addEventListener('load', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.translate(image.width, image.height);
            // context.rotate(180 * (Math.PI / 180));
            ctx.rotate(angle);
            ctx.drawImage(image, 0, 0);
            const tmp = canvas.width;
            canvas.width = canvas.height;
            canvas.height = tmp;
        });
        image.src = dataURL;
    }
}
