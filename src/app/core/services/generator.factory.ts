import {GeneratorService} from "./generator";
import {InjectionToken} from "@angular/core";

export function GeneratorFactory (n: number): (service: GeneratorService) => string {
  return (service: GeneratorService) => service.generate(n);
}
export const generatedString = new InjectionToken('generatedString');
