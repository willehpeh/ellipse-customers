# Notes

### 2024-03-25
* on a décidé que les Factory resteraient dans la couche __domain__ 
  plutôt que la couche application
  * la création des objets Client nécessite de la logique métier et non de 
    la logique applicative
* les Factory génèrent les ID des Entities au moment de leur création
  * on n'a pas trouvé d'intérêt à déplacer cette création d'ID vers le haut
  * si un jour on décide de créer l'ID dans la base ou dans le front, on modifiera cette création
* on a choisi le terme Collaborator plutôt que Contact
* puisqu'un Collaborator peut être indépendant d'un Client (et même pourquoi pas déplacé d'un client à un autre),
  Collaborator sera un aggregate au même niveau que Client
