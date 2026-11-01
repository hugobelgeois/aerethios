<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
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
  <title>05. Troupes d'Havel</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>05. Troupes d'Havel</h1>
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
		<h2 id="description">{@html applyBase("Description")}</h2>
	{@html renderMarkdown("> Description à lire aux joueurs en entrant dans cette scène.\n\n\t...\n")}

	</section>
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html applyBase("Détails")}</h2>
	{@html renderMarkdown("\n| Lieu | Météo | Heure | Musique |\n| ---- | ----- | ----- | ------- |\n|      |       |       |         |")}
	{@render maps()}
	{@render rencontres()}
	</section>
{/snippet}

{#snippet maps()}
	<section>
		<h3 id="maps">{@html applyBase("Maps")}</h3>


	</section>
{/snippet}

{#snippet rencontres()}
	<section>
		<h3 id="rencontres">{@html applyBase("Rencontres")}</h3>

	{@render havel()}
	{@render soldat()}
	</section>
{/snippet}

{#snippet havel()}
	<section>
		<h4 id="havel">{@html applyBase("Havel")}</h4>
	{@html renderMarkdown("- Pactisant avec Fortissax\n- Mort mais en debout grâce à la nécromancie, mais libre de ses actions grâce aux champignons\n- Quelques soldats sont avec\n\t- Refuse d'avancer si les joueurs ne ramènent pas plus de soldats. \"Pas.. Assez...\"\n<img src=\"%%BASE%%/5-Havel.jpg\" alt=\"5-Havel.jpg\" class=\"wiki-image\" />\n")}

	</section>
{/snippet}

{#snippet soldat()}
	<section>
		<h4 id="soldat">{@html applyBase("Soldat")}</h4>
	{@html renderMarkdown("<img src=\"%%BASE%%/5-ShroomD.jpg\" alt=\"5-ShroomD.jpg\" width=\"400\" class=\"wiki-image\" />\n")}

	</section>
{/snippet}

{#snippet intrigues()}
	<section>
		<h2 id="intrigues">{@html applyBase("Intrigues")}</h2>
	{@html renderMarkdown("> Evénements et leur conclusion sans l'intervention des joueurs\n\n- Ils doivent trouver l'entrée de la montagne pour atteindre Bayle\n\t- 1 tour : Le spectre se déplace\n\t- 2 tours : Les soldats se relèvent\n\t- 1 tour : Les joueurs se déplacent ou détectent les présences champignons\n")}
	{@render arbre()}
	{@render campement()}
	{@render spectre()}
	{@render next()}
	</section>
{/snippet}

{#snippet arbre()}
	<section>
		<h3 id="arbre">{@html applyBase("Arbre")}</h3>
	{@html renderMarkdown("- Boire l'eau permet de se connecter au réseau de champignon et détecter les masses\n\t- Cela informe également les autres champignons de votre présence\n<img src=\"%%BASE%%/5-Tree.jpg\" alt=\"5-Tree.jpg\" width=\"400\" class=\"wiki-image\" />\n")}

	</section>
{/snippet}

{#snippet campement()}
	<section>
		<h3 id="campement">{@html applyBase("Campement")}</h3>
	{@html renderMarkdown("- Camp de cadavres où les soldats ont été réanimés par les champignons\n\t- Il n'y en a pas beaucoup, et ils ne sont pas agressifs si au moins un des joueurs a bu l'eau de l'arbre\n- Il y a une lettre qui explique que les éclaireurs ont trouvé l'entré, mais qu'une créature rôde et qu'ils doivent minimiser les pertes pour réussir la mission\n")}

	</section>
{/snippet}

{#snippet spectre()}
	<section>
		<h3 id="spectre">{@html applyBase("Spectre")}</h3>
	{@html renderMarkdown("- A tué la majorité des soldats, qui se relèvent constamment grâce aux champignons\n\t- Attirée par le mouvement\n\t- Eteint les torches proches\n\t- Repoussé par la lumière magique\n<img src=\"%%BASE%%/5-Spectre.jpg\" alt=\"5-Spectre.jpg\" width=\"400\" class=\"wiki-image\" />\n")}

	</section>
{/snippet}

{#snippet next()}
	<section>
		<h3 id="next">{@html applyBase("Next")}</h3>
	{@html renderMarkdown("- Léoric : Bigard lui propose de se faire exploser magiquement sur le masque pour l'affaiblir, mais Léoric perdra sa magie\n- Hazdaim : Radeon lui propose son pouvoir contre le masque en échange du contrôle sur son corps pour une action\n- Arek : Le masque propose la liberté de son emprise en échange de tuer son hôte\n- Dara : Zaledra propose de rendre les doigts si Dara lui donne sa toile, et il en fera son associé principal")}

	</section>
{/snippet}

{#snippet actionsDesJoueurs()}
	<section>
		<h2 id="actions-des-joueurs">{@html applyBase("Actions des joueurs")}</h2>
	{@html renderMarkdown("\n-")}

	</section>
{/snippet}
