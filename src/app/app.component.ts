import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'carousel';
  carouselItems: any;
  startPos: number;
  endPos: number;

  constructor() {
    this.startPos = 0;
    this.endPos = 2;
  }

  ngOnInit() {
    this.carouselItems = this.getCarouselItems();
  }


  getCarouselItems() {
    let carouselItems = [{
      itemImage: "assets/images/item-1.jpg",
      itemName: "Item 1",
      itemprice: "1001",
      itemCategory: "Category 1"
    },
    {
      itemImage: "assets/images/item-2.jpg",
      itemName: "Item 2",
      itemprice: "1002",
      itemCategory: "Category 2"
    },
    {
      itemImage: "assets/images/item-3.jpg",
      itemName: "Item 3",
      itemprice: "1003",
      itemCategory: "Category 3"
    },
    {
      itemImage: "assets/images/item-1.jpg",
      itemName: "Item 4",
      itemprice: "1004",
      itemCategory: "Category 4"
    },
    {
      itemImage: "assets/images/item-2.jpg",
      itemName: "Item 5",
      itemprice: "1005",
      itemCategory: "Category 5"
    },
    {
      itemImage: "assets/images/item-3.jpg",
      itemName: "Item 6",
      itemprice: "1006",
      itemCategory: "Category 6"
    },
    {
      itemImage: "assets/images/item-1.jpg",
      itemName: "Item 7",
      itemprice: "1007",
      itemCategory: "Category 7"
    },
    {
      itemImage: "assets/images/item-2.jpg",
      itemName: "Item 8",
      itemprice: "1008",
      itemCategory: "Category 8"
    },
    {
      itemImage: "assets/images/item-3.jpg",
      itemName: "Item 9",
      itemprice: "1009",
      itemCategory: "Category 9"
    },
    {
      itemImage: "assets/images/item-1.jpg",
      itemName: "Item 10",
      itemprice: "10010",
      itemCategory: "Category 10"
    }];
    return carouselItems;
  }

  showNext() {
    this.startPos+= 1;
    this.endPos+=1
  }

  showPrev() {
    this.startPos-= 1;
    this.endPos-=1
  }
}
