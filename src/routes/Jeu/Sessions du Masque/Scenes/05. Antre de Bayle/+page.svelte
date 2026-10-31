<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "description",
          "text": "Description",
          "level": 2
      },
      {
          "id": "dtails",
          "text": "Détails",
          "level": 2
      },
      {
          "id": "maps",
          "text": "Maps",
          "level": 3
      },
      {
          "id": "rencontres",
          "text": "Rencontres",
          "level": 3
      },
      {
          "id": "intrigues",
          "text": "Intrigues",
          "level": 2
      },
      {
          "id": "actions-des-joueurs",
          "text": "Actions des joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>05. Antre de Bayle</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>05. Antre de Bayle</h1>
  </header>
  <div class="markdown-rendered">
		{@render description()}
		{@render dtails()}
		{@render intrigues()}
		{@render actionsDesJoueurs()}
  </div>
</article>

<LinkPreview />

{#snippet description()}
	<section>
		<h2 id="description">{@html applyBase("Description")}</h2>
	{@html renderMarkdown("> Description à lire aux joueurs en entrant dans cette scène.\n\n\t...\n")}

	</section>
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html applyBase("Détails")}</h2>
	{@html renderMarkdown("\n| Lieu | Météo | Heure | Musique |\n| ---- | ----- | ----- | ------- |\n|      |       |       |         |")}
	{@render maps()}
	{@render rencontres()}
	</section>
{/snippet}

{#snippet maps()}
	<section>
		<h3 id="maps">{@html applyBase("Maps")}</h3>
	{@html renderMarkdown("<img src=\"%%BASE%%/omer-tunc-2-copy.jpg\" alt=\"omer-tunc-2-copy.jpg\" width=\"400\" class=\"wiki-image\" />")}

	</section>
{/snippet}

{#snippet rencontres()}
	<section>
		<h3 id="rencontres">{@html applyBase("Rencontres")}</h3>
	{@html renderMarkdown("\n|   Nom   | Rôle                              |  Race  | Sexe  | Age |      Personnalité      | Accent |       Equipement        |\n| :-----: | --------------------------------- | :----: | :---: | :-: | :--------------------: | :----: | :---------------------: |\n|  Bayle  | Ennemi de Placidusax et Fortissax | Dragon |       |  -  | Agressif, ne parle pas |   -    |  <span class=\"wiki-unresolved\">5-Bayle.jpg\\</span>  |\n|  Havel  | Pactisant avec Placidusax         | Humain |   -   |  -  |          Mort          |   -    |    <img src=\"%%BASE%%/5-Havel.jpg\" alt=\"5-Havel.jpg\" class=\"wiki-image\" />     |\n| Zaledra | Investisseur du projet Masque     | Humain | Homme | 50  |                        |        | <span class=\"wiki-unresolved\">5-Zaledra.jpg\\</span> |\n")}

	</section>
{/snippet}

{#snippet intrigues()}
	<section>
		<h2 id="intrigues">{@html applyBase("Intrigues")}</h2>
	{@html renderMarkdown("> Evénements et leur conclusion sans l'intervention des joueurs\n\n- Ils doivent trouver l'entrée de la montagne pour atteindre Bayle\n\n- Des troupes de soldats morts errent et doivent être contrôlés pour espérer vaincre Bayle\n\t- Ils errent, controlés par des champignons parasytes\n- Un arbre couvert de champignons qui ont pris la forme de femmes géantes pour attirer les aventuriers\n\t- L'énergie dans la sève liquide de l'arbre repousse les esprits, mais ça ne dure pas énternellement\n\n- Léoric : Bigard lui propose de se faire exploser magiquement sur le masque pour l'affaiblir, mais Léoric perdra sa magie\n- Hazdaim : Radeon lui propose son pouvoir contre le masque en échange du contrôle sur son corps pour une action\n- Arek : Le masque propose la liberté de son emprise en échange de tuer son hôte\n- Dara : Zaledra propose de rendre les doigts si Dara lui donne sa toile, et il en fera son associé principal")}

	</section>
{/snippet}

{#snippet actionsDesJoueurs()}
	<section>
		<h2 id="actions-des-joueurs">{@html applyBase("Actions des joueurs")}</h2>
	{@html renderMarkdown("\n-")}

	</section>
{/snippet}
