<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Templis"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Templis"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render oracle()}
  </div>
</article>

<LinkPreview />

{#snippet oracle()}
	<section>
		<h2 id="oracle">{@html "Oracle"}</h2>
	{@html "<p>Sacrifier un sens permet de le remplacer par une \"amélioration\" qui fonctionne de la même manière mais uniquement pour le plan spirituel.</p>\n<ul><li>S'enlever la vue permet de voir la monde sous forme d'aura et de voir l'aura des esprits</li><li>L'odorat permet de les sentir, mais c'est moins précis</li><li>...</li></ul>\n<p>Se sacrifier le sens du goût : Il reste des papilles gustatives sur les couilles, dans l'anus, l'estomac et le pancréas</p>\n<ul><li>Le goût se développe dans ces endroits là</li></ul>\n<p>Se sacrifier le sens du toucher consiste à soit se brûler la peau (très grand risque de décès à cause de la douleur), soit faire une opération chirurgicale pour détruire la partie de son cerveau qui gère la douleur (très grand risque de décès à cause de la précision).</p>\n<ul><li>Si on brûle sa peau, le corps peut interagir avec le plan spirituel mais pas trop</li><li>Exemple, si un esprit est dans le plan spirituel et moi dans le plan physique, je peux mettre mon bars à travers son corps sans rencontrer de résistance.</li></ul>\n<p>\t\t  Mais dans le plan spirituel, mon bras existe et traverse l'esprit, créant un trou qui lui fait des dégâts.</p>\n<p>Se sacrifier l'ouïe pour entendre les esprits</p>\n<ul><li>Lorsqu'on vit, nos pensées sont réservées à nous-même car notre enveloppe physique les contient</li><li>Une fois mort, toutes nos pensées sont communiquées à tout ce qui peut nous entendre, et un être intelligent ne peut jamais s'arrêter de penser</li></ul>"}

	</section>
{/snippet}
