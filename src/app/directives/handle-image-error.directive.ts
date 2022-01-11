import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHandleImageError]'
})
export class HandleImageErrorDirective implements AfterViewInit{

  @Input()
  src!: string;

    constructor(private imageRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        const img = new Image();
        img.onload = () => {
            this.setImage(this.src);
        };

        img.onerror = () => {
            // Set a placeholder image 
            this.setImage('https://dummyimage.com/400x200/000/fff&text=Image+not+available');
        };

        img.src = this.src;
    }

    private setImage(src: string) {
        this.imageRef.nativeElement.setAttribute('src', src);
    }

}
