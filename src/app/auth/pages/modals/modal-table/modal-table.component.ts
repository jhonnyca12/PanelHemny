import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-table',
  templateUrl: './modal-table.component.html',
  styleUrls: ['./modal-table.component.css'],
})
export class ModalTableComponent implements OnInit {
  @Input() modalRef: any = {};
  @Input() user: any = {};
  @Input() position: number = 0;
  @Output() newData = new EventEmitter<any>();
  //output enviar la informacion y hacer la funcion cuando se guarde el modal para que envie la informacion a el formulario
  org: any;

  public userEdit: any = {
    name: '',
    lastName: '',
    direccion: '',
    directionTwo: '',
    country: '',
    city: '',
    postal: '',
    size: '',
    weight: '',
    checkTerms: false,
  };
  constructor() {}

  ngOnInit(): void {
    console.log(this.user);
    this.userEdit.name = this.user.name;
    this.userEdit.lastName = this.user.lastName;
    this.userEdit.direccion = this.user.direccion;
    this.userEdit.directionTwo = this.user.directionTwo;
    this.userEdit.country = this.user.country;
    this.userEdit.city = this.user.city;
    this.userEdit.postal = this.user.postal;
    this.userEdit.size = this.user.size;
    this.userEdit.weight = this.user.weight;
  }

  closeModal() {
    this.modalRef.close();
  }

  guardarInformacion() {
    console.log(this.userEdit);
    this.closeModalSave();
    this.newData.emit({ user: this.userEdit, position: this.position });
    console.log(this.newData);
  }

  closeModalSave() {
    this.modalRef.close();
  }
}
