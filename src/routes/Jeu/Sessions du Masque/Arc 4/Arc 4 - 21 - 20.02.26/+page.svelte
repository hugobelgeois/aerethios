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
          "id": "1-le-duo-de-paladins-est-platine-ou-hiromage",
          "text": "1) Le duo de Paladins est Platine ou Hiéromage",
          "level": 3
      },
      {
          "id": "2-voyage-jusqu-la-douane",
          "text": "2) Voyage jusqu'à la douane",
          "level": 3
      },
      {
          "id": "3-aventurier-solitaire-en-qute-de-dfi",
          "text": "3) Aventurier solitaire en quête de défi",
          "level": 3
      },
      {
          "id": "4-bloqu--la-douane-par-ordre-des-lions-dargent",
          "text": "4) Bloqué à la douane ~~par ordre des Lions d'Argent~~",
          "level": 3
      },
      {
          "id": "5-a-la-recherche-de-nyx-et-salom",
          "text": "5) A la recherche de Nyx et Salomé",
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
  <title>{"Arc 4 - 21 - 20.02.26"}</title>
  <meta name="description" content={"Résumé Détails Lieu actuel : Nirina, Vers Pulmius Objectif : Pnjs notables : Kigan Krust Notes Arek Dara Haelrak Hazdaim Léoric Zveindel AC 8 (-3) 15 14 14 9 10 DR 25 (+40) 14 12 12 23 20 DMG 5 + 33…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Arc 4 - 21 - 20.02.26"} />
  <meta property="og:description" content={"Résumé Détails Lieu actuel : Nirina, Vers Pulmius Objectif : Pnjs notables : Kigan Krust Notes Arek Dara Haelrak Hazdaim Léoric Zveindel AC 8 (-3) 15 14 14 9 10 DR 25 (+40) 14 12 12 23 20 DMG 5 + 33…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 4 - 21 - 20.02.26"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Résumé</p>\n</blockquote>\n<h2 data-heading=\"Détails\" dir=\"auto\" id=\"dtails\">Détails</h2>\n<p dir=\"auto\">Lieu actuel : Nirina, Vers Pulmius</p>\n<p dir=\"auto\">Objectif :</p>\n<p dir=\"auto\">Pnjs notables : Kigan Krust</p>\n<h2 data-heading=\"Notes\" dir=\"auto\" id=\"notes\">Notes</h2>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Arek</th>\n<th align=\"center\">Dara</th>\n<th align=\"center\">Haelrak</th>\n<th align=\"center\">Hazdaim</th>\n<th align=\"center\">Léoric</th>\n<th align=\"center\">Zveindel</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>AC</strong></td>\n<td align=\"center\">8 (-3)</td>\n<td align=\"center\">15</td>\n<td align=\"center\">14</td>\n<td align=\"center\">14</td>\n<td align=\"center\">9</td>\n<td align=\"center\">10</td>\n</tr>\n<tr>\n<td><strong>DR</strong></td>\n<td align=\"center\">25 (+40)</td>\n<td align=\"center\">14</td>\n<td align=\"center\">12</td>\n<td align=\"center\">12</td>\n<td align=\"center\">23</td>\n<td align=\"center\">20</td>\n</tr>\n<tr>\n<td><strong>DMG</strong></td>\n<td align=\"center\">5 + 33<br>6 + 40</td>\n<td align=\"center\">9 + 27<br>14 + 10</td>\n<td align=\"center\">12 + 4<br>16 + 5<br>12 + 15</td>\n<td align=\"center\">10 + 10<br>12 + 10</td>\n<td align=\"center\">14 + 6<br>7 + 20</td>\n<td align=\"center\">-</td>\n</tr>\n<tr>\n<td><strong>Magie</strong></td>\n<td align=\"center\">9 (1d8 +5)</td>\n<td align=\"center\">9 (1d12)</td>\n<td align=\"center\">14 (1d8)</td>\n<td align=\"center\">9 (1d6)</td>\n<td align=\"center\">9 (1d8)</td>\n<td align=\"center\">14 (1d8 +2)</td>\n</tr>\n</tbody>\n</table></div>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Ennemi</th>\n<th align=\"center\">AC</th>\n<th align=\"center\">DR</th>\n<th align=\"center\">HP</th>\n<th align=\"center\">Léger</th>\n<th align=\"center\">Lourde</th>\n<th align=\"center\">Magie</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Aventurier</td>\n<td align=\"center\">18</td>\n<td align=\"center\">12</td>\n<td align=\"center\">50</td>\n<td align=\"center\">3d8 +8<br>VS Humanoides</td>\n<td align=\"center\">-</td>\n<td align=\"center\">-</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Scénario\" dir=\"auto\" id=\"scnario\">Scénario</h2>\n<p dir=\"auto\">Dire aux joueurs qu'ils vont devoir faire preuve d'initiative.</p>\n<p dir=\"auto\"><strong>Dara</strong> -&gt; Ombre Zaledra -&gt; Il intercepte ses missives de commerce -&gt; Plus de mini-jeu de commerce</p>\n<h3 data-heading=\"1) Le duo de Paladins est Platine ou Hiéromage\" dir=\"auto\" id=\"1-le-duo-de-paladins-est-platine-ou-hiromage\">1) Le duo de Paladins est Platine ou Hiéromage</h3>\n<blockquote dir=\"auto\">\n<p><strong>Interaction</strong>, Qui &gt; Quoi</p>\n</blockquote>\n<p dir=\"auto\">Kigan a été se renseigner auprès des Arvens pour avoir une estimation du rang du duo de paladins.</p>\n<p dir=\"auto\">Ils ont beaucoup de magie et appréhendent les combats intelligemment, donc sûrement Platine ou Hiéromage.</p>\n<p dir=\"auto\">Ils attaquent rarement leur cible de front.</p>\n<p dir=\"auto\">Ils ont enfumé la ville sous le volcan et abattu les nains qui sortaient des trous.</p>\n<p dir=\"auto\">Il s'est aussi renseigné et sait où sont Nyx et Salomé (Pulmius)</p>\n<h3 data-heading=\"2) Voyage jusqu'à la douane\" dir=\"auto\" id=\"2-voyage-jusqu-la-douane\">2) Voyage jusqu'à la douane</h3>\n<blockquote dir=\"auto\">\n<p><strong>Exploration</strong>, Qui &gt; Quoi</p>\n</blockquote>\n<p dir=\"auto\">Instaurer un stress et de la parano.</p>\n<p dir=\"auto\">Des jets de perception fréquent.</p>\n<p dir=\"auto\">\"Tu t'es déjà senti observé? Non? Hm.\"</p>\n<p dir=\"auto\">S'ils ne me coupent pas pour faire des tours de garde la nuit -&gt; Ils dorment tous.</p>\n<h3 data-heading=\"3) Aventurier solitaire en quête de défi\" dir=\"auto\" id=\"3-aventurier-solitaire-en-qute-de-dfi\">3) Aventurier solitaire en quête de défi</h3>\n<blockquote dir=\"auto\">\n<p><strong>Combat</strong>, Qui &gt; Quoi</p>\n</blockquote>\n<p dir=\"auto\">Il challenge un des joueurs à un combat amical contre de l'argent.</p>\n<h3 data-heading=\"4) Bloqué à la douane ~~par ordre des Lions d'Argent~~\" dir=\"auto\" id=\"4-bloqu--la-douane-par-ordre-des-lions-dargent\">4) Bloqué à la douane <del>par ordre des Lions d'Argent</del></h3>\n<blockquote dir=\"auto\">\n<p><strong>Puzzle</strong>, Qui &gt; Quoi</p>\n</blockquote>\n<p dir=\"auto\">\"N'essayez pas de prendre un bateau, on contrôle tous les ports\"</p>\n<p dir=\"auto\">/!\\ Comportements suspects des joueurs</p>\n<ul>\n<li dir=\"auto\">Soudoyer les gardes</li>\n<li dir=\"auto\">Trop argumenter, trop de questions</li>\n</ul>\n<p dir=\"auto\">Ils ont quartier libre pour imaginer comment passer la douane.</p>\n<h3 data-heading=\"5) A la recherche de Nyx et Salomé\" dir=\"auto\" id=\"5-a-la-recherche-de-nyx-et-salom\">5) A la recherche de Nyx et Salomé</h3>\n<blockquote dir=\"auto\">\n<p><strong>Exploration</strong>, Qui &gt; Quoi</p>\n</blockquote>\n<p dir=\"auto\">Direction Pulmius, et escale à l'orphelinat.</p>\n<h2 data-heading=\"Joueurs\" dir=\"auto\" id=\"joueurs\">Joueurs</h2>\n<ul class=\"contains-task-list\">\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Diego 22</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Loïc 17</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Lucas 9</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Michel 24</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Nolan 8</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Thomas 21</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">William 7</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Précédent</th>\n<th align=\"center\">Suivant</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 20 - 13.02.26\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 20 - 13.02.26\" data-wiki-fragment=\"\">Arc 4 - 20 - 13.02.26</a></td>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22 - 03.04.26\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 22 - 03.04.26\" data-wiki-fragment=\"\">Arc 4 - 22 - 03.04.26</a></td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
