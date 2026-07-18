<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "plerin",
          "text": "Pèlerin",
          "level": 2
      },
      {
          "id": "passeur",
          "text": "Passeur",
          "level": 2
      },
      {
          "id": "oracle",
          "text": "Oracle",
          "level": 2
      },
      {
          "id": "forgeron",
          "text": "Forgeron",
          "level": 2
      },
      {
          "id": "juge",
          "text": "Juge",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Templis</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Templis</h1>
  </header>
  <div class="markdown-rendered">
		{@render plerin()}
		{@render passeur()}
		{@render oracle()}
		{@render forgeron()}
		{@render juge()}
  </div>
</article>

<LinkPreview />

{#snippet plerin()}
	<section>
		<h2 id="plerin">{@html applyBase("Pèlerin")}</h2>
	{@html renderMarkdown(">Pèleriner les 77 Temples pieds nus.\n\n-\n")}

	</section>
{/snippet}

{#snippet passeur()}
	<section>
		<h2 id="passeur">{@html applyBase("Passeur")}</h2>
	{@html renderMarkdown(">Purger un village de la souffrance.\n")}

	</section>
{/snippet}

{#snippet oracle()}
	<section>
		<h2 id="oracle">{@html applyBase("Oracle")}</h2>
	{@html renderMarkdown(">Offrir un sens aux Dieux soi-même (généralement la vue).\n\n- Possibilité de détecter les entités planaires et d'être moins affecté par leur présence.\n")}

	</section>
{/snippet}

{#snippet forgeron()}
	<section>
		<h2 id="forgeron">{@html applyBase("Forgeron")}</h2>
	{@html renderMarkdown(">Supporter une présence divine ?\n\n- Possibilité d'emprunter 1 objet béni aux Templis.\n\t- Il peut être échangé et conservé aussi longtemps qu'on le souhaite, mais on ne peut en avoir qu'un.\n")}

	</section>
{/snippet}

{#snippet juge()}
	<section>
		<h2 id="juge">{@html applyBase("Juge")}</h2>
	{@html renderMarkdown("> Purifier un démon.")}

	</section>
{/snippet}
