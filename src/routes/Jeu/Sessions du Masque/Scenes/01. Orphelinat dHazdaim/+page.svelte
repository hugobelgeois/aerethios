<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"01. Orphelinat d'Hazdaim"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"01. Orphelinat d'Hazdaim"}</h1>
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
		<h2 id="description">{@html "Description"}</h2>
	{@html applyBase("<blockquote>Description à lire aux joueurs en entrant dans cette scène.</blockquote>\n<p>\t… Vos pas s’enfoncent dans la boue détrempée, projetant des éclats sombres sur des vêtements déjà lourds d’humidité. La mousse et les champignons dévorent les troncs immenses qui vous entourent, tandis que leurs cimes étouffent presque entièrement la lumière du ciel. Chaque pas semble avalé par cette forêt silencieuse, oppressante, comme si les arbres eux-mêmes se refermaient derrière vous.</p>\n<p>\tPuis, au loin, une lueur apparaît.</p>\n<p>\tFaible d’abord, vacillante entre les troncs. Avec elle vient une odeur inattendue : celle d’une soupe à la viande encore chaude, riche et épicée, qui chasse enfin les relents d’eau stagnante et de terre pourrie qui vous accompagnent depuis des jours.</p>\n<p>\tEn avançant, vous remarquez sur le bord du chemin une stèle de pierre récemment dressée. Sa surface est propre, presque intacte malgré l’humidité ambiante, et un symbole étrange y a été gravé avec soin. Sans vraiment ralentir, vous poursuivez votre route, davantage attirés par l’odeur du repas et la perspective d’un toit sec.</p>\n<p>\tEt soudain, la forêt s’ouvre.</p>\n<p>\tAu centre d’une clairière parfaitement entretenue se dresse un manoir aux murs blancs, presque irréel après des jours passés dans les marais. Une vigne épaisse grimpe le long de ses façades jusqu’à une cheminée de briques rouges d’où s’échappe une fumée chaleureuse. Derrière les rideaux fins, des silhouettes bougent doucement, accompagnées de bruits étouffés : des couverts, des pas, peut-être quelques voix.</p>\n<p>\tPour la première fois depuis longtemps… cet endroit ressemble à un refuge.</p>\n<img src=\"%%BASE%%/1-Orphelinat-d'Hazdaim.jpg\" alt=\"1-Orphelinat-d'Hazdaim.jpg\" class=\"wiki-image\" />")}

	</section>
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Lieu</th><th>Météo</th><th>Heure</th><th>Musique</th></tr></thead><tbody><tr><td>Nirina, Forêt haute entourée de marais</td><td>Nuit magique</td><td>?</td><td></td></tr></tbody></table></div>"}
	{@render maps()}
	{@render rencontres()}
	</section>
{/snippet}

