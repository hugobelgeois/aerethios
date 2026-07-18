<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "matriel",
          "text": "Matériel",
          "level": 2
      },
      {
          "id": "utilisation-des-concoctions",
          "text": "Utilisation des concoctions",
          "level": 2
      },
      {
          "id": "rsultat-de-fabrication",
          "text": "Résultat de Fabrication",
          "level": 2
      },
      {
          "id": "consommation-et-intoxication",
          "text": "Consommation et Intoxication",
          "level": 2
      },
      {
          "id": "prix-indicatif-par-nombre-dingrdients-pa",
          "text": "Prix indicatif par nombre d'ingrédients (pa)",
          "level": 2
      },
      {
          "id": "types-dingrdients-et-effets",
          "text": "Types d’ingrédients et effets",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Potionniste</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Potionniste</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render matriel()}
		{@render utilisationDesConcoctions()}
		{@render rsultatDeFabrication()}
		{@render consommationEtIntoxication()}
		{@render prixIndicatifParNombreDingrdientsPa()}
		{@render typesDingrdientsEtEffets()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("> **Potionniste** est une spécialité de l'<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" data-wiki-fragment=\"\">Alchimie</a> qui combine différents ingrédients pour créer des **substances consommables**.\n")}
{/snippet}

{#snippet matriel()}
	<section>
		<h2 id="matriel">Matériel</h2>
	{@html renderMarkdown("\nPour faire des concoctions, il faut disposer :\n\n- du **matériel de base**,\n\t- _(poids total ≈ 10 kg, coût : 3 PO)_\n\n- d'un **diluant**,\n\n- et des **ingrédients nécessaires** à la préparation.\n")}

	</section>
{/snippet}

{#snippet utilisationDesConcoctions()}
	<section>
		<h2 id="utilisation-des-concoctions">Utilisation des concoctions</h2>
	{@html renderMarkdown("\nLe **diluant** détermine **comment la concoction s’applique** et **comment elle agit**.\n\n|Diluant|Application|Effet principal|\n|---|---|---|\n|Eau déionisée|À boire|Effet généralisé sur le corps|\n|Huile|Sur une arme|Effet appliqué pendant 1 journée|\n|Slime|Sur la peau|Effet ciblé et durable|\n|Poudre noire|Jetée ou brûlée|Effet explosif ou de zone|\n\n> Toute création alchimique est une **concoction**.\n> Sa forme finale (potion, pommade, huile, poudre…) dépend du **diluant** utilisé.\n")}

	</section>
{/snippet}

{#snippet rsultatDeFabrication()}
	<section>
		<h2 id="rsultat-de-fabrication">Résultat de Fabrication</h2>
	{@html renderMarkdown("\n- **Réussite critique** : la préparation est **parfaite** et **produite en double**.\n\n- **Réussite** : la préparation est **créée normalement**.\n\n- **Échec** : la préparation **échoue** et les ingrédients sont **perdus**.\n\n- **Échec critique** : une **concoction mystère** est créée.\n\n> Une **concoction mystère** est instable et imprévisible.\n> Son effet exact est déterminé au moment de l’utilisation :\n> Lancez **1d20** →\n> • Résultat < 5 : effet **négatif**\n> • Résultat > 15 : effet **positif**\n> • Résultat 5 < 15 : effet **aléatoire**\n> Plus on s’éloigne de 10, plus l’effet est **puissant**.\n> Il est possible de **faire analyser** la concoction contre un certain prix.\n")}

	</section>
{/snippet}

{#snippet consommationEtIntoxication()}
	<section>
		<h2 id="consommation-et-intoxication">Consommation et Intoxication</h2>
	{@html renderMarkdown("\nChaque concoction consommée augmente l’**intoxication** du buveur.\nLe seuil maximal tolérable pour un humain est **100**.\nDormir réduit l’intoxication de **50 points**.\n\n| Rareté de l’ingrédient le plus rare | Intoxication |\n| ----------------------------------- | ------------ |\n| Déchet                              | +0           |\n| Commun                              | +20          |\n| Peu commun                          | +40          |\n| Rare                                | +60          |\n| Légendaire                          | +80          |\n\n> Au-delà de **100**, le joueur perd 10HP par pallier de 10 intoxications.\n\nIl existe des potions rares qui réduisent l'intoxication de 100, mais elles divisent également les effets actifs par 2.\n")}

	</section>
{/snippet}

{#snippet prixIndicatifParNombreDingrdientsPa()}
	<section>
		<h2 id="prix-indicatif-par-nombre-dingrdients-pa">Prix indicatif par nombre d'ingrédients (pa)</h2>
	{@html renderMarkdown("\n| Objet            | Déchet     | Commun  | Peu Commun | Rare         | Légendaire    |\n| ---------------- | ---------- | ------- | ---------- | ------------ | ------------- |\n| Ingrédients      | 0.01 – 0.2 | 0.5 – 2 | 10 – 30    | 1 00 - 2 00  | 5 00 – 10 00  |\n| Concoction finie | 0.01 – 0.2 | 1 – 5   | 30 – 1 00  | 5 00 – 10 00 | 40 00 – 80 00 |\n")}

	</section>
{/snippet}

{#snippet typesDingrdientsEtEffets()}
	<section>
		<h2 id="types-dingrdients-et-effets">Types d’ingrédients et effets</h2>
	{@html renderMarkdown("\nLorsqu’une concoction est fabriquée avec **un seul ingrédient**, son effet agit directement sur les **statistiques du joueur**.\nCes effets durent **1 jour**, sauf mention contraire.\n\n| Force    | Dextérité | Mental   | Perception  | Charisme              | AC  | Max HP |\n| -------- | --------- | -------- | ----------- | --------------------- | --- | ------ |\n| Minerais | Plantes   | Crystaux | Champignons | Morceaux de créatures |     |        |\n\n| Déchet | Commun | Peu Commun | Rare | Légendaire |\n| ------ | ------ | ---------- | ---- | ---------- |\n| +0     | +1     | +2         | +4   | +6         |\n\n> C’est en **combinant plusieurs ingrédients** que les effets deviennent **plus complexes**, ouvrant la voie à des **concoctions expérimentales** aux propriétés uniques.\n> Attention qu'à partir de 3 ingrédients, les effets deviennent **instables**.")}

	</section>
{/snippet}
