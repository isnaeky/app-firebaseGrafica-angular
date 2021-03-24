import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styles: [],
})
export class VotarComponent implements OnInit {
  juegos: Game[] = [];
  constructor(private gameServices: GameService) {}
  bloquear: boolean = true;
  ngOnInit(): void {
    this.gameServices.getNominados().subscribe((resp) => {
      console.log(resp);
      this.juegos = resp;
    });
  }
  votar(id: string) {
    this.bloquear = false;
    this.gameServices.votarJuego(id).subscribe(
      (resp: any) => {
        this.bloquear = true;
        console.log(resp);
        if (resp.ok) {
          Swal.fire({
            title: 'Voto recibido',
            text: resp.mensaje,
            icon: 'success',
            confirmButtonText: 'Aceptar',
          });
        }
      },
      (error) => {
        this.bloquear = true;
        Swal.fire({
          title: 'Voto fallido',
          text: error.error.mensaje,
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    );
  }
}
