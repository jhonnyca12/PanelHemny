import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTableComponent } from '../modals/modal-table/modal-table.component';

@Component({
  selector: 'app-table-dashboard',
  templateUrl: './table-dashboard.component.html',
  styleUrls: ['./table-dashboard.component.css'],
})
export class TableDashboardComponent implements OnInit {
  @Input() arrayHijo: any = [];
  searchText = '';
  updatedUser: any;

  borrarItem(index: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.arrayHijo.splice(index, 1);
      }
    });
  }
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {}

  openModelEdit(currentUser: any, position: number) {
    let modalRef = this.modalService.open(ModalTableComponent, {
      windowClass: 'default-modal',
      size: 'lg',
      centered: true,
    });
    modalRef.componentInstance.modalRef = modalRef;
    modalRef.componentInstance.user = currentUser;
    modalRef.componentInstance.position = position;
    modalRef.componentInstance.newData.subscribe((updatedUser: any) => {
      console.log('esta es la data desde el padre,', updatedUser);
      this.insertUser(updatedUser.user, position);
    });
  }

  insertUser(updatedUser: any, position: number) {
    this.arrayHijo.splice(position, 1, updatedUser); // inserta el usuario actualizado en la posición especificada
  }

  filterByName(items: any[], value: string): any[] {
    return items.filter(item => 
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.lastName.toString().toLowerCase().includes(value.toLowerCase())
    );
  }
  filterUsers() {
    const originalArray = [...this.arrayHijo];
    this.arrayHijo = this.filterByName(originalArray, this.searchText);
    console.log(this.arrayHijo);
  }
}
