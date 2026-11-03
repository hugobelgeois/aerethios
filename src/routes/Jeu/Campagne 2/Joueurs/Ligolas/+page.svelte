<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "attributs",
          "text": "Attributs",
          "level": 2
      },
      {
          "id": "combat",
          "text": "Combat",
          "level": 3
      },
      {
          "id": "magie",
          "text": "Magie",
          "level": 3
      },
      {
          "id": "comptences",
          "text": "Compétences",
          "level": 2
      },
      {
          "id": "equipement",
          "text": "Equipement",
          "level": 2
      },
      {
          "id": "armes-de-mles---new--armes--distances---new",
          "text": "Armes de mêlées - New | Armes à distances - New",
          "level": 3
      },
      {
          "id": "armures---new",
          "text": "Armures - New",
          "level": 3
      },
      {
          "id": "apprentissages---new",
          "text": "Apprentissages - New",
          "level": 2
      },
      {
          "id": "inventaire",
          "text": "Inventaire",
          "level": 2
      },
      {
          "id": "notes",
          "text": "Notes",
          "level": 2
      },
      {
          "id": "maison-guildes-et-organisations",
          "text": "Maison, Guildes et Organisations",
          "level": 3
      },
      {
          "id": "relations",
          "text": "Relations",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Ligolas"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Ligolas"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render attributs()}
		{@render comptences()}
		{@render equipement()}
		{@render apprentissages__New()}
		{@render inventaire()}
		{@render notes()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>Si vous voulez une image, envoyez-la moi et je la transforme pour avoir un style graphique similaire au reste</blockquote>"}
{/snippet}

{#snippet attributs()}
	<section>
		<h2 id="attributs">{@html "Attributs"}</h2>
	{@html "<blockquote>Niveau 1</blockquote>"}
	{@render combat()}
	{@render magie()}
	</section>
{/snippet}

{#snippet combat()}
	<section>
		<h3 id="combat">{@html "Combat"}</h3>
	{@html "<blockquote>55 points à mettre au niveau 1 (min 7, max 14)<br>+1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Force</th><th>Dextérité</th><th>Mental</th><th>Perception</th><th>Charisme</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html "Magie"}</h3>
	{@html "<blockquote><strong>Maîtrise</strong> :<br><strong>Crystaux</strong> :</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Air</th><th>Eau</th><th>Roche</th><th>Feu</th><th>Foudre</th><th>Lumière</th><th>Ténèbres</th></tr></thead><tbody><tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>0</td><td>-</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet comptences()}
	<section>
		<h2 id="comptences">{@html "Compétences"}</h2>
	{@html applyBase("<div class=\"table-scroll\"><table><thead><tr><th><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Force\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Force\" data-wiki-fragment=\"\">Force</a></strong></th><th><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Dexterite\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Dexterite\" data-wiki-fragment=\"\">Dextérité</a></strong></th><th><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Mental\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Mental\" data-wiki-fragment=\"\">Mental</a></strong></th><th><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Perception\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Perception\" data-wiki-fragment=\"\">Perception</a></strong></th><th><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Charisme\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Charisme\" data-wiki-fragment=\"\">Charisme</a></strong></th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet equipement()}
	<section>
		<h2 id="equipement">{@html "Equipement"}</h2>

	{@render armesDeMles__New_Armes_Distances__New()}
	{@render armures__New()}
	</section>
{/snippet}

{#snippet armesDeMles__New_Armes_Distances__New()}
	<section>
		<h3 id="armes-de-mles---new--armes--distances---new">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armes de melees - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armes de melees - New\" data-wiki-fragment=\"\">Armes de mêlées - New</a> | <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armes a distances - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armes a distances - New\" data-wiki-fragment=\"\">Armes à distances - New</a>")}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Court</th><th>1 Main</th><th>2 Mains</th><th>Corde</th><th>Feu</th></tr></thead><tbody><tr><td></td><td></td><td></td><td>0</td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<div class=\"table-scroll\"><table><thead><tr><th>Arme</th><th>Dégâts</th><th>Enchantements</th><th>Poids (kg)</th><th>Propriétés</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet armures__New()}
	<section>
		<h3 id="armures---new">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armures - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armures - New\" data-wiki-fragment=\"\">Armures - New</a>")}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Armure</th><th>AC</th><th>DR</th><th>Enchantement</th><th>Poids (kg)</th><th>Dégâts</th><th>Propriétés</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet apprentissages__New()}
	<section>
		<h2 id="apprentissages---new">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" data-wiki-fragment=\"\">Apprentissages - New</a>")}</h2>
	{@html "<ul><li>Lire / Écrire</li><li>Alchimie</li><li>Bijoutier</li></ul>"}

	</section>
{/snippet}

{#snippet inventaire()}
	<section>
		<h2 id="inventaire">{@html "Inventaire"}</h2>
	{@html "<p><strong>Poids maximum</strong> :</p>\n<ul><li><em>Force > 10 : 40 + (Force Modificateur x 10)</em></li><li><em>Force < 10 : 40 + (Force Modificateur x 2)</em></li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Qty</th><th>Nom</th><th>Poids (kg)</th></tr></thead><tbody><tr><td></td><td>Armes</td><td></td></tr><tr><td></td><td>Armures</td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>
	{@html "<p>Elfe de Kothula, enfant du Dieu Dormant.<br>\nMémoire perdue depuis un accident om on a dû lui recoudre la jambe avec un bijoux magique (~collier).<br>\nObsession sur les bijoux pour comprendre comment on l'a soignée et comment elle peut aider d'autres personnes ayant le même mal.</p>\n<p><a href=\"https://open.spotify.com/track/20iP6vxSoQRgq00W2hHKn9?si=1eae4a03129b4a72\">Alas Veritas - Alan Sivestri</a></p>"}
	{@render maisonGuildesEtOrganisations()}
	{@render relations()}
	</section>
{/snippet}

{#snippet maisonGuildesEtOrganisations()}
	<section>
		<h3 id="maison-guildes-et-organisations">{@html "Maison, Guildes et Organisations"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Arvens</th><th>Runild</th><th>Scienctes</th><th>Templis</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet relations()}
	<section>
		<h3 id="relations">{@html "Relations"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Nom</th><th>Relation</th></tr></thead><tbody><tr><td></td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}
