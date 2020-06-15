
import { Component, NgModule, ViewChild } from '@angular/core';
import {
  CdkDrag,
  CdkDragStart,
  CdkDropList, CdkDropListGroup, CdkDragMove, CdkDragEnter,
  moveItemInArray
} from "@angular/cdk/drag-drop";
import {ViewportRuler} from "@angular/cdk/overlay";
import { Vegetable } from '../models/vegetable.model';

@Component({
  selector: 'app-vegetable-grid',
  templateUrl: './vegetable-grid.component.html',
  styleUrls: ['./vegetable-grid.component.css']
})
  
  
export class VegetableGridComponent {
  @ViewChild(CdkDropListGroup) listGroup: CdkDropListGroup<CdkDropList>;
  @ViewChild(CdkDropList) placeholder: CdkDropList;

  items: Array<Vegetable> = [
  { 
    name : "cocomero", 
    description: "(__)",
    imagePath: "https://www.valfrutta.it/imageserver/immagine_pianta/files/2019/orto/cocomero.png"
  },
  {
      name: 'Pomodoro',
      description:'Descrizione pomodoro',
      imagePath:'https://upload.wikimedia.org/wikipedia/commons/6/6c/Tomato-global.png'
  },
  {
    name: 'Insalata',
    description:'insalata 222',
    imagePath:'https://www.giardinaggio.it/orto/piante/insalatina_NG1.jpg'
  },
  {
    name: 'Zucchina',
    description:'zucchina xx',
    imagePath:'https://blog.liebherr.com/frigoriferi-congelatori/it/wp-content/uploads/sites/19/2017/08/Zucchini_Panther-721x400.jpg'
  }
  ];

  public target: CdkDropList;
  public targetIndex: number;
  public source: CdkDropList;
  public sourceIndex: number;
  public dragIndex: number;
  public activeContainer;

  constructor(private viewportRuler: ViewportRuler) {
    this.target = null;
    this.source = null;
  }

  ngAfterViewInit() {
    let phElement = this.placeholder.element.nativeElement;

    phElement.style.display = 'none';
    phElement.parentElement.removeChild(phElement);
  }

  // add() {
  //   this.items.push(this.items.length + 1);
  // }

  dragMoved(e: CdkDragMove) {
    let point = this.getPointerPositionOnPage(e.event);

    this.listGroup._items.forEach(dropList => {
      if (_isInsideDropListClientRect(dropList, point.x, point.y)) {
        this.activeContainer = dropList;
        return;
      }
    });
  }

  dropListDropped() {
    if (!this.target)
      return;

    let phElement = this.placeholder.element.nativeElement;
    let parent = phElement.parentElement;

    phElement.style.display = 'none';

    parent.removeChild(phElement);
    parent.appendChild(phElement);
    parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);

    this.target = null;
    this.source = null;

    if (this.sourceIndex != this.targetIndex)
    {
      moveItemInArray(this.items, this.sourceIndex, this.targetIndex);
    }
  }

  dropListEnterPredicate = (drag: CdkDrag, drop: CdkDropList) => {
    if (drop == this.placeholder)
      return true;

    if (drop != this.activeContainer)
      return false;

    let phElement = this.placeholder.element.nativeElement;
    let sourceElement = drag.dropContainer.element.nativeElement;
    let dropElement = drop.element.nativeElement;

    let dragIndex = _indexOf(dropElement.parentElement.children, (this.source ? phElement : sourceElement));
    let dropIndex = _indexOf(dropElement.parentElement.children, dropElement);

    if (!this.source) {
      this.sourceIndex = dragIndex;
      this.source = drag.dropContainer;

      phElement.style.width = sourceElement.clientWidth + 'px';
      phElement.style.height = sourceElement.clientHeight + 'px';
      
      sourceElement.parentElement.removeChild(sourceElement);
    }

    this.targetIndex = dropIndex;
    this.target = drop;

    phElement.style.display = '';
    dropElement.parentElement.insertBefore(phElement, (dropIndex > dragIndex ? dropElement.nextSibling : dropElement));

    this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);
    return false;
  }
  
  getPointerPositionOnPage(event: MouseEvent | TouchEvent) {
    const point = _isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        const scrollPosition = this.viewportRuler.getViewportScrollPosition();
        return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top
        };
    }
}

function _indexOf(collection, node) {
  return Array.prototype.indexOf.call(collection, node);
};

function _isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
  return event.type.startsWith('touch');
};

function _isInsideDropListClientRect(dropList: CdkDropList, x: number, y: number) {
  const {top, bottom, left, right} = dropList.element.nativeElement.getBoundingClientRect();
  return y >= top && y <= bottom && x >= left && x <= right; 
};