import {InjectionToken} from "@angular/core";

export interface ConstantsModel {
  App: string,
  Ver: string,
  API_URL: string,
}

export const consts: ConstantsModel = { App: "TaskManager", Ver: "1.0", API_URL: "http://..." };

export const ConstantsService: InjectionToken<ConstantsModel> = new InjectionToken<ConstantsModel>('Constants');
