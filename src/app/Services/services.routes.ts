import { RouterConfig } from '@angular/router';

import { TuneUpComponent } from './tuneup.component';
import { VirusRemovalComponent } from './virusremoval.component';
import { DesktopRepairComponent } from './desktoprepair.component';
import { LaptopRepairComponent } from './laptoprepair.component';
import { DataRecoveryComponent } from './datarecovery.component';
import { CablingComponent } from './cabling.component';

export const ServicesRoutes: RouterConfig = [
    { path: 'TuneUp', component: TuneUpComponent },
    { path: 'VirusRemoval', component: VirusRemovalComponent },
    { path: 'DesktopRepair', component: DesktopRepairComponent },
    { path: 'LaptopRepair', component: LaptopRepairComponent },
    { path: 'DataRecovery', component: DataRecoveryComponent },
    { path: 'Cabling', component: CablingComponent }
];
