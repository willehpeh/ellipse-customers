import { ValueObject } from '../../common/value-object';

export class CompanyName extends ValueObject<string> {

  private readonly _companyName: string;

  get value(): string {
    return this._companyName;
  }

  constructor(companyName: string) {
    super();
    this._companyName = companyName.toLocaleUpperCase();
  }
}
