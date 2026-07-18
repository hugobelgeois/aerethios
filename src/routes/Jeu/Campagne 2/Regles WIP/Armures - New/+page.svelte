<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
	{@html renderMarkdown(">AC (Armor Class) = Mobilité d'esquive naturelle\n>DR (Damage Reduction) = Réduction des dégâts\n")}
{/snippet}

{#snippet matriaux()}
	<section>
		<h2 id="matriaux">Matériaux</h2>
	{@html renderMarkdown(">AC = 8 + Dextérité(Acrobatie) - Matériaux.\n")}
	{@render lgres()}
	{@render intermdiaires()}
	{@render lourdes()}
	{@render boucliers()}
	</section>
{/snippet}

{#snippet lgres()}
	<section>
		<h3 id="lgres">Légères</h3>
	{@html renderMarkdown(">Faiblesse : Perforant\n\n**Effets**\n    + <a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#suraja\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Suraja\">Enchantements de Suraja</a>\n\t+ Pendant son tour, le joueur peut convertir des crystaux en AC (1:1, Max = Mental / 4)\n\t  Il perd ce bonus une fois touché\n\t+ La propriété ajoute 2 aux jets de la magie concernée pour toucher\n\n| Matériau    |  Prix | Propriétés | Poids (kg) |\n| ----------- | ----: | :--------: | ---------: |\n| Coton       | 10 pa |    Air     |       0.25 |\n| Chanvre     | 10 pa |    Eau     |       0.25 |\n| Lin         | 10 pa |   Roche    |       0.25 |\n| Soie        | 10 pa |  Lumière   |       0.25 |\n| Suède/ Daim | 10 pa |  Ténèbres  |       0.25 |\n| Laine       | 10 pa |   Foudre   |       0.25 |\n| Fourrure    | 20 pa |    Feu     |        0.5 |")}
	{@render poids()}
	</section>
{/snippet}

{#snippet poids()}
	<section>
		<h4 id="poids">Poids</h4>
	{@html renderMarkdown("\n| Poids     | AC  | DR  | Prix (Multiplicateur) |\n| --------- | --- | --- | --------------------: |\n| Fin       | 0   | 0   |                     1 |\n| Normal    | -1  | 1   |                   1.5 |\n| Rembourré | -2  | 2   |                     2 |\n")}

	</section>
{/snippet}

{#snippet intermdiaires()}
	<section>
		<h3 id="intermdiaires">Intermédiaires</h3>
	{@html renderMarkdown(">Faiblesse : Tranchant\n\n**Effets**\n\t+ <a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#ovliin\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Ovliin\">Enchantements d'Ovliin</a>\n    + Se répare auprès d'un tanneur (cuir)\n    + Se répare auprès d'un potionniste (écaille)\n    - Désavantage en Dextérité (Discrétion)\n    - Désavantage en Magies en combat\n\n>La rareté varie entre 1 et 5 (Déchet, Commun, Peu commun, Rare, Légendaire)\n\n| Matériau       | AC  |      DR      |          Prix | Force >= |        Propriétés         |   Poids (kg) |\n| -------------- | :-: | :----------: | ------------: | :------: | :-----------------------: | -----------: |\n| Cuir (bouilli) | -4  |  1 * rareté  | 4 ^ rareté pa |   ---    |            ---            |          0.5 |\n| Écaille        | -4  |  1 * rareté  | 6 ^ rareté pc |   ---    | Résistance aux conditions |         0.75 |\n| Mailles        | -8  | 50% du métal |  50% du métal | métal -4 |            ---            | 50% du métal |\n| Os             | -8  |  2 * rareté  | 8 ^ rareté pc |    12    | 1 invulnérabilité magique |         0.75 |\n")}

	</section>
{/snippet}

{#snippet lourdes()}
	<section>
		<h3 id="lourdes">Lourdes</h3>
	{@html renderMarkdown(">Faiblesse : Contondant\n\n**Effets**\n    + <a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#nirina\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Nirina\">Enchantements de Nirina</a>\n    + Se répare dans une forge/ avec la magie de métal\n    - Dextérité (Discrétion) impossible\n    - Magies impossibles en combat\n\n| Matériau   | AC  | DR  |  Prix | Force >= |                    Propriétés                    | Poids (kg) |\n| ---------- | :-: | :-: | ----: | :------: | :----------------------------------------------: | ---------: |\n| Fer        | -12 | 12  | 10 pa |    12    |                       ---                        |          1 |\n| Bronze     | -12 | 12  | 25 pa |    14    |                       ---                        |          1 |\n| Acier      | -12 | 12  | 50 pa |    14    |                       ---                        |          1 |\n| Titane     | -12 | 15  |  1 po |    14    |                       ---                        |        1.5 |\n| Mythril    | -10 | 15  |  5 po |    12    | Dextérité (Discrétion) possible avec désavantage |          1 |\n| Palladium  | -12 | 18  |  7 po |    16    | Magies (Croititiste) possibles avec désavantage  |        1.5 |\n| Adamantite | -12 | 18  |  7 po |    16    |   Magies (Élétiste) possibles avec désavantage   |        1.5 |\n| Orichalque | -15 | 20  | 10 po |    18    |                       ---                        |          2 |\n")}

	</section>
{/snippet}

{#snippet boucliers()}
	<section>
		<h3 id="boucliers">Boucliers</h3>
	{@html renderMarkdown("\n**Effets**\n    - La DR du bouclier ne s'ajoute que si le bouclier fait face à la source de l'attaque (attaque de front/ dans le dos)\n\n| Armure           | AC  |  DR  | Matériaux | Force >= |                         Propriétés                         | Dégats |\n| ---------------- | :-: | :--: | :-------: | :------: | :--------------------------------------------------------: | :----: |\n| *Buckler*        | -1  | 25%  |     2     |   ---    |               <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#parade\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Parade%5C\">Parade</a>                |  1d4   |\n| Bouclier         | -2  | 50%  |     4     |   ---    |                            ---                             | 1d4 +2 |\n| Bouclier d'Estoc | -4  | 75%  |     6     |    14    |               <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#charge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Charge%5C\">Charge</a>                | 1d4 +4 |\n| Pavois           | -8  | 100% |     8     |    17    | <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#charge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Charge%5C\">Charge</a><br><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lent\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lent%5C\">Lent</a> | 1d6 +4 |")}

	</section>
{/snippet}
