<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
          "id": "thon-et-hugo",
          "text": "Théon et Hugo",
          "level": 3
      },
      {
          "id": "nix-et-salom",
          "text": "Nix et Salomé",
          "level": 3
      },
      {
          "id": "les-2-paladins",
          "text": "Les 2 paladins",
          "level": 3
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
  <title>01. Orphelinat d'Hazdaim</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>01. Orphelinat d'Hazdaim</h1>
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
		<h2 id="description">Description</h2>
	{@html renderMarkdown("> Description à lire aux joueurs en entrant dans cette scène.\n\n\t… Vos pas s’enfoncent dans la boue détrempée, projetant des éclats sombres sur des vêtements déjà lourds d’humidité. La mousse et les champignons dévorent les troncs immenses qui vous entourent, tandis que leurs cimes étouffent presque entièrement la lumière du ciel. Chaque pas semble avalé par cette forêt silencieuse, oppressante, comme si les arbres eux-mêmes se refermaient derrière vous.\n\n\tPuis, au loin, une lueur apparaît.\n\n\tFaible d’abord, vacillante entre les troncs. Avec elle vient une odeur inattendue : celle d’une soupe à la viande encore chaude, riche et épicée, qui chasse enfin les relents d’eau stagnante et de terre pourrie qui vous accompagnent depuis des jours.\n\n\tEn avançant, vous remarquez sur le bord du chemin une stèle de pierre récemment dressée. Sa surface est propre, presque intacte malgré l’humidité ambiante, et un symbole étrange y a été gravé avec soin. Sans vraiment ralentir, vous poursuivez votre route, davantage attirés par l’odeur du repas et la perspective d’un toit sec.\n\n\tEt soudain, la forêt s’ouvre.\n\n\tAu centre d’une clairière parfaitement entretenue se dresse un manoir aux murs blancs, presque irréel après des jours passés dans les marais. Une vigne épaisse grimpe le long de ses façades jusqu’à une cheminée de briques rouges d’où s’échappe une fumée chaleureuse. Derrière les rideaux fins, des silhouettes bougent doucement, accompagnées de bruits étouffés : des couverts, des pas, peut-être quelques voix.\n\n\tPour la première fois depuis longtemps… cet endroit ressemble à un refuge.\n\n<img src=\"%%BASE%%/Orphelinat%20d'Hazdaim.jpg\" alt=\"Orphelinat d'Hazdaim.jpg\" class=\"wiki-image\" />\n")}

	</section>
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">Détails</h2>
	{@html renderMarkdown("\n| Lieu                                   | Météo        | Heure | Musique |\n| -------------------------------------- | ------------ | ----- | ------- |\n| Nirina, Forêt haute entourée de marais | Nuit magique | ?     |         |")}
	{@render maps()}
	{@render rencontres()}
	</section>
{/snippet}

{#snippet maps()}
	<section>
		<h3 id="maps">Maps</h3>
	{@html renderMarkdown("[https://www.tomcartos.com/essenheim-manor](https://www.tomcartos.com/essenheim-manor)\n<img src=\"%%BASE%%/Orphelinat%20d'Hazdaim.png\" alt=\"Orphelinat d'Hazdaim.png\" class=\"wiki-image\" />\n")}

	</section>
{/snippet}

{#snippet rencontres()}
	<section>
		<h3 id="rencontres">Rencontres</h3>
	{@html renderMarkdown("\n| Nom                              | Rôle        | Race              | Age | Personnalité            | Accent | Equipement                                 |\n| :------------------------------- | :---------- | :---------------- | :-- | :---------------------- | :----- | :----------------------------------------- |\n| Théon                            | Prêtre      | Humain            | 20  | ~~Vertueux~~<br>Troublé | -      | Toge décontractée                          |\n| Esyla                            | Gouvernante | Humain            | 40  | Snob<br>Vieille école   | -      |                                            |\n| Ygor                             | Palefrenier | Humain            | 50  | Slav<br>Un peu louche   | Russe  | Vêtements sales<br>Salopette               |\n| Hugo                             | Enfant      | Spectre<br>Humain | 10  | Faché<br>Perdu          | -      |                                            |\n| Colonel Thierry du Lion d'Argent | Paladin     | Humain            | 60  |                         | -      | <img src=\"%%BASE%%/Colonel%20Thierry%20du%20Lion%20d'Argent.webp\" alt=\"Colonel Thierry du Lion d'Argent.webp\" class=\"wiki-image\" /> |\n| Mattias du Lion Tuant            | Paladin     |                   |     | Silencieux<br>Hautain   | -      | <img src=\"%%BASE%%/Mattias%20du%20Lion%20Tuant.jpg\" alt=\"Mattias du Lion Tuant.jpg\" class=\"wiki-image\" />             |\n")}

	</section>
{/snippet}

{#snippet intrigues()}
	<section>
		<h2 id="intrigues">Intrigues</h2>
	{@html renderMarkdown("> Evénements et leur conclusion sans l'intervention des joueurs\n")}
	{@render thonEtHugo()}
	{@render nixEtSalom()}
	{@render les_2Paladins()}
	</section>
{/snippet}

{#snippet thonEtHugo()}
	<section>
		<h3 id="thon-et-hugo">Théon et Hugo</h3>
	{@html renderMarkdown("- Théon & Ygor a sacrifié l'enfant malade/ en fin de vie (Hugo) pour sauver 5 enfants\n  - Il empêche Imet de venir pour que Hugo puisse se calmer et partir en paix\n\t Si on ne fait rien, Hugo récupère ses organes, les 5 enfants meurent, et Théon se suicide de son incompétence\n")}

	</section>
{/snippet}

{#snippet nixEtSalom()}
	<section>
		<h3 id="nix-et-salom">Nix et Salomé</h3>
	{@html renderMarkdown("- Nix & Salomé ont emmené les autres enfants pour le rituel\n  - Elle n'ont pas pris les 5 enfants soignés car ils ont 2 âmes en eux et ne sont pas suffisamment pur\n\t Si on ne fait rien, les enfants sont liés au rituel = Mort certaine\n")}

	</section>
{/snippet}

{#snippet les_2Paladins()}
	<section>
		<h3 id="les-2-paladins">Les 2 paladins</h3>
	{@html renderMarkdown("- Les paladins surveillent le groupe pour voir comment ils gèrent 2 âmes\n\t - Si les enfants meurent, ils détruisent le manoir et disent aux joueurs de les suivre sans faire d'histoire\n\t - Si les enfants survivent, ils indiquent aux joueurs que le chef serait intéressé de les rencontrer et leur indiquent une direction\n")}

	</section>
{/snippet}

{#snippet actionsDesJoueurs()}
	<section>
		<h2 id="actions-des-joueurs">Actions des joueurs</h2>
	{@html renderMarkdown("\n**03/04/26**\n- Le groupe découvre qu'il ne reste que 5 enfants sur les 12 de base, et 2 des gérants sont également absents\n- Un enfant a crié au milieu de la nuit. On le retrouve dans la bibliothèque avec les yeux arrachés. Le suspect serait un spectre\n- Ils passent la nuit, mais le jour ne vient pas. Ils sont enfermés dans un dôme de magie qui n'est pas uniquement une magie de ténèbres\n- Les enfants se sont dispersés dans la maison et le groupe les cherche\n- Hazdaim va chercher le dernier dans la forêt pendant que les autres tentent de le suivre et combattent des monstres (**06/03/26**)\n- Ils demandent à voir la tombe d'Hugo, et alors que Théon les emmène, Léoric lui dit qu'il a prié le dieu de la mort. Théon retourne vite au manoir\n\n**23/05/26**\n- Ils fouillent la chambre de Théon et trouve un livre où il est écrit \"Je suis désolé\" sur toutes les pages\n- Ils vont dans la cave et trouvent Théon au dessus du corps du petit Hugo\n- Théon a tué Hugo pour récupérer ses organes et sauver les autres enfants\n- Le groupe essaie de calmer Hugo et prie le dieu de la mort pour l'emporter\n- Le reste des enfants vient dire merci à Hugo avant qu'il s'en aille\n- Ils croisent les 2 paladins qui avaient placés e dôme nocturne autour du manoir\n- Ils leur disent que le chef s'intéresse à eux et leur donnent un point de rendez-vous\n- Le groupe part rechercher le reste des enfants")}

	</section>
{/snippet}
