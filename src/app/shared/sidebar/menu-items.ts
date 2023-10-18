import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/home',
        title: 'Inicio',
        icon: 'bi bi-house',
        class: '',
        extralink: false,
        submenu: [],
        role: ''
    },
    {
        path: '/services',
        title: 'Consultor',
        icon: 'bi bi-robot',
        class: '',
        extralink: false,
        submenu: [],
        role: ''
    },
    {
        path: '/requests',
        title: 'Solicitudes',
        icon: 'bi bi-patch-check',
        class: '',
        extralink: false,
        submenu: [],
        role: 'admin'
    },
    {
        path: '/users',
        title: 'Usuarios',
        icon: 'bi bi-people',
        class: '',
        extralink: false,
        submenu: [],
        role: 'admin'
    },
    /*
    {
      path: '/component/card',
      title: 'Card',
      icon: 'bi bi-card-text',
      class: '',
      extralink: false,
      submenu: []
    },
    {
      path: '/component/dropdown',
      title: 'Dropdown',
      icon: 'bi bi-menu-app',
      class: '',
      extralink: false,
      submenu: []
    },
    {
      path: '/component/pagination',
      title: 'Pagination',
      icon: 'bi bi-dice-1',
      class: '',
      extralink: false,
      submenu: []
    },
    {
      path: '/component/nav',
      title: 'Nav',
      icon: 'bi bi-pause-btn',
      class: '',
      extralink: false,
      submenu: []
    },
    {
      path: '/component/table',
      title: 'Table',
      icon: 'bi bi-layout-split',
      class: '',
      extralink: false,
      submenu: []
    },
    {
      path: '/about',
      title: 'About',
      icon: 'bi bi-people',
      class: '',
      extralink: false,
      submenu: []
    }
    */
];

export const ROUTES2: RouteInfo[] = [
    {
        path: '/profile',
        title: 'Mi Perfil',
        icon: 'bi bi-person',
        class: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/config',
        title: 'Configuración',
        icon: 'bi bi-gear',
        class: '',
        extralink: false,
        submenu: []
    },
];
