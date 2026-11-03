<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Potionniste"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Potionniste"}</h1>
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
	{@html applyBase("<blockquote><strong>Potionniste</strong> est une spécialité de l'<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" data-wiki-fragment=\"\">Alchimie</a> qui combine différents ingrédients pour créer des <strong>substances consommables</strong>.</blockquote>")}
{/snippet}

{#snippet matriel()}
	<section>
		<h2 id="matriel">{@html "Matériel"}</h2>
	{@html "<p>Pour faire des concoctions, il faut disposer :</p>\n<ul><li>du <strong>matériel de base</strong>,</li><li><em>(poids total ≈ 10 kg, coût : 3 PO)</em></li></ul>\n<ul><li>d'un <strong>diluant</strong>,</li></ul>\n<ul><li>et des <strong>ingrédients nécessaires</strong> à la préparation.</li></ul>"}

	</section>
{/snippet}

{#snippet utilisationDesConcoctions()}
	<section>
		<h2 id="utilisation-des-concoctions">{@html "Utilisation des concoctions"}</h2>
	{@html "<p>Le <strong>diluant</strong> détermine <strong>comment la concoction s’applique</strong> et <strong>comment elle agit</strong>.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Diluant</th><th>Application</th><th>Effet principal</th></tr></thead><tbody><tr><td>Eau déionisée</td><td>À boire</td><td>Effet généralisé sur le corps</td></tr><tr><td>Huile</td><td>Sur une arme</td><td>Effet appliqué pendant 1 journée</td></tr><tr><td>Slime</td><td>Sur la peau</td><td>Effet ciblé et durable</td></tr><tr><td>Poudre noire</td><td>Jetée ou brûlée</td><td>Effet explosif ou de zone</td></tr></tbody></table></div>\n<blockquote>Toute création alchimique est une <strong>concoction</strong>.<br>Sa forme finale (potion, pommade, huile, poudre…) dépend du <strong>diluant</strong> utilisé.</blockquote>"}

	</section>
{/snippet}

{#snippet rsultatDeFabrication()}
	<section>
		<h2 id="rsultat-de-fabrication">{@html "Résultat de Fabrication"}</h2>
	{@html "<ul><li><strong>Réussite critique</strong> : la préparation est <strong>parfaite</strong> et <strong>produite en double</strong>.</li></ul>\n<ul><li><strong>Réussite</strong> : la préparation est <strong>créée normalement</strong>.</li></ul>\n<ul><li><strong>Échec</strong> : la préparation <strong>échoue</strong> et les ingrédients sont <strong>perdus</strong>.</li></ul>\n<ul><li><strong>Échec critique</strong> : une <strong>concoction mystère</strong> est créée.</li></ul>\n<blockquote>Une <strong>concoction mystère</strong> est instable et imprévisible.<br>Son effet exact est déterminé au moment de l’utilisation :<br>Lancez <strong>1d20</strong> →<br>• Résultat < 5 : effet <strong>négatif</strong><br>• Résultat > 15 : effet <strong>positif</strong><br>• Résultat 5 < 15 : effet <strong>aléatoire</strong><br>Plus on s’éloigne de 10, plus l’effet est <strong>puissant</strong>.<br>Il est possible de <strong>faire analyser</strong> la concoction contre un certain prix.</blockquote>"}

	</section>
{/snippet}

{#snippet consommationEtIntoxication()}
	<section>
		<h2 id="consommation-et-intoxication">{@html "Consommation et Intoxication"}</h2>
	{@html "<p>Chaque concoction consommée augmente l’<strong>intoxication</strong> du buveur.<br>\nLe seuil maximal tolérable pour un humain est <strong>100</strong>.<br>\nDormir réduit l’intoxication de <strong>50 points</strong>.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Rareté de l’ingrédient le plus rare</th><th>Intoxication</th></tr></thead><tbody><tr><td>Déchet</td><td>+0</td></tr><tr><td>Commun</td><td>+20</td></tr><tr><td>Peu commun</td><td>+40</td></tr><tr><td>Rare</td><td>+60</td></tr><tr><td>Légendaire</td><td>+80</td></tr></tbody></table></div>\n<blockquote>Au-delà de <strong>100</strong>, le joueur perd 10HP par pallier de 10 intoxications.</blockquote>\n<p>Il existe des potions rares qui réduisent l'intoxication de 100, mais elles divisent également les effets actifs par 2.</p>"}

	</section>
{/snippet}

{#snippet prixIndicatifParNombreDingrdientsPa()}
	<section>
		<h2 id="prix-indicatif-par-nombre-dingrdients-pa">{@html "Prix indicatif par nombre d'ingrédients (pa)"}</h2>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Objet</th><th>Déchet</th><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>Ingrédients</td><td>0.01 – 0.2</td><td>0.5 – 2</td><td>10 – 30</td><td>1 00 - 2 00</td><td>5 00 – 10 00</td></tr><tr><td>Concoction finie</td><td>0.01 – 0.2</td><td>1 – 5</td><td>30 – 1 00</td><td>5 00 – 10 00</td><td>40 00 – 80 00</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet typesDingrdientsEtEffets()}
	<section>
		<h2 id="types-dingrdients-et-effets">{@html "Types d’ingrédients et effets"}</h2>
	{@html "<p>Lorsqu’une concoction est fabriquée avec <strong>un seul ingrédient</strong>, son effet agit directement sur les <strong>statistiques du joueur</strong>.<br>\nCes effets durent <strong>1 jour</strong>, sauf mention contraire.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Force</th><th>Dextérité</th><th>Mental</th><th>Perception</th><th>Charisme</th><th>AC</th><th>Max HP</th></tr></thead><tbody><tr><td>Minerais</td><td>Plantes</td><td>Crystaux</td><td>Champignons</td><td>Morceaux de créatures</td><td></td><td></td></tr></tbody></table></div>\n<div class=\"table-scroll\"><table><thead><tr><th>Déchet</th><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>+0</td><td>+1</td><td>+2</td><td>+4</td><td>+6</td></tr></tbody></table></div>\n<blockquote>C’est en <strong>combinant plusieurs ingrédients</strong> que les effets deviennent <strong>plus complexes</strong>, ouvrant la voie à des <strong>concoctions expérimentales</strong> aux propriétés uniques.<br>Attention qu'à partir de 3 ingrédients, les effets deviennent <strong>instables</strong>.</blockquote>"}

	</section>
{/snippet}
