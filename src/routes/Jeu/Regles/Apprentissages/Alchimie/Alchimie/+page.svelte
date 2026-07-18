<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "spcialisations",
          "text": "Spécialisations",
          "level": 2
      },
      {
          "id": "cuisinier",
          "text": "Cuisinier",
          "level": 3
      },
      {
          "id": "invocateur",
          "text": "Invocateur",
          "level": 3
      },
      {
          "id": "potionniste",
          "text": "Potionniste",
          "level": 3
      },
      {
          "id": "fabrication",
          "text": "Fabrication",
          "level": 2
      },
      {
          "id": "fabrication",
          "text": "Fabrication",
          "level": 3
      },
      {
          "id": "difficult-par-ingrdient",
          "text": "Difficulté par ingrédient",
          "level": 3
      },
      {
          "id": "difficult-par-emplacement",
          "text": "Difficulté par emplacement",
          "level": 3
      },
      {
          "id": "prix-indicatifs-des-ingrdients-pa",
          "text": "Prix indicatifs des ingrédients (pa)",
          "level": 3
      },
      {
          "id": "rcolte",
          "text": "Récolte",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Alchimie</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Alchimie</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render spcialisations()}
		{@render fabrication()}
		{@render rcolte()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">L’alchimie a pour objectif de **transformer des composants en résultats**.\n>Les composants peuvent être de nature **minérale**, **végétale** ou **magique**.\n>Selon son savoir-faire et son procédé, un alchimiste peut produire des **substances**, des **objets consommables**, ou même des **formes de vie artificielles**.\n")}
{/snippet}

{#snippet spcialisations()}
	<section>
		<h2 id="spcialisations">{@html applyBase("Spécialisations")}</h2>

	{@render cuisinier()}
	{@render invocateur()}
	{@render potionniste()}
	</section>
{/snippet}

{#snippet cuisinier()}
	<section>
		<h3 id="cuisinier">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Cuisinier\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Cuisinier\" data-wiki-fragment=\"\">Cuisinier</a>")}</h3>
	{@html renderMarkdown("\nUn **Cuisinier** combine des ingrédients de rareté basse (déchets) sans effets apparents pour en tirer le meilleur.\nSes plats permettent de se nourrir tout en octroyant des bonus, le tout de façon économe.\n")}

	</section>
{/snippet}

{#snippet invocateur()}
	<section>
		<h3 id="invocateur">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" data-wiki-fragment=\"\">Invocateur</a>")}</h3>
	{@html renderMarkdown("\nUn **Invocateur** (également nommé _Transmutateur_ ou _Synthétiste_) insuffle la **magie vitale** dans les composants pour leur donner **forme et volonté**.\nSes œuvres peuvent aller de simples **familiers alchimiques** à de véritables **entités conscientes**, liées à leur créateur.\nL’invocateur se situe à la frontière entre l’alchimie et la magie ancienne, manipulant les lois de la vie plutôt que la matière seule.\n")}

	</section>
{/snippet}

{#snippet potionniste()}
	<section>
		<h3 id="potionniste">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Potionniste\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Potionniste\" data-wiki-fragment=\"\">Potionniste</a>")}</h3>
	{@html renderMarkdown("\nUn **Potionniste** combine différents ingrédients pour créer des **substances consommables**.\nSes créations prennent souvent la forme de **potions**, **pommades** ou **huiles**, capables d’altérer le corps, l’esprit ou l’environnement.\nSon art repose sur la précision, le dosage et la pureté des éléments employés.\n")}

	</section>
{/snippet}

