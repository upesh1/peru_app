import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import 'hammerjs';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  globalSrc = 'https://sketchfab.com/models/';
  globalExtra = '/embed?autostart=1&amp;preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1';

  selectedIndex = 0;
  selectedItem: any;

  src: SafeResourceUrl;

  galleryOptions = [
    {
      imageSize: 'contain',
      layout: 'thumbnails-bottom',
      previewCloseOnClick: true,
      previewCloseOnEsc: true,
      imageArrows: true,
      imageSwipe: true,
      thumbnailsArrows: true,
      thumbnailsSwipe: true,
      previewSwipe: true,
      previewFullscreen: true,
      previewKeyboardNavigation: true,
      image: true,
      // height: '400px'
    },
    // { "breakpoint": 500, "width": "100%" }
    { breakpoint: 500, width: '100%', height: '100px', thumbnailsColumns: 1 },
    { breakpoint: 300, width: '100%', height: '100px', thumbnailsColumns: 1 },
  ];

  imageGallery: any[] = [];

  gallery = [
    {
      name: 'Stoneware pipe',
      id: '09c005e0e6524111b22cfb84471e7739',
      images: ['pipe1.jpg'],
      details: 'Local southern Illinois potters used two-piece molds to manufacture literally tens of thousands of “stoneware” clay tobacco-smoking pipes throughout the nineteenth century. The term stoneware refers to the hardness of the clay after firing. Pipe bowl types included plain, ribbed, and fluted as well as more ornate figural pipe bowls depicting the heads of U.S. Presidents and bearded “Turks”. The pipe was smoked by inserting a several inch-long hollow reeds into the short clay pipe stem. Smoked by both men and women, these pipes were sometimes called “granny” pipes due to the number of older women who used them. '
    },
    {
      name: 'Iron Harness Buckles',
      src: '',
      images: ['harness1.png', 'harness2.png', 'harness3.png'],
      id: 'e3df8dff0c9a4997aea4696a1a26b670',
      details: 'Horses and oxen were attached to plows, wagons, and carriages using leather harnesses fitted around their bodies. A single harness could easily consist of over a dozen leather straps of varying sizes, all of which attached to each other or could be tightened using iron buckles of various sizes and shapes. Iron harness buckles are one of the most common iron artifacts found on 19th and early 20th century farmstead sites.'
    },

    {
      name: 'Hand painted porcelain doll fragments',
      id: '34323f2e82f64319878de5ec939106d6',
      images: ['doll1.png'],
      details: 'European-made porcelain dolls came into widespread use in the United States during the mid to late 19th century. Such dolls most commonly had cloth bodies with the only porcelain parts being the heads, legs, and arms. Factory artists often painted the hair, eyes, lips, shoes, and stockings of porcelain dolls in varying colors to give them a more lifelike appearance. Doll clothes could be purchased from a store or made by the girl who owned the doll or her mother.'
    },

    {
      name: 'Pig Bones',
      id: 'd310ddda7d524f6aa310ff366335de1b',
      images: ['bone1.png'],
      details: 'Southern farm families including the people of Miller Grove relied on pigs and pork as their primary source of meat. Pigs were raised, slaughtered, and smoked by farm families each year to provide a reliable source of food. Pork products consumed by farm families included sausage, hams, and head cheese, among others. Pig teeth, which were discarded during the butchering process, represent one of the most visible signs of this activity in the Miller Grove community. '
    },

    {
      name: 'Revolver',
      id: 'efaca45dfe2d4cd78033f41c4a43f259',
      images: ['revolver.png'],
      details: 'A Civil-war era “Starr” revolver recovered by the excavations within Abby Miller’s house most likely had been located beneath the floor of the house. “Starr” revolvers were issued to the western Union Army during the Civil War. The Miller Grove revolver, which still has an unfired round in one of the cylinders as while a lead bullet jammed in its barrel, appears to have exploded while being fired. Whether this happened on a Civil War battlefield, where the exploded gun was collected as a souvenir, or whether the gun exploded while being used at Miller Grove is unknown.'
    },

    {
      name: 'Patent Medicine Bottle',
      id: 'a6fcd74510df490482abc389042f9519',
      images: ['bottle1.png', 'bottle2.png'],
      details: '“Patent” medicines were manufactured throughout the 19th and early 20th centuries. The name comes from the fact that rival manufacturers patented (or claimed to have patented) the formulas of their products with the US government. In reality, the primary content of these virtually useless medicines was alcohol with some such as “Hostetter’s Bitters” containing as much as 47% alcohol. Patent medicines were widely consumed for a variety of ailments with patent medicine bottles representing common items on virtually all nineteenth century archaeological sites. '
    },
    {
      name: 'Ceramic dishes and pitchers',
      id: '1b8b632ac87c49c28942407e470851aa',
      images: ['ceramic1.png', 'ceramic2.png', 'ceramic3.png'],
      details: 'Although Miller Grove was an isolated farmstead community, its proximity to the Ohio River and river ports such as Shawneetown provided its inhabitants with access to manufactured goods from the eastern United States and Europe. Ceramic dish and plate fragments recovered from the site bear makers marks indicating that they were manufactured in England during the nineteenth and early twentieth centuries. In contrast to their white neighbors, who appear to have preferred ceramics with mass-produced designs identical to each other, the decorated ceramics found at Miller Grove indicate that Africa-Americans they may have preferred vessels decorated with hand painted floral designs that included flowers, leaves, and berries. '
    },
    {
      name: 'Fork and Spoon (utensil handles)',
      id: '',
      images: ['spoon1.png'],
      details: 'The Miller Grove families appear to have used common copper, brass, or white-metal forks and spoons that they purchased from stores in nearby towns to eat their daily meals. Although some of the families may have had “fancier” silver or silver-plated eating utensils, these types of items are uncommon in southern Illinois either because families could not afford them or because they were kept as special items and passed down to descendants rather than being discarded and entering the archaeological record. '
    }



  ];

  get_full_source(id) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.globalSrc + id + this.globalExtra);
  }

  get_image_gallery_items() {
    this.imageGallery = [];

    this.selectedItem.images.forEach(x => {
      const item = {
        small: 'assets/images/' + x,
        medium: 'assets/images/' + x,
        big: 'assets/images/' + x,
        description: this.selectedItem.description
      };

      this.imageGallery.push(item);
    });
  }

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.selectedIndex = 0;
    this.selectedItem = this.gallery[this.selectedIndex];
    this.src = this.get_full_source(this.selectedItem.id);
    this.get_image_gallery_items();
  }

  next() {
    if (this.selectedIndex < this.gallery.length - 1) {
      this.selectedIndex++;
      this.selectedItem = this.gallery[this.selectedIndex];
      this.src = this.get_full_source(this.selectedItem.id);
      this.get_image_gallery_items();
    }
  }

  previous() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.selectedItem = this.gallery[this.selectedIndex];
      this.src = this.get_full_source(this.selectedItem.id);
      this.get_image_gallery_items();
    }
  }

}


