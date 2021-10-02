import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { DefaultState, FieldType, IField } from "../types/types";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-upsert-modal',
  templateUrl: './upsert-modal.component.html',
  styleUrls: ['./upsert-modal.component.scss']
})
export class UpsertModalComponent implements OnInit {
  readonly DefaultState = DefaultState;
  readonly FieldType = FieldType;

  @Input() field: IField | undefined = undefined;

  form = new FormGroup({
    type: new FormControl(null, [Validators.required]),
    defaultState: new FormControl(this.DefaultState.NONE, [Validators.required]),
    showInLeftSide: new FormControl(true, [Validators.required]),
    showInPortal: new FormControl(false, [Validators.required]),
    question: new FormControl(null, [Validators.required]),
  });

  get editMode(): boolean { return !!this.field; }

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    if (this.field) {
      this.form.setValue(this.field);
    }
  }

  onSaveClick(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      console.log('Nem valid a form');
      // TODO piros border a mezőkhöz, amelyik nem jó, stb.

      return;
    }

    this.activeModal.close({ type: 'save', value: this.form.getRawValue() });
  }

  onDeleteClick(): void {
    this.activeModal.close({ type: 'delete'});
  }
}
