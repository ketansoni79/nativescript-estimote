import { Observable } from 'tns-core-modules/data/observable';
import { Estimote } from 'nativescript-estimote';

export class HelloWorldModel extends Observable {
  public message: string;
  private estimote: Estimote;

  constructor() {
    super();

    this.estimote = new Estimote();
    this.message = this.estimote.message;
  }
}
