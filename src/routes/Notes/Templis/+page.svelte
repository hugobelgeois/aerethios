<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "oracle",
          "text": "Oracle",
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
		{@render oracle()}
  </div>
</article>

<LinkPreview />

{#snippet oracle()}
	<section>
		<h2 id="oracle">{@html applyBase("Oracle")}</h2>
	{@html renderMarkdown("\nSacrifier un sens permet de le remplacer par une \"amélioration\" qui fonctionne de la même manière mais uniquement pour le plan spirituel.\n\t- S'enlever la vue permet de voir la monde sous forme d'aura et de voir l'aura des esprits\n\t- L'odorat permet de les sentir, mais c'est moins précis\n\t- ...\n\nSe sacrifier le sens du goût : Il reste des papilles gustatives sur les couilles, dans l'anus, l'estomac et le pancréas\n\t- Le goût se développe dans ces endroits là\n\nSe sacrifier le sens du toucher consiste à soit se brûler la peau (très grand risque de décès à cause de la douleur), soit faire une opération chirurgicale pour détruire la partie de son cerveau qui gère la douleur (très grand risque de décès à cause de la précision).\n\t- Si on brûle sa peau, le corps peut interagir avec le plan spirituel mais pas trop\n\t\t- Exemple, si un esprit est dans le plan spirituel et moi dans le plan physique, je peux mettre mon bars à travers son corps sans rencontrer de résistance.\n\t\t  Mais dans le plan spirituel, mon bras existe et traverse l'esprit, créant un trou qui lui fait des dégâts.\n\nSe sacrifier l'ouïe pour entendre les esprits\n\t- Lorsqu'on vit, nos pensées sont réservées à nous-même car notre enveloppe physique les contient\n\t\t- Une fois mort, toutes nos pensées sont communiquées à tout ce qui peut nous entendre, et un être intelligent ne peut jamais s'arrêter de penser")}

	</section>
{/snippet}
