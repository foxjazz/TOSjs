import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TodolistRoutes } from './todolist/index';
import { SimplebindRoutes } from './simplebind/index';
import { ServicesRoutes } from './services/index';
import { ContactRoutes } from './contact/index';

const routes: RouterConfig = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...SimplebindRoutes,
    ...ServicesRoutes,
    ...ContactRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
