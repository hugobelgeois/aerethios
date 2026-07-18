<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Arc 2.5 - 10 - 07.07.25 Thomas</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 2.5 - 10 - 07.07.25 Thomas</h1>
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
		<h2 id="dtails">Détails</h2>
	{@html renderMarkdown("\nLieu actuel : Nirina, Galmag + Pulmius\n\nObjectif :\n\nPnjs notables : <span class=\"wiki-unresolved\">Theon</span>, Grogon, la grosse Berta\n")}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">Scénario</h2>


	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">Notes</h2>
	{@html renderMarkdown("\n> Vie à Galmag avec son \"frère\" <span class=\"wiki-unresolved\">Theon</span>\n> Le rat de la grosse Berta\n> Assassinat de son maître/propriétaire Grogon\n>\n> Fuite pour Pulmius\n> Apprentissage de l'alchimie pendant 2 ans\n>\n> Emprunt bancaire pour rembourser le médicament de <span class=\"wiki-unresolved\">Theon</span> et éviter sa mort\n> <span class=\"wiki-unresolved\">Theon</span> rejoint les Templis pour aider les autres (ouvrir son orphelinat ambulant?) et part en pèlerinage\n>\n> Il fait des quêtes pour monter rang Argent en attendant ses 19 ans\n> Il prend le bateau pour Kothula afin de retrouver sa vie du jdr\n\nRésultat :\n- Rang Arvens Argent 2\n- Survie de <span class=\"wiki-unresolved\">Theon</span>\n- Alchimie\n- Nouvelle magie d'air\n- Nouveaux styles de combat :\n  - Trancher les magies\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">Joueurs</h2>
	{@html renderMarkdown("\n- [ ] Diego\n- [ ] Loïc\n- [ ] Michel\n- [x] Thomas\n- [ ] William\n\n|         Précédent         |  Suivant  |\n| :-----------------------: | :-------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" data-wiki-fragment=\"\">Arc 2 - 09b - 27.06.25</a> | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3\" data-wiki-fragment=\"\">Arc 3</a> |")}

	</section>
{/snippet}
