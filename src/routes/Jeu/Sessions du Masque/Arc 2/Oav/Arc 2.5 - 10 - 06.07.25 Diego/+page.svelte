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
  <title>Arc 2.5 - 10 - 06.07.25 Diego</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 2.5 - 10 - 06.07.25 Diego</h1>
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
	{@html renderMarkdown("\nLieu actuel : Suraja, [[]]\n\nObjectif :\n\nPnjs notables : -\n")}

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
	{@html renderMarkdown("\n> Commerce avec son père dans la ville voisine\n> Négocie un achat d'un petit Lagiacrus, *Dracodo*\n>\n> ~~Fast forward, le nécromancien arrive~~\n> Dara s'enfuit avec la Toile et le Lagiacrus *avant que le nécromancien n'arrive*\n> ~~Il est pourchassé par un membre de sa famille mort-vivant\n> Combat contre lui et le Lagiacrus se sacrifie~~\n>\n> Fast forward, il a erré de ville en villages pour fuir le nécromancien et pour survivre de quêtes et de troque pendant plusieurs années\n> *Il profite de son renouveau pour apprendre l'eau au lieu de la foudre\n> Avec sa maturité du \"futur\", il en profite pour se créer un réseau ainsi qu'un fond de commerce dans Suraja*\n> Il fini par arriver au port Nord de Suraja avant de prendre un bateau qui le mène au début du jdr\n\nRésultat :\n- Nouvelle magie d'eau\n- Lagiacrus\n- Réseau légal de commerce dans Suraja\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">Joueurs</h2>
	{@html renderMarkdown("\n- [x] Diego\n- [ ] Loïc\n- [ ] Michel\n- [ ] Thomas\n- [ ] William\n\n|         Précédent         |  Suivant  |\n| :-----------------------: | :-------: |\n| <a href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" data-wiki-fragment=\"\">Arc 2 - 09b - 27.06.25</a> | <a href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3\" data-wiki-fragment=\"\">Arc 3</a> |\n")}

	</section>
{/snippet}
