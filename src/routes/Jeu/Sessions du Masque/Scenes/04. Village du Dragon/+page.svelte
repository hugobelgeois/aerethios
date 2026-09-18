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
  <title>04. Village du Dragon</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>04. Village du Dragon</h1>
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
	{@html renderMarkdown("> Description à lire aux joueurs en entrant dans cette scène.\n\n\t...\n")}

	</section>
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html applyBase("Détails")}</h2>
	{@html renderMarkdown("\n| Lieu          | Météo | Heure | Musique |\n| ------------- | ----- | ----- | ------- |\n| Nirina, Fruss |       |       |         |")}
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
	{@html renderMarkdown("\n|     Nom      | Rôle               |  Race  | Sexe | Age |                  Personnalité                   |   Accent   | Equipement |\n| :----------: | ------------------ | :----: | :--: | :-: | :---------------------------------------------: | :--------: | :--------: |\n| Numa / Nomos | Gérant de la ville | Dragon |  -   |  -  | Calme, Réfléchi, appelle les gens par leur race | Voix grave |     -      |\n")}

	</section>
{/snippet}

{#snippet intrigues()}
	<section>
		<h2 id="intrigues">{@html applyBase("Intrigues")}</h2>
	{@html renderMarkdown("> Evénements et leur conclusion sans l'intervention des joueurs\n\n- Le dragon a pris le contrôle de la ville, mais c'est un bon gérant\n  - Tel un roi, il taxe le peuple en échange de sa protection, mais il ne réclame pas les récoltes, juste une taxe sur les revenus\n  - Le peuple vit mieux depuis et est plus motivé à travailler\n\tSi les joueurs ne font rien, le peuple continue d'être heureux\n\tSinon, il part combattre le masque et la ville tombe doucement dans le chaos\n\n-\n")}

	</section>
{/snippet}

{#snippet actionsDesJoueurs()}
	<section>
		<h2 id="actions-des-joueurs">{@html applyBase("Actions des joueurs")}</h2>
	{@html renderMarkdown("\n-")}

	</section>
{/snippet}
