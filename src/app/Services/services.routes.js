"use strict";
var tuneup_component_1 = require('./tuneup.component');
var virusremoval_component_1 = require('./virusremoval.component');
var desktoprepair_component_1 = require('./desktoprepair.component');
var laptoprepair_component_1 = require('./laptoprepair.component');
var datarecovery_component_1 = require('./datarecovery.component');
var cabling_component_1 = require('./cabling.component');
exports.ServicesRoutes = [
    { path: 'TuneUp', component: tuneup_component_1.TuneUpComponent },
    { path: 'VirusRemoval', component: virusremoval_component_1.VirusRemovalComponent },
    { path: 'DesktopRepair', component: desktoprepair_component_1.DesktopRepairComponent },
    { path: 'LaptopRepair', component: laptoprepair_component_1.LaptopRepairComponent },
    { path: 'DataRecovery', component: datarecovery_component_1.DataRecoveryComponent },
    { path: 'Cabling', component: cabling_component_1.CablingComponent }
];
//# sourceMappingURL=services.routes.js.map