import { ValueObject } from '../../common/value-object';

export class ClientId extends ValueObject<string> {
  private readonly id: string;

  override get value(): string {
    return this.id;
  }

  constructor() {
    super();
    const uuid = crypto.randomUUID();
    this.id = `CLIENT-${uuid}`;
  }

  static regExp(): RegExp {
    return /^CLIENT-[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89ABab][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
  }
}
