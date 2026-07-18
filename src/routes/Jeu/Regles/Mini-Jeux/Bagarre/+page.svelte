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
  <title>Bagarre</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Bagarre</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">Combat simplifié pour les combats non léthaux (amicaux/ de taverne).\n\n- Chaque joueur : **10 PV**, **D4 de dégâts** (Force = ×2 dégâts).\n\n- Deux approches :\n\t→ **Force** : brutale\n\t→ **Technique** : précis et stratégique\n\n| Type      | Calcul                      | Dé  |\n| --------- | --------------------------- | --- |\n| Force     | Force (Athlétisme)          | D20 |\n| Technique | Dextérité + Maîtrise Courte | D12 |\n\n- Pour agir, il faut faire un score **> AC** de l’adversaire.\n\n| Duel                   | Effet                                                      |\n| ---------------------- | ---------------------------------------------------------- |\n| Force vs Force         | Les deux peuvent infliger des dégâts                       |\n| Force vs Technique     | La Technique peut esquiver au lieu d’attaquer              |\n| Technique vs Technique | Pierre (Attaquer) / Papier (Esquiver) / Ciseaux (Attraper) |")}
{/snippet}
