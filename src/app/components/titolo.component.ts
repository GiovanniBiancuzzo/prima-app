import { Component } from "@angular/core";//importazione interfaccia component

@Component ({//metadata di component
  selector: 'app-titolo',
  template: `
    <h1 class="text-center">{{true ? nome : 'anonimo'}} ha {{anni}} anni e vive in {{getIndirizzo()}} </h1>
    <app-sottotitolo></app-sottotitolo>

    <input class="form-control" type="text" [(ngModel)]="nome">
    <input class="form-control" type="text" [(ngModel)]="nome2">
    <!--<input type="text" (input)="cambiaNome2($event)"></!-->

    <button class="btn btn-primary" (click)="cambiaUtente()" [disabled]="getVisualizza()">Cambia</button>

    <p>{{utente2}}</p>
  `,//interpolazione è one way
  styles: [`
    h1 {
      color: red;
  }`],
})

export class TitoloComponent {
  nome = 'Dario';
  anni = 18;

  utente2 = '';
  nome2 = '';

  visualizza = false;

    constructor() {
      setTimeout(() => {
        this.visualizza = false;/*property binding*/
      }, 4000);

    }
    getIndirizzo() {
        return 'Via Rossi'
      }

    getVisualizza() {
      return this.visualizza;
    }

    cambiaNome() {
      this.nome = 'Luca';
    }

    cambiaNome2(event:Event) {
      const target = <HTMLInputElement>event.target;
      console.log(target.value);
      this.nome = target.value;
    }

    cambiaUtente() {
      this.utente2 = `${this.nome2} è il più alto`;
    }
}
