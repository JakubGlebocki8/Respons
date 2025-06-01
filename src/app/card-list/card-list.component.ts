import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  cards = [
    { title: 'Dashboard', description: 'Przegląd danych i statystyk' },
    { title: 'Użytkownicy', description: 'Zarządzanie użytkownikami systemu' },
    { title: 'Raporty', description: 'Generowanie raportów PDF i Excel' },
    { title: 'Ustawienia', description: 'Personalizacja ustawień aplikacji' },
    { title: 'Powiadomienia', description: 'System alertów i powiadomień' },
    { title: 'Pomoc', description: 'FAQ, kontakt i dokumentacja' },
  ];
}
