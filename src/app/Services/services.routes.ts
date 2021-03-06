﻿import { RouterConfig } from '@angular/router';

import { TuneUpComponent } from './tuneup.component';
import { CleanComponent } from './clean.component';
import { DesktopRepairComponent } from './desktoprepair.component';
import { LaptopRepairComponent } from './laptoprepair.component';
import { DataRecoveryComponent } from './datarecovery.component';
import { CablingComponent } from './cabling.component';

export const ServicesRoutes: RouterConfig = [
    { path: 'TuneUp', component: TuneUpComponent },
    { path: 'Clean', component: CleanComponent },
    { path: 'DesktopRepair', component: DesktopRepairComponent },
    { path: 'LaptopRepair', component: LaptopRepairComponent },
    { path: 'DataRecovery', component: DataRecoveryComponent },
    { path: 'Cabling', component: CablingComponent }
];
