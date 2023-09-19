import { trigger, transition, animate, style } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(100px)' }),
    animate('350ms ease-in', style({ opacity: 1, transform: 'translateY(0px)' })),
  ]),
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(o)' }),
    animate('350ms ease-out', style({ opacity: 0, transform: 'translateY(100px)' })),
  ]),
]);
