## Principales
>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).
>Double le modificateur des jets selon la situation.

| Compétence | Situation                                           |
| ---------- | --------------------------------------------------- |
| Athlétisme | Effort physique prolongé (escalade, nage, lutte, …) |
| Barbare    | Puissance (soulever, pousser, porter, bloquer, …)   |
| Monk       | Combat                                              |
| Paladin    | Résistance et contrôle de zone                      |

## Secondaires
>Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).
>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.

| **Principale** | Secondaire   | Description                                                                                                                                                                                          |
| -------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Athlétisme** | Mule         | Ajoute 10 * Force(Athlétisme) à la charge maximale                                                                                                                                                   |
|                | Momentum     | Charger un ennemi lui inflige (5% * Force(Athlétisme)) de votre poids total                                                                                                                          |
| **Barbare**    | Destructeur  | Permet de casser ce qui ne devrait pas l'être (avec confirmation du MJ)                                                                                                                              |
|                | Bourrin      | Les attaques font toujours Force(Barbare) de dégâts au HP, même si la DR n'est pas atteinte                                                                                                          |
| **Monk**       | Martial      | Permet d'utiliser la maîtrise à 1 main avec les armes à 2 mains, et inversément                                                                                                                      |
|                | Bagarre      | Pour chaque point de Force, augmente le dé de dégâts à mains nues<br>Ajoute le matériau de l'armure aux dégâts finaux<br>*1d4 -> 1d6 -> 1d8 -> 1d10 -> 1d12 (double les dés si Force(Monk) = [6-10]* |
| **Paladin**    | Impénétrable | DR + (2 * Force(Paladin))                                                                                                                                                                            |
|                | Muraille     | Les ennemis s'attaquent au joueur<br>Pour chaque attaque reçue, augmente les dégâts finaux de sa prochaine attaque par sa Force(Paladin)                                                             |

## Finales
>Le joueur en choisi 1 lorsque l'attribut atteint 20.

| Compétence   | Description                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cafard       | + 1x par repos sécurisé, si sa vie tombe entre -50 et 0 HP, lui permet de récupérer (1d4 * 10) HP<br>- Désavantage à tous ses jets jusqu'au prochain repos sécurisé |
| Matérialiste | + Les dégâts font descendre la DR avant les HP<br>- Impossible d'achever une entité                                                                                 |

#### idea

| Compétence          | Coût |  Empêche   | Description                                                                                                                                                                                                        |
| ------------------- | :--: | :--------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cafard              |  12  | Pacifique  | 1x par repos sécurisé, si la vie du joueur tombe entre -50 et 0 HP, lui permet de récupérer (1d4 * 10) HP                                                                                                          |
| Athlétisme          |  8   |  Obésité   | Double le modificateur de Force                                                                                                                                                                                    |
| Bourrin             |  8   |            | Ajoute la Force aux dégâts finaux de son arme                                                                                                                                                                      |
| Rage                |  8   |            | 1x par combat, triple la Force mais retire la même valeur en HP                                                                                                                                                    |
| Grosse Berta        |  6   |            | Permet de lancer un objet dont le poids <= charge maximale<br>Dégâts à la cible = poids - (20 par m de distance)<br>Dégâts à l'objet = Dégâts à la cible / 2                                                       |
| Brise Armure        |  6   |            | Si la cible a du métal (armure\|bouclier), ajoute la Force aux dégâts finaux                                                                                                                                       |
| Acharnement         |  6   |            | Si la cible est au sol, ajoute la Force et le poids de l'arme aux dégâts finaux                                                                                                                                    |
| Guts                |  6   |            | Permet d'utiliser la maîtrise à 1 main avec une arme à 2 mains, et donc de la tenir à 1 main<br>*L'autre main ne peut rien porter pendant ce temps*                                                                |
| Momentum            |  4   |            | Charger un ennemi lui inflige (5% * Force) de votre poids total                                                                                                                                                    |
| Impénétrable        |  4   |            | DR + (2 * Force)                                                                                                                                                                                                   |
| Mule                |  4   |            | Ajoute (10 * Force) à la charge maximale                                                                                                                                                                           |
| Seconde peau        |  4   |            | Poids de l'armure équipée réduit de (5% * Force)                                                                                                                                                                   |
| Destructeur         |  2   |            | Avantage pour casser des objets ou des structures                                                                                                                                                                  |
| Bagarre             |  2   |            | Pour chaque point de Force, augmente le dé de dégâts à mains nues<br>Si l'armure est en métal, ajoute le matériau aux dégâts finaux<br>*1d4 -> 1d6 -> 1d8 -> 1d10 -> 1d12* (Ajoute un deuxième dé avec Athlétisme) |
| Faible              |  -2  |    Mule    | Réduit votre charge maximale de 25%                                                                                                                                                                                |
| Atrophie musculaire |  -4  |    Mule    | Réduit votre charge maximale de 50%                                                                                                                                                                                |
| Nerd                |  -6  |    Mule    | Réduit votre charge maximale de 75%                                                                                                                                                                                |
| Obésité             |  -8  | Athlétisme | Retire la Force pour les jets de Force                                                                                                                                                                             |
| Matérialiste        | -20  |   Cafard   | Impossible d'achever une entité<br>Les dégâts font descendre la DR plutôt que les HP (tant qu'il reste des DR)                                                                                                     |

---

## Athlétisme

[1-5] Modificateur lors d'un effort physique prolongé ou soudain.

### Destructeur
>Nécessite Athlétisme 5

Avantage pour casser des objets ou des structures.

## Mule

[1-4] Charge maximale + 20kg par point.

### Grosse Berta
>Nécessite Mule 4

Permet de lancer une chose pesant maximum 50% de la charge maximale (Mule compris). La cible touchée prend des dégâts équivalent au poids de l'objet. L'objet lancé prends des dégâts équivalent à la moitié de son poids.

## Impénétrable

[1-5] Le joueur gagne 1 point d'Impénétrable (DR).

### Cafard
>Nécessite Impénétrable 5

1x par long repos, si la vie du joueur tombe à 0, lui permet de lancer 1d4 * 10 de HP à récupérer.