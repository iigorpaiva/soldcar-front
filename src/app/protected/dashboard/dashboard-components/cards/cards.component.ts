import { Component, OnInit } from '@angular/core';

interface Patios {
  imageCapa: string;
  btn: string;
  patioNome: string
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  patios: Patios [] = [
    {
      imageCapa: "assets/images/u2.webp",
      btn: "warn",
      patioNome: "Parnamirim - RN"
    },
    {
      imageCapa: "assets/images/u2.webp",
      btn: "primary",
      patioNome: "Natal - RN"
    }
  ]

  getButtonClass(patioNome: string): string {
    if (patioNome === "Natal - RN") {
      return "custom-button-color-natal";
    } else if (patioNome === "Parnamirim - RN") {
      return "custom-button-color-parnamirim";
    } else {
      return ""; // Caso contrário, não aplique nenhuma classe
    }
  }

}
