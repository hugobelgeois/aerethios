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
          "id": "armes",
          "text": "Armes",
          "level": 3
      },
      {
          "id": "armures",
          "text": "Armures",
          "level": 3
      },
      {
          "id": "apprentissages",
          "text": "Apprentissages",
          "level": 2
      },
      {
          "id": "inventaire",
          "text": "Inventaire",
          "level": 2
      },
      {
          "id": "connaissances",
          "text": "Connaissances",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Halfdan"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Halfdan"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render attributs()}
		{@render comptences()}
		{@render equipement()}
		{@render apprentissages()}
		{@render inventaire()}
		{@render connaissances()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>Si vous voulez une image, envoyez-la moi et je la transforme pour avoir un style graphique similaire au reste</blockquote>\n<p><strong>Niveau</strong> : 4</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Arvens</th><th>Runild</th><th>Scienctes</th><th>Templis</th></tr></thead><tbody><tr><td><span class=\"wiki-unresolved\">Or</span> 1</td><td>-</td><td>-</td><td>-</td></tr></tbody></table></div>"}
{/snippet}

{#snippet attributs()}
	<section>
		<h2 id="attributs">{@html "Attributs"}</h2>

	{@render combat()}
	{@render magie()}
	</section>
{/snippet}

{#snippet combat()}
	<section>
		<h3 id="combat">{@html "Combat"}</h3>
	{@html "<blockquote>55 points à mettre au niveau 1 (min 7, max 14)<br>+1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Force</th><th>Dextérité</th><th>Mental</th><th>Perception</th><th>Charisme</th></tr></thead><tbody><tr><td>12</td><td>15</td><td>10</td><td>8</td><td>10</td></tr><tr><td>+1</td><td>+2</td><td>0</td><td>-1</td><td>0</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html "Magie"}</h3>
	{@html "<blockquote><strong>Maîtrise</strong> : 1<br><strong>Crystaux</strong> : 9</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Air</th><th>Eau</th><th>Roche</th><th>Feu</th><th>Foudre</th><th>Lumière</th><th>Ténèbres</th></tr></thead><tbody><tr><td>-</td><td>-</td><td>-</td><td>-</td><td>7</td><td>3</td><td>-</td></tr><tr><td>-</td><td>-</td><td>-</td><td>-</td><td>1d6</td><td>1d4</td><td>-</td></tr></tbody></table></div>"}

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

	{@render armes()}
	{@render armures()}
	</section>
{/snippet}

{#snippet armes()}
	<section>
		<h3 id="armes">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Combat/Armes\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armes\" data-wiki-fragment=\"\">Armes</a>")}</h3>
	{@html applyBase("<div class=\"table-scroll\"><table><thead><tr><th>Court</th><th>1 Main</th><th>2 Mains</th><th>Haste</th><th>Distance</th></tr></thead><tbody><tr><td>3</td><td>4</td><td>0</td><td>2</td><td>0</td></tr><tr><td>+1</td><td>+2</td><td>0</td><td>+1</td><td>0</td></tr></tbody></table></div>\n<div class=\"table-scroll\"><table><thead><tr><th>Arme</th><th>1 Main</th><th>2 Mains</th><th>Dégâts</th><th>Poids (kg)</th><th>Propriétés</th></tr></thead><tbody><tr><td>4 Dagues</td><td>1d4 T<br>1d4 P</td><td>-</td><td>3 Fer<br>x 2 VS Bêtes<br>= 3-6</td><td>1 x 4</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#jetable\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Jetable%5C\">Jetable</a><br><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#critique\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Critique%5C\">Critique</a></td></tr><tr><td>Dague</td><td>1d4 T<br>1d4 P</td><td>-</td><td>6 Titane<br>x 2 VS Magiques (Electrum)<br>= 6-12</td><td>1</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#jetable\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Jetable%5C\">Jetable</a><br><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#critique\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Critique%5C\">Critique</a></td></tr><tr><td>Épée</td><td>1d6 P<br>1d4 T</td><td>2d4 P<br>1d6 T</td><td>3 Fer<br>x 2 VS Bêtes<br>= 3-6</td><td>2</td><td>-</td></tr><tr><td>Hache</td><td>1d6 T<br>1d4 C</td><td>2d4 T<br>1d6 C</td><td>6 Titane<br>x 2 VS Invocations<br>= 6-12</td><td>2</td><td>-</td></tr><tr><td>Lance</td><td>-</td><td>2d6 P</td><td>3 Fer<br>x 2 VS Bêtes<br>= 3-6</td><td>4</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lent\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lent%5C\">Lent</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet armures()}
	<section>
		<h3 id="armures">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Combat/Armures\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armures\" data-wiki-fragment=\"\">Armures</a>")}</h3>
	{@html applyBase("<div class=\"table-scroll\"><table><thead><tr><th>Armure</th><th>AC</th><th>DR</th><th>Enchantement</th><th>Poids (kg)</th><th>Dégâts</th><th>Propriétés</th></tr></thead><tbody><tr><td>Cuir Bouilli</td><td>11 + 2(Dex) + 0(Impénétrable) = 13</td><td>6 (commun)</td><td>-</td><td>3</td><td>-</td><td>Résiste à <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#poison\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Poison%5C\">Poison</a></td></tr><tr><td>Cape en fourrure</td><td>-</td><td>-</td><td>Foudre 2</td><td>1</td><td>-</td><td>Les sorts croitistes à 1 crystal ne le consomme pas</td></tr><tr><td>Bouclier</td><td>2</td><td>5 (Fer)</td><td>-</td><td>4</td><td>1d6 C</td><td>-</td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet apprentissages()}
	<section>
		<h2 id="apprentissages">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Apprentissages\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Apprentissages\" data-wiki-fragment=\"\">Apprentissages</a>")}</h2>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Apprentissage</th><th>Niveau</th><th>Expérience</th></tr></thead><tbody><tr><td>Cartographe</td><td>1</td><td></td></tr><tr><td>Chasseur</td><td>2</td><td></td></tr><tr><td>Lire / Écrire</td><td>1</td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet inventaire()}
	<section>
		<h2 id="inventaire">{@html "Inventaire"}</h2>
	{@html "<p><strong>Poids maximum</strong> : 50</p>\n<ul><li><em>Force > 10 : 40 + (Force Modificateur x 10)</em></li><li><em>Force < 10 : 40 + (Force Modificateur x 2)</em></li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Qty</th><th>Nom</th><th>Poids (kg)</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet connaissances()}
	<section>
		<h2 id="connaissances">{@html "Connaissances"}</h2>
	{@html applyBase("<ul><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Arek\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Arek\" data-wiki-fragment=\"\">Arek</a></li><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Dara\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Dara\" data-wiki-fragment=\"\">Dara</a></li><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Haelrak\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Haelrak\" data-wiki-fragment=\"\">Haelrak</a></li><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Hazdaim\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Hazdaim\" data-wiki-fragment=\"\">Hazdaim</a></li><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Leoric\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Leoric\" data-wiki-fragment=\"\">Léoric</a></li><li><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Old/Zveindel\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Old/Zveindel\" data-wiki-fragment=\"\">Zveindel</a></li></ul>\n<ul><li><a href=\"%%BASE%%/0_Private/Billy\" class=\"wiki-link internal-link\" data-wiki-href=\"/0_Private/Billy\" data-wiki-fragment=\"\">Billy</a></li></ul>")}

	</section>
{/snippet}
