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
  <title>{"Arc 2.5 - 10 - 07.07.25 Thomas"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 2.5 - 10 - 07.07.25 Thomas"}</h1>
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
	{@html "<p>Lieu actuel : Nirina, Galmag + Pulmius</p>\n<p>Objectif :</p>\n<p>Pnjs notables : <span class=\"wiki-unresolved\">Theon</span>, Grogon, la grosse Berta</p>"}

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
	{@html "<blockquote>Vie à Galmag avec son \"frère\" <span class=\"wiki-unresolved\">Theon</span><br>Le rat de la grosse Berta<br>Assassinat de son maître/propriétaire Grogon<br><br>Fuite pour Pulmius<br>Apprentissage de l'alchimie pendant 2 ans<br><br>Emprunt bancaire pour rembourser le médicament de <span class=\"wiki-unresolved\">Theon</span> et éviter sa mort<br><span class=\"wiki-unresolved\">Theon</span> rejoint les Templis pour aider les autres (ouvrir son orphelinat ambulant?) et part en pèlerinage<br><br>Il fait des quêtes pour monter rang Argent en attendant ses 19 ans<br>Il prend le bateau pour Kothula afin de retrouver sa vie du jdr</blockquote>\n<p>Résultat :</p>\n<ul><li>Rang Arvens Argent 2</li><li>Survie de <span class=\"wiki-unresolved\">Theon</span></li><li>Alchimie</li><li>Nouvelle magie d'air</li><li>Nouveaux styles de combat :</li><li>Trancher les magies</li></ul>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled> Diego</li><li><input type=\"checkbox\" disabled> Loïc</li><li><input type=\"checkbox\" disabled> Michel</li><li><input type=\"checkbox\" disabled checked> Thomas</li><li><input type=\"checkbox\" disabled> William</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" data-wiki-fragment=\"\">Arc 2 - 09b - 27.06.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3\" data-wiki-fragment=\"\">Arc 3</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
