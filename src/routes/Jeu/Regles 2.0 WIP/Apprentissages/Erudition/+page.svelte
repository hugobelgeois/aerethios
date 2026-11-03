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
          "id": "enchanteur",
          "text": "Enchanteur",
          "level": 3
      },
      {
          "id": "invocateur",
          "text": "Invocateur",
          "level": 3
      },
      {
          "id": "joaillier",
          "text": "Joaillier",
          "level": 3
      },
      {
          "id": "runniste---wip",
          "text": "Runniste - WIP",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Érudition"}</title>
  <meta name="description" content={"Rappel Durée Interruption Amélioration Déconstruction Consommation Echec 1h Non Non Non 1 Crystal Perte de l'objet de base Possibilité d'effet négatif ajouté au joueur (1d20 < 5) Rappel Fabrication…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Érudition"} />
  <meta property="og:description" content={"Rappel Durée Interruption Amélioration Déconstruction Consommation Echec 1h Non Non Non 1 Crystal Perte de l'objet de base Possibilité d'effet négatif ajouté au joueur (1d20 < 5) Rappel Fabrication…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Érudition"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<h3 data-heading=\"Rappel\" dir=\"auto\" id=\"rappel\">Rappel</h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Durée</th>\n<th align=\"center\">Interruption</th>\n<th align=\"center\">Amélioration</th>\n<th align=\"center\">Déconstruction</th>\n<th align=\"center\">Consommation</th>\n<th align=\"left\">Echec</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">1h</td>\n<td align=\"center\">Non</td>\n<td align=\"center\">Non</td>\n<td align=\"center\">Non</td>\n<td align=\"center\">1 Crystal</td>\n<td align=\"left\">Perte de l'objet de base<br>Possibilité d'effet négatif ajouté au joueur (<code>1d20 &lt; 5</code>)</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\"><span alt=\"Rappel\" src=\"Rappel\" class=\"internal-embed markdown-embed inline-embed is-loaded\"><div class=\"embed-title markdown-embed-title\">Rappel</div><div class=\"markdown-embed-content\"><div class=\"markdown-preview-view markdown-rendered show-indentation-guide\"><h4 data-heading=\"Fabrication\" dir=\"auto\">Fabrication</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Déchet</th>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Difficulté de Fabrication</strong></td>\n<td align=\"center\">10</td>\n<td align=\"center\">20</td>\n<td align=\"center\">40</td>\n<td align=\"center\">80</td>\n<td align=\"center\">150</td>\n</tr>\n<tr>\n<td><strong>Expérience de Fabrication</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">1</td>\n<td align=\"center\">2</td>\n<td align=\"center\">4</td>\n<td align=\"center\">8</td>\n</tr>\n<tr>\n<td><strong>Taux d'Échec</strong></td>\n<td align=\"center\">1</td>\n<td align=\"center\">3</td>\n<td align=\"center\">6</td>\n<td align=\"center\">10</td>\n<td align=\"center\">15</td>\n</tr>\n</tbody>\n</table></div>\n<h4 data-heading=\"Récolte\" dir=\"auto\">Récolte</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Rien</th>\n<th align=\"center\">Déchet</th>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Chance Récolte</strong></td>\n<td align=\"center\">1 - 10</td>\n<td align=\"center\">11 - 30</td>\n<td align=\"center\">31 - 60</td>\n<td align=\"center\">61 - 85</td>\n<td align=\"center\">86 - 96</td>\n<td align=\"center\">97+</td>\n</tr>\n<tr>\n<td><strong>Quantité de Récolte</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">1d10</td>\n<td align=\"center\">1d8</td>\n<td align=\"center\">1d6</td>\n<td align=\"center\">1d4</td>\n<td align=\"center\">1d2</td>\n</tr>\n<tr>\n<td><strong>Prix Moyen</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">~10pc</td>\n<td align=\"center\">~1pa</td>\n<td align=\"center\">~10pa</td>\n<td align=\"center\">~1po</td>\n<td align=\"center\">~10po</td>\n</tr>\n</tbody>\n</table></div>\n<h4 data-heading=\"Lieu\" dir=\"auto\">Lieu</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Zone sauvage</th>\n<th>Campement</th>\n<th>Lieu sécurisé</th>\n<th>Lieu conçu pour</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Désavantage</td>\n<td>Résultat</td>\n<td>Avantage</td>\n<td>Difficulté de Fabrication/2</td>\n</tr>\n<tr>\n<td>---</td>\n<td>---</td>\n<td>Rareté +1</td>\n<td>Rareté +2</td>\n</tr>\n</tbody>\n</table></div></div></div></span></p>\n<h2 data-heading=\"Spécialisations\" dir=\"auto\" id=\"spcialisations\">Spécialisations</h2>\n<h3 data-heading=\"Enchanteur\" dir=\"auto\" id=\"enchanteur\">Enchanteur</h3>\n<blockquote dir=\"auto\">\n<p>Enchante les équipements fabriquées par un <a data-tooltip-position=\"top\" aria-label=\"Artisanat - New\" href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"\">Artisan</a> ainsi que certaines matières inorganiques pour leur conférer des capacités spéciales.<br>\n~2po/h</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Ingrédients</th>\n<th align=\"center\">Simple</th>\n<th align=\"center\">Avancé</th>\n<th align=\"center\">Incroyable</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Peu Commun</strong></td>\n<td align=\"center\">1-6</td>\n<td align=\"center\">7-10</td>\n<td align=\"center\">-</td>\n</tr>\n<tr>\n<td><strong>Rare</strong></td>\n<td align=\"center\">1-4</td>\n<td align=\"center\">5-9</td>\n<td align=\"center\">10</td>\n</tr>\n<tr>\n<td><strong>Légendaire</strong></td>\n<td align=\"center\">1-2</td>\n<td align=\"center\">3-8</td>\n<td align=\"center\">9-10</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">Des ingrédients plus rares augmentent les chances d'avoir de meilleurs enchantements.<br>\nLa rareté de l'enchantement obtenu se détermine par <code>1d10</code>.<br>\nL'enchantement précis se détermine par la recette utilisée par le joueur.</p>\n<h3 data-heading=\"Invocateur\" dir=\"auto\" id=\"invocateur\">Invocateur</h3>\n<blockquote dir=\"auto\">\n<p>Insuffle de la vie et de la puissance dans un élémentaire inerte créé par un <a data-tooltip-position=\"top\" aria-label=\"Alchimie - New\" href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"\">Alchimiste</a>.<br>\n~1po/h</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">x1</td>\n<td align=\"center\">x2</td>\n<td align=\"center\">x3</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">La puissance de l'élémentaire varie selon la rareté des ingrédients.</p>\n<h3 data-heading=\"Joaillier\" dir=\"auto\" id=\"joaillier\">Joaillier</h3>\n<blockquote dir=\"auto\">\n<p>Infuse des gemmes dans les armes pour modifier leur comportement.<br>\n~50pa/h</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">1</td>\n<td align=\"center\">2</td>\n<td align=\"center\">4</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">La modification de dégâts de l'arme varie selon la rareté de l'ingrédient.</p>\n<h3 data-heading=\"Runniste - WIP\" dir=\"auto\" id=\"runniste---wip\">Runniste - WIP</h3>\n<blockquote dir=\"auto\">\n<p>Schématise la magie sous forme de gravure, peinture et autre pour la préparer à l'avance et la déclencher à distance.<br>\n~50pa/h</p>\n</blockquote>")}
  </div>
</article>

<LinkPreview />
