import { CollaboratorName } from '../value-objects/collaborator-name';

export class Collaborator {

  private _firstName: CollaboratorName;
  private _lastName: CollaboratorName;

  get firstName(): string {
    return this._firstName.value;
  }

  get lastName(): string {
    return this._lastName.value;
  }

  constructor(firstName: CollaboratorName, lastName: CollaboratorName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
}
