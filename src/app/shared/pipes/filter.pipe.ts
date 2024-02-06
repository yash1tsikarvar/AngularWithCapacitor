import { I } from '@angular/cdk/keycodes';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();



    return value.filter(function(application){

      let applicationId;

      if(application.pendingApplicationId) {
        applicationId = application.pendingApplicationId
      } else {
        applicationId = application.applicationId
      }

      if(applicationId.toString().includes(args)) {
        return application
      }

      if(application.buildingName){
        if(application.buildingName.toLowerCase().includes(args)) {
          return application
        }
      }

      if(application.applicantFullName) {
        if(application.applicantFullName.toLowerCase().includes(args)) {
          return application
        }
      }

      if(application.address) {
        if(application.address.toLowerCase().includes(args)) {
          return application
        }
      }


      // return JSON.stringify(application).toLowerCase().includes(args);

    });
}
}
