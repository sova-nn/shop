import {Component, Inject, Optional} from "@angular/core";
import {ConfigOptionsService} from "../core/services/config-options.service";
import {ConstantsModel, ConstantsService} from "../core/services/constant.service";
import {GeneratorService} from "../core/services/generator";
import {Observable} from "rxjs";
import {LocalStorageService} from "../core/services/local-storage.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  constructor(
    @Optional() @Inject(ConfigOptionsService) configOptions: ConfigOptionsService,
    @Optional() @Inject(ConstantsService) constants: ConstantsModel,
    @Optional() @Inject(GeneratorService) generator: () => Observable<number>,
    @Optional() @Inject(LocalStorageService) localStorage: Storage,
  ) {}


}
