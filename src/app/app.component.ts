import { Component } from '@angular/core';
import { DefaultState, FieldType, IField } from './types/types';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UpsertModalComponent } from "./upsert-modal/upsert-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly DefaultState = DefaultState;
  readonly FieldType = FieldType;

  fields: IField[] = [
    { type: FieldType.SIMPLE, defaultState: DefaultState.NO, showInLeftSide: true, showInPortal: false, question: 'Hajlamos-e ájulásra?' },
    { type: FieldType.EXTRA, defaultState: DefaultState.NONE, showInLeftSide: true, showInPortal: false, question: 'Igen / nem mező?' }
  ];

  constructor(private modalService: NgbModal) {

  }

  onOpenModalClick(index: number): void {
    const modalRef = this.modalService.open(UpsertModalComponent);
    modalRef.componentInstance.field = index > -1 ? this.fields[index] : undefined;

    modalRef.result.then((result) => {
      console.log(result)
      if (result.type === 'save') {
        if (index > -1) {
          this.fields[index] = result.value;
        } else {
          this.fields.push(result.value);
        }
      }

      if (result.type === 'delete') {
        this.fields.splice(index, 1);
      }
    }, () => {
      console.log('Dismissed')
    });
  }
}
