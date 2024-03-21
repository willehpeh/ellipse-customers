# Contexts

## Customer relationship management
* scheduling
* contact information
* relationship history
* mailing

### Entities
* Client - root entity
* ProspectiveClient
* Contact
* Appointment
* MailingCampaign

### Value Objects
* Participant
* ClientEvent - sale, quote, conversation, mail

## Product management
* pricing
* details
* sales history

### Entities
* Product - aggregate root?

### Value Objects
* ProductEvent - sale, modification
* StockStatus

## Invoicing + payment
* quote + invoice generation
* payment methods

### Entities
* SalesDocument - aggregate root?
* Payment

### Value Objects
