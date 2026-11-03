<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "description",
          "text": "Description",
          "level": 2
      },
      {
          "id": "dtails",
          "text": "Détails",
          "level": 2
      },
      {
          "id": "maps",
          "text": "Maps",
          "level": 3
      },
      {
          "id": "rencontres",
          "text": "Rencontres",
          "level": 3
      },
      {
          "id": "havel",
          "text": "Havel",
          "level": 4
      },
      {
          "id": "soldat",
          "text": "Soldat",
          "level": 4
      },
      {
          "id": "intrigues",
          "text": "Intrigues",
          "level": 2
      },
      {
          "id": "arbre",
          "text": "Arbre",
          "level": 3
      },
      {
          "id": "campement",
          "text": "Campement",
          "level": 3
      },
      {
          "id": "spectre",
          "text": "Spectre",
          "level": 3
      },
      {
          "id": "nid",
          "text": "Nid",
          "level": 4
      },
      {
          "id": "next",
          "text": "Next",
          "level": 3
      },
      {
          "id": "actions-des-joueurs",
          "text": "Actions des joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"05. Troupes d'Havel"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"05. Troupes d'Havel"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render description()}
		{@render dtails()}
		{@render intrigues()}
		{@render actionsDesJoueurs()}
  </div>
</article>

<LinkPreview />

{#snippet description()}
	<section>
		<h2 id="description">{@html "Description"}</h2>
	{@html "<blockquote>Description à lire aux joueurs en entrant dans cette scène.</blockquote>\n<p>\t...</p>"}

	</section>
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Lieu</th><th>Météo</th><th>Heure</th><th>Musique</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table></div>"}
	{@render maps()}
	{@render rencontres()}
	</section>
{/snippet}

{#snippet maps()}
	<section>
		<h3 id="maps">{@html "Maps"}</h3>


	</section>
{/snippet}

{#snippet rencontres()}
	<section>
		<h3 id="rencontres">{@html "Rencontres"}</h3>

	{@render havel()}
	{@render soldat()}
	</section>
{/snippet}

{#snippet havel()}
	<section>
		<h4 id="havel">{@html "Havel"}</h4>
	{@html applyBase("<ul><li>Pactisant avec Fortissax</li><li>Mort mais en debout grâce à la nécromancie, mais libre de ses actions grâce aux champignons</li><li>Quelques soldats sont avec</li><li>Refuse d'avancer si les joueurs ne ramènent pas plus de soldats. \"Pas.. Assez...\"</li></ul>\n<img src=\"%%BASE%%/5-Havel.jpg\" alt=\"5-Havel.jpg\" class=\"wiki-image\" />")}

	</section>
{/snippet}

{#snippet soldat()}
	<section>
		<h4 id="soldat">{@html "Soldat"}</h4>
	{@html applyBase("<img src=\"%%BASE%%/5-ShroomD.jpg\" alt=\"5-ShroomD.jpg\" width=\"400\" class=\"wiki-image\" />")}

	</section>
{/snippet}

{#snippet intrigues()}
	<section>
		<h2 id="intrigues">{@html "Intrigues"}</h2>
	{@html "<blockquote>Evénements et leur conclusion sans l'intervention des joueurs</blockquote>\n<ul><li>Ils doivent trouver l'entrée de la montagne pour atteindre Bayle</li><li>1 tour : Le spectre se déplace</li><li>6 tours : Les soldats se relèvent</li><li>1 tour : Les joueurs se déplacent ou détectent les présences champignons</li></ul>"}
	{@render arbre()}
	{@render campement()}
	{@render spectre()}
	{@render next()}
	</section>
{/snippet}

{#snippet arbre()}
	<section>
		<h3 id="arbre">{@html "Arbre"}</h3>
	{@html applyBase("<ul><li>Boire l'eau permet de se connecter au réseau de champignons et détecter les masses</li></ul>\n<img src=\"%%BASE%%/5-Tree.jpg\" alt=\"5-Tree.jpg\" width=\"400\" class=\"wiki-image\" />")}

	</section>
{/snippet}

{#snippet campement()}
	<section>
		<h3 id="campement">{@html "Campement"}</h3>
	{@html "<ul><li>Camp de cadavres où les soldats ont été réanimés par les champignons</li><li>Il n'y en a pas beaucoup, et ils ne sont pas agressifs</li><li>Il y a une lettre qui explique que les éclaireurs ont trouvé l'entré, mais qu'une créature rôde et qu'ils doivent minimiser les pertes pour réussir la mission</li></ul>"}

	</section>
{/snippet}

{#snippet spectre()}
	<section>
		<h3 id="spectre">{@html "Spectre"}</h3>
	{@html applyBase("<ul><li>A tué la majorité des soldats, qui se relèvent constamment grâce aux champignons</li><li>Attirée par le mouvement</li><li>Eteint les torches proches</li><li>Repoussé par la lumière magique</li></ul>\n<img src=\"%%BASE%%/5-Spectre.jpg\" alt=\"5-Spectre.jpg\" width=\"400\" class=\"wiki-image\" />")}
	{@render nid()}
	</section>
{/snippet}

{#snippet nid()}
	<section>
		<h4 id="nid">{@html "Nid"}</h4>


	</section>
{/snippet}

{#snippet next()}
	<section>
		<h3 id="next">{@html "Next"}</h3>
	{@html "<ul><li>Léoric : Bigard lui propose de se faire exploser magiquement sur le masque pour l'affaiblir, mais Léoric perdra sa magie</li><li>Hazdaim : Radeon lui propose son pouvoir contre le masque en échange du contrôle sur son corps pour une action</li><li>Arek : Le masque propose la liberté de son emprise en échange de tuer son hôte</li><li>Dara : Zaledra propose de rendre les doigts si Dara lui donne sa toile, et il en fera son associé principal</li></ul>"}

	</section>
{/snippet}

{#snippet actionsDesJoueurs()}
	<section>
		<h2 id="actions-des-joueurs">{@html "Actions des joueurs"}</h2>
	{@html "<p>-</p>"}

	</section>
{/snippet}
