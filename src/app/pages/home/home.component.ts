import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  results: any[] = [];
  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    //peticion a firebase para traer una collection en tiempo real tipo sockets
    this.db
      .collection('goty')
      .valueChanges()
      .pipe(
        //operador map para retornar una respuesta personalizada no todo el objetos
        map((resp: Game[]) => {
          //retorna los valores name y votos y los convierte a name y value asigna los votos
          return resp.map(({ name, votos }) => ({ name, value: votos }));
        })
      )
      .subscribe((resp) => {
        console.log(resp);
        this.results=resp;
      });
  }
}
