import { ValueObject } from '../../common/value-object';

export class ClientId extends ValueObject<string> {
  private readonly id: string;

  override get value(): string {
    return this.id;
  }

  constructor() {
    super();
    const uuid = crypto.randomUUID();
    this.id = `CMPNY-${uuid}`;
  }
}
