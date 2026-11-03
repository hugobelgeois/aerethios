<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "dtails",
          "text": "Détails",
          "level": 2
      },
      {
          "id": "scnario",
          "text": "Scénario",
          "level": 2
      },
      {
          "id": "notes",
          "text": "Notes",
          "level": 2
      },
      {
          "id": "joueurs",
          "text": "Joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Arc 3 - 11 - 14.08.25"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 3 - 11 - 14.08.25"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render dtails()}
		{@render scnario()}
		{@render notes()}
		{@render joueurs()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>Résumé</blockquote>"}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html "<p>Lieu actuel : Dimension de Billy</p>\n<p>Objectif : Se renseigner sur Tarquin Alsyon et choisir où aller</p>\n<p>Pnjs notables : Billy, Dieu Dormant</p>"}

	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>


	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>
	{@html "<p><strong>Réunion avec Billy</strong></p>\n<ul><li>Il ne peut pas combattre le masque, ça va à l'encontre des serments et pactes qu'il a fait</li><li>Actuellement le Pacte de Certitude</li><li>Il se doute de ce qu'est le matériau brûlant et mou mais ne veut pas le dire avant d'être sûr</li><li>Réussite critique de mental permet de le deviner, mais le joueur ne pourra rien dire</li></ul>\n<ul><li>Billy doit se concerter avec les dieux et préparer le terrain pour le combat contre le masque</li><li>Il leur donne les infos qu'il a récupérées sur Tarquin Alsyon, et leur donne une quête Platine en même temps</li><li>Il leur conseille également d'aller voir l'Oracle Syrithia pour avoir des infos des dieux</li><li>Il leur demande où ils veulent se faire téléporter avant de se dire au revoir (Nirina ou Suraja)</li></ul>\n<p><strong>Quête Platine</strong></p>\n<ul><li>Nirina</li><li>Gore Magala en train d'essayer d'évoluer (on peut empêcher qu'il devienne Shagaru et qu'il soit chaotic à la place)</li></ul>\n<blockquote>Ils vivent normalement, mais de rares cas développent un virus qui leur permet d'évoluer et les rend très agressifs</blockquote>\n<ul><li>Suraja</li><li>Shara Ishvalda</li></ul>\n<blockquote>Créature qui a trop été en résonnance avec un crystal, ce qui lui a permis de contrôler la roche<br>Avec cette armure, il attaque les commerçants sur les routes parce qu'il aime ce qui brille</blockquote>\n<p><strong>Tarquin Alsyon</strong></p>\n<ul><li>2 groupes/guildes possibles</li><li>Nirina, Templier militaire puissant</li><li>Le Magala attaque leurs troupes et les empêche d'avancer efficacement</li><li>Nix,</li><li>Theon,</li></ul>\n<ul><li>Liberté d'actions envers eux (Tuer, kidnapper, torturer, emprisonner, discuter, alliance)</li><li>Billy conseille de se renseigner plus sur eux pour connaître leur rôle et leurs relations avant d'agir trop vite ?</li></ul>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 12</li><li><input type=\"checkbox\" disabled checked> Loïc 9</li><li><input type=\"checkbox\" disabled> Lucas 2</li><li><input type=\"checkbox\" disabled checked> Michel 13</li><li><input type=\"checkbox\" disabled checked> Nolan 1</li><li><input type=\"checkbox\" disabled checked> Thomas 12</li><li><input type=\"checkbox\" disabled> William 5</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" data-wiki-fragment=\"\">Arc 2 - 09b - 27.06.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13 - 29.08.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 13 - 29.08.25\" data-wiki-fragment=\"\">Arc 3 - 13 - 29.08.25</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
