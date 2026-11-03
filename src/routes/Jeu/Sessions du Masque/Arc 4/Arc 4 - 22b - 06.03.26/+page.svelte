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
          "id": "joueurs",
          "text": "Joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Arc 4 - 22b - 06.03.26"}</title>
  <meta name="description" content={"Résumé Détails Lieu actuel : Nirina, Forêt Objectif : Pnjs notables : Notes Arek Dara Haelrak Hazdaim Léoric Zveindel AC 8 (-3) 15 14 14 9 10 DR 25 (+40) 14 12 12 23 20 DMG 5 +36|30 6 +55 9 +36|30|18…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Arc 4 - 22b - 06.03.26"} />
  <meta property="og:description" content={"Résumé Détails Lieu actuel : Nirina, Forêt Objectif : Pnjs notables : Notes Arek Dara Haelrak Hazdaim Léoric Zveindel AC 8 (-3) 15 14 14 9 10 DR 25 (+40) 14 12 12 23 20 DMG 5 +36|30 6 +55 9 +36|30|18…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 4 - 22b - 06.03.26"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Résumé</p>\n</blockquote>\n<h2 data-heading=\"Détails\" dir=\"auto\" id=\"dtails\">Détails</h2>\n<p dir=\"auto\">Lieu actuel : Nirina, Forêt</p>\n<p dir=\"auto\">Objectif :</p>\n<p dir=\"auto\">Pnjs notables :</p>\n<h2 data-heading=\"Notes\" dir=\"auto\" id=\"notes\">Notes</h2>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Arek</th>\n<th align=\"center\">Dara</th>\n<th align=\"center\">Haelrak</th>\n<th align=\"center\">Hazdaim</th>\n<th align=\"center\">Léoric</th>\n<th align=\"center\">Zveindel</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>AC</strong></td>\n<td align=\"center\">8 (-3)</td>\n<td align=\"center\">15</td>\n<td align=\"center\">14</td>\n<td align=\"center\">14</td>\n<td align=\"center\">9</td>\n<td align=\"center\">10</td>\n</tr>\n<tr>\n<td><strong>DR</strong></td>\n<td align=\"center\">25 (+40)</td>\n<td align=\"center\">14</td>\n<td align=\"center\">12</td>\n<td align=\"center\">12</td>\n<td align=\"center\">23</td>\n<td align=\"center\">20</td>\n</tr>\n<tr>\n<td><strong>DMG</strong></td>\n<td align=\"center\">5 +36|30<br>6 +55</td>\n<td align=\"center\">9 +36|30|18<br>14 +10</td>\n<td align=\"center\">12 +15|4<br>16 +2 +5</td>\n<td align=\"center\">10 +14|6<br>15 +2 +10</td>\n<td align=\"center\">14 +7|6<br>7 +20</td>\n<td align=\"center\">-</td>\n</tr>\n<tr>\n<td><strong>Magie</strong></td>\n<td align=\"center\">9 (1d8 +5)</td>\n<td align=\"center\">9 (1d12)</td>\n<td align=\"center\">14 (1d8)</td>\n<td align=\"center\">9 (1d6)</td>\n<td align=\"center\">9 (1d8)</td>\n<td align=\"center\">14 (1d8 +2)</td>\n</tr>\n</tbody>\n</table></div>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Ennemi</th>\n<th align=\"center\">AC</th>\n<th align=\"center\">DR</th>\n<th align=\"center\">HP</th>\n<th align=\"center\">Léger</th>\n<th align=\"center\">Lourde</th>\n<th align=\"center\">Magie</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Soul Catcher</td>\n<td align=\"center\">8</td>\n<td align=\"center\">12</td>\n<td align=\"center\">100</td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\">-</td>\n</tr>\n<tr>\n<td>Magala</td>\n<td align=\"center\">3d6</td>\n<td align=\"center\">20</td>\n<td align=\"center\">300</td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\">-</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Scénario\" dir=\"auto\" id=\"scnario\">Scénario</h2>\n<p dir=\"auto\">En chassant un enfant, ils se perdent dans la brume et se font traquer par un Soul Catcher (voir sur discord)</p>\n<p dir=\"auto\">Mais en fait ce n'est pas eux qui se faisaient traquer, c'était le Soul Catcher qui se faisait traquer par le Magala</p>\n<p dir=\"auto\">Le magala les attaque et ils doivent choisir qui réagira à son attaque (ils ne peuvent pas tous agir)</p>\n<h2 data-heading=\"Joueurs\" dir=\"auto\" id=\"joueurs\">Joueurs</h2>\n<ul class=\"contains-task-list\">\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Diego 24</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Loïc 19</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Lucas 9</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Michel 26</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Nolan 10</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Thomas 22</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">William 7</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Précédent</th>\n<th align=\"center\">Suivant</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22 - 03.04.26\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22 - 03.04.26\" data-wiki-fragment=\"\">Arc 4 - 22 - 03.04.26</a></td>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 23 - 23.05.26\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 23 - 23.05.26\" data-wiki-fragment=\"\">Arc 4 - 23 - 23.05.26</a></td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
