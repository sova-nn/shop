import {genID} from "./gen-id.generator";
import {Observable} from "rxjs";
import {Inject} from "@angular/core";

export class GeneratorService {
  generatorId: Observable<number>;

  constructor(@Inject(genID) genId: Observable<number>) {
    this.generatorId = genId;
  }

  generate(n: number): string {
    return Math.random().toString(36).substr(2, n);
  }

  getNewID(): Observable<number> {
    return this.generatorId;
  }
}
