import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {CursosService} from "../cursos.service";

@Component({
  selector: 'app-cursos-detalhe',
  templateUrl: './cursos-detalhe.component.html',
  styleUrls: ['./cursos-detalhe.component.css']
})
export class CursosDetalheComponent implements OnInit, OnDestroy {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cursosServices: CursosService) {
  }

  ngOnInit() {
    this.inscricao = this.activatedRoute.params.subscribe(
      (value: any) => {
        this.id = value.id
        this.curso = this.cursosServices.getCurso(this.id);

        if (this.curso == null) {
          this.router.navigate(['nao-encontrado'])
        }

      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }


}
