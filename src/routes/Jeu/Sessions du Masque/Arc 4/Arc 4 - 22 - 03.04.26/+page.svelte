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
          "id": "1-arrive",
          "text": "1) Arrivée",
          "level": 3
      },
      {
          "id": "2-premire-nuit",
          "text": "2) Première nuit",
          "level": 3
      },
      {
          "id": "3-deuxime-nuit",
          "text": "3) Deuxième nuit",
          "level": 3
      },
      {
          "id": "4-troisime-nuit",
          "text": "4) Troisième nuit",
          "level": 3
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
  <title>{"Arc 4 - 22 - 03.04.26"}</title>
  <meta name="description" content={"Résumé Détails Lieu actuel : Nirina, Orphelinat Objectif : Pnjs notables : Théon, Enfants, Ygor, Maîtresse de maison Notes TODO Compétences Equilibrer la magie Choisir l'effet des VS Remettre la…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Arc 4 - 22 - 03.04.26"} />
  <meta property="og:description" content={"Résumé Détails Lieu actuel : Nirina, Orphelinat Objectif : Pnjs notables : Théon, Enfants, Ygor, Maîtresse de maison Notes TODO Compétences Equilibrer la magie Choisir l'effet des VS Remettre la…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 4 - 22 - 03.04.26"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Résumé</p>\n</blockquote>\n<h2 data-heading=\"Détails\" dir=\"auto\" id=\"dtails\">Détails</h2>\n<p dir=\"auto\">Lieu actuel : Nirina, Orphelinat</p>\n<p dir=\"auto\">Objectif :</p>\n<p dir=\"auto\">Pnjs notables : Théon, Enfants, Ygor, Maîtresse de maison</p>\n<h2 data-heading=\"Notes\" dir=\"auto\" id=\"notes\">Notes</h2>\n<p dir=\"auto\">TODO</p>\n<ul class=\"contains-task-list\">\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Compétences</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Equilibrer la magie</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Choisir l'effet des <a data-tooltip-position=\"top\" aria-label=\"Armes &gt; Matériaux\" href=\"%%BASE%%/Jeu/Regles/Combat/Armes#matriaux\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armes\" data-wiki-fragment=\"Mat%C3%A9riaux\">VS</a></li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Remettre la maîtrise</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Fiche perso Cindy</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Réussite critique pour les dés d'armes</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Yeux</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Dents</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Lettres</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Imprimer carte</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Lumière effet flamme FLAMORA</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Arek</th>\n<th align=\"center\">Dara</th>\n<th align=\"center\">Haelrak</th>\n<th align=\"center\">Hazdaim</th>\n<th align=\"center\">Léoric</th>\n<th align=\"center\">Zveindel</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>AC</strong></td>\n<td align=\"center\">8 (-3)</td>\n<td align=\"center\">15</td>\n<td align=\"center\">14</td>\n<td align=\"center\">14</td>\n<td align=\"center\">9</td>\n<td align=\"center\">10</td>\n</tr>\n<tr>\n<td><strong>DR</strong></td>\n<td align=\"center\">25 (+40)</td>\n<td align=\"center\">14</td>\n<td align=\"center\">12</td>\n<td align=\"center\">12</td>\n<td align=\"center\">23</td>\n<td align=\"center\">20</td>\n</tr>\n<tr>\n<td><strong>DMG</strong></td>\n<td align=\"center\">5 +36|30<br>6 +55</td>\n<td align=\"center\">9 +36|30|18<br>14 +10</td>\n<td align=\"center\">12 +15|4<br>16 +2 +5</td>\n<td align=\"center\">10 +14|6<br>15 +2 +10</td>\n<td align=\"center\">14 +7|6<br>7 +20</td>\n<td align=\"center\">-</td>\n</tr>\n<tr>\n<td><strong>Magie</strong></td>\n<td align=\"center\">9 (1d8 +5)</td>\n<td align=\"center\">9 (1d12)</td>\n<td align=\"center\">14 (1d8)</td>\n<td align=\"center\">9 (1d6)</td>\n<td align=\"center\">9 (1d8)</td>\n<td align=\"center\">14 (1d8 +2)</td>\n</tr>\n</tbody>\n</table></div>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Ennemi</th>\n<th align=\"center\">AC</th>\n<th align=\"center\">DR</th>\n<th align=\"center\">HP</th>\n<th align=\"center\">Léger</th>\n<th align=\"center\">Lourde</th>\n<th align=\"center\">Magie</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Scénario\" dir=\"auto\" id=\"scnario\">Scénario</h2>\n<p dir=\"auto\">Théon fuit beaucoup le regard d'Hazdaim<br>\nIl est devenu sourd pour entendre les conseils des dieux</p>\n<h3 data-heading=\"1) Arrivée\" dir=\"auto\" id=\"1-arrive\">1) Arrivée</h3>\n<p dir=\"auto\">Faire le résumé du jdr précédent pour remettre l'ambiance</p>\n<p dir=\"auto\">Suite à la marche de presque 40h pour fuir le pendu, ils ont perdu 20-30 HP de fatigue (et parce qu'ils n'ont pas enlevé leur armure)</p>\n<p dir=\"auto\">Lorsqu'ils arrivent dans l'orphelinat, ils trouvent les enfants en train de prier dans le salon (ils sont X -&gt; Nombre de joueurs autour de la table)</p>\n<p dir=\"auto\">Le reste des enfants ainsi que 2 des superviseurs ont été emmené par Nix et Salomé</p>\n<p dir=\"auto\">Ceux qui restent n'ont pas été pris car ils étaient encore trop malades et fragiles que pour voyager<br>\n(En vrai, Salomé trouvait que leur âme était impure car mélangée à celle d'Hugo)</p>\n<p dir=\"auto\">(Il manque 1 enfant, il s'agit d'Hugo. Si Hazdaim demande où il est, Théon bégaie, a des larmes dans les yeux et dit qu'il a disparu dans la forêt)</p>\n<p dir=\"auto\">Repos à l'orphelinat et discussions</p>\n<p dir=\"auto\">Théon fait prier les enfants avant de manger (Grande Mère), et demande aux joueurs quel dieu ils prient</p>\n<p dir=\"auto\">Théon fais prier les enfants avant d'aller dormir (Dieu Dormant), et demande aux joueurs quel dieu ils prient</p>\n<p dir=\"auto\">Si quelqu'un prie le dieu de la mort, il est surpris et le reprend \"On ne prie pas ce dieu ici. On a mis des sceaux, il ne viendra pas !\"</p>\n<h3 data-heading=\"2) Première nuit\" dir=\"auto\" id=\"2-premire-nuit\">2) Première nuit</h3>\n<p dir=\"auto\">Jet de mental pour voir qui se réveille<br>\nCeux qui se réveillent peuvent mettre à jour leurs points d'attributs manquant<br>\n\"Ca vous sera utile pour la suite\"</p>\n<p dir=\"auto\">Sensation de froid désagréable</p>\n<p dir=\"auto\">Perception -&gt; \"Rends-les moi !\" qui vient d'ailleurs dans l'orphelinat</p>\n<p dir=\"auto\">S'ils y vont, ils tombent sur Loïc debout devant un mur</p>\n<p dir=\"auto\">Lorsqu'il le retourne, ses yeux sont tombés et il saigne, mais il ne dit rien, comme une coquille vide</p>\n<p dir=\"auto\">Mettre 2 petits sacs gorgés de sang devant le joueur IRL</p>\n<p dir=\"auto\">Demander au joueur de ranger ses y.. sacs dans le frigo</p>\n<p dir=\"auto\">Lorsqu'il arrive au frigo, lui demander de ne pas se retourner et de ne pas bouger<br>\nPuis de doucement se retourner par la gauche avant de revenir se rasseoir</p>\n<p dir=\"auto\">\"Tu n'as rien vu dans l'obscurité? C'est que tu as raté ton jet de perception\"</p>\n<p dir=\"auto\">Lumière -&gt; On voit un spectre s'enfuir dans la maison, mais ils n'arrivent pas à le rattraper<br>\nSens manquant pour voir les esprits -&gt; Il manque un morceau à l'âme de Loïc, elle se trouve dans le yeux (réussites critiques perception -&gt; Ce n'est pas son âme à lui qui est dans les yeux)</p>\n<h3 data-heading=\"3) Deuxième nuit\" dir=\"auto\" id=\"3-deuxime-nuit\">3) Deuxième nuit</h3>\n<p dir=\"auto\">Ils passent la nuit et ne régénèrent pas leur HP</p>\n<p dir=\"auto\">Mais le jour n'est toujours pas levé, et un épais brouillard (magique) englobe la maison<br>\nMais ce n'est pas une magie qu'ils reconnaissent</p>\n<p dir=\"auto\">S'ils essaient de partir, ils retombent sur l'orphelinat</p>\n<p dir=\"auto\">Théon va fouiller sa bibliothèque pour savoir ce qu'il en est</p>\n<p dir=\"auto\">Pendant ce temps, les enfants demandent à jouer à cache-cache avec les joueurs</p>\n<h3 data-heading=\"4) Troisième nuit\" dir=\"auto\" id=\"4-troisime-nuit\">4) Troisième nuit</h3>\n<p dir=\"auto\">Un cri au milieu de la nuit</p>\n<p dir=\"auto\">Jet de mental pour voir qui se réveille</p>\n<p dir=\"auto\">Des dents de lait sont sur le sol dans du sang, la fenêtre est brisée et montre des traces de fuite</p>\n<p dir=\"auto\">Les joueurs suivent les traces et se séparent</p>\n<p dir=\"auto\">Arek, Haelrak, Léoric et Dara se séparent des autres et font leur OAV</p>\n<p dir=\"auto\">Les autres retrouvent Diego en boule dans la forêt<br>\n\"Je voulais le retrouver, mais il n'a jamais été ici\" Il répète ça en boucle</p>\n<h2 data-heading=\"Joueurs\" dir=\"auto\" id=\"joueurs\">Joueurs</h2>\n<ul class=\"contains-task-list\">\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Diego 23</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Loïc 18</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Lucas 9</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Michel 25</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Nolan 9</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Thomas 22</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">William 7</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Précédent</th>\n<th align=\"center\">Suivant</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 21 - 20.02.26\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 21 - 20.02.26\" data-wiki-fragment=\"\">Arc 4 - 21 - 20.02.26</a></td>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22b - 06.03.26\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22b - 06.03.26\" data-wiki-fragment=\"\">Arc 4 - 22b - 06.03.26</a></td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
