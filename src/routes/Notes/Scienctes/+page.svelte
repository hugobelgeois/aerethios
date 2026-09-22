<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Scienctes</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Scienctes</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("Les crystaux dans la main peuvent être implantés à l'aide d'une opération invasive (ouvrir le doigt, remplacer l'os par un crystal) qui retire les terminaisons nerveuses, ou bien par une injection de \"germes\" csytalisées qui vont modifier les cellules de l'os pour le transformer en crystal (l'injection se glissant l'aiguille sous l'ongle avant de pénétrer la chair puis l'os)\n\nLe cerveau bloque naturellement le corps a faire des choses qui pourraient le blesser (serrer sa machoire à en briser ses dents par exemple)\nIl fait la même chose avec la magie en empêchant un corps sans crystal de puiser dans ses propre réserve vitale\nAvoir des crystaux bloque cette protection et permet de générer des sorts puissants, mais le corps n'est cependant toujours pas résistant et est blessé doucement à force d'utilisation :\nLes tissus des doigts se nécrosent, brûlent, ...\nCertains grands mages n'ont plus de chair sur leur main, et les crystaux sont maintenus ensemble grâce à leur propriété magnétique.\nCes blessures rendent l'utilisation d'armes et d'outils plus difficile, voire impossible dans les cas extrême")}
{/snippet}
