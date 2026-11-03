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
          "id": "armes-de-mle--armes--distance",
          "text": "Armes de Mêlée | Armes à Distance",
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
          "id": "histoire",
          "text": "Histoire",
          "level": 3
      },
      {
          "id": "tape-0--inspiration",
          "text": "Étape 0 : Inspiration",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Aldrich"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Aldrich"}</h1>
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
	{@html "<p>Enchantement Vampirisme pour se soigner en tapant ?<br>\nou un outil qui peut récupérer du sang dans certaines conditions<br>\nOu un sort pour pomper le sang/ Eau+ténèbres pour fabriquer son sang</p>"}
	{@render armesDeMle_Armes_Distance()}
	{@render armures__New()}
	</section>
{/snippet}

{#snippet armesDeMle_Armes_Distance()}
	<section>
		<h3 id="armes-de-mle--armes--distance">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armes de melees - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armes de melees - New\" data-wiki-fragment=\"\">Armes de Mêlée</a> | <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armes a distances - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armes a distances - New\" data-wiki-fragment=\"\">Armes à Distance</a>")}</h3>
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
	{@html "<p>Objectif court terme :</p>\n<ul><li>Maîtriser la magie</li></ul>\n<p>Objectifs Long terme :</p>\n<ul><li>Abattre Zaledra à qui il doit sa maladie et sa dette</li><li>Soigner/ Atténuer la maladie vampirique à l'aide de la magie/ de mécanismes</li><li>Trouver le vampire qui aurait contré sa maladie pour en savoir plus</li></ul>"}
	{@render histoire()}
	{@render tape_0_Inspiration()}
	</section>
{/snippet}

{#snippet histoire()}
	<section>
		<h3 id="histoire">{@html "Histoire"}</h3>
	{@html "<p>Nain solitaire de Kothula de 113 ans<br>\nEst devenu vampire pour pouvoir rembourser une dette sur le très long terme auprès de Zaledra<br>\nS'adonne aux recherches sur cette maladie pour atténuer ses effets/ la soigner<br>\nIl fabrique des machines (dont il est fier) qui analysent et filtrent le sang sans tuer, mais commence à atteindre les limites et doit se pencher sur la magie pour aller plus loin<br>\nProfite de sa faiblesse de nain face à la lumière pour cacher sa maladie sous une armure<br>\nSa maladie l'a rendu solitaire pour éviter les dérapages, et il est ainsi devenu discret et ne parle pas sans raison<br>\nHonte d'être un vampire et méfiance envers eux<br>\nIl ment pour ne pas qu'on le sache, ni qu'on sache qu'il a consommé des vivants avant de maitriser sa maladie<br>\nIl est connu localement et répare les objets des villageois par moment<br>\nIl connait Loïc, chez qui il va régulièrement demander un verre de sang</p>\n<p>Connaissances :<br>\n+++Vampire (lore, relation magique(eau + ténèbres = sang), fonctionnement, ...)<br>\n++Artificier/ Ingénieur (pratique & théorique)<br>\n+Architecte (théorique)<br>\n+Nain</p>\n<p>Justifier qu'il soit lvl 0/1<br>\nIl est resté dans les études longtemps, stagne et pense que voyager pourrait aider à débloquer des choses + Apprendre la magie<br>\nAccompagnera les joueurs s'ils ont un objectif commun et qu'ils le convainquent</p>"}

	</section>
{/snippet}

{#snippet tape_0_Inspiration()}
	<section>
		<h3 id="tape-0--inspiration">{@html "Étape 0 : Inspiration"}</h3>
	{@html "<ul><li>Quel personnage existant de n'importe quel média t'inspire</li><li>Quel musique d'ambiance (sans/ peu de paroles) représente ton personnage</li><li>Quel est LE trait de caractère qui peut représenter à lui seul ton personnage (un extrême peut faciliter le RP)</li><li>Ex : une voix, un accent, une émotion, ...</li></ul>"}

	</section>
{/snippet}
