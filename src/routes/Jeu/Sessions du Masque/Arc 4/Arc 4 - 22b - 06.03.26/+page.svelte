<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "dtails",
          "text": "Détails",
          "level": 2
      },
      {
          "id": "notes",
          "text": "Notes",
          "level": 2
      },
      {
          "id": "scnario",
          "text": "Scénario",
          "level": 2
      },
      {
          "id": "joueurs",
          "text": "Joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Arc 4 - 22b - 06.03.26</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 4 - 22b - 06.03.26</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render dtails()}
		{@render notes()}
		{@render scnario()}
		{@render joueurs()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("> Résumé\n")}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html applyBase("Détails")}</h2>
	{@html renderMarkdown("\nLieu actuel : Nirina, Forêt\n\nObjectif :\n\nPnjs notables :\n")}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html applyBase("Notes")}</h2>
	{@html renderMarkdown("\n|           |        Arek        |          Dara           |        Haelrak        |        Hazdaim         |      Léoric       |  Zveindel   |\n| --------- | :----------------: | :---------------------: | :-------------------: | :--------------------: | :---------------: | :---------: |\n| **AC**    |       8 (-3)       |           15            |          14           |           14           |         9         |     10      |\n| **DR**    |      25 (+40)      |           14            |          12           |           12           |        23         |     20      |\n| **DMG**   | 5 +36\\|30<br>6 +55 | 9 +36\\|30\\|18<br>14 +10 | 12 +15\\|4<br>16 +2 +5 | 10 +14\\|6<br>15 +2 +10 | 14 +7\\|6<br>7 +20 |      -      |\n| **Magie** |     9 (1d8 +5)     |        9 (1d12)         |       14 (1d8)        |        9 (1d6)         |      9 (1d8)      | 14 (1d8 +2) |\n\n| Ennemi       | AC  | DR  | HP  |  Léger   | Lourde | Magie |\n| ------------ | :-: | :-: | :-: | :------: | :----: | :---: |\n| Soul Catcher |  8  | 12  | 100 |          |        |   -   |\n| Magala       | 3d6 | 20  | 300 |          |        |   -   |\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html applyBase("Scénario")}</h2>
	{@html renderMarkdown("\nEn chassant un enfant, ils se perdent dans la brume et se font traquer par un Soul Catcher (voir sur discord)\n\nMais en fait ce n'est pas eux qui se faisaient traquer, c'était le Soul Catcher qui se faisait traquer par le Magala\n\nLe magala les attaque et ils doivent choisir qui réagira à son attaque (ils ne peuvent pas tous agir)\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html applyBase("Joueurs")}</h2>
	{@html renderMarkdown("\n- [x] Diego 24\n- [x] Loïc 19\n- [ ] Lucas 9\n- [x] Michel 26\n- [x] Nolan 10\n- [ ] Thomas 22\n- [ ] William 7\n\n|         Précédent         |         Suivant          |\n| :-----------------------: | :----------------------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22 - 03.04.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22 - 03.04.26\" data-wiki-fragment=\"\">Arc 4 - 22 - 03.04.26</a> | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 23 - 23.05.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 23 - 23.05.26\" data-wiki-fragment=\"\">Arc 4 - 23 - 23.05.26</a> |")}

	</section>
{/snippet}
