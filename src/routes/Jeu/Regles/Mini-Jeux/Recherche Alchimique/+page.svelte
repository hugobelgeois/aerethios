<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "slection-des-ingrdients",
          "text": "Sélection des ingrédients",
          "level": 2
      },
      {
          "id": "spcial-invocateur",
          "text": "Spécial Invocateur",
          "level": 2
      },
      {
          "id": "modificateurs-supplmentaires",
          "text": "Modificateurs supplémentaires",
          "level": 2
      },
      {
          "id": "rsolution",
          "text": "Résolution",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Recherche Alchimique"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Recherche Alchimique"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render slectionDesIngrdients()}
		{@render spcialInvocateur()}
		{@render modificateursSupplmentaires()}
		{@render rsolution()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>Ce <span class=\"wiki-unresolved\">Mini-Jeux</span> permet aux joueurs de fabriquer des potions ou des invocations afin d'avoir de nouvelles recettes à fabriquer plus rapidement dans le futur.<br>WIP</blockquote>"}
{/snippet}

{#snippet slectionDesIngrdients()}
	<section>
		<h2 id="slection-des-ingrdients">{@html "Sélection des ingrédients"}</h2>
	{@html "<p>Lorsqu’on expérimente, la qualité des ingrédients influe sur la facilité d’en tirer le plein potentiel, mais aussi sur le risque de les perdre.</p>\n<p><strong>Modificateurs de difficulté :</strong></p>\n<div class=\"table-scroll\"><table><thead><tr><th>Déchet</th><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>+10</td><td>+8</td><td>+6</td><td>+4</td><td>+2</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet spcialInvocateur()}
	<section>
		<h2 id="spcial-invocateur">{@html "Spécial Invocateur"}</h2>
	{@html "<p>Les conditions extérieures modifient les chances de succès.<br>\nChaque paramètre qui diffère d’un point de la condition optimale ajoute <strong>+1</strong> à la difficulté.<br>\nLes conditions optimales sont décidées par le MJ à l’avance.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Facteur</th><th>Exemples de conditions possibles</th></tr></thead><tbody><tr><td>Heure</td><td>00h – 06h – 12h – 18h – 00h</td></tr><tr><td>Température</td><td>Froid – Normal – Chaud</td></tr><tr><td>Météo</td><td>Fortes chutes – Légères chutes – Couvert – Dégagé</td></tr><tr><td>État physique</td><td>Fatigué – Normal – Revigoré</td></tr></tbody></table></div>\n<blockquote>Exemple : si l’heure optimale est 00h mais que l’expérience a lieu à 12h, le joueur ajoute +2 à la difficulté.</blockquote>\n<hr>"}

	</section>
{/snippet}

{#snippet modificateursSupplmentaires()}
	<section>
		<h2 id="modificateurs-supplmentaires">{@html "Modificateurs supplémentaires"}</h2>
	{@html "<ul><li>Hors laboratoire stérile : <strong>+3</strong> difficulté</li></ul>\n<ul><li>En présence d’une source magique instable : <strong>+2</strong></li></ul>\n<ul><li>Avec assistance d’un autre alchimiste : <strong>–1 par niveau de compétence du partenaire</strong> (max –3)</li></ul>\n<hr>"}

	</section>
{/snippet}

{#snippet rsolution()}
	<section>
		<h2 id="rsolution">{@html "Résolution"}</h2>
	{@html "<p>Le joueur lance :<br>\n<strong>1D20 + Mental + Concentration</strong><br>\ncontre la <strong>difficulté finale</strong> calculée à partir des modificateurs ci-dessus.</p>\n<p><strong>Résultats possibles :</strong></p>\n<ul><li><strong>Réussite critique (20 naturel)</strong> : découverte complète, ingrédient préservé.</li></ul>\n<ul><li><strong>Réussite (≥ difficulté)</strong> : résultat stable, ingrédient consommé.</li></ul>\n<ul><li><strong>Échec (< difficulté)</strong> : échec partiel, ingrédient perdu.</li></ul>\n<ul><li><strong>Échec critique (1 naturel)</strong> : explosion, intoxication ou invocation instable (décidé par le MJ).</li></ul>"}

	</section>
{/snippet}
