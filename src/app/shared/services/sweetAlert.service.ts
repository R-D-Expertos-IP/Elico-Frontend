// import Swal from 'sweetalert2'
// declare var require: any;
// import { Injectable } from '@angular/core';

// interface paramMessage {
//   title: string;
//   text: string;
//   type: string;
//   showCancelButton: boolean;
//   confirmButtonColor: string;
//   cancelButtonColor: string;
//   confirmButtonText: string;
// }

// interface validationResponse {
//   dismiss: string;
//   isDismissed: boolean;
//   isConfirmed: boolean;
//   value: boolean;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class SweetAlertService {

//   constructor() { }

//   /**
//    *
//    * @param {paramMessage} paramMessage
//    * @returns Promise<boolean>
//    */
//   public async alertDeleteMessage(): Promise<boolean> {

//     const swalWithBootstrapButtons = Swal.mixin({
//       customClass: {
//         confirmButton: 'btn btn-primary',
//         cancelButton: 'btn btn-danger'
//       },
//       buttonsStyling: false,
//     })

//     return await swalWithBootstrapButtons.fire({
//       title: '¿Estás seguro?',
//       text: "¡No podrás revertir esto!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: '¡Sí, bórralo!',
//       cancelButtonText: 'Cancelar',

//     }).then((validation: any) => {
//       return validation.value ? true : false;
//     })
//   }

//   public async alertStatesMessage(): Promise<boolean> {
//     const swalWithBootstrapButtons = Swal.mixin({
//       customClass: {
//         confirmButton: 'btn btn-primary',
//         cancelButton: 'btn btn-danger'
//       },
//       buttonsStyling: false,
//     })

//     return await swalWithBootstrapButtons.fire({
//       title: '¿Estás seguro?',
//       text: "¡Vas a cambiar el estado!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Cambiar',
//       cancelButtonText: 'Cancelar'
//     }).then((validation: any) => {
//       return validation.value ? true : false;
//     })
//   }

//   public async alertDeleteSubSystemMessage(nameSubSystem: string): Promise<boolean> {
//     const swalWithBootstrapButtons = Swal.mixin({
//       customClass: {
//         confirmButton: 'btn btn-primary',
//         cancelButton: 'btn btn-danger'
//       },
//       buttonsStyling: false,
//     });

//     return await swalWithBootstrapButtons.fire({
//       title: '¿Estás Seguro?',
//       html: `¡Vas a eliminar el SubSistema: <h5> ${nameSubSystem}. </h5>
//              Esto eliminará los puntos de muestreo y los productos asociados.<br>
//              <strong style="color:#d42e42;">¡No podrás revertir esto!</strong>`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Eliminar',
//       cancelButtonText: 'Volver'
//     }).then((validation: any) => {
//       return validation.value ? true : false;
//     });
//   }

//   public async alertDeleteSystemMessage(nameSystem): Promise<boolean> {
//     const swalWithBootstrapButtons = Swal.mixin({
//       customClass: {
//         confirmButton: 'btn btn-primary',
//         cancelButton: 'btn btn-danger'
//       },
//       buttonsStyling: false,
//     });

//     return await swalWithBootstrapButtons.fire({
//       title: '¿Estás Seguro?',
//       html: `¡Vas a eliminar el Sistema: <h5> ${nameSystem} </h5>
//              Esto eliminará los SubSistemas, puntos de muestreo y los productos asociados.<br>
//              <strong style="color:#d42e42;">¡No podrás revertir esto!</strong>`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Eliminar',
//       cancelButtonText: 'Volver'
//     }).then((validation: any) => {
//       return validation.value ? true : false;
//     });
//   }

//   public async alertDeleteLineMessage(nameSystem): Promise<boolean> {
//     const swalWithBootstrapButtons = Swal.mixin({
//       customClass: {
//         confirmButton: 'btn btn-primary',
//         cancelButton: 'btn btn-danger'
//       },
//       buttonsStyling: false,
//     });

//     return await swalWithBootstrapButtons.fire({
//       title: '¿Estás Seguro?',
//       html: `¡Vas a eliminar la linea: <h5> ${nameSystem} </h5>
//              Esto eliminará el Sistema, los SubSistemas, puntos de muestreo y los productos asociados.<br>
//              <strong style="color:#d42e42;">¡No podrás revertir esto!</strong>`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Eliminar',
//       cancelButtonText: 'Volver'
//     }).then((validation: any) => {
//       return validation.value ? true : false;
//     });
//   }


//   public async alertProductVisitMessage(nameClient, nameSubSystem): Promise<boolean> {
//     const swalWithBootstrapButtons = Swal.mixin({
//       customClass: {
//         confirmButton: 'btn btn-primary'
//       },
//       buttonsStyling: false,
//     });

//     return await swalWithBootstrapButtons.fire({
//       title: `${nameClient}`,
//       html: `¡Los subsistemas: <h5> ${nameSubSystem} </h5>
//              no tienen dosificación, favor llenar la dosificación de cada uno, para poder realizar la visita`,
//       icon: 'warning',
//       confirmButtonText: 'Aceptar'
//     }).then(() => {
//       return true; // Siempre devuelve true ya que solo hay un botón
//     });
//   }











//   // /**
//   //  *
//   //  * @returns Promise<any>
//   //  */
//   // messageLoading(): any {
//   //   return Swal.fire({
//   //     title: 'Cambio de imagen',
//   //     html: 'Cambiando imagen...',
//   //     onBeforeOpen: () => {
//   //       Swal.showLoading()
//   //     },
//   //     onClose: () => { }
//   //   })
//   // }
// }
