<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "catgories",
          "text": "Catégories",
          "level": 2
      },
      {
          "id": "maniabilit",
          "text": "Maniabilité",
          "level": 3
      },
      {
          "id": "type",
          "text": "Type",
          "level": 3
      },
      {
          "id": "matriaux",
          "text": "Matériaux",
          "level": 2
      },
      {
          "id": "concentration",
          "text": "Concentration",
          "level": 3
      },
      {
          "id": "revtements",
          "text": "Revêtements",
          "level": 3
      },
      {
          "id": "infusions",
          "text": "Infusions",
          "level": 2
      },
      {
          "id": "entretien",
          "text": "Entretien",
          "level": 2
      },
      {
          "id": "effets-supplmentaires",
          "text": "Effets Supplémentaires",
          "level": 2
      },
      {
          "id": "magie",
          "text": "Magie",
          "level": 3
      },
      {
          "id": "styles",
          "text": "Styles",
          "level": 3
      },
      {
          "id": "huiles",
          "text": "Huiles",
          "level": 3
      },
      {
          "id": "enchantements",
          "text": "Enchantements",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Armes de mêlées - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Armes de mêlées - New</h1>
  </header>
  <div class="markdown-rendered">
		{@render catgories()}
		{@render matriaux()}
		{@render infusions()}
		{@render entretien()}
		{@render effetsSupplmentaires()}
  </div>
</article>

<LinkPreview />

{#snippet catgories()}
	<section>
		<h2 id="catgories">Catégories</h2>
	{@html renderMarkdown("> Dé + Modificateur >= AC --> Dégâts aux HP en déduisant la DR.\n")}
	{@render maniabilit()}
	{@render type()}
	</section>
{/snippet}

{#snippet maniabilit()}
	<section>
		<h3 id="maniabilit">Maniabilité</h3>
	{@html renderMarkdown("> Le prix de la main d'oeuvre (en plus des matériaux) est généralement de 5pa/jour.\n\n| Catégorie | Dé   | Dégâts (Multiplicateur Final) |                                                                    Propriétés                                                                     | Matériaux | Durée de fabrication |\n| --------- | ---- | :---------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: | --------: | -------------------: |\n| Courte    | 2d10 |              .5               | Ambidextre (peut jouer une deuxième fois avec l'arme dans son autre main)<br>Infiltration (Les Huiles s'appliquent peu importe la DR de la cible) |         1 |                  1 j |\n| 1 Main    | 2d8  |               1               |                                     Ambidextre (peut jouer une deuxième fois avec l'arme dans son autre main)                                     |         2 |                  2 j |\n| 2 Mains   | 2d6  |              1.5              |                                                   Destructrice (Double la dégradation de la DR)                                                   |         3 |                  4 j |\n")}

	</section>
{/snippet}

{#snippet type()}
	<section>
		<h3 id="type">Type</h3>
	{@html renderMarkdown("> Dégrade la DR d'une armure selon son poids (jusqu'à sa réparation).\n\n| Type       | Armure Légère | Intermédiaire | Lourde |\n| ---------- | ------------- | ------------- | ------ |\n| Contondant | 0             | 0             | -3     |\n| Tranchant  | -1            | -2            | 0      |\n")}

	</section>
{/snippet}

{#snippet matriaux()}
	<section>
		<h2 id="matriaux">Matériaux</h2>

	{@render concentration()}
	{@render revtements()}
	</section>
{/snippet}

{#snippet concentration()}
	<section>
		<h3 id="concentration">Concentration</h3>
	{@html renderMarkdown("> La concentration du métal dans les lingots utilisés.\n> Ne s'applique pas sur les armes qui ne possèdent pas de métal.\n> Les multiplicateurs s'arrondissent vers le bas.\n\n| Concentration | Dégâts | Prix<br>(Multiplicateur) | VS<br>(Multiplicateur) | Poids<br>(Multiplicateur) | Durée de fabricaton |\n| ------------- | :----: | -----------------------: | ---------------------- | :------------------------ | ------------------: |\n| 25%           |   6    |                        1 | 0                      | 0.5                       |                   - |\n| 50%           |   7    |                      1.5 | 1                      | 1                         |                 1 j |\n| 75%           |   8    |                        2 | 1.5                    | 1.5                       |                 3 j |\n| 100%          |   9    |                        4 | 2                      | 2                         |                 6 j |\n")}

	</section>
{/snippet}

{#snippet revtements()}
	<section>
		<h3 id="revtements">Revêtements</h3>
	{@html renderMarkdown("> Le métal qui aura un effet selon le type de créature qu'il pénétrera.\n> La propriété VS ne concerne que les armes Tranchantes.\n> La propriété VS confère un malus non cumulable aux lancés de dé de la cible pour le combat.\n\n| Matériau                  |                                  Effet                                   |   Prix/ unité | Poids/ unité |\n| ------------------------- | :----------------------------------------------------------------------: | ------------: | -----------: |\n| Os, griffes, écailles, .. | Effets magiques d'infusions +rareté<br>(ajoute la rareté au dé de magie) | 5 ^ rareté pa |      0.75 kg |\n| Cuivre                    |                              -1 VS Plantes                               |         50 pc |         2 kg |\n| Argent                    |                              -1 VS Hybrides                              |         50 pa |         2 kg |\n| Sombronce                 |                              -1 VS Naturels                              |          1 po |         1 kg |\n| Electrum                  |                              -1 VS Magiques                              |         10 po |         2 kg |\n| Or                        |                             -1 VS Mythiques                              |         50 po |         4 kg |\n| Platine                   |                             -1 Vs Humanoides                             |        500 po |         3 kg |\n| Fonte                     |                            -2 VS Nécrophages                             |          2 pa |       1.5 kg |\n| Fer                       |                               -2 VS Bêtes                                |         10 pa |         1 kg |\n| Bronze                    |                            -2 VS Insectoides                             |         25 pa |       1.5 kg |\n| Acier                     |                              -2 VS Mutants                               |         50 pa |         1 kg |\n| Titane                    |                            -2 VS Invocations                             |          1 po |       1.5 kg |\n| Mythril                   |                            -2 VS Elementaires                            |          5 po |         1 kg |\n| Palladium                 |                               -2 VS Anges                                |          7 po |         2 kg |\n| Adamantite                |                             -2 VS Draconides                             |          7 po |         2 kg |\n| Orichalque                |                               -2 VS Démons                               |         10 po |       2.5 kg |\n")}

	</section>
{/snippet}

{#snippet infusions()}
	<section>
		<h2 id="infusions">Infusions</h2>
	{@html renderMarkdown("> Utilise 1 Gemme pour altérer la structure de l'arme, et donc son utilisation.\n> Les effets permettent d'appliquer une magie offensive sur son arme (lancer son dé de magie pour déterminer les dégâts ajoutés, sans dépasser le maximum).\n> Les Gemmes de Crystal ne s'appliquent pas sur des armes courtes.\n\n| Matériau                                   | Dégâts | Modificateur                | Effets                                    | Huiles |  Prix | Durée de fabrication |\n| ------------------------------------------ | ------ | --------------------------- | ----------------------------------------- | ------ | ----: | -------------------: |\n| Gemme Brute                                | +5     | ---                         | ---                                       | Oui    | 10 pa |                  1 j |\n| Gemme Puissante                            | +10    | ---<br>Retire 1 dé à l'arme | ---                                       | Oui    | 30 pa |                  3 j |\n| Gemme Raffinée                             | -2     | Dextérité + Force           | ---                                       | Oui    | 20 pa |                  2 j |\n| Gemme Lourde                               | -2     | Force(Monk)                 | ---                                       | Oui    | 40 pa |                  2 j |\n| Gemme Tranchante                           | -2     | Dextérité(Ranger)           | ---                                       | Oui    | 40 pa |                  2 j |\n| Gemme Réfléchissante                       | -5     | Charisme(\\*)                | ---                                       | Oui    | 60 pa |                  2 j |\n| Gemme de Crystal I<br>(Feu, Foudre, ...)   | -2     | ---                         | Magie (niveau magique du joueur)<br>Max 4 | -      | 20 pa |                  2 j |\n| Gemme de Crystal II<br>(Feu, Foudre, ...)  | -4     | ---                         | Magie<br>Max 8                            | -      | 40 pa |                  4 j |\n| Gemme de Crystal III<br>(Feu, Foudre, ...) | -6     | ---                         | Magie<br>Max 12                           | -      | 80 pa |                  6 j |\n")}

	</section>
{/snippet}

{#snippet entretien()}
	<section>
		<h2 id="entretien">Entretien</h2>
	{@html renderMarkdown("> Une arme doit être entretenue régulièrement si on veut qu'elle soit toujours aussi efficace.\n> Les armes Contondantes ne se dégradent pas en dessous de Neuve.\n> Une arme ne peut jamais tomber sous 1 dégât.\n\n|                         | Resplendissante   | Neuve         | Usée          | Abîmée        | Critique |\n| ----------------------- | ----------------- | ------------- | ------------- | ------------- | -------- |\n| **Dégâts**              | +1                | 0             | -1            | -2            | -4       |\n| **Bonus**               | Avantage aux jets | -             | -             | -             | -        |\n| **Prix**                | 5 pa              | 50 pc         | -             | -             | -        |\n| **Durée d'Entretien**   | 1 j               | 1 h           | -             | -             | -        |\n| **Durée d'Utilisation** | 1 semaine         | 1d4+6 combats | 1d4+4 combats | 1d4+2 combats | -        |\n| **Prérequis**           | Forge             | Aiguisoir     | -             | -             | -        |\n")}

	</section>
{/snippet}

{#snippet effetsSupplmentaires()}
	<section>
		<h2 id="effets-supplmentaires">Effets Supplémentaires</h2>
	{@html renderMarkdown("> Les effets supplémentaires s'appliquent après avoir calculé les dégâts finaux.\n")}
	{@render magie()}
	{@render styles()}
	{@render huiles()}
	{@render enchantements()}
	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">Magie</h3>
	{@html renderMarkdown("> Nécessite des infusions de Gemmes de Crystal pour pouvoir imprégner l'arme de la magie concernée.\n> Les dégâts magiques ne sont pris en compte que si la cible ne possède pas de résistance.\n")}

	</section>
{/snippet}

{#snippet styles()}
	<section>
		<h3 id="styles">Styles</h3>
	{@html renderMarkdown("> En début de combat, le joueur peut lancer 1d10 + Maîtrise pour appliquer un seul style.\n> Si le jet réussit, l'effet est positif, sinon il est négatif.\n> Un style s'apprend et s'améliore auprès d'un Maître d'Arme.\n\n| **Jet >=**            |  6  |  9  | 13  | 17  |\n| --------------------- | :-: | :-: | :-: | :-: |\n| **Valeur de l'Effet** |  1  |  2  |  3  |  4  |\n\n| Style        | Effet                                                                                        | Arme                    |\n| ------------ | -------------------------------------------------------------------------------------------- | ----------------------- |\n| Offensif     | Dégâts                                                                                       | \\*                      |\n| Défensif     | DR                                                                                           | Contondant<br>Tranchant |\n| Briseur      | Dégâts DR                                                                                    | Contondant              |\n| Conservateur | Durée des huiles                                                                             | Tranchant               |\n| Contre       | Contre-attaque<br>si la cible fait **dé d'arme < 2 \\* Valeur ** et qu'elle ne passe pas l'AC | Courte                  |\n| Esquive      | AC                                                                                           | 1 Main                  |\n| Clash        | Désarme<br>si la cible fait **1d10 < Valeur + Force(Barbare)**                               | 2 Mains                 |\n")}

	</section>
{/snippet}

{#snippet huiles()}
	<section>
		<h3 id="huiles">Huiles</h3>
	{@html renderMarkdown("> Ajoute temporairement l'effet d'1 huile à votre arme (dure 1 combat).\n> Les huiles ne s'appliquent que sur les armes Tranchantes.\n> Se fabrique par un Alchimiste(Potionniste).\n\n| Afflictions    | Effets                | Durée   | Soins           | Cumulable              |  Prix | Durée de fabrication |\n| -------------- | --------------------- | ------- | --------------- | ---------------------- | ----: | -------------------: |\n| Saignement     | -2HP/ tour            | 3 tours | Gel cicatrisant | Oui                    | 10 pa |                  2 j |\n| Hémorragie     | -2HP/ action          | 2 tours | Gel cicatrisant | Oui<br>+Reset la durée | 25 pa |                  5 j |\n| Poison         | -1HP/ tour            | -       | Antipoison      | -                      | 10 pa |                  2 j |\n| Toxique        | -4HP/ action          | 2 tours | -               | -                      | 25 pa |                  5 j |\n| Nausée         | -2 à son dé d'attaque | 3 tours | -               | -                      | 10 pa |                  2 j |\n| Discombobulate | Dé d'attaque / 2      | -       | Repos Court     | -                      | 25 pa |                  5 j |\n| Aveuglement    |                       |         |                 |                        |       |                      |\n")}

	</section>
{/snippet}

{#snippet enchantements()}
	<section>
		<h3 id="enchantements">Enchantements</h3>
	{@html renderMarkdown("> Ajoute des effets uniques à l'arme.\n> Enchanter une arme possède un risque de la détruire ?\n\n| Enchantement | Effet                                                                        | Prix | Durée de fabrication |\n| ------------ | ---------------------------------------------------------------------------- | ---: | -------------------: |\n| Critique     | Permet de faire des coups critiques (les dégâts passent outre la DR)         | ? po |                 20 j |\n| Vampirique   | Récupère 4HP par coup qui passe outre la DR                                  | ? po |                 20 j |\n| Crystallique | Récupère 1MP par coup qui passe outre la DR si la cible possède des crystaux | ? po |                 20 j |\n| Solide       | L'arme ne se dégrade pas en dessous de \"Neuve\"                               | ? po |                 20 j |")}

	</section>
{/snippet}
