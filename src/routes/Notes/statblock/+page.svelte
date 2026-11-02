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
  <title>statblock</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>statblock</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(".\n\n```statblock\nlayout: Aerethios - Player\n\nname: Arek\nimage: Arek_1793397272678_hh42cw.webp\nhp: 50\nmp: 9\nac: 10\nstats: [20, 10-2, 18, 10, 8]\nmagic: [0,0,1d6,1d4,0,1d8+5,0]\ntrait:\n  - name: oui\n    desc: non\n  - name: qesgr\n    desc: mmmmm\n\n```\n\n.\n\n```statblock\nlayout: Aerethios - Equipment\n\nname: Epée\ntype: 2 Mains\n\ndices: 2d6\ndamage: 16\n\nspecial: \n  - name: Tranchant\nvs: Enfants\ninfusion:\n  - name: Magie\n    desc: Feu, Eau, Air, Roche, Foudre\n\nlore: Une épée basique\n\nmaterial: \n  - name: Matériaux\n    desc: 3 Fer (commun)\ngem: [Crystal rare, -2, +8,Magie]\nenchant:\n  - name: Vampirique I\n    desc: Récupère 3 HP par coup\n```\n\n.\n\n```statblock\nlayout: Aerethios - Equipment\n\nname: Armure\ntype: Lourde\n\nac: 10\n\nspecial: \n  - name: Résistance\n    desc: Tranchant\n  - name: Immunité\n    desc: Contondant\n\nlore: Armure portée par des légendes\n\nmaterial:\n  - name: Lourd\n    desc: 8 Mythril (Rare), 8 Adamantite (Rare)\n  - name: Léger\n    desc: 8 Os (Rare)\nenchant:\n  - name: Bonus d'ensemble (Rare)\n    desc: +2 AC\n```\n.")}
{/snippet}
