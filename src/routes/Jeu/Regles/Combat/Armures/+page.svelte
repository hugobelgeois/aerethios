<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Armures</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Armures</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render acTotal()}
		{@render matriaux()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">AC (Armor Class) = Mobilité d'esquive naturelle\n>DR (Damage Reduction) = Réduction des dégâts\n")}
{/snippet}

{#snippet acTotal()}
	<section>
		<h2 id="ac-total">AC total</h2>
	{@html renderMarkdown(">AC total = AC + Modificateurs\n\n|           Tissu           | Cuir, Peaux, Écailles, Os et Mailles (métal) | Plate (métal) |\n| :-----------------------: | :------------------------------------------: | :-----------: |\n|   Dextérité(Acrobatie)    |             Dextérité(Acrobatie)             |       -       |\n| + Crystaux (max = Mental) |                                              |               |\n")}

	</section>
{/snippet}

{#snippet matriaux()}
	<section>
		<h2 id="matriaux">Matériaux</h2>
	{@html renderMarkdown(">Le prix de main d'œuvre vaut 10% du prix des tous les matériaux requis.\n>Une armure nécessite 24 matériaux pour être fabriquée.\n>Sans armure, l'AC de base est de 18.\n>Faiblesse = 50% DR\n>Les HP ne se régénèrent pas naturellement lorsqu'une armure est équipée.\n")}
	{@render tissusEtFourrures()}
	{@render cuirsEtPeaux()}
	{@render caillesEtOs()}
	{@render mtaux()}
	</section>
{/snippet}

{#snippet tissusEtFourrures()}
	<section>
		<h3 id="tissus-et-fourrures">Tissus et Fourrures</h3>
	{@html renderMarkdown("\n**Effets**\n    + <a href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#suraja\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Suraja\">Enchantements de Suraja</a>\n\t+ Pendant son tour, le joueur peut convertir des crystaux en AC (1:1, Max = Mental / 4)\n\t  Il perd ce bonus une fois touché\n\n| Matériau    | AC  | DR  |  Prix |                Propriétés                 | Poids (kg) |\n| ----------- | :-: | :-: | ----: | :---------------------------------------: | ---------: |\n| Coton       | 18  |  2  | 10 pa |    Air = 2 crystaux bonus par attaque     |       0.25 |\n| Chanvre     | 18  |  2  | 10 pa |    Eau = 2 crystaux bonus par attaque     |       0.25 |\n| Lin         | 18  |  2  | 10 pa |   Roche = 2 crystaux bonus par attaque    |       0.25 |\n| Soie        | 18  |  2  | 10 pa |  Lumière = 2 crystaux bonus par attaque   |       0.25 |\n| Suède/ Daim | 18  |  2  | 10 pa |  Ténèbres = 2 crystaux bonus par attaque  |       0.25 |\n| Laine       | 18  |  2  | 10 pa |   Foudre = 2 crystaux bonus par attaque   |       0.25 |\n| Cachemire   | 16  |  3  | 25 pa | Elétistes = 1 crystal gratuit par action  |       0.25 |\n| Alpaga      | 16  |  3  | 25 pa | Croitistes = 1 crystal gratuit par action |       0.25 |\n| Fourrure    | 16  |  3  | 40 pa |   Fusion = 1 crystal gratuit par action   |       0.25 |\n\n>Les crystaux bonus par attaque nécessite d'en consommer au moins 1 pour s'appliquer (ex : 1 consommer +2 gratuits).\n")}

	</section>
{/snippet}

{#snippet cuirsEtPeaux()}
	<section>
		<h3 id="cuirs-et-peaux">Cuirs et Peaux</h3>
	{@html renderMarkdown(">Faiblesse : Tranchant\n\n**Effets**\n    + <a href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#kothula\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Kothula\">Enchantements de Kothula</a>\n    + Se répare auprès d'un tanneur\n\n>La rareté varie entre 1 et 5 (Déchet, Commun, Peu commun, Rare, Légendaire)\n\n| Matériau       | AC  |     DR     |          Prix |                   Propriétés                    | Poids (kg) |\n| -------------- | :-: | :--------: | ------------: | :---------------------------------------------: | ---------: |\n| Peau           | 14  | 2 * rareté | 2 ^ rareté pa | Résiste à <a href=\"/Jeu/Regles/Statuts/Conditions#saignement\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Saignement%5C\">Saignement</a> |        0.5 |\n| Cuir (bouilli) | 12  | 3 * rareté | 4 ^ rareté pa |     Résiste à <a href=\"/Jeu/Regles/Statuts/Conditions#poison\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Poison%5C\">Poison</a>     |        0.5 |\n")}

	</section>
{/snippet}

{#snippet caillesEtOs()}
	<section>
		<h3 id="cailles-et-os">Écailles et Os</h3>
	{@html renderMarkdown(">Faiblesse : Perforant\n\n**Effets**\n\t+ <a href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#ovliin\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Ovliin\">Enchantements d'Ovliin</a>\n    + Se répare auprès d'un potionniste\n    - Désavantage en Dextérité (Discrétion)\n    - Désavantage en Magies en combat\n\n| Matériau | AC  |     DR     |          Prix |  Force >=  |        Propriétés         | Poids (kg) |\n| -------- | :-: | :--------: | ------------: | :--------: | :-----------------------: | ---------: |\n| Écaille  | 10  | 4 * rareté | 6 ^ rareté pc | 2 * rareté | Résistance aux conditions |       0.75 |\n| Os       |  8  | 5 * rareté | 8 ^ rareté pc | 3 * rareté | 1 invulnérabilité magique |       0.75 |\n")}

	</section>
{/snippet}

{#snippet mtaux()}
	<section>
		<h3 id="mtaux">Métaux</h3>
	{@html renderMarkdown(">Faiblesse : Contondant\n\n**Effets**\n    + <a href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#nirina\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Nirina\">Enchantements de Nirina</a>\n    + Se répare dans une forge/ avec la magie de métal\n    - Dextérité (Discrétion) impossible\n    - Magies impossibles en combat\n\n| Matériau   |   AC    | DR  |  Prix | Force >= |                    Propriétés                    | Poids (kg) |\n| ---------- | :-----: | :-: | ----: | :------: | :----------------------------------------------: | ---------: |\n| Mailles    | ACx1.25 | 50% |   50% |   ---    |                       ---                        |        50% |\n| Fonte      |   10    | 15  |  2 pa |    10    |                       ---                        |       1.25 |\n| Fer        |    9    | 18  | 10 pa |    11    |                       ---                        |          1 |\n| Bronze     |    8    | 21  | 25 pa |    12    |                       ---                        |       1.25 |\n| Acier      |    7    | 24  | 50 pa |    13    |                       ---                        |          1 |\n| Titane     |    6    | 27  |  1 po |    14    |                       ---                        |        1.5 |\n| Mythril    |    7    | 30  |  5 po |    12    | Dextérité (Discrétion) possible avec désavantage |       1.25 |\n| Palladium  |    5    | 35  |  7 po |    16    | Magies (Croititiste) possibles avec désavantage  |        1.5 |\n| Adamantite |    5    | 35  |  7 po |    16    |   Magies (Élétiste) possibles avec désavantage   |        1.5 |\n| Orichalque |    4    | 40  | 10 po |    18    |                       ---                        |          2 |\n")}
	{@render boucliers()}
	</section>
{/snippet}

{#snippet boucliers()}
	<section>
		<h4 id="boucliers">Boucliers</h4>
	{@html renderMarkdown("\n**Effets**\n    - La DR du bouclier ne s'ajoute que si le bouclier fait face à la source de l'attaque (attaque de front/ dans le dos)\n\n| Armure           | AC  |  DR  | Matériaux | Force >= |                         Propriétés                         | Dégats |\n| ---------------- | :-: | :--: | :-------: | :------: | :--------------------------------------------------------: | :----: |\n| *Buckler*        | -1  | 25%  |     2     |   ---    |               <a href=\"/Jeu/Regles/Statuts/Proprietes#parade\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Parade%5C\">Parade</a>                |  1d4   |\n| Bouclier         | -2  | 50%  |     4     |   ---    |                            ---                             | 1d4 +2 |\n| Bouclier d'Estoc | -3  | 75%  |     6     |    14    |               <a href=\"/Jeu/Regles/Statuts/Proprietes#charge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Charge%5C\">Charge</a>                | 1d4 +4 |\n| Pavois           | -4  | 100% |     8     |    17    | <a href=\"/Jeu/Regles/Statuts/Proprietes#charge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Charge%5C\">Charge</a><br><a href=\"/Jeu/Regles/Statuts/Proprietes#lent\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lent%5C\">Lent</a> | 1d6 +4 |")}

	</section>
{/snippet}