{#snippet fabrication()}
	<section>
		<h2 id="fabrication">{@html applyBase("Fabrication")}</h2>

	{@render fabrication_2()}
	{@render difficultParIngrdient()}
	{@render difficultParEmplacement()}
	{@render prixIndicatifsDesIngrdientsPa()}
	</section>
{/snippet}

{#snippet fabrication_2()}
	<section>
		<h3 id="fabrication">{@html applyBase("Fabrication")}</h3>
	{@html renderMarkdown("\nS’il s’agit d’une préparation dont **le joueur ne connaît pas encore la recette**, il doit d’abord réussir le **<a href=\"%%BASE%%/Jeu/Regles/Mini-Jeux/Recherche Alchimique\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Mini-Jeux/Recherche Alchimique\" data-wiki-fragment=\"\">Recherche Alchimique</a>**.\n\nUne fois la recette connue, il peut tenter une **préparation** à l’aide d’un **jet de D20 + Niveau d'Alchimie**.\n\nPour réussir, le résultat final doit être **supérieur** à la **difficulté totale** de la création.\n\nLes **chances de réussite** dépendent :\n\n- du **niveau d’alchimie** du joueur,\n\n- du **nombre total d’ingrédients utilisés**,\n\n- et de la **rareté** de chacun d’eux.\n\n> Les malus de difficulté s’additionnent pour chaque ingrédient.\n")}

	</section>
{/snippet}

{#snippet difficultParIngrdient()}
	<section>
		<h3 id="difficult-par-ingrdient">{@html applyBase("Difficulté par ingrédient")}</h3>
	{@html renderMarkdown("\nA chaque montée de niveau d'alchimie, le joueur obtient 3 points à répartir dans une ou plusieurs rareté pour laquelle/lesquelles il gagnera de l'affinité, réduisant ainsi sa difficulté de 1 par point.\nLa difficulté va également baisser tous les 2 niveaux jusqu'au niveau 6.\n\n|                                       | Déchet | Commun | Peu commun | Rare  | Légendaire |\n| ------------------------------------- | ------ | ------ | ---------- | ----- | ---------- |\n| Niveau 0                              | 10     | 15     | 20         | 25    | 30         |\n| Niveau 2                              | 8      | 12     | 16         | 20    | 26         |\n| Niveau 4                              | 6      | 8      | 12         | 16    | 22         |\n| Niveau 6                              | 4      | 6      | 8          | 12    | 18         |\n| Amélioration maximale (score minimum) | 3 (1)  | 4 (2)  | 4 (4)      | 6 (6) | 10 (8)     |\n\n> A chaque fois que le joueur utilise un ingrédient, il réduit sa difficulté de 2 s'il réussit la fabrication, sinon il la réduit de 1.\n> A force d'utiliser un ingrédient il peut diminuer la difficulté jusqu'à 0 et réussir en permanence.\n\n> **Exemple :** un alchimiste de niveau 3 utilisant un ingrédient rare (20) et un commun (12) devrait faire 32.\n> Mais étant niveau 3, il a eu 9 points à répartir. Il en a mis 4 en commun (12-4) et 5 en rare (20-5), et doit donc faire un minimum 23 à son D20+3\n")}

	</section>
{/snippet}

{#snippet difficultParEmplacement()}
	<section>
		<h3 id="difficult-par-emplacement">{@html applyBase("Difficulté par emplacement")}</h3>
	{@html renderMarkdown("\nLes chances de réussite augmentent si le joueur travaille dans un **lieu dédié** à son travail (laboratoire stérile, cuisine).\nCes lieux peuvent être loués pour **1 journée**.\n\n| Lieu                                             | Bonus | Prix (pa)                         |\n| ------------------------------------------------ | ----- | --------------------------------- |\n| En pleine nature                                 | -     | -                                 |\n| Salle des Arvens                                 | -2    | 40 - 60                           |\n| Salle des Scienctes                              | -4    | 1 00 - 2 00                       |\n| Salle naturelle envigorée de magie aménagée      | -6    | 1 00 - 10% du prix de la création |\n| Occurrence rare d'alignement d'énergies magiques | -8    | -                                 |\n")}

	</section>
{/snippet}

{#snippet prixIndicatifsDesIngrdientsPa()}
	<section>
		<h3 id="prix-indicatifs-des-ingrdients-pa">{@html applyBase("Prix indicatifs des ingrédients (pa)")}</h3>
	{@html renderMarkdown("\n| Déchet     | Commun  | Peu Commun | Rare        | Légendaire   |\n| ---------- | ------- | ---------- | ----------- | ------------ |\n| 0.01 – 0.2 | 0.5 – 2 | 10 – 30    | 1 00 - 2 00 | 5 00 – 10 00 |\n")}

	</section>
{/snippet}

{#snippet rcolte()}
	<section>
		<h2 id="rcolte">{@html applyBase("Récolte")}</h2>
	{@html renderMarkdown("\nLors d’un voyage, une **journée de récolte** permet de découvrir divers composants.\nLe joueur lance :\n\n- **1D100** pour déterminer la **rareté** du matériau trouvé.\n\n- Pour connaître la **quantité** obtenue :\n\n    - D10 pour les déchets,\n\n    - D8 pour les communs,\n\n    - D6 pour les peu communs,\n\n    - D4 pour les rares,\n\n    - D2 pour les légendaires.\n\n- **1D4** pour connaître le type d'ingrédient parmi cette liste :\n\t- 1. des **minerais**,\n\n\t- 2. des **plantes**,\n\n\t- 3. des **champignons**,\n\n\t- 4. des **crystaux**.\n\n|                | Déchet | Commun  | Peu Commun | Rare     | Légendaire |\n| -------------- | ------ | ------- | ---------- | -------- | ---------- |\n| Alchimiste     | 1 - 30 | 31 - 60 | 61 - 85    | 86 - 96  | 97 - 100   |\n| Non Alchimiste | 1 - 50 | 51 - 90 | 91 - 97    | 98 - 100 | -          |")}

	</section>
{/snippet}
