import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  products: ProducStore[];
  listaVacia = false;

  constructor(){
    this.products = [
      new ProducStore("Teclado", 7),
      new ProducStore("Mouse", 3),
      new ProducStore("CPU", 5),
      new ProducStore("GPU", 9),
      new ProducStore("Monitor", 6),
      new ProducStore("Impresora", 2),
      new ProducStore("Fuente de poder", 4),
      new ProducStore("Cooler", 1)
    ];
  }
}

class ProducStore{
  nombre: string = "";
  cantidad: number = 0;

  constructor(nombre: string, cantidad: number){
    this.nombre = nombre;
    this.cantidad = cantidad
  }
}