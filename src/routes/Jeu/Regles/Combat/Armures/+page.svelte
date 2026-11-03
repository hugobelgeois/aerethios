<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "ac-total",
          "text": "AC total",
          "level": 2
      },
      {
          "id": "matriaux",
          "text": "Matériaux",
          "level": 2
      },
      {
          "id": "tissus-et-fourrures",
          "text": "Tissus et Fourrures",
          "level": 3
      },
      {
          "id": "cuirs-et-peaux",
          "text": "Cuirs et Peaux",
          "level": 3
      },
      {
          "id": "cailles-et-os",
          "text": "Écailles et Os",
          "level": 3
      },
      {
          "id": "mtaux",
          "text": "Métaux",
          "level": 3
      },
      {
          "id": "boucliers",
          "text": "Boucliers",
          "level": 4
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Armures"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Armures"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render acTotal()}
		{@render matriaux()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>AC (Armor Class) = Mobilité d'esquive naturelle<br>DR (Damage Reduction) = Réduction des dégâts</blockquote>"}
{/snippet}

{#snippet acTotal()}
	<section>
		<h2 id="ac-total">{@html "AC total"}</h2>
	{@html "<blockquote>AC total = AC + Modificateurs</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Tissu</th><th>Cuir, Peaux, Écailles, Os et Mailles (métal)</th><th>Plate (métal)</th></tr></thead><tbody><tr><td>Dextérité(Acrobatie)</td><td>Dextérité(Acrobatie)</td><td>-</td></tr><tr><td>+ Crystaux (max = Mental)</td><td></td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet matriaux()}
	<section>
		<h2 id="matriaux">{@html "Matériaux"}</h2>
	{@html "<blockquote>Le prix de main d'œuvre vaut 10% du prix des tous les matériaux requis.<br>Une armure nécessite 24 matériaux pour être fabriquée.<br>Sans armure, l'AC de base est de 18.<br>Faiblesse = 50% DR<br>Les HP ne se régénèrent pas naturellement lorsqu'une armure est équipée.</blockquote>"}
	{@render tissusEtFourrures()}
	{@render cuirsEtPeaux()}
	{@render caillesEtOs()}
	{@render mtaux()}
	</section>
{/snippet}

{#snippet tissusEtFourrures()}
	<section>
		<h3 id="tissus-et-fourrures">{@html "Tissus et Fourrures"}</h3>
	{@html applyBase("<p><strong>Effets</strong></p>\n<ul><li><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#suraja\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Suraja\">Enchantements de Suraja</a></li><li>Pendant son tour, le joueur peut convertir des crystaux en AC (1:1, Max = Mental / 4)</li></ul>\n<p>\t  Il perd ce bonus une fois touché</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Matériau</th><th>AC</th><th>DR</th><th>Prix</th><th>Propriétés</th><th>Poids (kg)</th></tr></thead><tbody><tr><td>Coton</td><td>18</td><td>2</td><td>10 pa</td><td>Air = 2 crystaux bonus par attaque</td><td>0.25</td></tr><tr><td>Chanvre</td><td>18</td><td>2</td><td>10 pa</td><td>Eau = 2 crystaux bonus par attaque</td><td>0.25</td></tr><tr><td>Lin</td><td>18</td><td>2</td><td>10 pa</td><td>Roche = 2 crystaux bonus par attaque</td><td>0.25</td></tr><tr><td>Soie</td><td>18</td><td>2</td><td>10 pa</td><td>Lumière = 2 crystaux bonus par attaque</td><td>0.25</td></tr><tr><td>Suède/ Daim</td><td>18</td><td>2</td><td>10 pa</td><td>Ténèbres = 2 crystaux bonus par attaque</td><td>0.25</td></tr><tr><td>Laine</td><td>18</td><td>2</td><td>10 pa</td><td>Foudre = 2 crystaux bonus par attaque</td><td>0.25</td></tr><tr><td>Cachemire</td><td>16</td><td>3</td><td>25 pa</td><td>Elétistes = 1 crystal gratuit par action</td><td>0.25</td></tr><tr><td>Alpaga</td><td>16</td><td>3</td><td>25 pa</td><td>Croitistes = 1 crystal gratuit par action</td><td>0.25</td></tr><tr><td>Fourrure</td><td>16</td><td>3</td><td>40 pa</td><td>Fusion = 1 crystal gratuit par action</td><td>0.25</td></tr></tbody></table></div>\n<blockquote>Les crystaux bonus par attaque nécessite d'en consommer au moins 1 pour s'appliquer (ex : 1 consommer +2 gratuits).</blockquote>")}

	</section>
{/snippet}

{#snippet cuirsEtPeaux()}
	<section>
		<h3 id="cuirs-et-peaux">{@html "Cuirs et Peaux"}</h3>
	{@html applyBase("<blockquote>Faiblesse : Tranchant</blockquote>\n<p><strong>Effets</strong></p>\n<ul><li><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#kothula\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Kothula\">Enchantements de Kothula</a></li><li>Se répare auprès d'un tanneur</li></ul>\n<blockquote>La rareté varie entre 1 et 5 (Déchet, Commun, Peu commun, Rare, Légendaire)</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Matériau</th><th>AC</th><th>DR</th><th>Prix</th><th>Propriétés</th><th>Poids (kg)</th></tr></thead><tbody><tr><td>Peau</td><td>14</td><td>2 * rareté</td><td>2 ^ rareté pa</td><td>Résiste à <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#saignement\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Saignement%5C\">Saignement</a></td><td>0.5</td></tr><tr><td>Cuir (bouilli)</td><td>12</td><td>3 * rareté</td><td>4 ^ rareté pa</td><td>Résiste à <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#poison\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Poison%5C\">Poison</a></td><td>0.5</td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet caillesEtOs()}
	<section>
		<h3 id="cailles-et-os">{@html "Écailles et Os"}</h3>
	{@html applyBase("<blockquote>Faiblesse : Perforant</blockquote>\n<p><strong>Effets</strong></p>\n<ul><li><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#ovliin\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Ovliin\">Enchantements d'Ovliin</a></li><li>Se répare auprès d'un potionniste</li><li>Désavantage en Dextérité (Discrétion)</li><li>Désavantage en Magies en combat</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Matériau</th><th>AC</th><th>DR</th><th>Prix</th><th>Force >=</th><th>Propriétés</th><th>Poids (kg)</th></tr></thead><tbody><tr><td>Écaille</td><td>10</td><td>4 * rareté</td><td>6 ^ rareté pc</td><td>2 * rareté</td><td>Résistance aux conditions</td><td>0.75</td></tr><tr><td>Os</td><td>8</td><td>5 * rareté</td><td>8 ^ rareté pc</td><td>3 * rareté</td><td>1 invulnérabilité magique</td><td>0.75</td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet mtaux()}
	<section>
		<h3 id="mtaux">{@html "Métaux"}</h3>
	{@html applyBase("<blockquote>Faiblesse : Contondant</blockquote>\n<p><strong>Effets</strong></p>\n<ul><li><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#nirina\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Nirina\">Enchantements de Nirina</a></li><li>Se répare dans une forge/ avec la magie de métal</li><li>Dextérité (Discrétion) impossible</li><li>Magies impossibles en combat</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Matériau</th><th>AC</th><th>DR</th><th>Prix</th><th>Force >=</th><th>Propriétés</th><th>Poids (kg)</th></tr></thead><tbody><tr><td>Mailles</td><td>ACx1.25</td><td>50%</td><td>50%</td><td>---</td><td>---</td><td>50%</td></tr><tr><td>Fonte</td><td>10</td><td>15</td><td>2 pa</td><td>10</td><td>---</td><td>1.25</td></tr><tr><td>Fer</td><td>9</td><td>18</td><td>10 pa</td><td>11</td><td>---</td><td>1</td></tr><tr><td>Bronze</td><td>8</td><td>21</td><td>25 pa</td><td>12</td><td>---</td><td>1.25</td></tr><tr><td>Acier</td><td>7</td><td>24</td><td>50 pa</td><td>13</td><td>---</td><td>1</td></tr><tr><td>Titane</td><td>6</td><td>27</td><td>1 po</td><td>14</td><td>---</td><td>1.5</td></tr><tr><td>Mythril</td><td>7</td><td>30</td><td>5 po</td><td>12</td><td>Dextérité (Discrétion) possible avec désavantage</td><td>1.25</td></tr><tr><td>Palladium</td><td>5</td><td>35</td><td>7 po</td><td>16</td><td>Magies (Croititiste) possibles avec désavantage</td><td>1.5</td></tr><tr><td>Adamantite</td><td>5</td><td>35</td><td>7 po</td><td>16</td><td>Magies (Élétiste) possibles avec désavantage</td><td>1.5</td></tr><tr><td>Orichalque</td><td>4</td><td>40</td><td>10 po</td><td>18</td><td>---</td><td>2</td></tr></tbody></table></div>")}
	{@render boucliers()}
	</section>
{/snippet}

{#snippet boucliers()}
	<section>
		<h4 id="boucliers">{@html "Boucliers"}</h4>
	{@html applyBase("<p><strong>Effets</strong></p>\n<ul><li>La DR du bouclier ne s'ajoute que si le bouclier fait face à la source de l'attaque (attaque de front/ dans le dos)</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Armure</th><th>AC</th><th>DR</th><th>Matériaux</th><th>Force >=</th><th>Propriétés</th><th>Dégats</th></tr></thead><tbody><tr><td><em>Buckler</em></td><td>-1</td><td>25%</td><td>2</td><td>---</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#parade\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Parade%5C\">Parade</a></td><td>1d4</td></tr><tr><td>Bouclier</td><td>-2</td><td>50%</td><td>4</td><td>---</td><td>---</td><td>1d4 +2</td></tr><tr><td>Bouclier d'Estoc</td><td>-3</td><td>75%</td><td>6</td><td>14</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#charge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Charge%5C\">Charge</a></td><td>1d4 +4</td></tr><tr><td>Pavois</td><td>-4</td><td>100%</td><td>8</td><td>17</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#charge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Charge%5C\">Charge</a><br><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lent\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lent%5C\">Lent</a></td><td>1d6 +4</td></tr></tbody></table></div>")}

	</section>
{/snippet}
