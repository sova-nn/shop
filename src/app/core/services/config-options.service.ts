import {Injectable} from "@angular/core";

export interface ConfigModel {
  id: number,
  login: string,
  email: string,

}

@Injectable({
  providedIn: 'root',
})
export class ConfigOptionsService {
  private configuration: ConfigModel;

  setConfig(config: Partial<ConfigModel>): void {
    this.configuration = {...this.configuration, ...config}
  }

  getConfig(): ConfigModel {
    return this.configuration;
  }
}
