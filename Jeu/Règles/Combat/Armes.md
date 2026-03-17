## Dégâts
>L'arme permet de se focaliser sur les dégâts rapides (vs AC) ou les dégâts lourds (vs DR).
>Utiliser la faiblesse de l'ennemi ne prend en compte que 50% de sa DR.

Exemple avec X = 12 (Orichalque)

| Modifications |            Courte            |           1 Main            |           2 Mains           |            Haste             |             Arcs             |          Arbalètes          |         Armes à feu         |
| :------------ | :--------------------------: | :-------------------------: | :-------------------------: | :--------------------------: | :--------------------------: | :-------------------------: | :-------------------------: |
| Léger/ Petit  |              -               | 3d8 +12<br>[15-36 -> 39-60] | 4d4 +18<br>[22-34 -> 38-50] |  4d6 +6<br>[10-30 -> 34-54]  |              -               | 3d8 +12<br>[15-36 -> 39-60] | 4d4 +18<br>[22-34 -> 38-50] |
| Normal        | 2d12 +12<br>[14-36 -> 38-60] | 2d8 +24<br>[26-40 -> 42-56] | 3d4 +36<br>[39-48 -> 51-60] | 3d6 +12<br>[15-30 -> 33-48]  | 2d12 +12<br>[14-36 -> 38-60] | 2d8 +24<br>[26-40 -> 42-56] | 3d4 +36<br>[39-48 -> 51-60] |
| Lourd/ Grand  | 1d12 +24<br>[25-36 -> 38-60] | 1d8 +36<br>[37-44 -> 45-52] | 2d4 +48<br>[50-56 -> 58-64] | 2d6 +24<br>[26-36 -> 38-48]  | 1d12 +24<br>[25-36 -> 38-60] | 1d8 +36<br>[37-44 -> 45-52] | 2d4 +48<br>[50-56 -> 58-64] |
| Colossal      |              -               |              -              | 1d4 +72<br>[73-76 -> 77-80] | 1d6 + 48<br>[49-54 -> 55-60] |              -               |              -              | 1d4 +72<br>[73-76 -> 77-80] |

Critiques -> Permet de relancer un dé qui a fait le maximum pour cumuler les points
Le maximum de relance dépend de l'enchantement de Nirina

### Armes
>Mêlée: dé >= AC -> DR - (dé +X) = Dégâts au HP
>? Distance ? : 1d20 +Dex +Maîtrise >= AC -> DR - dégâts = Dégâts au HP
>X = Matériau

Si le dé de dégâts atteint l'AC de la cible, on déduit de DR la somme du dé et de X, et ce qui reste réduit les HP.

