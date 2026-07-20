<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "matriaux",
          "text": "Matériaux",
          "level": 2
      },
      {
          "id": "lgres",
          "text": "Légères",
          "level": 3
      },
      {
          "id": "poids",
          "text": "Poids",
          "level": 4
      },
      {
          "id": "intermdiaires",
          "text": "Intermédiaires",
          "level": 3
      },
      {
          "id": "lourdes",
          "text": "Lourdes",
          "level": 3
      },
      {
          "id": "boucliers",
          "text": "Boucliers",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Armures - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Armures - New</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render matriaux()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">AC (Armor Class) = Mobilité d'esquive naturelle\r\n>DR (Damage Reduction) = Réduction des dégâts\r\n\r")}
{/snippet}

{#snippet matriaux()}
	<section>
		<h2 id="matriaux">{@html applyBase("Matériaux")}</h2>
	{@html renderMarkdown(">AC = 8 + Dextérité(Acrobatie) - Matériaux.\r\n\r")}
	{@render lgres()}
	{@render intermdiaires()}
	{@render lourdes()}
	{@render boucliers()}
	</section>
{/snippet}

{#snippet lgres()}
	<section>
		<h3 id="lgres">{@html applyBase("Légères")}</h3>
	{@html renderMarkdown(">Faiblesse : Tranchant\r\n\r\n**Effets**\r\n    + <a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#suraja\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Suraja\">Enchantements de Suraja</a>\r\n\t+ Pendant son tour, le joueur peut convertir des crystaux en AC (1:1, Max = Mod Mental)\r\n\t  Il perd ce bonus une fois touché\r\n\t+ La propriété augmente les dégâts de base de 2\r\n\r\n| Matériau    |  Prix | Propriétés | Poids (kg) |\r\n| ----------- | ----: | :--------: | ---------: |\r\n| Coton       | 10 pa |    Air     |       0.25 |\r\n| Chanvre     | 10 pa |    Eau     |       0.25 |\r\n| Lin         | 10 pa |   Roche    |       0.25 |\r\n| Soie        | 10 pa |  Lumière   |       0.25 |\r\n| Suède/ Daim | 10 pa |  Ténèbres  |       0.25 |\r\n| Laine       | 10 pa |   Foudre   |       0.25 |\r\n| Fourrure    | 20 pa |    Feu     |        0.5 |\r")}
	{@render poids()}
	</section>
{/snippet}

{#snippet poids()}
	<section>
		<h4 id="poids">{@html applyBase("Poids")}</h4>
	{@html renderMarkdown("\r\n| Poids     | AC  | DR  | Prix (Multiplicateur) |\r\n| --------- | --- | --- | --------------------: |\r\n| Fin       | 0   | 0   |                     1 |\r\n| Normal    | -1  | 1   |                   1.5 |\r\n| Rembourré | -2  | 2   |                     2 |\r\n\r")}

	</section>
{/snippet}

{#snippet intermdiaires()}
	<section>
		<h3 id="intermdiaires">{@html applyBase("Intermédiaires")}</h3>
	{@html renderMarkdown(">Faiblesse : Tranchant\r\n\r\n**Effets**\r\n\t+ <a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#ovliin\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Ovliin\">Enchantements d'Ovliin</a>\r\n    + Se répare auprès d'un tanneur (cuir)\r\n    + Se répare auprès d'un potionniste (écaille)\r\n    - Désavantage en Dextérité (Discrétion)\r\n    - Désavantage en Magies en combat\r\n\r\n>La rareté varie entre 1 et 5 (Déchet, Commun, Peu commun, Rare, Légendaire)\r\n\r\n| Matériau       | AC  |      DR      |          Prix | Force >= |        Propriétés         |   Poids (kg) |\r\n| -------------- | :-: | :----------: | ------------: | :------: | :-----------------------: | -----------: |\r\n| Cuir (bouilli) | -4  |  1 * rareté  | 4 ^ rareté pa |   ---    |            ---            |          0.5 |\r\n| Écaille        | -4  |  1 * rareté  | 6 ^ rareté pc |   ---    | Résistance aux conditions |         0.75 |\r\n| Mailles        | -8  | 50% du métal |  50% du métal | métal -4 |            ---            | 50% du métal |\r\n| Os             | -8  |  2 * rareté  | 8 ^ rareté pc |    12    | 1 invulnérabilité magique |         0.75 |\r\n\r")}

	</section>
{/snippet}

{#snippet lourdes()}
	<section>
		<h3 id="lourdes">{@html applyBase("Lourdes")}</h3>
	{@html renderMarkdown(">Faiblesse : Contondant\r\n\r\n**Effets**\r\n    + <a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#nirina\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Nirina\">Enchantements de Nirina</a>\r\n    + Se répare dans une forge/ avec la magie de métal\r\n    - Dextérité (Discrétion) impossible\r\n    - Magies impossibles en combat\r\n\r\n| Matériau   | AC  | DR  |  Prix | Force >= |                    Propriétés                    | Poids (kg) |\r\n| ---------- | :-: | :-: | ----: | :------: | :----------------------------------------------: | ---------: |\r\n| Fer        | -12 | 12  | 10 pa |    12    |                       ---                        |          1 |\r\n| Bronze     | -12 | 12  | 25 pa |    14    |                       ---                        |          1 |\r\n| Acier      | -12 | 12  | 50 pa |    14    |                       ---                        |          1 |\r\n| Titane     | -12 | 15  |  1 po |    14    |                       ---                        |        1.5 |\r\n| Mythril    | -10 | 15  |  5 po |    12    | Dextérité (Discrétion) possible avec désavantage |          1 |\r\n| Palladium  | -12 | 18  |  7 po |    16    | Magies (Croititiste) possibles avec désavantage  |        1.5 |\r\n| Adamantite | -12 | 18  |  7 po |    16    |   Magies (Élétiste) possibles avec désavantage   |        1.5 |\r\n| Orichalque | -15 | 20  | 10 po |    18    |                       ---                        |          2 |\r\n\r")}

	</section>
{/snippet}

{#snippet boucliers()}
	<section>
		<h3 id="boucliers">{@html applyBase("Boucliers")}</h3>
	{@html renderMarkdown("\r\n**Effets**\r\n    - La DR du bouclier ne s'ajoute que si le bouclier fait face à la source de l'attaque (attaque de front/ dans le dos)\r\n\r\n| Armure           | AC  |  DR  | Matériaux | Force >= |                         Propriétés                         | Dégats |\r\n| ---------------- | :-: | :--: | :-------: | :------: | :--------------------------------------------------------: | :----: |\r\n| *Buckler*        | -1  | 25%  |     2     |   ---    |               <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#parade\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Parade%5C\">Parade</a>                |  1d4   |\r\n| Bouclier         | -2  | 50%  |     4     |   ---    |                            ---                             | 1d4 +2 |\r\n| Bouclier d'Estoc | -4  | 75%  |     6     |    14    |               <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#charge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Charge%5C\">Charge</a>                | 1d4 +4 |\r\n| Pavois           | -8  | 100% |     8     |    17    | <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#charge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Charge%5C\">Charge</a><br><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lent\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lent%5C\">Lent</a> | 1d6 +4 |")}

	</section>
{/snippet}
