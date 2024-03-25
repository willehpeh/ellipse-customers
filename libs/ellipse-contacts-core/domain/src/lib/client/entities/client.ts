import { CompanyName } from '../value-objects/company-name';
import { Collaborator } from '../../collaborator/entities/collaborator';

export class Client {

  private readonly _companyName: CompanyName;
  private _collaborators: Collaborator[];

  get companyName(): string {
    return this._companyName.value;
  }

  get totalCollaborators(): number {
    return this._collaborators.length;
  }

  constructor(companyName: CompanyName) {
    this._companyName = companyName;
    this._collaborators = [];
  }
}
