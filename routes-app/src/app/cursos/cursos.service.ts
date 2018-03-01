import {Injectable} from '@angular/core';

@Injectable()
export class CursosService {

  constructor() {
  }

  getCursos() {
    return [
      {id: 1, name: 'Angular 2'},
      {id: 2, name: 'JAVA'},
      {id: 3, name: 'Angular 2'},
      {id: 4, name: 'JAVA'},
      {id: 5, name: 'Angular 2'},
      {id: 6, name: 'JAVA'},
      {id: 7, name: 'Angular 2'},
      {id: 8, name: 'JAVA'},
      {id: 9, name: 'Angular 2'},
      {id: 10, name: 'JAVA'},
      {id: 11, name: 'Angular 2'},
      {id: 12, name: 'JAVA'},
      {id: 13, name: 'Angular 2'},
      {id: 14, name: 'JAVA'},
    ]
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      if (cursos[i].id == id) {
        return cursos[i];
      }
    }
    return null;
  }

}
