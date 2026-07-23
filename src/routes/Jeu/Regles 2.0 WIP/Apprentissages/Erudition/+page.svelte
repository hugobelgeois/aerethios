<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "rappel",
          "text": "Rappel",
          "level": 3
      },
      {
          "id": "spcialisations",
          "text": "Spécialisations",
          "level": 2
      },
      {
          "id": "enchanteur",
          "text": "Enchanteur",
          "level": 3
      },
      {
          "id": "invocateur",
          "text": "Invocateur",
          "level": 3
      },
      {
          "id": "runniste",
          "text": "Runniste",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Érudition</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Érudition</h1>
  </header>
  <div class="markdown-rendered">
		{@render rappel()}
		{@render spcialisations()}
  </div>
</article>

<LinkPreview />

{#snippet rappel()}
	<section>
		<h3 id="rappel">{@html applyBase("Rappel")}</h3>
	{@html renderMarkdown("\n| Durée | Interruption | Amélioration | Déconstruction | Consommation | Echec                                                                              |\n| :---: | :----------: | :----------: | :------------: | :----------: | :--------------------------------------------------------------------------------- |\n|  1h   |      X       |      X       |       X        |  1 Crystal   | - +1 ingrédient inférieur<br>- Possibilité d'effet négatif ajouté au joueur (DC 5) |\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Fabrication"} fragment={""} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Recolte"} fragment={""} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Lieu"} fragment={""} />

	</section>
{/snippet}

{#snippet spcialisations()}
	<section>
		<h2 id="spcialisations">{@html applyBase("Spécialisations")}</h2>

	{@render enchanteur()}
	{@render invocateur()}
	{@render runniste()}
	</section>
{/snippet}

{#snippet enchanteur()}
	<section>
		<h3 id="enchanteur">{@html applyBase("Enchanteur")}</h3>


	</section>
{/snippet}

{#snippet invocateur()}
	<section>
		<h3 id="invocateur">{@html applyBase("Invocateur")}</h3>


	</section>
{/snippet}

{#snippet runniste()}
	<section>
		<h3 id="runniste">{@html applyBase("Runniste")}</h3>


	</section>
{/snippet}
