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
          "id": "1-document-dinformation-sur-le-groupe",
          "text": "1) Document d'information sur le groupe",
          "level": 4
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
  <title>Arc 4 - 19 - 23.01.26</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 4 - 19 - 23.01.26</h1>
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
		<h2 id="dtails">Détails</h2>
	{@html renderMarkdown("\nLieu actuel : Nirina, Pranels\n\nObjectif :\n\nPnjs notables : Ilmar Hakka\n")}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">Notes</h2>


	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">Scénario</h2>

	{@render _DocumentDinformationSurLeGroupe()}
	</section>
{/snippet}

{#snippet _DocumentDinformationSurLeGroupe()}
	<section>
		<h4 id="1-document-dinformation-sur-le-groupe">1) Document d'information sur le groupe</h4>
	{@html renderMarkdown("> **Event**, Qui > Quoi\n\nContact :\n- Théon, Templis, pourrait se renseigner en interne\n- Nyx, contact d'Arek\n\n- Thierry du Lion d'Argent\n\t- Mattias du Lion Tuant\n\n- Ferdinand du Lion d'Argent\n\t- Chlodvig du Marteau Lourd\n\tGroupe avec des sous-fifres\n\n- Salomé du Lion d'Argent\n\t- Nyx du Lion d'Argent\n\tRépandent la foi\n\n- Florian de l'Ancienne Bataille\n\t- Erasmus du Tranchant\n\n- Ilmar Hakka\n\t- Kigan Krust\n\tSe trouvent dans Sulimund, à Crache Poussière\n\nParmi les leaders se trouve forcément le planificateur de tout ce qu'il se passe.\n\nIl faudrait réussir à se renseigner auprès des autres leaders pour savoir de qui il s'agit.\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">Joueurs</h2>
	{@html renderMarkdown("\n- [x] Diego 20\n- [ ] Loïc 15\n- [ ] Lucas 8\n- [x] Michel 22\n- [x] Nolan 8\n- [x] Thomas 20\n- [ ] William 7\n\n|         Précédent         |          Suivant          |\n| :-----------------------: | :-----------------------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 18 - 02.01.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 18 - 02.01.26\" data-wiki-fragment=\"\">Arc 4 - 18 - 02.01.26</a> | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 20 - 13.02.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 20 - 13.02.26\" data-wiki-fragment=\"\">Arc 4 - 20 - 13.02.26</a> |\n")}

	</section>
{/snippet}
