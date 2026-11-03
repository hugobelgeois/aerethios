<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Combat"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Combat"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render hitPointsHp()}
		{@render actions()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<p>Idées basées sur Daggerheart :<br>\nSpotlight :<br>\nSi le MJ déclenche le combat normalement, il joue celui qui attaque, puis passe son tour aux joueurs.<br>\nSi c'est une attaque surprise, il fait jouer tous les ennemis avant de passer aux joueurs.<br>\nTant que les joueurs réussissent leurs jets, ils gardent leur tour (sauf s'ils créent une ouverture et que le MJ veut en profiter, ou que le MJ dépense 1 Fear pour prendre son tour)</p>\n<p>Hope/Fear :<br>\nGagner des Tokens :</p>\n<div class=\"table-scroll\"><table><thead><tr><th>MJ</th><th>PC</th></tr></thead><tbody><tr><td>Malus pour les PC</td><td>Long repos</td></tr><tr><td>PC rate un jet</td><td>Réussite critique</td></tr><tr><td></td><td>Nombres identiques sur multiples dés</td></tr></tbody></table></div>\n<p>Utiliser des Tokens :</p>\n<div class=\"table-scroll\"><table><thead><tr><th>MJ</th><th>PC</th></tr></thead><tbody><tr><td>Prendre son tour</td><td>aider un allié (+1d6)</td></tr><tr><td>Action de boss</td><td>Action de personnage</td></tr></tbody></table></div>"}
{/snippet}

{#snippet hitPointsHp()}
	<section>
		<h2 id="hit-points-hp">{@html "Hit Points (HP)"}</h2>
	{@html "<p>Les humanoïdes possèdent tous un <strong>maximum de 50 HP</strong> qui se régénèrent avec du repos (pour peu que la personne ait mangé récemment) ou de la magie.</p>\n<p>Ils peuvent monter jusqu'à 100 HP pour une durée d'un jour si un plat avec des bons effets a été consommé.</p>"}

	</section>
{/snippet}

{#snippet actions()}
	<section>
		<h2 id="actions">{@html "Actions"}</h2>

	{@render motiver()}
	{@render attaquer()}
	{@render seConcentrer()}
	</section>
{/snippet}

{#snippet motiver()}
	<section>
		<h3 id="motiver">{@html "Motiver"}</h3>
	{@html "<blockquote>Seulement au premier tour, seulement fait par un joueur.<br>Selon l'appréciation du MJ.</blockquote>\n<p>Motiver son équipe pour lui donner un avantage/ Faire peur aux adversaires pour leur donner un désavantage (effet et durée selon le MJ)</p>"}

	</section>
{/snippet}

{#snippet attaquer()}
	<section>
		<h3 id="attaquer">{@html "Attaquer"}</h3>
	{@html "<blockquote>Résultat - Défense (DR) = Dégâts au HP.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Mêlée</th><th>Distance</th><th>Magie</th><th>Requis</th></tr></thead><tbody><tr><td>Dés d'arme<br>+Maîtrise</td><td>Dés d'arme<br>+Maîtrise</td><td>Dés de magie</td><td>>= AC</td></tr><tr><td>+ Matériaux</td><td>+ Matériaux</td><td>+ Toiles Célestes</td><td>> DR</td></tr><tr><td>Style<br><em>(multiplicateur final)</em></td><td>Précision<br><em>(multiplicateur final)</em></td><td>Crystaux<br><em>(multiplicateur final)</em></td><td>-</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet seConcentrer()}
	<section>
		<h3 id="se-concentrer">{@html "Se concentrer"}</h3>
	{@html "<blockquote>Prendre 10/20</blockquote>\n<p>Prendre son temps (sans se faire perturber) pour réussir les DC de 10 (1 tour) / 20 (2 tours).</p>\n<p>Permet également de régénérer sa magie.</p>"}

	</section>
{/snippet}
