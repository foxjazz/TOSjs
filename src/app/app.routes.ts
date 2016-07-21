import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TodolistRoutes } from './todolist/index';
import { SimplebindRoutes } from './simplebind/index';
import { ServicesRoutes } from './services/index';
import { ContactRoutes } from './contact/index';
import { SmallBusinessRoutes } from './smallbusiness/index';
import { CustomBuiltRoutes } from './custombuilt/index';

const routes: RouterConfig = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...SimplebindRoutes,
    ...ServicesRoutes,
    ...ContactRoutes,
    ...SmallBusinessRoutes,
    ...CustomBuiltRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