| Catégorie   | Dégâts  | Prix main d'œuvre |                            Propriétés                            | Matériaux |
| ----------- | ------- | ----------------: | :--------------------------------------------------------------: | --------: |
| Courte      | 2d12 +X |              5 pa | [[Propriétés#Léger\|Léger]]<br>[[Propriétés#Critique\|Critique]] |         1 |
| 1 Main      | 2d8 +2X |             10 pa |                   [[Propriétés#Léger\|Léger]]                    |         2 |
| 2 Mains     | 3d4 +3X |             20 pa |                               ---                                |         3 |
| Haste       | 3d6 +X  |             40 pa |                  [[Propriétés#Portée\|Portée]]                   |         5 |
| Arcs        | 2d12 +X |  5 * Puissance pa |                               ---                                |         1 |
| Arbalètes   | 2d8 +2X | 20 * Puissance pa |                    [[Propriétés#Lent\|Lent]]                     |         2 |
| Armes à feu | 3d4 +3X |  1 * Puissance po |                [[Propriétés#Instable\|Instable]]                 |         3 |

### Modifications

| Léger/ Petit                    | Normal | Lourd/ Grand                | Colossal                    |
| :------------------------------ | :----: | :-------------------------- | :-------------------------- |
| -1 Matériau                     |  ---   | +1 Matériaux                | +3 Matériaux                |
| Dextérité > 14 pour s'en servir |  ---   | Force > 14 pour s'en servir | Force > 17 pour s'en servir |
| +1 dé +Dextérité(Ranger), X/2   |  ---   | -1 dé +Force(Monk), +X      | -2 dés +Force, +3X          |

### Enchantements

Enchanter une arme permet d'augmenter son dé de dégâts.

Si une arme est en métal, seuls les [[Enchanteur#Nirina|Enchantements de Nirina]] sont efficaces. -> Permettent de faire des coups critiques

Si une arme est en os, seul les [[Enchanteur#Ovliin|Enchantements d'Ovliin]] sont efficaces (en plus de lui ajouter un effet magique).

### Spécificités

|                 |         Styles          |            Précision            |
| --------------- | :---------------------: | :-----------------------------: |
| **Type d'arme** |     Armes de mêlée      |        Armes à distance         |
| **Condition**   |   Niveau de maîtrise    | Jet supérieur au double de l'AC |
| **Résultat**    | Multiplicateur du style |        Double les dégâts        |

## Matériaux
>La propriété VS ajoute un dé de dégâts lorsque l'attaque touche le bon type de cible (ne s'applique pas sur les armes à distance).

### Principaux

**Effets**
    + Se répare dans une forge/ avec la magie de métal

| Matériau   |   Prix/ unité |      Dégâts      |          Propriétés           | Poids/ unité |
| ---------- | ------------: | :--------------: | :---------------------------: | -----------: |
| Os         | 5 ^ rareté pa | rareté (1-5) + 2 | Enchantements élémentaires x2 |      0.75 kg |
| Fonte      |          2 pa |        3         |        VS Nécrophages         |       1.5 kg |
| Fer        |         10 pa |        4         |           VS Bêtes            |         1 kg |
| Bronze     |         25 pa |        5         |        VS Insectoides         |       1.5 kg |
| Acier      |         50 pa |        6         |          VS Mutants           |         1 kg |
| Titane     |          1 po |        7         |        VS Invocations         |       1.5 kg |
| Mythril    |          5 po |        8         |        VS Elementaires        |         1 kg |
| Palladium  |          7 po |        10        |           VS Anges            |         2 kg |
| Adamantite |          7 po |        10        |         VS Draconides         |         2 kg |
| Orichalque |         10 po |        12        |           VS Démons           |       2.5 kg |

#### Revêtements
>Le revêtement retire les propriétés du matériau principal et applique le sien à la place.

| Matériau  | Prix/ unité |  Propriétés   | Poids/ unité |
| --------- | ----------: | :-----------: | -----------: |
| Cuivre    |       50 pc |  VS Plantes   |         2 kg |
| Argent    |       50 pa |  VS Hybrides  |         2 kg |
| Sombronce |        1 po |  VS Naturels  |         1 kg |
| Electrum  |       10 po |  VS Magiques  |         2 kg |
| Or        |       50 po | VS Mythiques  |         4 kg |
| Platine   |      500 po | Vs Humanoides |         3 kg |

### Munitions

Les munitions utilisées avec une arme à distance possèdent leur propre propriété.

| Type       | Prix/ unité | Arme                    |                         Propriétés                         | Nombre de munition/ matériau |
| ---------- | ----------: | :---------------------- | :--------------------------------------------------------: | :--------------------------: |
| Minerai    |          -- | Tout                    |                            ---                             |           2d4 +12            |
| Plomb      |        5 pa | Tout                    |                         Antimagie                          |           2d6 + 8            |
| Crystal    |        1 po | Tout                    |    [[Afflictions#Surcharge\|Surcharge]]<br>5 munitions     |           2d4 + 2            |
| Potion     |          -- | Tout                    |                Zone d'effet de 5ft de rayon                |              1               |
| Tissu      |       10 pa | Armes à corde           |                          Enflammé                          |           2d6 + 8            |
| Obsidienne |             | Armes à corde           |           [[Propriétés#Lacération\|Lacération]]            |           2d6 + 8            |
| Shrapnel   |       20 pa | Armes à feu             | [[Propriétés#Lacération\|Lacération]]<br>Portée Max = 10ft |            2d4 +4            |
| Boulet     |       50 pa | Armes à feu<br>(lourde) |    La cible touchée est [[Conditions#Couché\|Couchée]]     |              1               |