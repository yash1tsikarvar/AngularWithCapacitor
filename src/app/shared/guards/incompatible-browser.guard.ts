import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class IncompatibleBrowserGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const browserInfo = this.getBrowserInfo();

        switch (browserInfo.name) {
            case 'Safari': {
                if (browserInfo.version <= 9) {
                    this.goToIncompatibleBrowserPage();
                    return false;
                }
                break;
            }

            case 'MSIE': {
                if (browserInfo.version <= 10) {
                    this.goToIncompatibleBrowserPage();
                    return false;
                }
                break;
            }

            case 'Chrome': {
                if (browserInfo.version <= 48) {
                    this.goToIncompatibleBrowserPage();
                    return false;
                }
                break;
            }                
        }

        return true;
    }

    goToIncompatibleBrowserPage() {
        this.router.navigate(['/incompatible-browser']).catch(console.log);
    }

    getBrowserInfo(): { name: string; version: number } {
        const ua = navigator.userAgent;
        let tem;
        let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return { name: 'IE ', version: tem[1] || '' };
        }

        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR\/(\d+)/);
            if (tem != null) {
                return { name: 'Opera', version: tem[1] };
            }
        }

        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];

        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
            M.splice(1, 1, tem[1]);
        }
        return {
            name: M[0],
            version: Number(M[1])
        };
    }
}
