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
	{@html renderMarkdown("> AC (Armor Class) = Mobilité d'esquive naturelle\n> DR (Damage Reduction) = Réduction des dégâts\n> Une armure nécessite 24 matériaux pour être forgée\n")}
{/snippet}

{#snippet matriaux()}
	<section>
		<h2 id="matriaux">{@html applyBase("Matériaux")}</h2>
	{@html renderMarkdown("> AC = Dextérité - Matériaux.\n")}
	{@render lgres()}
	{@render intermdiaires()}
	{@render lourdes()}
	{@render boucliers()}
	</section>
{/snippet}

{#snippet lgres()}
	<section>
		<h3 id="lgres">{@html applyBase("Légères")}</h3>
	{@html renderMarkdown("> Résistant : Magies\n\n| Matériau    |  Prix | Résistance | Poids (kg) |\n| ----------- | ----: | :--------: | ---------: |\n| Coton       | 10 pa |    Air     |       0.25 |\n| Chanvre     | 10 pa |    Eau     |       0.25 |\n| Lin         | 10 pa |   Roche    |       0.25 |\n| Soie        | 10 pa |  Lumière   |       0.25 |\n| Suède/ Daim | 10 pa |  Ténèbres  |       0.25 |\n| Laine       | 10 pa |   Foudre   |       0.25 |\n| Fourrure    | 20 pa |    Feu     |        0.5 |")}
	{@render poids()}
	</section>
{/snippet}

{#snippet poids()}
	<section>
		<h4 id="poids">{@html applyBase("Poids")}</h4>
	{@html renderMarkdown("\n| Poids     | AC  | DR  | Prix (Multiplicateur) |\n| --------- | --- | --- | --------------------: |\n| Normal    | 0   | 0   |                     1 |\n| Rembourré | -1  | 1   |                     2 |\n")}

	</section>
{/snippet}

{#snippet intermdiaires()}
	<section>
		<h3 id="intermdiaires">{@html applyBase("Intermédiaires")}</h3>
	{@html renderMarkdown("> Résistance : Contondant, Tranchant\n\n**Effets**\n    - Désavantage en Dextérité (Discrétion)\n    - Désavantage en Magies en combat\n\n>La rareté varie entre 1 et 5 (Déchet, Commun, Peu commun, Rare, Légendaire)\n\n| Matériau       | AC  |      DR      |          Prix | Force >= |              Propriétés              |   Poids (kg) |\n| -------------- | :-: | :----------: | ------------: | :------: | :----------------------------------: | -----------: |\n| Cuir (bouilli) | -2  |  1 * rareté  | 4 ^ rareté pa |   ---    |                 ---                  |          0.5 |\n| Écaille        | -2  |  1 * rareté  | 6 ^ rareté pc |   ---    | Résistance aux conditions des huiles |         0.75 |\n| Os             | -3  |  2 * rareté  | 8 ^ rareté pc |    12    |      1 invulnérabilité magique       |         0.75 |\n| Mailles        | -4  | 50% du métal |  50% du métal | métal -4 |                 ---                  | 50% du métal |\n")}

	</section>
{/snippet}

{#snippet lourdes()}
	<section>
		<h3 id="lourdes">{@html applyBase("Lourdes")}</h3>
	{@html renderMarkdown("> Résistant : Tranchant, Corde\n\n**Effets**\n    - Dextérité (Discrétion) impossible\n    - Magies impossibles en combat\n\n| Matériau   | AC  | DR  |  Prix | Force >= |                    Propriétés                    | Poids (kg) |\n| ---------- | :-: | :-: | ----: | :------: | :----------------------------------------------: | ---------: |\n| Fer        | -6  |  6  | 10 pa |    12    |                       ---                        |          1 |\n| Bronze     | -6  |  6  | 25 pa |    14    |                       ---                        |          1 |\n| Acier      | -6  |  6  | 50 pa |    14    |                       ---                        |          1 |\n| Titane     | -6  |  7  |  1 po |    14    |                       ---                        |        1.5 |\n| Mythril    | -5  |  8  |  5 po |    12    | Dextérité (Discrétion) possible avec désavantage |          1 |\n| Palladium  | -6  |  9  |  7 po |    16    | Magies (Croititiste) possibles avec désavantage  |        1.5 |\n| Adamantite | -6  |  9  |  7 po |    16    |   Magies (Élétiste) possibles avec désavantage   |        1.5 |\n| Orichalque | -8  | 10  | 10 po |    18    |                       ---                        |          2 |\n")}

	</section>
{/snippet}

{#snippet boucliers()}
	<section>
		<h3 id="boucliers">{@html applyBase("Boucliers")}</h3>
	{@html renderMarkdown("> Fonctionnent comme une deuxième barre de HP.\n> Une fois épuisée, le bouclier n'est plus utilisable.\n\n| Armure           | AC  | DR<br>(% du métal) | Matériaux | Force >= | Dégats |\n| ---------------- | :-: | :----------------: | :-------: | :------: | :----: |\n| Bocle            |  0  |        50%         |     2     |   ---    |  1d4   |\n| Bouclier         | -1  |        100%        |     4     |   ---    | 1d4 +2 |\n| Bouclier d'Estoc | -2  |        150%        |     6     |    14    | 1d4 +4 |\n| Pavois           | -4  |        200%        |     8     |    17    | 1d6 +4 |")}

	</section>
{/snippet}
