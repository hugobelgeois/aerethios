<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "hit-points-hp",
          "text": "Hit Points (HP)",
          "level": 2
      },
      {
          "id": "actions",
          "text": "Actions",
          "level": 2
      },
      {
          "id": "motiver",
          "text": "Motiver",
          "level": 3
      },
      {
          "id": "attaquer",
          "text": "Attaquer",
          "level": 3
      },
      {
          "id": "se-concentrer",
          "text": "Se concentrer",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Combat</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Combat</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render hitPointsHp()}
		{@render actions()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("Idées basées sur Daggerheart :\nSpotlight :\nSi le MJ déclenche le combat normalement, il joue celui qui attaque, puis passe son tour aux joueurs.\nSi c'est une attaque surprise, il fait jouer tous les ennemis avant de passer aux joueurs.\nTant que les joueurs réussissent leurs jets, ils gardent leur tour (sauf s'ils créent une ouverture et que le MJ veut en profiter, ou que le MJ dépense 1 Fear pour prendre son tour)\n\nHope/Fear :\nGagner des Tokens :\n\n| MJ                | PC                                   |\n| ----------------- | ------------------------------------ |\n| Malus pour les PC | Long repos                           |\n| PC rate un jet    | Réussite critique                    |\n|                   | Nombres identiques sur multiples dés |\n\nUtiliser des Tokens :\n\n| MJ               | PC                    |\n| ---------------- | --------------------- |\n| Prendre son tour | aider un allié (+1d6) |\n| Action de boss   | Action de personnage  |\n")}
{/snippet}

{#snippet hitPointsHp()}
	<section>
		<h2 id="hit-points-hp">Hit Points (HP)</h2>
	{@html renderMarkdown("\nLes humanoïdes possèdent tous un **maximum de 50 HP** qui se régénèrent avec du repos (pour peu que la personne ait mangé récemment) ou de la magie.\n\nIls peuvent monter jusqu'à 100 HP pour une durée d'un jour si un plat avec des bons effets a été consommé.\n")}

	</section>
{/snippet}

{#snippet actions()}
	<section>
		<h2 id="actions">Actions</h2>

	{@render motiver()}
	{@render attaquer()}
	{@render seConcentrer()}
	</section>
{/snippet}

{#snippet motiver()}
	<section>
		<h3 id="motiver">Motiver</h3>
	{@html renderMarkdown(">Seulement au premier tour, seulement fait par un joueur.\n>Selon l'appréciation du MJ.\n\nMotiver son équipe pour lui donner un avantage/ Faire peur aux adversaires pour leur donner un désavantage (effet et durée selon le MJ)\n")}

	</section>
{/snippet}

{#snippet attaquer()}
	<section>
		<h3 id="attaquer">Attaquer</h3>
	{@html renderMarkdown(">Résultat - Défense (DR) = Dégâts au HP.\n\n| Mêlée                             | Distance                              | Magie                                | Requis |\n| --------------------------------- | ------------------------------------- | ------------------------------------ | ------ |\n| Dés d'arme<br>+Maîtrise           | Dés d'arme<br>+Maîtrise               | Dés de magie                         | >= AC  |\n| + Matériaux                       | + Matériaux                           | + Toiles Célestes                    | > DR   |\n| Style<br>*(multiplicateur final)* | Précision<br>*(multiplicateur final)* | Crystaux<br>*(multiplicateur final)* | -      |\n")}

	</section>
{/snippet}

{#snippet seConcentrer()}
	<section>
		<h3 id="se-concentrer">Se concentrer</h3>
	{@html renderMarkdown(">Prendre 10/20\n\nPrendre son temps (sans se faire perturber) pour réussir les DC de 10 (1 tour) / 20 (2 tours).\n\nPermet également de régénérer sa magie.")}

	</section>
{/snippet}
