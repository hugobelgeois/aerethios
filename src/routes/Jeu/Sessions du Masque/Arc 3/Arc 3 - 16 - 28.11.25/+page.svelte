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
          "id": "5-chlorys-vient-sexcuser",
          "text": "5) Chlorys vient s'excuser",
          "level": 4
      },
      {
          "id": "6-le-vol-de-raja",
          "text": "6) Le vol de Raja",
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
  <title>Arc 3 - 16 - 28.11.25</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Arc 3 - 16 - 28.11.25</h1>
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
	{@html renderMarkdown("\nLieu actuel : Suraja, Irkma\n\nObjectif :\n\nPnjs notables : Chlorys\n")}

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

	{@render _ChlorysVientSexcuser()}
	{@render _LeVolDeRaja()}
	</section>
{/snippet}

{#snippet _ChlorysVientSexcuser()}
	<section>
		<h4 id="5-chlorys-vient-sexcuser">5) Chlorys vient s'excuser</h4>
	{@html renderMarkdown("> **NPC Interaction**, Dara, Haelrak, Zvein >\n\nElle n'était pas au courant qu'ils volaient un compagnon à Arek, et veut se faire pardonner en ayant fait des recherches pour eux\n\nLe masque est lié à la religion, potentiellement pour servir d'arme contre les dieux.\nLéoric et Hazdaim pour contacter le dieu dormant\nArek pour les protéger\nElle propose à Dara de voler Raja car c'est elle qui a commandité son vol\nÉquipe de 3 pour la discrétion\n")}

	</section>
{/snippet}

{#snippet _LeVolDeRaja()}
	<section>
		<h4 id="6-le-vol-de-raja">6) Le vol de Raja</h4>
	{@html renderMarkdown("> **Énigme**, - > le coffre est sécurisé\n\nRaja a utilisé la magie de Lumière et de Ténèbres pour sécuriser le coffre\nS'ils ratent leur jet, il explose et leur met un malus\n")}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">Joueurs</h2>
	{@html renderMarkdown("\n- [x] Diego 17\n- [x] Loïc 14\n- [x] Lucas 7\n- [x] Michel 19\n- [x] Nolan 5\n- [ ] Thomas 17\n- [ ] William 7\n\n|     Précédent     |     Suivant      |\n| :---------------: | :--------------: |\n| <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 15 - 14.11.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 15 - 14.11.25\" data-wiki-fragment=\"\">Arc 3 - 15 - 14.11.25</a> | <a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 17 - 20.12.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 17 - 20.12.25\" data-wiki-fragment=\"\">Arc 3 - 17 - 20.12.25</a> |")}

	</section>
{/snippet}
