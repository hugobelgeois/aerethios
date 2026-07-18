<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Géographie 1</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Géographie 1</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("```leaflet\nid: aerethios-map\nimage: <span class=\"wiki-unresolved\">geography.jpg</span>\nlock: true\nrecenter: false\nnoScrollZoom: false\nheight: 79%\nwidth: 100%\nbounds: [[0,0], [4176,8192]]\nlat: 2088\nlong: 4096\nminZoom: -2\nmaxZoom: 1\ndefaultZoom: -2\nzoomDelta: 0.5\nunit: meters\nscale: 1\ndarkMode: false\nmarker: \n- default,3271.281026815793,3140.362619436029,00 - 24.01.25,J-0,-1,\n ```\n ")}
{/snippet}
