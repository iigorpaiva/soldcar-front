import { Component, OnInit } from '@angular/core';

interface activity {
  time: string;
  ringColor: string;
  message: string;
}

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.scss']
})
export class AtividadesComponent implements OnInit {

  activity: activity [] = [
    {
      time: "09.50",
      ringColor: "ring-success",
      message: "Encontro com Igor",
    },
    {
      time: "09.46",
      ringColor: "ring-primary",
      message: "Pagamento recebido de Marcos R$: 385,90",
    },
    {
      time: "09.47",
      ringColor: "ring-info",
      message: "Reunião de projeto",
    },
    {
      time: "09.48",
      ringColor: "ring-warning",
      message: "Nova venda registrada: Gol (OXO 5B27)",
    },
    {
      time: "09.49",
      ringColor: "ring-danger",
      message: "Pagamento recebido de Anderson",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
