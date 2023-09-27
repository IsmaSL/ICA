import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-slabs',
    templateUrl: './slabs.component.html',
    styleUrls: ['./slabs.component.scss']
})
export class SlabsComponent implements OnInit {

    opciones = [
        'Materiales', 'Elaboración', 'Cimbra', 'Firmes', 'Cal',
        'Cantidad', 'Grava', 'Herramientas', 'Escombro', 'Mezcla',
        'Cemento', 'Emparrillado', 'Andamio', 'Desechos', 'Varilla',
        'Evaluación', 'Arena', 'Colar', 'Tepezil', 'Cadena',
        'Resistencia', 'Agua', 'Personal', 'Desnivel', 'Arquitecto',
        'Medidas', 'Puntal', 'Aplanadores', 'Cotización', 'Ingeniero'
    ];

    opcionesSeleccionadas: string[] = [];

    constructor() { }

    ngOnInit(): void {
    }

    toggleOpcion(opcion: string) {
        if (this.opcionesSeleccionadas.includes(opcion)) {
            this.opcionesSeleccionadas = this.opcionesSeleccionadas.filter(item => item !== opcion);
        } else {
            this.opcionesSeleccionadas.push(opcion);
        }
    }

}
