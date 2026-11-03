<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Bagarre"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Bagarre"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>Combat simplifié pour les combats non léthaux (amicaux/ de taverne).</blockquote>\n<ul><li>Chaque joueur : <strong>10 PV</strong>, <strong>D4 de dégâts</strong> (Force = ×2 dégâts).</li></ul>\n<ul><li>Deux approches :</li></ul>\n<p>\t→ <strong>Force</strong> : brutale<br>\n\t→ <strong>Technique</strong> : précis et stratégique</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Type</th><th>Calcul</th><th>Dé</th></tr></thead><tbody><tr><td>Force</td><td>Force (Athlétisme)</td><td>D20</td></tr><tr><td>Technique</td><td>Dextérité + Maîtrise Courte</td><td>D12</td></tr></tbody></table></div>\n<ul><li>Pour agir, il faut faire un score <strong>> AC</strong> de l’adversaire.</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Duel</th><th>Effet</th></tr></thead><tbody><tr><td>Force vs Force</td><td>Les deux peuvent infliger des dégâts</td></tr><tr><td>Force vs Technique</td><td>La Technique peut esquiver au lieu d’attaquer</td></tr><tr><td>Technique vs Technique</td><td>Pierre (Attaquer) / Papier (Esquiver) / Ciseaux (Attraper)</td></tr></tbody></table></div>"}
{/snippet}
