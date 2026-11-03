<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "apprentissage",
          "text": "Apprentissage",
          "level": 2
      },
      {
          "id": "composants",
          "text": "Composants",
          "level": 2
      },
      {
          "id": "prix-du-march-pour-enchanter-po",
          "text": "Prix du marché pour enchanter (po)",
          "level": 2
      },
      {
          "id": "kothula-wip",
          "text": "[[Kothula]] (WIP)",
          "level": 2
      },
      {
          "id": "nirina",
          "text": "[[Nirina]]",
          "level": 2
      },
      {
          "id": "ovliin",
          "text": "[[Ovliin]]",
          "level": 2
      },
      {
          "id": "arme",
          "text": "Arme",
          "level": 3
      },
      {
          "id": "armure",
          "text": "Armure",
          "level": 3
      },
      {
          "id": "suraja",
          "text": "[[Suraja]]",
          "level": 2
      },
      {
          "id": "ajouter",
          "text": "Ajouter",
          "level": 3
      },
      {
          "id": "amliorer",
          "text": "Améliorer",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Enchanteur"}</title>
  <meta name="description" content={"Spécialité de l'Artisanat qui améliore magiquement les caractéristiques des équipements d'aventuriers. Apprentissage Chaque continent possède sa technique d'enchantement. Pour l'apprendre, il faut se…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Enchanteur"} />
  <meta property="og:description" content={"Spécialité de l'Artisanat qui améliore magiquement les caractéristiques des équipements d'aventuriers. Apprentissage Chaque continent possède sa technique d'enchantement. Pour l'apprendre, il faut se…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Enchanteur"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Spécialité de l'<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" data-wiki-fragment=\"\">Artisanat</a> qui améliore magiquement les caractéristiques des équipements d'aventuriers.</p>\n</blockquote>\n<h2 data-heading=\"Apprentissage\" dir=\"auto\" id=\"apprentissage\">Apprentissage</h2>\n<p dir=\"auto\">Chaque continent possède sa technique d'enchantement.</p>\n<p dir=\"auto\">Pour l'apprendre, il faut se rendre sur le continent concerné.</p>\n<h2 data-heading=\"Composants\" dir=\"auto\" id=\"composants\">Composants</h2>\n<p dir=\"auto\">Pour enchanter, il faut :</p>\n<ul>\n<li dir=\"auto\">\n<p>l'objet à enchanter,</p>\n</li>\n<li dir=\"auto\">\n<p>un crystal purgé, qui facilite l'apport magique de l'enchanteur vers l'enchantement.<br>\nCe crystal coûte 5po et a 20% de chance de casser à chaque utilisation.<br>\nAu niveau 4, le crystal a 10% de chance de casser,</p>\n</li>\n<li dir=\"auto\">\n<p>une réserve de magie sur soi,</p>\n</li>\n<li dir=\"auto\">\n<p>8h de travail continu.</p>\n</li>\n</ul>\n<h2 data-heading=\"Prix du marché pour enchanter (po)\" dir=\"auto\" id=\"prix-du-march-pour-enchanter-po\">Prix du marché pour enchanter (po)</h2>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Kothula</th>\n<th>Nirina</th>\n<th>Ovliin</th>\n<th>Suraja</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>40 - 60</td>\n<td>20 - 40</td>\n<td>2 - 5 * Rareté de l'Os (Commun = 1)</td>\n<td>Nombre d'enchantements * niveau actuel</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"[[Kothula]] (WIP)\" dir=\"auto\" id=\"kothula-wip\">Kothula (WIP)</h2>\n<blockquote dir=\"auto\">\n<p>Enchanter des parties du corps pour fluidifier les flux magiques qui circulent dedans et améliorer l'utilisation de la magie.</p>\n</blockquote>\n<p dir=\"auto\">Les parties du corps enchantables sont les bras, le dos et les jambes.</p>\n<p dir=\"auto\">Rater le processus d'enchantement le rend juste temporaire (1 semaine)</p>\n<p dir=\"auto\">Un échec critique (95 - 99) affaiblit le corps et réduit les chances de tatouage pendant 100 jours. (-50% de réussite)</p>\n<p dir=\"auto\">Un échec super critique (100) empêche de se faire tatouer sur cette partie du corps à l'avenir.<br>\nUn objet rare permet d'empêcher cet échec (20 po au marché ou trouvable en expédition)</p>\n<p dir=\"auto\">L'effet dépend de l'architecture du tatouage (non cumulables sans conséquences) :</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Anneau</th>\n<th>Lignes</th>\n<th>X Points</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Maîtrise Magique +2</td>\n<td>Régénération x2</td>\n<td>+X crystaux</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"[[Nirina]]\" dir=\"auto\" id=\"nirina\">Nirina</h2>\n<blockquote dir=\"auto\">\n<p>Enchanter les métaux pour augmenter leur efficacité.</p>\n</blockquote>\n<p dir=\"auto\">Rater l'enchantement donne un malus au lieu d'un bonus.</p>\n<p dir=\"auto\">Une réussite critique fait que le montant minimum est la moitié de la valeur du dé.</p>\n<p dir=\"auto\">Une armure possède 2 \"slots\" à enchanter, et une arme en possède 1.</p>\n<p dir=\"auto\">Pour nettoyer les slots, il faut faire fondre et reforger l'équipement (la magie de métal n'est pas suffisante).</p>\n<p dir=\"auto\">En fonction du bonus souhaité, les chances de réussites varient :</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th>D4</th>\n<th>D6</th>\n<th>D8</th>\n<th>D10</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Taux de Réussite</strong></td>\n<td>-0%</td>\n<td>-20%</td>\n<td>-40%</td>\n<td>-60%</td>\n</tr>\n<tr>\n<td><strong>Malus d'Echec</strong></td>\n<td>-1</td>\n<td>-2</td>\n<td>-3</td>\n<td>-4</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"[[Ovliin]]\" dir=\"auto\" id=\"ovliin\">Ovliin</h2>\n<blockquote dir=\"auto\">\n<p>Enchanter les os pour en extraire la puissance élémentaire de son ancien \"propriétaire\".</p>\n</blockquote>\n<p dir=\"auto\">Une armure en os ou une arme avec le manche en os peuvent bénéficier de cette puissance.</p>\n<p dir=\"auto\">Pour enchanter, le joueur lance <strong>1d20 + Niveau d'enchanteur</strong> (le bonus obtenu varie selon le résultat et la rareté de l'os).</p>\n<p dir=\"auto\">Un échec diminue la rareté de l'os de 1.</p>\n<p dir=\"auto\">Un échec critique rend l'os inutilisable.</p>\n<h3 data-heading=\"Arme\" dir=\"auto\" id=\"arme\">Arme</h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Arme</th>\n<th align=\"center\">+1</th>\n<th align=\"center\">+2</th>\n<th align=\"center\">+3</th>\n<th align=\"center\">+4</th>\n<th align=\"center\">+5</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Normal</strong></td>\n<td align=\"center\">2 - 9</td>\n<td align=\"center\">10 - 16</td>\n<td align=\"center\">17 +</td>\n<td align=\"center\">-</td>\n<td align=\"center\">-</td>\n</tr>\n<tr>\n<td><strong>Commun</strong></td>\n<td align=\"center\">2 - 7</td>\n<td align=\"center\">8 - 14</td>\n<td align=\"center\">14 - 19</td>\n<td align=\"center\">20 +</td>\n<td align=\"center\">-</td>\n</tr>\n<tr>\n<td><strong>Peu Commun</strong></td>\n<td align=\"center\">2 - 4</td>\n<td align=\"center\">5 - 9</td>\n<td align=\"center\">10 - 16</td>\n<td align=\"center\">17 - 19</td>\n<td align=\"center\">20 +</td>\n</tr>\n<tr>\n<td><strong>Rare</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">2 - 6</td>\n<td align=\"center\">7 - 13</td>\n<td align=\"center\">14 - 18</td>\n<td align=\"center\">19 +</td>\n</tr>\n<tr>\n<td><strong>Légendaire</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">-</td>\n<td align=\"center\">2 - 10</td>\n<td align=\"center\">11 - 17</td>\n<td align=\"center\">18 +</td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Armure\" dir=\"auto\" id=\"armure\">Armure</h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Bonus</th>\n<th align=\"center\">+1</th>\n<th align=\"center\">+2</th>\n<th align=\"center\">+3</th>\n<th align=\"center\">+4</th>\n<th align=\"center\">+5</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Normal</strong></td>\n<td align=\"center\">2 - 9</td>\n<td align=\"center\">10 - 16</td>\n<td align=\"center\">17 +</td>\n<td align=\"center\">-</td>\n<td align=\"center\">-</td>\n</tr>\n<tr>\n<td><strong>Commun</strong></td>\n<td align=\"center\">2 - 7</td>\n<td align=\"center\">8 - 14</td>\n<td align=\"center\">14 - 19</td>\n<td align=\"center\">20 +</td>\n<td align=\"center\">-</td>\n</tr>\n<tr>\n<td><strong>Peu Commun</strong></td>\n<td align=\"center\">2 - 4</td>\n<td align=\"center\">5 - 9</td>\n<td align=\"center\">10 - 16</td>\n<td align=\"center\">17 - 19</td>\n<td align=\"center\">20 +</td>\n</tr>\n<tr>\n<td><strong>Rare</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">2 - 6</td>\n<td align=\"center\">7 - 13</td>\n<td align=\"center\">14 - 18</td>\n<td align=\"center\">19 +</td>\n</tr>\n<tr>\n<td><strong>Légendaire</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">-</td>\n<td align=\"center\">2 - 10</td>\n<td align=\"center\">11 - 17</td>\n<td align=\"center\">18 +</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"[[Suraja]]\" dir=\"auto\" id=\"suraja\">Suraja</h2>\n<blockquote dir=\"auto\">\n<p>Enchanter les tissus pour augmenter leur résistance aux éléments magiques.</p>\n</blockquote>\n<p dir=\"auto\">Un tissu peut cumuler plusieurs enchantements (le maximum dépend du type de tissu).</p>\n<p dir=\"auto\">Le joueur peut ajouter de nouveaux enchantements (au risque d'en perdre d'autres), ou améliorer ceux déjà présents.</p>\n<h3 data-heading=\"Ajouter\" dir=\"auto\" id=\"ajouter\">Ajouter</h3>\n<p dir=\"auto\">Le joueur lance <strong>1d20 + Niveau d'enchanteur</strong>.</p>\n<p dir=\"auto\">La difficulté de réussite change selon le nombre d'enchantements déjà présents :</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Nombre d'enchantements présents sur le tissu</th>\n<th align=\"left\">0</th>\n<th align=\"left\">1</th>\n<th align=\"left\">2</th>\n<th align=\"left\">3</th>\n<th align=\"left\">4</th>\n<th align=\"left\">5</th>\n<th align=\"left\">6</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Valeur minimale à obtenir</strong> (&lt;)</td>\n<td align=\"left\">10</td>\n<td align=\"left\">12</td>\n<td align=\"left\">14</td>\n<td align=\"left\">16</td>\n<td align=\"left\">18</td>\n<td align=\"left\">20</td>\n<td align=\"left\">22</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">Résultats :</p>\n<ul>\n<li dir=\"auto\">réussite critique, l'enchantement est créé et a une valeur de 2,</li>\n<li dir=\"auto\">réussite, l'enchantement est créé et a une valeur de 1,</li>\n<li dir=\"auto\">échec, le tissu perd le dernier enchantement ajouté,</li>\n<li dir=\"auto\">échec critique, le tissu perd les 2 derniers enchantements ajoutés.</li>\n</ul>\n<h3 data-heading=\"Améliorer\" dir=\"auto\" id=\"amliorer\">Améliorer</h3>\n<p dir=\"auto\">Le joueur lance 1d6, la valeur de l'enchantement est le résultat obtenu.</p>\n<p dir=\"auto\">Si le dé fait 6, la valeur devient 0 (l'enchantement est désactivé mais pas supprimé).</p>\n<p dir=\"auto\">L'enchantement disparaît si le joueur fait 6 ou un nombre inférieur à la valeur actuelle deux fois de suite.</p>")}
  </div>
</article>

<LinkPreview />
