<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
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
          "id": "actions-des-joueurs",
          "text": "Actions des joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>07. Retour chez Zaledra</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>07. Retour chez Zaledra</h1>
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
		<h2 id="description">{@html applyBase("Description")}</h2>
	{@html renderMarkdown("> Description à lire aux joueurs en entrant dans cette scène.\r\n\r\n\t...\r\n\r")}

	</section>
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html applyBase("Détails")}</h2>
	{@html renderMarkdown("\r\n| Lieu | Météo | Heure | Musique |\r\n| ---- | ----- | ----- | ------- |\r\n|      |       |       |         |\r")}
	{@render maps()}
	{@render rencontres()}
	</section>
{/snippet}

{#snippet maps()}
	<section>
		<h3 id="maps">{@html applyBase("Maps")}</h3>


	</section>
{/snippet}

{#snippet rencontres()}
	<section>
		<h3 id="rencontres">{@html applyBase("Rencontres")}</h3>
	{@html renderMarkdown("\r\n|   Nom   | Rôle                              |  Race  | Sexe  | Age |      Personnalité      | Accent |       Equipement        |\r\n| :-----: | --------------------------------- | :----: | :---: | :-: | :--------------------: | :----: | :---------------------: |\r\n| Zaledra | Investisseur du projet Masque     | Humain | Homme | 50  |                        |        | <span class=\"wiki-unresolved\">7-Zaledra.jpg\\</span> |\r\n\r")}

	</section>
{/snippet}

{#snippet intrigues()}
	<section>
		<h2 id="intrigues">{@html applyBase("Intrigues")}</h2>
	{@html renderMarkdown("> Evénements et leur conclusion sans l'intervention des joueurs\r\n\r\n-\r\n\r")}

	</section>
{/snippet}

{#snippet actionsDesJoueurs()}
	<section>
		<h2 id="actions-des-joueurs">{@html applyBase("Actions des joueurs")}</h2>
	{@html renderMarkdown("\r\n-")}

	</section>
{/snippet}
