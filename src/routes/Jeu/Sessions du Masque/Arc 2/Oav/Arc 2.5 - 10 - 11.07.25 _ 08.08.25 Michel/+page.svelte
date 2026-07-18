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
          "id": "scnario",
          "text": "Scénario",
          "level": 2
      },
      {
          "id": "notes",
          "text": "Notes",
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
  <title>Arc 2.5 - 10 - 11.07.25 + 08.08.25 Michel</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 2.5 - 10 - 11.07.25 + 08.08.25 Michel</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render dtails()}
		{@render scnario()}
		{@render notes()}
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
	{@html renderMarkdown("\nLieu actuel : Nirina, à droite de Galmag, au bord du plateau\n\nObjectif :\n\nPnjs notables : <span class=\"wiki-unresolved\">Loukas</span>, <span class=\"wiki-unresolved\">Calista</span>, <span class=\"wiki-unresolved\">Nyx</span>, <span class=\"wiki-unresolved\">Chlorys</span>, Eryndor\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html applyBase("Scénario")}</h2>


	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html applyBase("Notes")}</h2>
	{@html renderMarkdown("\n> ~~Massacre de son village et son enlèvement, au nom du Dieu Avoir (possession & partage)~~\n> *Colonisation de son village, et échange de mains d'oeuvres contre une alliance commerciale avec les croyants du Dieu Avoir\n> Son père et lui sont emmenés*\n>\n> Il est emmené dans une ville sans sa famille\n> Premier aperçu, on le traite correctement, il est nourri, logé et éduqué -> On partage avec lui/ On lui offre des choses\n> ~~Mais en échange, il est la possession des Niriniens/ On lui vole ce qui fait son identité (viol, battu, ..)~~\n> *Vu qu'il est déjà avancé pour son âge (alchimie et tentative d'assassiner le bateau qui les a amenés), on le traite correctement pour son potentiel*\n> .\n> *Il se rend compte qu'il y a une différence de traitement entre les \"esclaves\" et on lui proposera des choix\n> - Il continuera son apprentissage avec les Niriniens pour devenir le bras du Dieu Avoir\n> - Il sera formé de ses 10 à 18ans et fera partie d'une escouade spéciale (genre Space Marine) : <span class=\"wiki-unresolved\">Loukas</span>, <span class=\"wiki-unresolved\">Calista</span>, <span class=\"wiki-unresolved\">Nyx</span>, <span class=\"wiki-unresolved\">Chlorys</span>\n> - Il dera ensuite un sabotage de l'intérieur et se soulèvera avec les esclaves\n> - Il devient le visage de la révolution religieuse*\n> - ~~Tuer le Doigt Eryndor qui passait par là et fuir vers Galmag\n> - Vie de criminel pire qu'on la connait~~\n>\n> *Il a une relation forte avec <span class=\"wiki-unresolved\">Chlorys</span> et <span class=\"wiki-unresolved\">Nyx</span>\n> Il restera avec <span class=\"wiki-unresolved\">Chlorys</span> encore 2-3 ans avant qu'elle s'élance seule vers l'aventure\n> <span class=\"wiki-unresolved\">Nyx</span> continuera d'aider le peuple en pétant des gueules*\n\nRésultat :\n- Nouvelle magie de Lumière\n- Nouveaux styles de combat :\n  - Muraille impénétrable\n  - Poings d'acier\n- Lire & Ecrire\n- Alchimie 3 (4?)\n- Culture augmentée\n- Toile céleste de Lumière\n- Maîtrise d'arme +1\n- Combat aux poings +2\n- Plus un criminel, mais réputation de leader de révolution à travers les continents\n- Relation avec <span class=\"wiki-unresolved\">Nyx</span> et <span class=\"wiki-unresolved\">Chlorys</span>\n- Surveillé par les Doigts\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html applyBase("Joueurs")}</h2>
	{@html renderMarkdown("\n- [ ] Diego\n- [ ] Loïc\n- [x] Michel\n- [ ] Thomas\n- [ ] William\n\n|         Précédent         |  Suivant  |\n| :-----------------------: | :-------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" data-wiki-fragment=\"\">Arc 2 - 09b - 27.06.25</a> | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3\" data-wiki-fragment=\"\">Arc 3</a> |\n")}

	</section>
{/snippet}
