<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Arc 2.5 - 10 - 11.07.25 + 08.08.25 Michel"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 2.5 - 10 - 11.07.25 + 08.08.25 Michel"}</h1>
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
	{@html "<blockquote>Résumé</blockquote>"}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html "<p>Lieu actuel : Nirina, à droite de Galmag, au bord du plateau</p>\n<p>Objectif :</p>\n<p>Pnjs notables : <span class=\"wiki-unresolved\">Loukas</span>, <span class=\"wiki-unresolved\">Calista</span>, <span class=\"wiki-unresolved\">Nyx</span>, <span class=\"wiki-unresolved\">Chlorys</span>, Eryndor</p>"}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>


	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>
	{@html "<blockquote><del>Massacre de son village et son enlèvement, au nom du Dieu Avoir (possession & partage)</del><br>*Colonisation de son village, et échange de mains d'oeuvres contre une alliance commerciale avec les croyants du Dieu Avoir<br>Son père et lui sont emmenés*<br><br>Il est emmené dans une ville sans sa famille<br>Premier aperçu, on le traite correctement, il est nourri, logé et éduqué -> On partage avec lui/ On lui offre des choses<br><del>Mais en échange, il est la possession des Niriniens/ On lui vole ce qui fait son identité (viol, battu, ..)</del><br><em>Vu qu'il est déjà avancé pour son âge (alchimie et tentative d'assassiner le bateau qui les a amenés), on le traite correctement pour son potentiel</em><br>.<br>*Il se rend compte qu'il y a une différence de traitement entre les \"esclaves\" et on lui proposera des choix<br>- Il continuera son apprentissage avec les Niriniens pour devenir le bras du Dieu Avoir<br>- Il sera formé de ses 10 à 18ans et fera partie d'une escouade spéciale (genre Space Marine) : <span class=\"wiki-unresolved\">Loukas</span>, <span class=\"wiki-unresolved\">Calista</span>, <span class=\"wiki-unresolved\">Nyx</span>, <span class=\"wiki-unresolved\">Chlorys</span><br>- Il dera ensuite un sabotage de l'intérieur et se soulèvera avec les esclaves<br>- Il devient le visage de la révolution religieuse*<br>- ~~Tuer le Doigt Eryndor qui passait par là et fuir vers Galmag<br>- Vie de criminel pire qu'on la connait~~<br><br>*Il a une relation forte avec <span class=\"wiki-unresolved\">Chlorys</span> et <span class=\"wiki-unresolved\">Nyx</span><br>Il restera avec <span class=\"wiki-unresolved\">Chlorys</span> encore 2-3 ans avant qu'elle s'élance seule vers l'aventure<br><span class=\"wiki-unresolved\">Nyx</span> continuera d'aider le peuple en pétant des gueules*</blockquote>\n<p>Résultat :</p>\n<ul><li>Nouvelle magie de Lumière</li><li>Nouveaux styles de combat :</li><li>Muraille impénétrable</li><li>Poings d'acier</li><li>Lire & Ecrire</li><li>Alchimie 3 (4?)</li><li>Culture augmentée</li><li>Toile céleste de Lumière</li><li>Maîtrise d'arme +1</li><li>Combat aux poings +2</li><li>Plus un criminel, mais réputation de leader de révolution à travers les continents</li><li>Relation avec <span class=\"wiki-unresolved\">Nyx</span> et <span class=\"wiki-unresolved\">Chlorys</span></li><li>Surveillé par les Doigts</li></ul>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled> Diego</li><li><input type=\"checkbox\" disabled> Loïc</li><li><input type=\"checkbox\" disabled checked> Michel</li><li><input type=\"checkbox\" disabled> Thomas</li><li><input type=\"checkbox\" disabled> William</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" data-wiki-fragment=\"\">Arc 2 - 09b - 27.06.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3\" data-wiki-fragment=\"\">Arc 3</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
