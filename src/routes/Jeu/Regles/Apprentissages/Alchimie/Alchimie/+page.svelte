<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "spcialisations",
          "text": "Spécialisations",
          "level": 2
      },
      {
          "id": "cuisinier",
          "text": "Cuisinier",
          "level": 3
      },
      {
          "id": "invocateur",
          "text": "Invocateur",
          "level": 3
      },
      {
          "id": "potionniste",
          "text": "Potionniste",
          "level": 3
      },
      {
          "id": "fabrication",
          "text": "Fabrication",
          "level": 2
      },
      {
          "id": "fabrication",
          "text": "Fabrication",
          "level": 3
      },
      {
          "id": "difficult-par-ingrdient",
          "text": "Difficulté par ingrédient",
          "level": 3
      },
      {
          "id": "difficult-par-emplacement",
          "text": "Difficulté par emplacement",
          "level": 3
      },
      {
          "id": "prix-indicatifs-des-ingrdients-pa",
          "text": "Prix indicatifs des ingrédients (pa)",
          "level": 3
      },
      {
          "id": "rcolte",
          "text": "Récolte",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Alchimie"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Alchimie"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render spcialisations()}
		{@render fabrication()}
		{@render rcolte()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>L’alchimie a pour objectif de <strong>transformer des composants en résultats</strong>.<br>Les composants peuvent être de nature <strong>minérale</strong>, <strong>végétale</strong> ou <strong>magique</strong>.<br>Selon son savoir-faire et son procédé, un alchimiste peut produire des <strong>substances</strong>, des <strong>objets consommables</strong>, ou même des <strong>formes de vie artificielles</strong>.</blockquote>"}
{/snippet}

{#snippet spcialisations()}
	<section>
		<h2 id="spcialisations">{@html "Spécialisations"}</h2>

	{@render cuisinier()}
	{@render invocateur()}
	{@render potionniste()}
	</section>
{/snippet}

{#snippet cuisinier()}
	<section>
		<h3 id="cuisinier">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Cuisinier\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Cuisinier\" data-wiki-fragment=\"\">Cuisinier</a>")}</h3>
	{@html "<p>Un <strong>Cuisinier</strong> combine des ingrédients de rareté basse (déchets) sans effets apparents pour en tirer le meilleur.<br>\nSes plats permettent de se nourrir tout en octroyant des bonus, le tout de façon économe.</p>"}

	</section>
{/snippet}

{#snippet invocateur()}
	<section>
		<h3 id="invocateur">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" data-wiki-fragment=\"\">Invocateur</a>")}</h3>
	{@html "<p>Un <strong>Invocateur</strong> (également nommé <em>Transmutateur</em> ou <em>Synthétiste</em>) insuffle la <strong>magie vitale</strong> dans les composants pour leur donner <strong>forme et volonté</strong>.<br>\nSes œuvres peuvent aller de simples <strong>familiers alchimiques</strong> à de véritables <strong>entités conscientes</strong>, liées à leur créateur.<br>\nL’invocateur se situe à la frontière entre l’alchimie et la magie ancienne, manipulant les lois de la vie plutôt que la matière seule.</p>"}

	</section>
{/snippet}

{#snippet potionniste()}
	<section>
		<h3 id="potionniste">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Potionniste\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Potionniste\" data-wiki-fragment=\"\">Potionniste</a>")}</h3>
	{@html "<p>Un <strong>Potionniste</strong> combine différents ingrédients pour créer des <strong>substances consommables</strong>.<br>\nSes créations prennent souvent la forme de <strong>potions</strong>, <strong>pommades</strong> ou <strong>huiles</strong>, capables d’altérer le corps, l’esprit ou l’environnement.<br>\nSon art repose sur la précision, le dosage et la pureté des éléments employés.</p>"}

	</section>
{/snippet}

