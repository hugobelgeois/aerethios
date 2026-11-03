<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "spcialisations",
          "text": "Spécialisations",
          "level": 2
      },
      {
          "id": "cuisinier",
          "text": "[[Cuisinier]]",
          "level": 3
      },
      {
          "id": "invocateur",
          "text": "[[Invocateur]]",
          "level": 3
      },
      {
          "id": "potionniste",
          "text": "[[Potionniste]]",
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
  <meta name="description" content={"L’alchimie a pour objectif de transformer des composants en résultats. Les composants peuvent être de nature minérale, végétale ou magique. Selon son savoir-faire et son procédé, un alchimiste peut…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Alchimie"} />
  <meta property="og:description" content={"L’alchimie a pour objectif de transformer des composants en résultats. Les composants peuvent être de nature minérale, végétale ou magique. Selon son savoir-faire et son procédé, un alchimiste peut…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Alchimie"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>L’alchimie a pour objectif de <strong>transformer des composants en résultats</strong>.<br>\nLes composants peuvent être de nature <strong>minérale</strong>, <strong>végétale</strong> ou <strong>magique</strong>.<br>\nSelon son savoir-faire et son procédé, un alchimiste peut produire des <strong>substances</strong>, des <strong>objets consommables</strong>, ou même des <strong>formes de vie artificielles</strong>.</p>\n</blockquote>\n<h2 data-heading=\"Spécialisations\" dir=\"auto\" id=\"spcialisations\">Spécialisations</h2>\n<h3 data-heading=\"[[Cuisinier]]\" dir=\"auto\" id=\"cuisinier\"><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Cuisinier\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Cuisinier\" data-wiki-fragment=\"\">Cuisinier</a></h3>\n<p dir=\"auto\">Un <strong>Cuisinier</strong> combine des ingrédients de rareté basse (déchets) sans effets apparents pour en tirer le meilleur.<br>\nSes plats permettent de se nourrir tout en octroyant des bonus, le tout de façon économe.</p>\n<h3 data-heading=\"[[Invocateur]]\" dir=\"auto\" id=\"invocateur\"><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Invocateur\" data-wiki-fragment=\"\">Invocateur</a></h3>\n<p dir=\"auto\">Un <strong>Invocateur</strong> (également nommé <em>Transmutateur</em> ou <em>Synthétiste</em>) insuffle la <strong>magie vitale</strong> dans les composants pour leur donner <strong>forme et volonté</strong>.<br>\nSes œuvres peuvent aller de simples <strong>familiers alchimiques</strong> à de véritables <strong>entités conscientes</strong>, liées à leur créateur.<br>\nL’invocateur se situe à la frontière entre l’alchimie et la magie ancienne, manipulant les lois de la vie plutôt que la matière seule.</p>\n<h3 data-heading=\"[[Potionniste]]\" dir=\"auto\" id=\"potionniste\"><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Potionniste\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Potionniste\" data-wiki-fragment=\"\">Potionniste</a></h3>\n<p dir=\"auto\">Un <strong>Potionniste</strong> combine différents ingrédients pour créer des <strong>substances consommables</strong>.<br>\nSes créations prennent souvent la forme de <strong>potions</strong>, <strong>pommades</strong> ou <strong>huiles</strong>, capables d’altérer le corps, l’esprit ou l’environnement.<br>\nSon art repose sur la précision, le dosage et la pureté des éléments employés.</p>\n<h2 data-heading=\"Fabrication\" dir=\"auto\" id=\"fabrication\">Fabrication</h2>\n<h3 data-heading=\"Fabrication\" dir=\"auto\" id=\"fabrication\">Fabrication</h3>\n<p dir=\"auto\">S’il s’agit d’une préparation dont <strong>le joueur ne connaît pas encore la recette</strong>, il doit d’abord réussir le <strong><a href=\"%%BASE%%/Jeu/Regles/Mini-Jeux/Recherche Alchimique\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Mini-Jeux/Recherche Alchimique\" data-wiki-fragment=\"\">Recherche Alchimique</a></strong>.</p>\n<p dir=\"auto\">Une fois la recette connue, il peut tenter une <strong>préparation</strong> à l’aide d’un <strong>jet de D20 + Niveau d'Alchimie</strong>.</p>\n<p dir=\"auto\">Pour réussir, le résultat final doit être <strong>supérieur</strong> à la <strong>difficulté totale</strong> de la création.</p>\n<p dir=\"auto\">Les <strong>chances de réussite</strong> dépendent :</p>\n<ul>\n<li dir=\"auto\">\n<p>du <strong>niveau d’alchimie</strong> du joueur,</p>\n</li>\n<li dir=\"auto\">\n<p>du <strong>nombre total d’ingrédients utilisés</strong>,</p>\n</li>\n<li dir=\"auto\">\n<p>et de la <strong>rareté</strong> de chacun d’eux.</p>\n</li>\n</ul>\n<blockquote dir=\"auto\">\n<p>Les malus de difficulté s’additionnent pour chaque ingrédient.</p>\n</blockquote>\n<h3 data-heading=\"Difficulté par ingrédient\" dir=\"auto\" id=\"difficult-par-ingrdient\">Difficulté par ingrédient</h3>\n<p dir=\"auto\">A chaque montée de niveau d'alchimie, le joueur obtient 3 points à répartir dans une ou plusieurs rareté pour laquelle/lesquelles il gagnera de l'affinité, réduisant ainsi sa difficulté de 1 par point.<br>\nLa difficulté va également baisser tous les 2 niveaux jusqu'au niveau 6.</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th>Déchet</th>\n<th>Commun</th>\n<th>Peu commun</th>\n<th>Rare</th>\n<th>Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Niveau 0</td>\n<td>10</td>\n<td>15</td>\n<td>20</td>\n<td>25</td>\n<td>30</td>\n</tr>\n<tr>\n<td>Niveau 2</td>\n<td>8</td>\n<td>12</td>\n<td>16</td>\n<td>20</td>\n<td>26</td>\n</tr>\n<tr>\n<td>Niveau 4</td>\n<td>6</td>\n<td>8</td>\n<td>12</td>\n<td>16</td>\n<td>22</td>\n</tr>\n<tr>\n<td>Niveau 6</td>\n<td>4</td>\n<td>6</td>\n<td>8</td>\n<td>12</td>\n<td>18</td>\n</tr>\n<tr>\n<td>Amélioration maximale (score minimum)</td>\n<td>3 (1)</td>\n<td>4 (2)</td>\n<td>4 (4)</td>\n<td>6 (6)</td>\n<td>10 (8)</td>\n</tr>\n</tbody>\n</table></div>\n<blockquote dir=\"auto\">\n<p>A chaque fois que le joueur utilise un ingrédient, il réduit sa difficulté de 2 s'il réussit la fabrication, sinon il la réduit de 1.<br>\nA force d'utiliser un ingrédient il peut diminuer la difficulté jusqu'à 0 et réussir en permanence.</p>\n</blockquote>\n<blockquote dir=\"auto\">\n<p><strong>Exemple :</strong> un alchimiste de niveau 3 utilisant un ingrédient rare (20) et un commun (12) devrait faire 32.<br>\nMais étant niveau 3, il a eu 9 points à répartir. Il en a mis 4 en commun (12-4) et 5 en rare (20-5), et doit donc faire un minimum 23 à son D20+3</p>\n</blockquote>\n<h3 data-heading=\"Difficulté par emplacement\" dir=\"auto\" id=\"difficult-par-emplacement\">Difficulté par emplacement</h3>\n<p dir=\"auto\">Les chances de réussite augmentent si le joueur travaille dans un <strong>lieu dédié</strong> à son travail (laboratoire stérile, cuisine).<br>\nCes lieux peuvent être loués pour <strong>1 journée</strong>.</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Lieu</th>\n<th>Bonus</th>\n<th>Prix (pa)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>En pleine nature</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>Salle des Arvens</td>\n<td>-2</td>\n<td>40 - 60</td>\n</tr>\n<tr>\n<td>Salle des Scienctes</td>\n<td>-4</td>\n<td>1 00 - 2 00</td>\n</tr>\n<tr>\n<td>Salle naturelle envigorée de magie aménagée</td>\n<td>-6</td>\n<td>1 00 - 10% du prix de la création</td>\n</tr>\n<tr>\n<td>Occurrence rare d'alignement d'énergies magiques</td>\n<td>-8</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Prix indicatifs des ingrédients (pa)\" dir=\"auto\" id=\"prix-indicatifs-des-ingrdients-pa\">Prix indicatifs des ingrédients (pa)</h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Déchet</th>\n<th>Commun</th>\n<th>Peu Commun</th>\n<th>Rare</th>\n<th>Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>0.01 – 0.2</td>\n<td>0.5 – 2</td>\n<td>10 – 30</td>\n<td>1 00 - 2 00</td>\n<td>5 00 – 10 00</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Récolte\" dir=\"auto\" id=\"rcolte\">Récolte</h2>\n<p dir=\"auto\">Lors d’un voyage, une <strong>journée de récolte</strong> permet de découvrir divers composants.<br>\nLe joueur lance :</p>\n<ul>\n<li dir=\"auto\">\n<p><strong>1D100</strong> pour déterminer la <strong>rareté</strong> du matériau trouvé.</p>\n</li>\n<li dir=\"auto\">\n<p>Pour connaître la <strong>quantité</strong> obtenue :</p>\n<ul>\n<li dir=\"auto\">\n<p>D10 pour les déchets,</p>\n</li>\n<li dir=\"auto\">\n<p>D8 pour les communs,</p>\n</li>\n<li dir=\"auto\">\n<p>D6 pour les peu communs,</p>\n</li>\n<li dir=\"auto\">\n<p>D4 pour les rares,</p>\n</li>\n<li dir=\"auto\">\n<p>D2 pour les légendaires.</p>\n</li>\n</ul>\n</li>\n<li dir=\"auto\">\n<p><strong>1D4</strong> pour connaître le type d'ingrédient parmi cette liste :</p>\n<ul>\n<li dir=\"auto\">\n<ol>\n<li dir=\"auto\">des <strong>minerais</strong>,</li>\n</ol>\n</li>\n<li dir=\"auto\">\n<ol start=\"2\">\n<li dir=\"auto\">des <strong>plantes</strong>,</li>\n</ol>\n</li>\n<li dir=\"auto\">\n<ol start=\"3\">\n<li dir=\"auto\">des <strong>champignons</strong>,</li>\n</ol>\n</li>\n<li dir=\"auto\">\n<ol start=\"4\">\n<li dir=\"auto\">des <strong>crystaux</strong>.</li>\n</ol>\n</li>\n</ul>\n</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th>Déchet</th>\n<th>Commun</th>\n<th>Peu Commun</th>\n<th>Rare</th>\n<th>Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Alchimiste</td>\n<td>1 - 30</td>\n<td>31 - 60</td>\n<td>61 - 85</td>\n<td>86 - 96</td>\n<td>97 - 100</td>\n</tr>\n<tr>\n<td>Non Alchimiste</td>\n<td>1 - 50</td>\n<td>51 - 90</td>\n<td>91 - 97</td>\n<td>98 - 100</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
