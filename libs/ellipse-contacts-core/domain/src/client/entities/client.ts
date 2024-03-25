import { CompanyName } from '../value-objects/company-name';
import { Collaborator } from '../../collaborator/entities/collaborator';
import { Entity } from '../../common/entity';
import { ClientId } from '../value-objects/client-id';

export class Client extends Entity<ClientId> {

  private readonly _companyName: CompanyName;
  private _collaborators: Collaborator[];

  get companyName(): string {
    return this._companyName.value;
  }

  get totalCollaborators(): number {
    return this._collaborators.length;
  }

  constructor(clientId: ClientId, companyName: CompanyName) {
    super(clientId);
    this._companyName = companyName;
    this._collaborators = [];
  }
}
