import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { ROUTES2 } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    user: any;
    showMenu = '';
    showSubMenu = '';
    public sidebarnavItems: RouteInfo[] = [];
    public sidebarnavItemsProfile: RouteInfo[] = [];
    // this is for the open close
    addExpandClass(element: string) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    // End open close
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user') || '{}');
        this.sidebarnavItems = ROUTES.filter(item => !item.role || item.role === this.user.rol);
        this.sidebarnavItemsProfile = ROUTES2.filter(sidebarnavItemsProfile => sidebarnavItemsProfile);
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
}
