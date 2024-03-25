import { CompanyName } from './value-objects/company-name';

export class Client {

  private readonly _companyName: CompanyName;

  get companyName(): string {
    return this._companyName.value;
  }

  constructor(companyName: CompanyName) {
    this._companyName = companyName;
  }
}