{#snippet maps()}
	<section>
		<h3 id="maps">{@html "Maps"}</h3>
	{@html applyBase("<p><a href=\"https://www.tomcartos.com/essenheim-manor\">https://www.tomcartos.com/essenheim-manor</a><br>\n<img src=\"%%BASE%%/1-Orphelinat-d'Hazdaim.png\" alt=\"1-Orphelinat-d'Hazdaim.png\" class=\"wiki-image\" /></p>")}

	</section>
{/snippet}

{#snippet rencontres()}
	<section>
		<h3 id="rencontres">{@html "Rencontres"}</h3>
	{@html applyBase("<div class=\"table-scroll\"><table><thead><tr><th>Nom</th><th>Rôle</th><th>Race</th><th>Age</th><th>Personnalité</th><th>Accent</th><th>Equipement</th></tr></thead><tbody><tr><td>Théon</td><td>Prêtre</td><td>Humain</td><td>20</td><td><del>Vertueux</del><br>Troublé</td><td>-</td><td>Toge décontractée</td></tr><tr><td>Esyla</td><td>Gouvernante</td><td>Humain</td><td>40</td><td>Snob<br>Vieille école</td><td>-</td><td></td></tr><tr><td>Ygor</td><td>Palefrenier</td><td>Humain</td><td>50</td><td>Slav<br>Un peu louche</td><td>Russe</td><td>Vêtements sales<br>Salopette</td></tr><tr><td>Hugo</td><td>Enfant</td><td>Spectre<br>Humain</td><td>10</td><td>Faché<br>Perdu</td><td>-</td><td></td></tr><tr><td>Colonel Thierry du Lion d'Argent</td><td>Paladin</td><td>Humain</td><td>60</td><td></td><td>-</td><td><img src=\"%%BASE%%/1-Colonel-Thierry-du-Lion-d'Argent.webp\" alt=\"1-Colonel-Thierry-du-Lion-d'Argent.webp\" class=\"wiki-image\" /></td></tr><tr><td>Mattias du Lion Tuant</td><td>Paladin</td><td></td><td></td><td>Silencieux<br>Hautain</td><td>-</td><td><img src=\"%%BASE%%/1-Mattias-du-Lion-Tuant.jpg\" alt=\"1-Mattias-du-Lion-Tuant.jpg\" class=\"wiki-image\" /></td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet intrigues()}
	<section>
		<h2 id="intrigues">{@html "Intrigues"}</h2>
	{@html "<blockquote>Evénements et leur conclusion sans l'intervention des joueurs</blockquote>"}
	{@render thonEtHugo()}
	{@render nixEtSalom()}
	{@render les_2Paladins()}
	</section>
{/snippet}

{#snippet thonEtHugo()}
	<section>
		<h3 id="thon-et-hugo">{@html "Théon et Hugo"}</h3>
	{@html "<ul><li>Théon & Ygor a sacrifié l'enfant malade/ en fin de vie (Hugo) pour sauver 5 enfants</li><li>Il empêche Imet de venir pour que Hugo puisse se calmer et partir en paix</li></ul>\n<p>\t Si on ne fait rien, Hugo récupère ses organes, les 5 enfants meurent, et Théon se suicide de son incompétence</p>"}

	</section>
{/snippet}

{#snippet nixEtSalom()}
	<section>
		<h3 id="nix-et-salom">{@html "Nix et Salomé"}</h3>
	{@html "<ul><li>Nix & Salomé ont emmené les autres enfants pour le rituel</li><li>Elle n'ont pas pris les 5 enfants soignés car ils ont 2 âmes en eux et ne sont pas suffisamment pur</li></ul>\n<p>\t Si on ne fait rien, les enfants sont liés au rituel = Mort certaine</p>"}

	</section>
{/snippet}

{#snippet les_2Paladins()}
	<section>
		<h3 id="les-2-paladins">{@html "Les 2 paladins"}</h3>
	{@html "<ul><li>Les paladins surveillent le groupe pour voir comment ils gèrent 2 âmes</li><li>Si les enfants meurent, ils détruisent le manoir et disent aux joueurs de les suivre sans faire d'histoire</li><li>Si les enfants survivent, ils indiquent aux joueurs que le chef serait intéressé de les rencontrer et leur indiquent une direction</li></ul>"}

	</section>
{/snippet}

{#snippet actionsDesJoueurs()}
	<section>
		<h2 id="actions-des-joueurs">{@html "Actions des joueurs"}</h2>
	{@html "<p><strong>03/04/26</strong></p>\n<ul><li>Le groupe découvre qu'il ne reste que 5 enfants sur les 12 de base, et 2 des gérants sont également absents</li><li>Un enfant a crié au milieu de la nuit. On le retrouve dans la bibliothèque avec les yeux arrachés. Le suspect serait un spectre</li><li>Ils passent la nuit, mais le jour ne vient pas. Ils sont enfermés dans un dôme de magie qui n'est pas uniquement une magie de ténèbres</li><li>Les enfants se sont dispersés dans la maison et le groupe les cherche</li><li>Hazdaim va chercher le dernier dans la forêt pendant que les autres tentent de le suivre et combattent des monstres (<strong>06/03/26</strong>)</li><li>Ils demandent à voir la tombe d'Hugo, et alors que Théon les emmène, Léoric lui dit qu'il a prié le dieu de la mort. Théon retourne vite au manoir</li></ul>\n<p><strong>23/05/26</strong></p>\n<ul><li>Ils fouillent la chambre de Théon et trouve un livre où il est écrit \"Je suis désolé\" sur toutes les pages</li><li>Ils vont dans la cave et trouvent Théon au dessus du corps du petit Hugo</li><li>Théon a tué Hugo pour récupérer ses organes et sauver les autres enfants</li><li>Le groupe essaie de calmer Hugo et prie le dieu de la mort pour l'emporter</li><li>Le reste des enfants vient dire merci à Hugo avant qu'il s'en aille</li><li>Ils croisent les 2 paladins qui avaient placés e dôme nocturne autour du manoir</li><li>Ils leur disent que le chef s'intéresse à eux et leur donnent un point de rendez-vous</li><li>Le groupe part rechercher le reste des enfants</li></ul>"}

	</section>
{/snippet}
