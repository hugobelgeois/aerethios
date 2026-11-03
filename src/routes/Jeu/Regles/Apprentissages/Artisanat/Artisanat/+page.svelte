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
          "id": "artificier",
          "text": "[[Artificier]]",
          "level": 3
      },
      {
          "id": "bijoutier",
          "text": "[[Bijoutier]]",
          "level": 3
      },
      {
          "id": "enchanteur",
          "text": "[[Enchanteur]]",
          "level": 3
      },
      {
          "id": "forgeron",
          "text": "[[Forgeron]]",
          "level": 3
      },
      {
          "id": "tanneur",
          "text": "[[Tanneur]]",
          "level": 3
      },
      {
          "id": "fabrication",
          "text": "Fabrication",
          "level": 2
      },
      {
          "id": "raffinage",
          "text": "Raffinage",
          "level": 3
      },
      {
          "id": "fabrication",
          "text": "Fabrication",
          "level": 3
      },
      {
          "id": "prix-indicatifs-pa",
          "text": "Prix indicatifs (pa)",
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
  <title>{"Artisanat"}</title>
  <meta name="description" content={"L’artisanat a pour objectif de façonner une matière existante pour lui donner une forme utile et durable. Certains artisans se spécialisent dans les grandes constructions (bâtiments, véhicules,…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Artisanat"} />
  <meta property="og:description" content={"L’artisanat a pour objectif de façonner une matière existante pour lui donner une forme utile et durable. Certains artisans se spécialisent dans les grandes constructions (bâtiments, véhicules,…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Artisanat"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>L’artisanat a pour objectif de <strong>façonner une matière existante</strong> pour lui donner une <strong>forme utile et durable</strong>.<br>\nCertains artisans se spécialisent dans les <strong>grandes constructions</strong> (bâtiments, véhicules, fortifications), mais ceux qui intéressent le plus les aventuriers sont ceux dont le <strong>savoir-faire</strong> améliore directement leurs <strong>armes, protections ou équipements</strong>.</p>\n</blockquote>\n<h2 data-heading=\"Spécialisations\" dir=\"auto\" id=\"spcialisations\">Spécialisations</h2>\n<h3 data-heading=\"[[Artificier]]\" dir=\"auto\" id=\"artificier\">Artificier</h3>\n<p dir=\"auto\">Un <strong>Artificier</strong> conçoit et assemble des <strong>dispositifs mécaniques, alchimiques ou explosifs</strong>.<br>\nSon savoir combine <strong>ingénierie</strong>, <strong>alchimie</strong> et <strong>magie contrôlée</strong>, lui permettant de créer des <strong>pièges</strong>, <strong>bombes</strong>, <strong>mines</strong>, ou <strong>mécanismes défensifs</strong>.<br>\nCertains se spécialisent dans les armes de siège miniaturisées, d’autres dans les gadgets de précision.<br>\nLeur principal défi réside dans la <strong>stabilité</strong> de leurs créations — un chef-d’œuvre peut facilement devenir un désastre.</p>\n<h3 data-heading=\"[[Bijoutier]]\" dir=\"auto\" id=\"bijoutier\">Bijoutier</h3>\n<p dir=\"auto\">Un <strong>Bijoutier</strong> travaille les <strong>métaux précieux</strong> et <strong>pierres rares</strong> pour façonner des <strong>anneaux, amulettes, talismans et sceaux</strong>.<br>\nSon art ne se limite pas à l’esthétique : il conçoit des <strong>supports de cristaux</strong> capables de <strong>stocker la magie en canalisant ses effets négatifs</strong>.<br>\nLa qualité de ses œuvres dépend de la <strong>pureté des matériaux</strong> et de la <strong>précision des gravures</strong>.<br>\nLes meilleurs bijoutiers savent équilibrer beauté, symbolisme et puissance, créant des objets aussi spirituels que fonctionnels.</p>\n<h3 data-heading=\"[[Enchanteur]]\" dir=\"auto\" id=\"enchanteur\"><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"\">Enchanteur</a></h3>\n<p dir=\"auto\">Un <strong>Enchanteur</strong> applique les <strong>savoirs ésotériques</strong> de son continent pour <strong>améliorer les propriétés</strong> d’une arme, d’une armure ou d’un objet.<br>\nChaque continent possède ses <strong>propres traditions enchantées</strong>, offrant des avantages uniques mais aussi des <strong>contreparties</strong> spécifiques.<br>\nL’enchanteur agit comme un pont entre <strong>artisanat et magie</strong>, infusant la matière de symboles, de runes ou d’essences spirituelles.</p>\n<h3 data-heading=\"[[Forgeron]]\" dir=\"auto\" id=\"forgeron\"><a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Forgeron\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Forgeron\" data-wiki-fragment=\"\">Forgeron</a></h3>\n<p dir=\"auto\">Un <strong>Forgeron</strong> maîtrise la <strong>fusion et le travail du métal</strong> afin de créer des <strong>armes</strong> et <strong>armures lourdes</strong>.<br>\nSon expérience détermine sa capacité à forger des <strong>alliages rares</strong>, plus <strong>tranchants, résistants ou conducteurs de magie</strong>.<br>\nLes meilleurs forgerons savent adapter leurs créations aux porteurs, équilibrant puissance, poids et résonance magique.</p>\n<h3 data-heading=\"[[Tanneur]]\" dir=\"auto\" id=\"tanneur\">Tanneur</h3>\n<p dir=\"auto\">Un <strong>Tanneur</strong> (ou <em>Couturier</em>) transforme les <strong>peaux et fourrures</strong> en <strong>armures légères</strong> et vêtements de protection.<br>\nSon art dépend à la fois de la <strong>qualité de la matière première</strong> et de sa <strong>maîtrise du traitement</strong> : cuir souple, peau renforcée, ...<br>\nLes tanneurs les plus habiles allient esthétique, confort et résistance, produisant des pièces aussi pratiques que discrètes.</p>\n<h2 data-heading=\"Fabrication\" dir=\"auto\" id=\"fabrication\">Fabrication</h2>\n<h3 data-heading=\"Raffinage\" dir=\"auto\" id=\"raffinage\">Raffinage</h3>\n<p dir=\"auto\">Le joueur doit d'abord raffiner ses ingrédients bruts en matériaux utilisables à l’aide d’un <strong>jet de D20 + Niveau d'Artisanat + Rareté de l'ingrédient</strong> (déchet= 0, commun= 1, 2, 4, 6).<br>\nUn ingrédient ne peut pas devenir un matériau de rareté plus élevé, mais il peut cependant perdre en rareté.</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Déchet</th>\n<th>Commun</th>\n<th>Peu Commun</th>\n<th>Rare</th>\n<th>Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1 +</td>\n<td>8 +</td>\n<td>16 +</td>\n<td>22 +</td>\n<td>26 +</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">Ensuite, le joueur lance un autre dé pour déterminer avec précision le matériau qu'il vient d'obtenir.<br>\nVoir la partie Raffinage de chaque spécialisation pour en savoir plus.</p>\n<h3 data-heading=\"Fabrication\" dir=\"auto\" id=\"fabrication\">Fabrication</h3>\n<p dir=\"auto\">Une fois les ingrédients transformés en matériaux, le joueur peut tenter une <strong>fabrication</strong> à l’aide d’un <strong>jet de D20 + Niveau d'Artisanat</strong>.</p>\n<p dir=\"auto\">Pour réussir, le résultat final doit être <strong>supérieur</strong> à la <strong>difficulté totale</strong> de la création.</p>\n<p dir=\"auto\">Les <strong>chances de réussite</strong> dépendent :</p>\n<ul>\n<li dir=\"auto\">\n<p>du <strong>niveau d’artisanat</strong> du joueur,</p>\n</li>\n<li dir=\"auto\">\n<p>du <strong>nombre total d’ingrédients utilisés</strong>,</p>\n</li>\n<li dir=\"auto\">\n<p>et de la <strong>rareté</strong> de chacun d’eux.</p>\n</li>\n</ul>\n<blockquote dir=\"auto\">\n<p>Les malus de difficulté s’additionnent pour chaque ingrédient.</p>\n</blockquote>\n<h3 data-heading=\"Prix indicatifs (pa)\" dir=\"auto\" id=\"prix-indicatifs-pa\">Prix indicatifs (pa)</h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Rareté</th>\n<th>Déchet (0)</th>\n<th>Commun (1)</th>\n<th>Peu Commun (2)</th>\n<th>Rare (4)</th>\n<th>Légendaire (6)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Ingrédient</td>\n<td>1 - 10</td>\n<td>10 - 30</td>\n<td>50 - 1 00</td>\n<td>1 00 - 2 00</td>\n<td>2 00 – 4 00</td>\n</tr>\n<tr>\n<td>Matériau</td>\n<td>10 - 50</td>\n<td>50 - 2 00</td>\n<td>2 00 - 4 00</td>\n<td>5 00 - 10 00</td>\n<td>10 00 - 20 00</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Récolte\" dir=\"auto\" id=\"rcolte\">Récolte</h2>\n<p dir=\"auto\">Lors d’un voyage, le joueur peut doubler le temps qu'il passe dans un hex afin de récolter divers composants.<br>\nLe joueur lance :</p>\n<ul>\n<li dir=\"auto\">\n<p><strong>1D100</strong> pour déterminer la <strong>rareté</strong> de l'ingrédient trouvé.</p>\n</li>\n<li dir=\"auto\">\n<p>Pour connaître la <strong>quantité</strong> obtenue :</p>\n<ul>\n<li dir=\"auto\">\n<p>D10 pour les déchets,</p>\n</li>\n<li dir=\"auto\">\n<p>D8 pour les communs,</p>\n</li>\n<li dir=\"auto\">\n<p>D6 pour les peu communs,</p>\n</li>\n<li dir=\"auto\">\n<p>D4 pour les rares,</p>\n</li>\n<li dir=\"auto\">\n<p>D2 pour les légendaires.</p>\n</li>\n</ul>\n</li>\n<li dir=\"auto\">\n<p>Le type d'ingrédients est déterminé par l'hex dans lequelle le joueur fait sa récolte (minerais, gemmes, crystaux, ..).</p>\n</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th>Déchet</th>\n<th>Commun</th>\n<th>Peu Commun</th>\n<th>Rare</th>\n<th>Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Artisan</td>\n<td>1 - 30</td>\n<td>31 - 60</td>\n<td>61 - 85</td>\n<td>86 - 96</td>\n<td>97 - 100</td>\n</tr>\n<tr>\n<td>Non Artisan</td>\n<td>1 - 50</td>\n<td>51 - 90</td>\n<td>91 - 97</td>\n<td>98 - 100</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
