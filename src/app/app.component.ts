import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {FooterComponent} from './shared/footer.component';
import { CONSTANTS, NavbarComponent } from './shared';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    directives: [NavbarComponent, ROUTER_DIRECTIVES, FooterComponent]
})
export class AppComponent {
    public appBrand: string;

    constructor() {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
    }
}
