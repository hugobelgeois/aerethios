<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "cratures-terrestres",
          "text": "Créatures Terrestres",
          "level": 1
      },
      {
          "id": "cratures-planaires",
          "text": "Créatures Planaires",
          "level": 1
      },
      {
          "id": "altrations",
          "text": "Altérations",
          "level": 1
      },
      {
          "id": "tailles",
          "text": "Tailles",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Bestiaire</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Bestiaire</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render craturesTerrestres()}
		{@render craturesPlanaires()}
		{@render altrations()}
		{@render tailles()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">Les créatures du monde se regroupent en différentes catégories.\n>Un <span class=\"wiki-unresolved\">Arvens</span> ou un <span class=\"wiki-unresolved\">Templis</span> se doit de connaître les catégories qui le concernent s'il souhaite être efficace dans son domaine.\n\n---\n")}
{/snippet}

{#snippet craturesTerrestres()}
	<section>
		<h1 id="cratures-terrestres">{@html applyBase("Créatures Terrestres")}</h1>
	{@html renderMarkdown("\nEntités combattues par les <span class=\"wiki-unresolved\">Arvens</span> à l'aide de méthodes de combat conventionnelles.\n\n---\n")}

	</section>
{/snippet}

{#snippet craturesPlanaires()}
	<section>
		<h1 id="cratures-planaires">{@html applyBase("Créatures Planaires")}</h1>
	{@html renderMarkdown("\nEntités combattues par les <span class=\"wiki-unresolved\">Templis</span>\n\n---\n")}

	</section>
{/snippet}

{#snippet altrations()}
	<section>
		<h1 id="altrations">{@html applyBase("Altérations")}</h1>
	{@html renderMarkdown("\n- Imbibé de magie (développe des abilités magiques posistives)\n- Renforcé (les os sortent du corps pour faire un exo-squelette)\n- Nécrosé de magie (comportement anormaux, régénération rapide, sorte de cancer)\n- Parasité/ Symbioté\n- Sacré \n- Totémique (lié à un culte, sa force croît avec le nombre d’adorateurs ou de sacrifices)\n- Cyclique (change d’apparence et de pouvoirs selon un cycle)\n\n---\n")}

	</section>
{/snippet}

{#snippet tailles()}
	<section>
		<h1 id="tailles">{@html applyBase("Tailles")}</h1>
	{@html renderMarkdown("\n- Minuscule (rat, chauve-souris, familier)\n- Petit (chien, gobelin, loup)\n- Normal (humain, orc, ogre jeune)\n- Grand (ours, troll, wyverne)\n- Énorme (hydre, éléphant, ogroides puissants)\n- Titanesque (dragons anciens, colosses, avatars des dieux)")}

	</section>
{/snippet}
