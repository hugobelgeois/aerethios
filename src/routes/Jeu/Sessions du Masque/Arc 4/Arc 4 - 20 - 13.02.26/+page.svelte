<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "dtails",
          "text": "Détails",
          "level": 2
      },
      {
          "id": "notes",
          "text": "Notes",
          "level": 2
      },
      {
          "id": "scnario",
          "text": "Scénario",
          "level": 2
      },
      {
          "id": "1-accroche",
          "text": "1) Accroche",
          "level": 4
      },
      {
          "id": "2-les-mechas-deviennent-instables",
          "text": "2) Les mechas deviennent instables",
          "level": 4
      },
      {
          "id": "3-combat-troll",
          "text": "3) Combat Troll",
          "level": 4
      },
      {
          "id": "4-exploitation-des-nains",
          "text": "4) Exploitation des nains",
          "level": 4
      },
      {
          "id": "5-pistage-de-la-crature",
          "text": "5) Pistage de la créature",
          "level": 4
      },
      {
          "id": "6-combat-wyrm-",
          "text": "6) Combat Wyrm ?",
          "level": 4
      },
      {
          "id": "7-les-joueurs-sont-recherchs",
          "text": "7) Les joueurs sont recherchés",
          "level": 4
      },
      {
          "id": "8-le-masque-",
          "text": "8) Le masque ?",
          "level": 4
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
  <title>{"Arc 4 - 20 - 13.02.26"}</title>
  <meta name="description" content={"Résumé Détails Lieu actuel : Nirina, Sulimund Objectif : Pnjs notables : Ilmar Hakka, Kigan Krust, Duo de paladins Notes Arek Dara Haelrak Hazdaim Léoric Zveindel AC 8 (-3) 15 14 14 9 10 DR 25 (+40)…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Arc 4 - 20 - 13.02.26"} />
  <meta property="og:description" content={"Résumé Détails Lieu actuel : Nirina, Sulimund Objectif : Pnjs notables : Ilmar Hakka, Kigan Krust, Duo de paladins Notes Arek Dara Haelrak Hazdaim Léoric Zveindel AC 8 (-3) 15 14 14 9 10 DR 25 (+40)…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 4 - 20 - 13.02.26"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Résumé</p>\n</blockquote>\n<h2 data-heading=\"Détails\" dir=\"auto\" id=\"dtails\">Détails</h2>\n<p dir=\"auto\">Lieu actuel : Nirina, Sulimund</p>\n<p dir=\"auto\">Objectif :</p>\n<p dir=\"auto\">Pnjs notables : Ilmar Hakka, Kigan Krust, Duo de paladins</p>\n<h2 data-heading=\"Notes\" dir=\"auto\" id=\"notes\">Notes</h2>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Arek</th>\n<th align=\"center\">Dara</th>\n<th align=\"center\">Haelrak</th>\n<th align=\"center\">Hazdaim</th>\n<th align=\"center\">Léoric</th>\n<th align=\"center\">Zveindel</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>AC</strong></td>\n<td align=\"center\">8 (-3)</td>\n<td align=\"center\">15</td>\n<td align=\"center\">14</td>\n<td align=\"center\">14</td>\n<td align=\"center\">9</td>\n<td align=\"center\">10</td>\n</tr>\n<tr>\n<td><strong>DR</strong></td>\n<td align=\"center\">25 (+40)</td>\n<td align=\"center\">14</td>\n<td align=\"center\">12</td>\n<td align=\"center\">12</td>\n<td align=\"center\">23</td>\n<td align=\"center\">20</td>\n</tr>\n<tr>\n<td><strong>DMG</strong></td>\n<td align=\"center\">5 + 33<br>6 + 40</td>\n<td align=\"center\">9 + 27<br>14 + 10</td>\n<td align=\"center\">12 + 4<br>16 + 5<br>12 + 15</td>\n<td align=\"center\">10 + 10<br>12 + 10</td>\n<td align=\"center\">14 + 6<br>7 + 20</td>\n<td align=\"center\">-</td>\n</tr>\n<tr>\n<td><strong>Magie</strong></td>\n<td align=\"center\">9 (1d8 +5)</td>\n<td align=\"center\">9 (1d12)</td>\n<td align=\"center\">14 (1d8)</td>\n<td align=\"center\">9 (1d6)</td>\n<td align=\"center\">9 (1d8)</td>\n<td align=\"center\">14 (1d8 +2)</td>\n</tr>\n</tbody>\n</table></div>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Ennemi</th>\n<th align=\"center\">AC</th>\n<th align=\"center\">DR</th>\n<th align=\"center\">HP</th>\n<th align=\"center\">Légère</th>\n<th align=\"center\">Lourde</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Troll</td>\n<td align=\"center\">5</td>\n<td align=\"center\">20</td>\n<td align=\"center\">80</td>\n<td align=\"center\">(2d6+6) +5</td>\n<td align=\"center\">(1d4+5) +25</td>\n</tr>\n<tr>\n<td>Gobelin</td>\n<td align=\"center\">15</td>\n<td align=\"center\">8</td>\n<td align=\"center\">30</td>\n<td align=\"center\">(3d6+6)</td>\n<td align=\"center\">(1d6+2) +15</td>\n</tr>\n<tr>\n<td>Wyrm</td>\n<td align=\"center\">3</td>\n<td align=\"center\">35</td>\n<td align=\"center\">200</td>\n<td align=\"center\">(2d6+8) +10</td>\n<td align=\"center\">(2d6+4) +40</td>\n</tr>\n<tr>\n<td>Elémentaire v3</td>\n<td align=\"center\">5</td>\n<td align=\"center\">25</td>\n<td align=\"center\">120</td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Scénario\" dir=\"auto\" id=\"scnario\">Scénario</h2>\n<h4 data-heading=\"1) Accroche\" dir=\"auto\" id=\"1-accroche\">1) Accroche</h4>\n<blockquote dir=\"auto\">\n<p><strong>Interaction</strong>, Qui &gt; Quoi</p>\n</blockquote>\n<p dir=\"auto\">Après leur période de fête, Ilmar et Kigan désaoulent et deviennent de vrais ingénieurs et sont en train de tester un cockpit.</p>\n<p dir=\"auto\">Ils acceptent les joueurs car ils ont bu ensemble et qu'ils sont sympas, mais leurs disent de faire attention car on sait qu'ils sont là maintenant.</p>\n<p dir=\"auto\">Description de Kigan dans le cockpit en train de le démarrer (il faut être prudent avec tant que tout n'est pas terminé, ça peut créer des courts-circuits qui peuvent tout faire sauter).</p>\n<h4 data-heading=\"2) Les mechas deviennent instables\" dir=\"auto\" id=\"2-les-mechas-deviennent-instables\">2) Les mechas deviennent instables</h4>\n<blockquote dir=\"auto\">\n<p><strong>Exploration</strong>, qui &gt; quoi</p>\n</blockquote>\n<p dir=\"auto\">Les mechas dans le volcan deviennent instables, tout le monde doit se mobiliser pour les stabiliser.</p>\n<p dir=\"auto\">Les joueurs doivent reproduire ce qu'ils ont vu dans le cockpit pour dégager tous les trolls et gobelins qui sont sur le méchas.<br>\nS'ils ne sont pas assez précis, le méchas explose mais tue quand même les ennemis sauf 1.</p>\n<h4 data-heading=\"3) Combat Troll\" dir=\"auto\" id=\"3-combat-troll\">3) Combat Troll</h4>\n<blockquote dir=\"auto\">\n<p><strong>Combat</strong>, Arek, Dara &gt; Attaque lourde</p>\n</blockquote>\n<p dir=\"auto\">1 troll reste pour s'en prendre aux joueurs.</p>\n<h4 data-heading=\"4) Exploitation des nains\" dir=\"auto\" id=\"4-exploitation-des-nains\">4) Exploitation des nains</h4>\n<blockquote dir=\"auto\">\n<p><strong>Interaction</strong>, qui &gt; quoi</p>\n</blockquote>\n<p dir=\"auto\">Ils sont tenus par les couilles, car ils savent que s'ils sortent les mecha du volcans, Sulimund sera rasé.<br>\nMais s'ils ne le font pas, les nains se feront chasser dans Nirina comme impies.</p>\n<p dir=\"auto\">C'est pour ça qu'ils boivent beaucoup, pour fêter ce qu'ils peuvent avant de tous y passer.</p>\n<p dir=\"auto\">C'est encore plus stressant en sachant qu'un clan de gobelin et de trolls rôde plus profondément dans le volcan.<br>\nIls ne peuvent pas s'en occuper car ils doivent gérer les mechas.</p>\n<h4 data-heading=\"5) Pistage de la créature\" dir=\"auto\" id=\"5-pistage-de-la-crature\">5) Pistage de la créature</h4>\n<blockquote dir=\"auto\">\n<p><strong>Exploration</strong>, Haelrak, Hazdaim, Léoric &gt; Attaque légère</p>\n</blockquote>\n<p dir=\"auto\">En descendant dans les galeries, ils combattent 4 gobelins et jusqu'à arriver à un wyrm de magma en train de sucer la lave du volcan.</p>\n<p dir=\"auto\">Les gobelins l'idolâtrent car il pond des trolls assez régulièrement.</p>\n<p dir=\"auto\">S'ils tuent le wyrm, les gobelins mourront, mais la lave ne sera plus canalisée et le volcan risque de se réveiller.</p>\n<h4 data-heading=\"6) Combat Wyrm ?\" dir=\"auto\" id=\"6-combat-wyrm-\">6) Combat Wyrm ?</h4>\n<blockquote dir=\"auto\">\n<p><strong>Combat</strong>, Zveindel &gt; Magie</p>\n</blockquote>\n<p dir=\"auto\">1 Wyrm (sauf s'ils ne veulent pas l'attaquer)</p>\n<p dir=\"auto\">Les ennemis reviennent en boucle tant qu'ils n'ont pas tué le wyrm/ fui les profondeurs :<br>\n2 Trolls contre Dara et Arek<br>\n4 gobelins contre Haelrak et Hazdaim</p>\n<h4 data-heading=\"7) Les joueurs sont recherchés\" dir=\"auto\" id=\"7-les-joueurs-sont-recherchs\">7) Les joueurs sont recherchés</h4>\n<blockquote dir=\"auto\">\n<p><strong>Interaction</strong>, qui &gt; quoi</p>\n</blockquote>\n<p dir=\"auto\">Si le wyrm a été combattu :<br>\nla ville des nains a été saccagée, il y a des corps partout, et la lave monte.<br>\nEn sortant du volcan, ils croisent quelques survivants en train de fuir et Kigan blessé, qui leur dit que le réveil du volcan a détruit les mechas et qu'un duo de paladins est venu tuer ce qu'il pouvait et prendre des enfants de prière.</p>\n<p dir=\"auto\"><del>Sinon :<br>\nEn retournant auprès des nains, ils croisent un duo de paladins.</del></p>\n<ul>\n<li dir=\"auto\">\n<p><del>Si le mecha a été détruit, les paladins prennent les familles d'Ilmar et de Kigan pour devenir enfants de prière, et pour que ça leur serve de leçon d'abîmer les propriétés du maître.<br>\nQuand les joueurs les retrouvent, ils leur disent de partir, avant qu'ils ne décident d'appeler le duo pour les échanger contre leur famille.</del></p>\n</li>\n<li dir=\"auto\">\n<p><del>Si le mecha n'a pas été détruit, ils demandent qu'on leur amène les nouveaux enfants de prière, à qui il manque les yeux et dont l'extrémité des doigts est ouverte.</del></p>\n</li>\n</ul>\n<h4 data-heading=\"8) Le masque ?\" dir=\"auto\" id=\"8-le-masque-\">8) Le masque ?</h4>\n<p dir=\"auto\">Ils font un rêve où ils sont dans la dimension du masque, mais plus personne n'est pendu au plafond, tout est noir, silencieux.</p>\n<p dir=\"auto\">S'ils réussissent perception, ils perçoivent une silhouette humaine avec des cornes.</p>\n<h2 data-heading=\"Joueurs\" dir=\"auto\" id=\"joueurs\">Joueurs</h2>\n<ul class=\"contains-task-list\">\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Diego 21</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Loïc 16</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Lucas 9</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Michel 23</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Nolan 8</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Thomas 20</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">William 7</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Précédent</th>\n<th align=\"center\">Suivant</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" data-wiki-fragment=\"\">Arc 4 - 19 - 23.01.26</a></td>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 21 - 20.02.26\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 21 - 20.02.26\" data-wiki-fragment=\"\">Arc 4 - 21 - 20.02.26</a></td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
