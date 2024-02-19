import { Injectable } from '@angular/core';
import { HelpscoutUserModel } from '../../shared/definitions/models/helpscout-user.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class HelpscoutService {

  user: HelpscoutUserModel;
  constructor() {}

  initBeacon() {
    window['Beacon']('init', environment.helpscout.beaconId);

    window['Beacon']('config', {
      "enableFabAnimation": true,
      "color": "#2196f3",      
      "display": {
        "style": "icon",
        "iconImage": "question",
        "position": "right",
        
      },
    });
  }

  identifyLoggedInUser(user: HelpscoutUserModel) {
    this.user = user;
    window['Beacon']('identify', user);
  }

  prefillAppId(appId: string) {
    window['Beacon']('prefill', {
      subject: 'AppId-' + appId + ': ',
      name: this.user ? this.user.name : '',
      email: this.user ? this.user.email : '',
      text: '',
      fields: []
    });
  }

  reset() {
    window['Beacon']('reset');
  }

  logout() {
    window['Beacon']('logout');
  }

}
