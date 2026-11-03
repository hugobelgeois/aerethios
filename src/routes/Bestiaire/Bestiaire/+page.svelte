<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Bestiaire"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Bestiaire"}</h1>
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
	{@html "<blockquote>Les créatures du monde se regroupent en différentes catégories.<br>Un <span class=\"wiki-unresolved\">Arvens</span> ou un <span class=\"wiki-unresolved\">Templis</span> se doit de connaître les catégories qui le concernent s'il souhaite être efficace dans son domaine.</blockquote>\n<hr>"}
{/snippet}

{#snippet craturesTerrestres()}
	<section>
		<h1 id="cratures-terrestres">{@html "Créatures Terrestres"}</h1>
	{@html "<p>Entités combattues par les <span class=\"wiki-unresolved\">Arvens</span> à l'aide de méthodes de combat conventionnelles.</p>\n<hr>"}

	</section>
{/snippet}

{#snippet craturesPlanaires()}
	<section>
		<h1 id="cratures-planaires">{@html "Créatures Planaires"}</h1>
	{@html "<p>Entités combattues par les <span class=\"wiki-unresolved\">Templis</span></p>\n<hr>"}

	</section>
{/snippet}

{#snippet altrations()}
	<section>
		<h1 id="altrations">{@html "Altérations"}</h1>
	{@html "<ul><li>Imbibé de magie (développe des abilités magiques posistives)</li><li>Renforcé (les os sortent du corps pour faire un exo-squelette)</li><li>Nécrosé de magie (comportement anormaux, régénération rapide, sorte de cancer)</li><li>Parasité/ Symbioté</li><li>Sacré </li><li>Totémique (lié à un culte, sa force croît avec le nombre d’adorateurs ou de sacrifices)</li><li>Cyclique (change d’apparence et de pouvoirs selon un cycle)</li></ul>\n<hr>"}

	</section>
{/snippet}

{#snippet tailles()}
	<section>
		<h1 id="tailles">{@html "Tailles"}</h1>
	{@html "<ul><li>Minuscule (rat, chauve-souris, familier)</li><li>Petit (chien, gobelin, loup)</li><li>Normal (humain, orc, ogre jeune)</li><li>Grand (ours, troll, wyverne)</li><li>Énorme (hydre, éléphant, ogroides puissants)</li><li>Titanesque (dragons anciens, colosses, avatars des dieux)</li></ul>"}

	</section>
{/snippet}
