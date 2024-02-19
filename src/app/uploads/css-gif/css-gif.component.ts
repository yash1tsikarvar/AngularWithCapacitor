import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GifCssElementModel} from '../../shared/definitions/models/gif-css-element.model';

@Component({
  selector: 'tev-css-gif',
  templateUrl: './css-gif.component.html',
  styleUrls: ['./css-gif.component.scss']
})
export class CssGifComponent implements OnInit, OnDestroy {

  @Input() images: GifCssElementModel[];

  private changeImage: any;
  image_selected: any;
  text: any;
  image_counter = 0;


  constructor() {
  }

  ngOnInit() {
    if (this.images) {
      this.image_selected = this.images[this.image_counter].image;
      this.text = this.images[this.image_counter].text;
      this.image_counter++;
      if (this.image_counter >= this.images.length) {
        this.image_counter = 0;
      }
      this.myFunction();
    }

  }

  ngOnDestroy() {
    if (this.changeImage) {
      clearTimeout(this.changeImage);
    }
  }

  myFunction() {
    this.changeImage = setTimeout(() => {
      if (this.images) {
        this.image_selected = this.images[this.image_counter].image;
        this.text = this.images[this.image_counter].text;
        this.image_counter++;
        if (this.image_counter >= this.images.length) {
          this.image_counter = 0;
        }
      }
      this.myFunction();// Will result in true;
    }, 5000);
  }


}