{#snippet fabrication()}
	<section>
		<h2 id="fabrication">{@html "Fabrication"}</h2>

	{@render fabrication_2()}
	{@render difficultParIngrdient()}
	{@render difficultParEmplacement()}
	{@render prixIndicatifsDesIngrdientsPa()}
	</section>
{/snippet}

{#snippet fabrication_2()}
	<section>
		<h3 id="fabrication">{@html "Fabrication"}</h3>
	{@html applyBase("<p>S’il s’agit d’une préparation dont <strong>le joueur ne connaît pas encore la recette</strong>, il doit d’abord réussir le <strong><a href=\"%%BASE%%/Jeu/Regles/Mini-Jeux/Recherche Alchimique\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Mini-Jeux/Recherche Alchimique\" data-wiki-fragment=\"\">Recherche Alchimique</a></strong>.</p>\n<p>Une fois la recette connue, il peut tenter une <strong>préparation</strong> à l’aide d’un <strong>jet de D20 + Niveau d'Alchimie</strong>.</p>\n<p>Pour réussir, le résultat final doit être <strong>supérieur</strong> à la <strong>difficulté totale</strong> de la création.</p>\n<p>Les <strong>chances de réussite</strong> dépendent :</p>\n<ul><li>du <strong>niveau d’alchimie</strong> du joueur,</li></ul>\n<ul><li>du <strong>nombre total d’ingrédients utilisés</strong>,</li></ul>\n<ul><li>et de la <strong>rareté</strong> de chacun d’eux.</li></ul>\n<blockquote>Les malus de difficulté s’additionnent pour chaque ingrédient.</blockquote>")}

	</section>
{/snippet}

{#snippet difficultParIngrdient()}
	<section>
		<h3 id="difficult-par-ingrdient">{@html "Difficulté par ingrédient"}</h3>
	{@html "<p>A chaque montée de niveau d'alchimie, le joueur obtient 3 points à répartir dans une ou plusieurs rareté pour laquelle/lesquelles il gagnera de l'affinité, réduisant ainsi sa difficulté de 1 par point.<br>\nLa difficulté va également baisser tous les 2 niveaux jusqu'au niveau 6.</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Déchet</th><th>Commun</th><th>Peu commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>Niveau 0</td><td>10</td><td>15</td><td>20</td><td>25</td><td>30</td></tr><tr><td>Niveau 2</td><td>8</td><td>12</td><td>16</td><td>20</td><td>26</td></tr><tr><td>Niveau 4</td><td>6</td><td>8</td><td>12</td><td>16</td><td>22</td></tr><tr><td>Niveau 6</td><td>4</td><td>6</td><td>8</td><td>12</td><td>18</td></tr><tr><td>Amélioration maximale (score minimum)</td><td>3 (1)</td><td>4 (2)</td><td>4 (4)</td><td>6 (6)</td><td>10 (8)</td></tr></tbody></table></div>\n<blockquote>A chaque fois que le joueur utilise un ingrédient, il réduit sa difficulté de 2 s'il réussit la fabrication, sinon il la réduit de 1.<br>A force d'utiliser un ingrédient il peut diminuer la difficulté jusqu'à 0 et réussir en permanence.</blockquote>\n<blockquote><strong>Exemple :</strong> un alchimiste de niveau 3 utilisant un ingrédient rare (20) et un commun (12) devrait faire 32.<br>Mais étant niveau 3, il a eu 9 points à répartir. Il en a mis 4 en commun (12-4) et 5 en rare (20-5), et doit donc faire un minimum 23 à son D20+3</blockquote>"}

	</section>
{/snippet}

{#snippet difficultParEmplacement()}
	<section>
		<h3 id="difficult-par-emplacement">{@html "Difficulté par emplacement"}</h3>
	{@html "<p>Les chances de réussite augmentent si le joueur travaille dans un <strong>lieu dédié</strong> à son travail (laboratoire stérile, cuisine).<br>\nCes lieux peuvent être loués pour <strong>1 journée</strong>.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Lieu</th><th>Bonus</th><th>Prix (pa)</th></tr></thead><tbody><tr><td>En pleine nature</td><td>-</td><td>-</td></tr><tr><td>Salle des Arvens</td><td>-2</td><td>40 - 60</td></tr><tr><td>Salle des Scienctes</td><td>-4</td><td>1 00 - 2 00</td></tr><tr><td>Salle naturelle envigorée de magie aménagée</td><td>-6</td><td>1 00 - 10% du prix de la création</td></tr><tr><td>Occurrence rare d'alignement d'énergies magiques</td><td>-8</td><td>-</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet prixIndicatifsDesIngrdientsPa()}
	<section>
		<h3 id="prix-indicatifs-des-ingrdients-pa">{@html "Prix indicatifs des ingrédients (pa)"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Déchet</th><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>0.01 – 0.2</td><td>0.5 – 2</td><td>10 – 30</td><td>1 00 - 2 00</td><td>5 00 – 10 00</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet rcolte()}
	<section>
		<h2 id="rcolte">{@html "Récolte"}</h2>
	{@html "<p>Lors d’un voyage, une <strong>journée de récolte</strong> permet de découvrir divers composants.<br>\nLe joueur lance :</p>\n<ul><li><strong>1D100</strong> pour déterminer la <strong>rareté</strong> du matériau trouvé.</li></ul>\n<ul><li>Pour connaître la <strong>quantité</strong> obtenue :</li></ul>\n<ul><li>D10 pour les déchets,</li></ul>\n<ul><li>D8 pour les communs,</li></ul>\n<ul><li>D6 pour les peu communs,</li></ul>\n<ul><li>D4 pour les rares,</li></ul>\n<ul><li>D2 pour les légendaires.</li></ul>\n<ul><li><strong>1D4</strong> pour connaître le type d'ingrédient parmi cette liste :</li><li>1. des <strong>minerais</strong>,</li></ul>\n<ul><li>2. des <strong>plantes</strong>,</li></ul>\n<ul><li>3. des <strong>champignons</strong>,</li></ul>\n<ul><li>4. des <strong>crystaux</strong>.</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Déchet</th><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>Alchimiste</td><td>1 - 30</td><td>31 - 60</td><td>61 - 85</td><td>86 - 96</td><td>97 - 100</td></tr><tr><td>Non Alchimiste</td><td>1 - 50</td><td>51 - 90</td><td>91 - 97</td><td>98 - 100</td><td>-</td></tr></tbody></table></div>"}

	</section>
{/snippet}
