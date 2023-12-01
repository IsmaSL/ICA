import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss'],
    providers: [NgbModalConfig, NgbModal],
})
export class ResultsComponent implements OnInit {

    textArea: string = '';
    isLoading: boolean = true;

    constructor(config: NgbModalConfig,
                private modalService: NgbModal,) {
        config.backdrop = 'static';
        config.keyboard = false;
        config.centered = false;
        config.animation = true;
        config.size = "lg"
    }

    ngOnInit(): void {
        this.textArea = 'Construcción de una losa para la barra de la cocina con las medidas 125cm de ancho, '
                       +'240cm de largo y 5cm de altura; utilizando materiales básicos como: cemento, arena, varilla 3/4 y '
                       +'porcelanato... (ver más)'; 

        this.change_var();
    }

    open(content: any) {
        this.modalService.open(content);
    }

    change_var() {
        setTimeout(() => {
            this.isLoading = false;
        }, 3000);
    }

}
