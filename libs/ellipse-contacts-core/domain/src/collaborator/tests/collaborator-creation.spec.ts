import { Collaborator } from '../entities/collaborator';
import { CollaboratorName } from '../value-objects/collaborator-name';

describe('Creating Collaborators', () => {
  it('should create a collaborator with the correct first and last names', () => {
    const firstName = new CollaboratorName('John');
    const lastName = new CollaboratorName('Doe');
    const collaborator = new Collaborator(lastName, firstName);

    expect(collaborator.firstName).toBe(firstName.value);
    expect(collaborator.lastName).toBe(lastName.value);
  });
});
