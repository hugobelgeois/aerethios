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
  <title>Arc 3 - 14 - 11.10.25</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 3 - 14 - 11.10.25</h1>
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
	{@html renderMarkdown("\nLieu actuel : Suraja, Irkma\n\nObjectif : Rencontre de Chlorys et récupération d'infos sur son groupe\n\nPnjs notables : Chlorys\n")}

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
	{@html renderMarkdown("\n**Irkma -> Chlorys**\nQuand elle voit Arek la chercher, elle part en courant\n> Course poursuite + combat pour la calmer\n> Discussion dans une taverne après\n\nEngagée pour garantir la sécurité et l'anonymat des membres du groupe Esper\nAucune notion de ce qu'ils font, elle est assez payée que pour ne pas s'y intéresser\nElle pourrait se souvenir de détails s'ils l'aident à voler un commerçant rival\n\nIls font le casse et peuvent se rendre compte qu'il s'agit des affaires de Dara\nIls la retrouvent après et peuvent la confronter\n> Elle trouve que Raja est une grosse pute qui se la pète avec son physique et qui a trop de reconnaissance alors qu'elle ne prend aucun risque\n\nElle connaît 2 membres du groupe qui sont souvent ensemble à Irkma\nNimaya, une ancienne esclave qui gère le réseau pauvre et recrute des hommes pour Chlorys\nTazim, un prêtre du \"Prendre\" qui assemble des fonds pour le groupe\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">Joueurs</h2>
	{@html renderMarkdown("\n- [x] Diego 15\n- [x] Loïc 12\n- [x] Lucas 5\n- [x] Michel 17\n- [ ] Nolan 3\n- [x] Thomas 16\n- [ ] William 7\n\n|     Précédent     |      Suivant      |\n| :---------------: | :---------------: |\n| <a href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13b - 03.10.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13b - 03.10.25\" data-wiki-fragment=\"\">Arc 3 - 13b - 03.10.25</a> | <a href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 15 - 14.11.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 15 - 14.11.25\" data-wiki-fragment=\"\">Arc 3 - 15 - 14.11.25</a> |")}

	</section>
{/snippet}
