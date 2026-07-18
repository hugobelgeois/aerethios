<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Recherche Alchimique</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Recherche Alchimique</h1>
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
	{@html renderMarkdown("> Ce <span class=\"wiki-unresolved\">Mini-Jeux</span> permet aux joueurs de fabriquer des potions ou des invocations afin d'avoir de nouvelles recettes à fabriquer plus rapidement dans le futur.\n> WIP\n")}
{/snippet}

{#snippet slectionDesIngrdients()}
	<section>
		<h2 id="slection-des-ingrdients">{@html applyBase("Sélection des ingrédients")}</h2>
	{@html renderMarkdown("\nLorsqu’on expérimente, la qualité des ingrédients influe sur la facilité d’en tirer le plein potentiel, mais aussi sur le risque de les perdre.\n\n**Modificateurs de difficulté :**\n\n| Déchet | Commun | Peu Commun | Rare | Légendaire |\n| ------ | ------ | ---------- | ---- | ---------- |\n| +10    | +8     | +6         | +4   | +2         |\n")}

	</section>
{/snippet}

{#snippet spcialInvocateur()}
	<section>
		<h2 id="spcial-invocateur">{@html applyBase("Spécial Invocateur")}</h2>
	{@html renderMarkdown("\nLes conditions extérieures modifient les chances de succès.\nChaque paramètre qui diffère d’un point de la condition optimale ajoute **+1** à la difficulté.\nLes conditions optimales sont décidées par le MJ à l’avance.\n\n|Facteur|Exemples de conditions possibles|\n|---|---|\n|Heure|00h – 06h – 12h – 18h – 00h|\n|Température|Froid – Normal – Chaud|\n|Météo|Fortes chutes – Légères chutes – Couvert – Dégagé|\n|État physique|Fatigué – Normal – Revigoré|\n\n> Exemple : si l’heure optimale est 00h mais que l’expérience a lieu à 12h, le joueur ajoute +2 à la difficulté.\n\n---\n")}

	</section>
{/snippet}

{#snippet modificateursSupplmentaires()}
	<section>
		<h2 id="modificateurs-supplmentaires">{@html applyBase("Modificateurs supplémentaires")}</h2>
	{@html renderMarkdown("\n- Hors laboratoire stérile : **+3** difficulté\n\n- En présence d’une source magique instable : **+2**\n\n- Avec assistance d’un autre alchimiste : **–1 par niveau de compétence du partenaire** (max –3)\n\n---\n")}

	</section>
{/snippet}

{#snippet rsolution()}
	<section>
		<h2 id="rsolution">{@html applyBase("Résolution")}</h2>
	{@html renderMarkdown("\nLe joueur lance :\n**1D20 + Mental + Concentration**\ncontre la **difficulté finale** calculée à partir des modificateurs ci-dessus.\n\n**Résultats possibles :**\n\n- **Réussite critique (20 naturel)** : découverte complète, ingrédient préservé.\n\n- **Réussite (≥ difficulté)** : résultat stable, ingrédient consommé.\n\n- **Échec (< difficulté)** : échec partiel, ingrédient perdu.\n\n- **Échec critique (1 naturel)** : explosion, intoxication ou invocation instable (décidé par le MJ).")}

	</section>
{/snippet}
