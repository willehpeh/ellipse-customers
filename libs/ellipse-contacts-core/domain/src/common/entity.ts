import { ValueObject } from './value-object';

export abstract class Entity<T extends ValueObject<string>> {

  private readonly _id: T;

  get id(): string {
    return this._id.value;
  }

  protected constructor(id: T) {
    this._id = id;
  }
}
