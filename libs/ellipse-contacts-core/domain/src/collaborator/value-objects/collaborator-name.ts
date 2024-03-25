import { ValueObject } from '../../common/value-object';

export class CollaboratorName extends ValueObject<string> {
  private readonly name: string;

  get value(): string {
    return this.name;
  }

  constructor(name: string) {
    super();
    this.name = name;
  }
}
