<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "lore",
          "text": "Lore",
          "level": 1
      },
      {
          "id": "apparence",
          "text": "Apparence",
          "level": 2
      },
      {
          "id": "socit",
          "text": "Société",
          "level": 2
      },
      {
          "id": "calicos-civiliss",
          "text": "Calicos civilisés",
          "level": 3
      },
      {
          "id": "calicos-sauvages",
          "text": "Calicos sauvages",
          "level": 3
      },
      {
          "id": "culture",
          "text": "Culture",
          "level": 2
      },
      {
          "id": "particularits",
          "text": "Particularités",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Calico</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Calico</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render lore()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("Les Calicos sont des animaux ayant vécu durant plusieurs générations à proximité de crystaux magiques. L'énergie magique a progressivement modifié leur organisme, développant leurs capacités cognitives jusqu'à leur permettre d'acquérir une conscience comparable à celle des humanoïdes.\n\nLeur corps contient naturellement de nombreux micro-crystaux qui continuent d'alimenter leur développement intellectuel et leurs aptitudes magiques.\n")}
{/snippet}

{#snippet lore()}
	<section>
		<h1 id="lore">Lore</h1>

	{@render apparence()}
	{@render socit()}
	{@render culture()}
	{@render particularits()}
	</section>
{/snippet}

{#snippet apparence()}
	<section>
		<h2 id="apparence">Apparence</h2>
	{@html renderMarkdown("\nLes Calicos mesurent généralement autour d'un mètre de haut et conservent les caractéristiques physiques de leur espèce d'origine.\n\nLeur croissance dépend directement de la manière dont la magie est utilisée durant leur jeunesse :\n\n- Si leur cerveau est stimulé par l'apprentissage et l'observation, la magie se concentre dans leurs connexions neuronales, favorisant leur intelligence et limitant leur croissance physique.\n\n- Si cette stimulation est insuffisante, la magie se répand dans l'ensemble du corps, produisant des créatures beaucoup plus massives, puissantes et dangereuses.\n")}

	</section>
{/snippet}

{#snippet socit()}
	<section>
		<h2 id="socit">Société</h2>
	{@html renderMarkdown("\nOn distingue généralement deux grands groupes :\n")}
	{@render calicosCiviliss()}
	{@render calicosSauvages()}
	</section>
{/snippet}

{#snippet calicosCiviliss()}
	<section>
		<h3 id="calicos-civiliss">Calicos civilisés</h3>
	{@html renderMarkdown("\nAyant grandi au contact des humanoïdes, ils marchent sur deux pattes, utilisent des outils et adoptent souvent les comportements des peuples qu'ils ont observés.\n")}

	</section>
{/snippet}

{#snippet calicosSauvages()}
	<section>
		<h3 id="calicos-sauvages">Calicos sauvages</h3>
	{@html renderMarkdown("\nPlus proches de leur nature animale, ils possèdent une intelligence variable mais ne cherchent pas nécessairement à reproduire les modes de vie humanoïdes.\n")}

	</section>
{/snippet}

{#snippet culture()}
	<section>
		<h2 id="culture">Culture</h2>
	{@html renderMarkdown("\nChaque culture Calico est influencée par deux facteurs :\n- Les sociétés humanoïdes qu'elle a observées.\n- Les instincts propres à l'animal dont elle est issue.\n\nAinsi, deux communautés Calicos peuvent avoir très peu de points communs malgré leur origine commune.\n")}

	</section>
{/snippet}

{#snippet particularits()}
	<section>
		<h2 id="particularits">Particularités</h2>
	{@html renderMarkdown("\n- Grande affinité avec la magie.\n- Corps naturellement imprégné de micro-crystaux.\n- Forte diversité culturelle et comportementale.")}

	</section>
{/snippet}
