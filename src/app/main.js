"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var index_1 = require('./provider/index');
var app_providers_1 = require('./app.providers');
var app_component_1 = require('./app.component');
if (ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    index_1.VENDOR_PROVIDERS,
    app_providers_1.APP_PROVIDERS
]);
//# sourceMappingURL=main.js.map