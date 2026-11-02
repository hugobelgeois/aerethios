<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "niveau-1",
          "text": "Niveau 1",
          "level": 2
      },
      {
          "id": "niveau-suprieur",
          "text": "Niveau supérieur",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Niveaux</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Niveaux</h1>
  </header>
  <div class="markdown-rendered">
		{@render niveau_1()}
		{@render niveauSuprieur()}
  </div>
</article>

<LinkPreview />

{#snippet niveau_1()}
	<section>
		<h2 id="niveau-1">{@html applyBase("Niveau 1")}</h2>
	{@html renderMarkdown("\r\nAu niveau 1, le joueur peut répartir ces points pour créer son personnage :\r\n- Attributs : 55 points dans les 5 attributs (avec un minimum de 7 et un maximum de 14 par attribut)\r\n- Magie : 1d4 dans 1 magie (+1d4 dans une autre magie s'il fait partie des Scienctes)\r\n- Compétences : Dépend de la valeur des attributs\r\n\r\n| Attributs | Magie       | Compétences |\r\n| --------- | ----------- | ----------- |\r\n| 55        | 1d4 (+1d4?) | Variable    |\r\n\r")}

	</section>
{/snippet}

{#snippet niveauSuprieur()}
	<section>
		<h2 id="niveau-suprieur">{@html applyBase("Niveau supérieur")}</h2>
	{@html renderMarkdown("\r\nLorsqu'un joueur gagne un niveau, il débloque généralement de nouveaux points à dépenser :\r\n- Attributs : +1 point par niveau sauf les niveaux 1, 5, 10, 15 et 20\r\n- Magie : +0.5 point par magie débloquée (le 0.5 ne se conserve pas d'un niveau à l'autre) dans les magies les plus faibles\r\n- Compétences : Dépend de la valeur des attributs\r\n\r\n| Attributs | Magie       | Compétences |\r\n| --------- | ----------- | ----------- |\r\n| +1        | +0.5/ magie | Variable    |")}

	</section>
{/snippet}
