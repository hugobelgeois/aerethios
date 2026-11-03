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
          "id": "armes-de-mles---new--armes--distances---new",
          "text": "[[Armes de mêlées - New]] | [[Armes à distances - New]]",
          "level": 3
      },
      {
          "id": "armures---new",
          "text": "[[Armures - New]]",
          "level": 3
      },
      {
          "id": "apprentissages---new",
          "text": "[[Apprentissages - New]]",
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
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Ronronov"}</title>
  <meta name="description" content={"Si vous voulez une image, envoyez-la moi et je la transforme pour avoir un style graphique similaire au reste Attributs Niveau 1 Combat 55 points à mettre au niveau 1 (min 7, max 14) +1 points par…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Ronronov"} />
  <meta property="og:description" content={"Si vous voulez une image, envoyez-la moi et je la transforme pour avoir un style graphique similaire au reste Attributs Niveau 1 Combat 55 points à mettre au niveau 1 (min 7, max 14) +1 points par…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Ronronov"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Si vous voulez une image, envoyez-la moi et je la transforme pour avoir un style graphique similaire au reste</p>\n</blockquote>\n<h2 data-heading=\"Attributs\" dir=\"auto\" id=\"attributs\">Attributs</h2>\n<blockquote dir=\"auto\">\n<p>Niveau 1</p>\n</blockquote>\n<h3 data-heading=\"Combat\" dir=\"auto\" id=\"combat\">Combat</h3>\n<blockquote dir=\"auto\">\n<p>55 points à mettre au niveau 1 (min 7, max 14)<br>\n+1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Force</th>\n<th align=\"center\">Dextérité</th>\n<th align=\"center\">Mental</th>\n<th align=\"center\">Perception</th>\n<th align=\"center\">Charisme</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n</tr>\n<tr>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Magie\" dir=\"auto\" id=\"magie\">Magie</h3>\n<blockquote dir=\"auto\">\n<p><strong>Maîtrise</strong> :<br>\n<strong>Crystaux</strong> :</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Air</th>\n<th align=\"center\">Eau</th>\n<th align=\"center\">Roche</th>\n<th align=\"center\">Feu</th>\n<th align=\"center\">Foudre</th>\n<th align=\"center\">Lumière</th>\n<th align=\"center\">Ténèbres</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n</tr>\n<tr>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Compétences\" dir=\"auto\" id=\"comptences\">Compétences</h2>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\"><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Force\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Force\" data-wiki-fragment=\"\">Force</a></strong></th>\n<th align=\"center\"><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Dexterite\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Dexterite\" data-wiki-fragment=\"\">Dextérité</a></strong></th>\n<th align=\"center\"><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Mental\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Mental\" data-wiki-fragment=\"\">Mental</a></strong></th>\n<th align=\"center\"><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Perception\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Perception\" data-wiki-fragment=\"\">Perception</a></strong></th>\n<th align=\"center\"><strong><a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Charisme\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Charisme\" data-wiki-fragment=\"\">Charisme</a></strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Equipement\" dir=\"auto\" id=\"equipement\">Equipement</h2>\n<h3 data-heading=\"[[Armes de mêlées - New]] | [[Armes à distances - New]]\" dir=\"auto\" id=\"armes-de-mles---new--armes--distances---new\"><a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armes de melees - New\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armes de melees - New\" data-wiki-fragment=\"\">Armes de mêlées - New</a> | <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armes a distances - New\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armes a distances - New\" data-wiki-fragment=\"\">Armes à distances - New</a></h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Court</th>\n<th align=\"center\">1 Main</th>\n<th align=\"center\">2 Mains</th>\n<th align=\"center\">Corde</th>\n<th>Feu</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td></td>\n</tr>\n<tr>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Arme</th>\n<th align=\"center\">Dégâts</th>\n<th align=\"center\">Enchantements</th>\n<th align=\"center\">Poids (kg)</th>\n<th align=\"center\">Propriétés</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"[[Armures - New]]\" dir=\"auto\" id=\"armures---new\"><a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armures - New\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armures - New\" data-wiki-fragment=\"\">Armures - New</a></h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Armure</th>\n<th align=\"center\">AC</th>\n<th align=\"center\">DR</th>\n<th align=\"center\">Enchantement</th>\n<th align=\"center\">Poids (kg)</th>\n<th align=\"center\">Dégâts</th>\n<th align=\"center\">Propriétés</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"[[Apprentissages - New]]\" dir=\"auto\" id=\"apprentissages---new\"><a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" data-wiki-fragment=\"\">Apprentissages - New</a></h2>\n<ul>\n<li dir=\"auto\"></li>\n</ul>\n<h2 data-heading=\"Inventaire\" dir=\"auto\" id=\"inventaire\">Inventaire</h2>\n<p dir=\"auto\"><strong>Poids maximum</strong> :</p>\n<ul>\n<li dir=\"auto\"><em>Force &gt; 10 : 40 + (Force Modificateur x 10)</em></li>\n<li dir=\"auto\"><em>Force &lt; 10 : 40 + (Force Modificateur x 2)</em></li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Qty</th>\n<th>Nom</th>\n<th align=\"right\">Poids (kg)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td></td>\n<td>Armes</td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td></td>\n<td>Armures</td>\n<td align=\"right\"></td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Notes\" dir=\"auto\" id=\"notes\">Notes</h2>\n<p dir=\"auto\">Calico (Meowscular Chef MHW) de Kothula<br>\nAncien prêtre, il a été réquisitionné par l'armée pour soigner les arrières troupes, avant de devenir cuisinier<br>\nIl connait déjà Diego qui est un habitué de son restaurant</p>")}
  </div>
</article>

<LinkPreview />
