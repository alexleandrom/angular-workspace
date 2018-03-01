import {Component, OnInit, OnDestroy} from "@angular/core";
import {CursosService} from "./cursos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos:any[];
  pagina:number;
  inscricao:Subscription;

  constructor(private cursosServices:CursosService,
              private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    this.cursos = this.cursosServices.getCursos();
    this.inscricao = this.route.queryParams.subscribe(queryParams => {
      this.pagina = queryParams['pagina']
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.router.navigate(['/cursos'], {queryParams: {'pagina' : ++this.pagina}})
  }

}
