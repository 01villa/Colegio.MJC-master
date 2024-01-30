import { Component } from '@angular/core';

@Component({
  selector: 'app-f',
  standalone: true,
  imports: [],
  templateUrl: './f.component.html',
  styleUrl: './f.component.css'
})
export class FComponent {
    // 🧠 Lógica del componente (TypeScript)
    isOpen: boolean = true; // Estado inicial de la ventana: cerrada
    // 🔄 Función para abrir/cerrar la ventana
    toggleWindows() {
    this.isOpen = !this.isOpen;
    console.log(`La ventana está ahora ${this.isOpen ? 'abierta' :
    'cerrada'}.`);
    }

}
