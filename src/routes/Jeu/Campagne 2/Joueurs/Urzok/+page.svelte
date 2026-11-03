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
          "id": "tape-0--inspiration",
          "text": "Étape 0 : Inspiration",
          "level": 3
      },
      {
          "id": "tape-1--identit",
          "text": "Étape 1 : Identité",
          "level": 3
      },
      {
          "id": "tape-2--relations",
          "text": "Étape 2 : Relations",
          "level": 3
      },
      {
          "id": "tape-3--monde",
          "text": "Étape 3 : Monde",
          "level": 3
      },
      {
          "id": "tape-4--intrigues",
          "text": "Étape 4 : Intrigues",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Urzok"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Urzok"}</h1>
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
	{@html "<blockquote><strong>Maîtrise</strong> :<br><strong>Crystaux</strong> :</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Air</th><th>Eau</th><th>Roche</th><th>Feu</th><th>Foudre</th><th>Lumière</th><th>Ténèbres</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>"}

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
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Court</th><th>1 Main</th><th>2 Mains</th><th>Corde</th><th>Feu</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<div class=\"table-scroll\"><table><thead><tr><th>Arme</th><th>Dégâts</th><th>Enchantements</th><th>Poids (kg)</th><th>Propriétés</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>"}

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
	{@html "<p>-</p>"}

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
	{@html "<p>Orc (ascendant loup-mousse) de Kothula<br>\nEst parti dans une forêt pour faire des recherches sur les ingrédients alchimiques qui recouvraient son parent animal<br>\nIl était au croisement de plusieurs villages qu'il aidait en leur vendant des remèdes<br>\nLa forêt a fini par prendre feu, et il est parti pour d'autres aventures ?</p>"}
	{@render tape_0_Inspiration()}
	{@render tape_1_Identit()}
	{@render tape_2_Relations()}
	{@render tape_3_Monde()}
	{@render tape_4_Intrigues()}
	</section>
{/snippet}

{#snippet tape_0_Inspiration()}
	<section>
		<h3 id="tape-0--inspiration">{@html "Étape 0 : Inspiration"}</h3>
	{@html "<ul><li>Quel personnage existant de n'importe quel média t'inspire</li><li>Quel musique d'ambiance (sans/ peu de paroles) représente ton personnage</li><li>Quel est LE trait de caractère qui peut représenter à lui seul ton personnage (un extrême peut faciliter le RP)</li><li>Ex : une voix, un accent, une émotion, ...</li></ul>"}

	</section>
{/snippet}

{#snippet tape_1_Identit()}
	<section>
		<h3 id="tape-1--identit">{@html "Étape 1 : Identité"}</h3>
	{@html applyBase("<ul><li>D'où viens-tu (Kothula, Ovliin, Nirina, Suraja)</li><li>Si c'est ailleurs que Kothula, pourquoi as-tu voyagé jusque là (fuite, voyage, immigration, aventures, ..)</li><li>Quel âge as-tu</li><li>As-tu fait des études ou as-tu directement travaillé (<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" data-wiki-fragment=\"\">voir les métiers</a>)</li><li>Quel est ton statut social (économies & réputation locale)</li><li>Quel sont tes objectifs actuels (court et long terme)</li><li>Quelle est ta plus grande fierté</li><li>Quelle est ta plus grande honte</li><li>Que refuses-tu de faire</li><li>Quelle sont tes phobies</li><li>Quel est ton plus grand mensonge</li></ul>")}

	</section>
{/snippet}

{#snippet tape_2_Relations()}
	<section>
		<h3 id="tape-2--relations">{@html "Étape 2 : Relations"}</h3>
	{@html "<ul><li>As tu des proches (parents, partenaire, enfants, amis, ..)</li><li>Leur statut (vivant, quel continent/ville, actif dans la société, métier, ..)</li><li>Sous quelle occasion pourrait-on les croiser</li><li>Est-ce qu'ils te manquent et inversement</li><li>À qui dois-tu une dette</li><li>Quel personnage que tu as rencontré/ entendu parler t'a marqué et pour quelle raison</li><li>As-tu fait des promesses, possèdes-tu des objets qui sont précieux pour quelqu'un d'autre</li></ul>"}

	</section>
{/snippet}

{#snippet tape_3_Monde()}
	<section>
		<h3 id="tape-3--monde">{@html "Étape 3 : Monde"}</h3>
	{@html "<ul><li>Quel lieu de ton enfance existe encore</li><li>Quel lieu a disparu/ été grandement modifié</li><li>Par quoi, pour quelle raison</li><li>Dans quel groupe/ organisation as-tu travaillé/ étudié</li><li>A-t'il eu des conflits avec un autre groupe</li><li>A quel événement incroyable du monde as-tu assisté (procession d'un Doigt, bénédiction d'un dieu, destruction/ édification d'un bâtiment historique, ..)</li><li>Comment cela t'a-t-il impacté</li></ul>"}

	</section>
{/snippet}

{#snippet tape_4_Intrigues()}
	<section>
		<h3 id="tape-4--intrigues">{@html "Étape 4 : Intrigues"}</h3>
	{@html "<ul><li>Quel secret connais-tu ?</li><li>Qui voudrait t'empêcher de le révéler</li><li>Que risques-tu si la vérité éclate</li><li>Quelle rumeur as-tu entendu</li></ul>"}

	</section>
{/snippet}
