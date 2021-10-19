import {Observable, Subscription, timer} from "rxjs";

export function genID(): Subscription {
  return timer(0, 1000).subscribe(() => Math.floor(Math.random()*100));
}
