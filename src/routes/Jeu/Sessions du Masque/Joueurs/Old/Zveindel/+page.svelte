<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

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
          "text": "[[Armes]]",
          "level": 3
      },
      {
          "id": "armures",
          "text": "[[Armures]]",
          "level": 3
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
  <title>{"Zveindel"}</title>
  <meta name="description" content={"Niveau : 10 Arvens Runild Scienctes Templis Argent 2 - Archimage - Attributs Combat 55 points à mettre au niveau 1 (min 7, max 14) +1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20 Force…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Zveindel"} />
  <meta property="og:description" content={"Niveau : 10 Arvens Runild Scienctes Templis Argent 2 - Archimage - Attributs Combat 55 points à mettre au niveau 1 (min 7, max 14) +1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20 Force…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Zveindel"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<p dir=\"auto\"><span width=\"300\" alt=\"Zveindel.png\" src=\"Zveindel.png\" class=\"internal-embed media-embed image-embed is-loaded\"><img alt=\"Zveindel.png\" width=\"300\" src=\"%%BASE%%/Images/zveindel.png\"></span></p>\n<p dir=\"auto\"><strong>Niveau</strong> : 10</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Arvens</th>\n<th align=\"center\">Runild</th>\n<th align=\"center\">Scienctes</th>\n<th align=\"center\">Templis</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">Argent 2</td>\n<td align=\"center\">-</td>\n<td align=\"center\"><a data-tooltip-position=\"top\" aria-label=\"Scienctes &gt; Archimage\" href=\"%%BASE%%/Notes/Scienctes#archimage\" class=\"internal-link\" data-wiki-href=\"/Notes/Scienctes\" data-wiki-fragment=\"Archimage\">Archimage</a></td>\n<td align=\"center\">-</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Attributs\" dir=\"auto\" id=\"attributs\">Attributs</h2>\n<h3 data-heading=\"Combat\" dir=\"auto\" id=\"combat\">Combat</h3>\n<blockquote dir=\"auto\">\n<p>55 points à mettre au niveau 1 (min 7, max 14)<br>\n+1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Force</th>\n<th align=\"center\">Dextérité</th>\n<th align=\"center\">Mental</th>\n<th align=\"center\">Perception</th>\n<th align=\"center\">Charisme</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">10</td>\n<td align=\"center\">12</td>\n<td align=\"center\">16</td>\n<td align=\"center\">16</td>\n<td align=\"center\">8</td>\n</tr>\n<tr>\n<td align=\"center\">0</td>\n<td align=\"center\">+1</td>\n<td align=\"center\">+3</td>\n<td align=\"center\">+3</td>\n<td align=\"center\">-1</td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Magie\" dir=\"auto\" id=\"magie\">Magie</h3>\n<blockquote dir=\"auto\">\n<p><strong>Maîtrise</strong> : 3<br>\n<strong>Crystaux</strong> : 14</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Air</th>\n<th align=\"center\">Eau</th>\n<th align=\"center\">Roche</th>\n<th align=\"center\">Feu</th>\n<th align=\"center\">Foudre</th>\n<th align=\"center\">Lumière</th>\n<th align=\"center\">Ténèbres</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">7</td>\n<td align=\"center\">6</td>\n<td align=\"center\">8</td>\n<td align=\"center\">12</td>\n<td align=\"center\">-</td>\n<td align=\"center\">7</td>\n<td align=\"center\">-</td>\n</tr>\n<tr>\n<td align=\"center\">1d6 +2</td>\n<td align=\"center\">1d6 +2</td>\n<td align=\"center\">1d6 +2</td>\n<td align=\"center\">1d8 +2</td>\n<td align=\"center\">-</td>\n<td align=\"center\">1d6 +2</td>\n<td align=\"center\">-</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Compétences\" dir=\"auto\" id=\"comptences\">Compétences</h2>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\"><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Force\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Force\" data-wiki-fragment=\"\">Force</a></strong></th>\n<th align=\"center\"><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Dexterite\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Dexterite\" data-wiki-fragment=\"\">Dextérité</a></strong></th>\n<th align=\"center\"><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Mental\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Mental\" data-wiki-fragment=\"\">Mental</a></strong></th>\n<th align=\"center\"><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Perception\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Perception\" data-wiki-fragment=\"\">Perception</a></strong></th>\n<th align=\"center\"><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Charisme\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Charisme\" data-wiki-fragment=\"\">Charisme</a></strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"></td>\n<td align=\"center\">Acrobatie<br><em>- Matrix</em></td>\n<td align=\"center\">Intelligence<br><em>- Efficacité</em></td>\n<td align=\"center\">Chasseur</td>\n<td align=\"center\"></td>\n</tr>\n<tr>\n<td align=\"center\"></td>\n<td align=\"center\">Assassin</td>\n<td align=\"center\">Sagesse</td>\n<td align=\"center\">Spiritisme<br><em>- Exorciste</em></td>\n<td align=\"center\"></td>\n</tr>\n<tr>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\">Volonté<br><em>- Résistance</em><br><em>- Imperturbable</em></td>\n<td align=\"center\">Survivant<br><em>- Créatures</em><br><em>- Plantes</em></td>\n<td align=\"center\"></td>\n</tr>\n<tr>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"><strong>Potter</strong><br>+ -</td>\n<td align=\"center\"><strong>Troisième oeil</strong><br>+ -</td>\n<td align=\"center\"></td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Equipement\" dir=\"auto\" id=\"equipement\">Equipement</h2>\n<h3 data-heading=\"[[Armes]]\" dir=\"auto\" id=\"armes\"><a href=\"%%BASE%%/Jeu/Regles/Combat/Armes\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armes\" data-wiki-fragment=\"\">Armes</a></h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Court</th>\n<th align=\"center\">1 Main</th>\n<th align=\"center\">2 Mains</th>\n<th align=\"center\">Haste</th>\n<th align=\"center\">Distance</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">3</td>\n<td align=\"center\">0</td>\n<td align=\"center\">0</td>\n<td align=\"center\">0</td>\n<td align=\"center\">0</td>\n</tr>\n<tr>\n<td align=\"center\">+1</td>\n<td align=\"center\">0</td>\n<td align=\"center\">0</td>\n<td align=\"center\">0</td>\n<td align=\"center\">0</td>\n</tr>\n</tbody>\n</table></div>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Arme</th>\n<th>Dégâts</th>\n<th align=\"center\">Poids (kg)</th>\n<th align=\"center\">Propriétés</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"[[Armures]]\" dir=\"auto\" id=\"armures\"><a href=\"%%BASE%%/Jeu/Regles/Combat/Armures\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Combat/Armures\" data-wiki-fragment=\"\">Armures</a></h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Armure</th>\n<th align=\"center\">AC</th>\n<th align=\"center\">DR</th>\n<th align=\"center\">Enchantement</th>\n<th align=\"center\">Poids (kg)</th>\n<th align=\"center\">Dégâts</th>\n<th align=\"center\">Propriétés</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Armure Sharah<br>Ecailles</td>\n<td align=\"center\">10<br>+0(Dex)<br>= 10</td>\n<td align=\"center\">16(Rare)<br>+4(Impé)<br>= 20</td>\n<td align=\"center\">Air 5<br>Feu 5<br>Eau 5</td>\n<td align=\"center\">18</td>\n<td align=\"center\">-</td>\n<td align=\"center\">Désavantage en Dextérité (Discrétion)<br><br>Désavantage en Magies en combat<br><br>Résistance aux conditions</td>\n</tr>\n<tr>\n<td>Cape de fourrure</td>\n<td align=\"center\">-</td>\n<td align=\"center\">-</td>\n<td align=\"center\">-</td>\n<td align=\"center\">1</td>\n<td align=\"center\">-</td>\n<td align=\"center\">Les sorts croitistes à 1 crystal ne le consomme pas</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Inventaire\" dir=\"auto\" id=\"inventaire\">Inventaire</h2>\n<p dir=\"auto\"><strong>Poids maximum</strong> : 40+60 = 98kg</p>\n<ul>\n<li dir=\"auto\"><em>Force &gt; 10 : 40 + (Force Modificateur x 10)</em></li>\n<li dir=\"auto\"><em>Force &lt; 10 : 40 + (Force Modificateur x 2)</em></li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Qty</th>\n<th>Nom</th>\n<th align=\"right\">Poids (kg)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>2</td>\n<td>Armures</td>\n<td align=\"right\">19</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Connaissances\" dir=\"auto\" id=\"connaissances\">Connaissances</h2>\n<ul>\n<li dir=\"auto\">\n<p><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Arek\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Arek\" data-wiki-fragment=\"\">Arek</a></p>\n</li>\n<li dir=\"auto\">\n<p><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Dara\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Dara\" data-wiki-fragment=\"\">Dara</a></p>\n</li>\n<li dir=\"auto\">\n<p><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Haelrak\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Haelrak\" data-wiki-fragment=\"\">Haelrak</a></p>\n</li>\n<li dir=\"auto\">\n<p><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Old/Halfdan\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Old/Halfdan\" data-wiki-fragment=\"\">Halfdan</a></p>\n</li>\n<li dir=\"auto\">\n<p><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Hazdaim\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Hazdaim\" data-wiki-fragment=\"\">Hazdaim</a></p>\n</li>\n<li dir=\"auto\">\n<p><a href=\"%%BASE%%/Jeu/Sessions du Masque/Joueurs/Leoric\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Joueurs/Leoric\" data-wiki-fragment=\"\">Léoric</a></p>\n</li>\n<li dir=\"auto\">\n<p>Dieu Dormant</p>\n</li>\n<li dir=\"auto\">\n<p>Billy</p>\n</li>\n<li dir=\"auto\">\n<p>Bryumnes</p>\n</li>\n<li dir=\"auto\">\n<p>Einar</p>\n</li>\n<li dir=\"auto\">\n<p>Chlorys</p>\n</li>\n<li dir=\"auto\">\n<p>Zaledra</p>\n</li>\n</ul>")}
  </div>
</article>

<LinkPreview />
