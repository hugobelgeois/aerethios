<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "rappel",
          "text": "Rappel",
          "level": 3
      },
      {
          "id": "spcialisations",
          "text": "Spécialisations",
          "level": 2
      },
      {
          "id": "artificier---wip",
          "text": "Artificier - WIP",
          "level": 3
      },
      {
          "id": "bijoutier",
          "text": "Bijoutier",
          "level": 3
      },
      {
          "id": "enchanteur",
          "text": "Enchanteur",
          "level": 3
      },
      {
          "id": "forgeron",
          "text": "Forgeron",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Artisanat - New"}</title>
  <meta name="description" content={"Rappel Durée Interruption Amélioration Déconstruction Consommation Echec 4h Oui Oui Durée : 50% du temps de construction 50% de matériaux récupérés - - +1 ingrédient inférieur Rappel Fabrication…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Artisanat - New"} />
  <meta property="og:description" content={"Rappel Durée Interruption Amélioration Déconstruction Consommation Echec 4h Oui Oui Durée : 50% du temps de construction 50% de matériaux récupérés - - +1 ingrédient inférieur Rappel Fabrication…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Artisanat - New"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<h3 data-heading=\"Rappel\" dir=\"auto\" id=\"rappel\">Rappel</h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Durée</th>\n<th align=\"center\">Interruption</th>\n<th align=\"center\">Amélioration</th>\n<th align=\"left\">Déconstruction</th>\n<th align=\"center\">Consommation</th>\n<th align=\"left\">Echec</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">4h</td>\n<td align=\"center\">Oui</td>\n<td align=\"center\">Oui</td>\n<td align=\"left\">Durée : 50% du temps de construction<br>50% de matériaux récupérés</td>\n<td align=\"center\">-</td>\n<td align=\"left\">- +1 ingrédient inférieur</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\"><span alt=\"Rappel\" src=\"Rappel\" class=\"internal-embed markdown-embed inline-embed is-loaded\"><div class=\"embed-title markdown-embed-title\">Rappel</div><div class=\"markdown-embed-content\"><div class=\"markdown-preview-view markdown-rendered show-indentation-guide\"><h4 data-heading=\"Fabrication\" dir=\"auto\">Fabrication</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Déchet</th>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Difficulté de Fabrication</strong></td>\n<td align=\"center\">10</td>\n<td align=\"center\">20</td>\n<td align=\"center\">40</td>\n<td align=\"center\">80</td>\n<td align=\"center\">150</td>\n</tr>\n<tr>\n<td><strong>Expérience de Fabrication</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">1</td>\n<td align=\"center\">2</td>\n<td align=\"center\">4</td>\n<td align=\"center\">8</td>\n</tr>\n<tr>\n<td><strong>Taux d'Échec</strong></td>\n<td align=\"center\">1</td>\n<td align=\"center\">3</td>\n<td align=\"center\">6</td>\n<td align=\"center\">10</td>\n<td align=\"center\">15</td>\n</tr>\n</tbody>\n</table></div>\n<h4 data-heading=\"Récolte\" dir=\"auto\">Récolte</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Rien</th>\n<th align=\"center\">Déchet</th>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Chance Récolte</strong></td>\n<td align=\"center\">1 - 10</td>\n<td align=\"center\">11 - 30</td>\n<td align=\"center\">31 - 60</td>\n<td align=\"center\">61 - 85</td>\n<td align=\"center\">86 - 96</td>\n<td align=\"center\">97+</td>\n</tr>\n<tr>\n<td><strong>Quantité de Récolte</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">1d10</td>\n<td align=\"center\">1d8</td>\n<td align=\"center\">1d6</td>\n<td align=\"center\">1d4</td>\n<td align=\"center\">1d2</td>\n</tr>\n<tr>\n<td><strong>Prix Moyen</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">~10pc</td>\n<td align=\"center\">~1pa</td>\n<td align=\"center\">~10pa</td>\n<td align=\"center\">~1po</td>\n<td align=\"center\">~10po</td>\n</tr>\n</tbody>\n</table></div>\n<h4 data-heading=\"Lieu\" dir=\"auto\">Lieu</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Zone sauvage</th>\n<th>Campement</th>\n<th>Lieu sécurisé</th>\n<th>Lieu conçu pour</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Désavantage</td>\n<td>Résultat</td>\n<td>Avantage</td>\n<td>Difficulté de Fabrication/2</td>\n</tr>\n<tr>\n<td>---</td>\n<td>---</td>\n<td>Rareté +1</td>\n<td>Rareté +2</td>\n</tr>\n</tbody>\n</table></div></div></div></span></p>\n<h2 data-heading=\"Spécialisations\" dir=\"auto\" id=\"spcialisations\">Spécialisations</h2>\n<h3 data-heading=\"Artificier - WIP\" dir=\"auto\" id=\"artificier---wip\">Artificier - WIP</h3>\n<blockquote dir=\"auto\">\n<p>Création d'armes à feu, d'automations, de mécanismes et d'explosifs.<br>\n~20pa/h</p>\n</blockquote>\n<h3 data-heading=\"Bijoutier\" dir=\"auto\" id=\"bijoutier\">Bijoutier</h3>\n<blockquote dir=\"auto\">\n<p>Selon la rareté de l'ingrédient, augmente le nombre de magies qu'un <a data-tooltip-position=\"top\" aria-label=\"Alchimie - New\" href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"\">Alchimiste</a> peut canaliser dedans.<br>\n~20pa/h</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Déchet</th>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">+1</td>\n<td align=\"center\">+2</td>\n<td align=\"center\">+3</td>\n<td align=\"center\">+5</td>\n<td align=\"center\">+7</td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Enchanteur\" dir=\"auto\" id=\"enchanteur\">Enchanteur</h3>\n<blockquote dir=\"auto\">\n<p>Prépare l'équipement pour accueillir l'enchantement d'un <a data-tooltip-position=\"top\" aria-label=\"Érudition\" href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"\">Érudit</a> sans imploser.<br>\nLes chances de réussite varient selon la rareté de l'ingrédient.<br>\n~50pa/h</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Rareté</th>\n<th align=\"center\">Déchet</th>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Bonus sur le Taux d'Échec</strong></td>\n<td align=\"center\">+1</td>\n<td align=\"center\">+2</td>\n<td align=\"center\">+3</td>\n<td align=\"center\">+5</td>\n<td align=\"center\">+7</td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Forgeron\" dir=\"auto\" id=\"forgeron\">Forgeron</h3>\n<blockquote dir=\"auto\">\n<p>Fabrique des armes (sauf armes à feu) et des armures en tout genre et de tous matériaux.<br>\nLes minerais sont classés par rareté, qui en elle-même ne change rien au résultat final.<br>\n~5pa/h</p>\n</blockquote>")}
  </div>
</article>

<LinkPreview />
