<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "magies-de-base",
          "text": "Magies de Base",
          "level": 2
      },
      {
          "id": "fusion",
          "text": "Fusion",
          "level": 2
      },
      {
          "id": "ractions",
          "text": "Réactions",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Magie - Types"}</title>
  <meta name="description" content={"Magies de Base Les types de magie ne sont pas limités à ces exemples, mais ce sont leurs utilisations les plus fréquentes. Air Eau Terre Feu Foudre Lumière Ténèbres Effets (HP, DR, AC) Soins Dégâts…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Magie - Types"} />
  <meta property="og:description" content={"Magies de Base Les types de magie ne sont pas limités à ces exemples, mais ce sont leurs utilisations les plus fréquentes. Air Eau Terre Feu Foudre Lumière Ténèbres Effets (HP, DR, AC) Soins Dégâts…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Magie - Types"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h2 data-heading=\"Magies de Base\" dir=\"auto\" id=\"magies-de-base\">Magies de Base</h2>\n<p dir=\"auto\">Les types de magie ne sont pas limités à ces exemples, mais ce sont leurs utilisations les plus fréquentes.</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Air</th>\n<th>Eau</th>\n<th>Terre</th>\n<th align=\"center\">Feu</th>\n<th align=\"right\">Foudre</th>\n<th align=\"right\">Lumière</th>\n<th align=\"right\">Ténèbres</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Effets (HP, DR, AC)</td>\n<td>Soins</td>\n<td>Dégâts</td>\n<td align=\"center\">Dégâts</td>\n<td align=\"right\">Dégâts</td>\n<td align=\"right\">Dévoiler les entités planaires</td>\n<td align=\"right\">Attirer les entités planaires</td>\n</tr>\n<tr>\n<td>Perception</td>\n<td>Mobilité</td>\n<td>Protection (AC/ couverture)</td>\n<td align=\"center\"></td>\n<td align=\"right\">Vitesse (AC)</td>\n<td align=\"right\">Buffs des Attributs</td>\n<td align=\"right\">Débuffs des Attributs</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td>Terrain</td>\n<td align=\"center\"></td>\n<td align=\"right\">Immobilisation</td>\n<td align=\"right\">Mental</td>\n<td align=\"right\">Perception</td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n<td align=\"center\"></td>\n<td align=\"right\"></td>\n<td align=\"right\">Soins</td>\n<td align=\"right\">Discrétion</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Fusion\" dir=\"auto\" id=\"fusion\">Fusion</h2>\n<blockquote dir=\"auto\">\n<p>Prendre la moyenne des niveau de magie utilisée pour la fusion afin de déterminer le dé à utiliser.<br>\nLe caster du sort est celui avec le plus gros niveau dans sa magie.</p>\n</blockquote>\n<p dir=\"auto\">Il est possible de fusionner des types de magie ensemble pour obtenir des effets différents.<br>\nFusionner des magies soi-même nécessitent :</p>\n<ul>\n<li dir=\"auto\">d'utiliser 2 mains (1 par magie),</li>\n<li dir=\"auto\">ou de demander à quelqu'un (avec désavantage).<br>\nFusionner 2 magies donne un résultat différents si un élément est plus fort que l'autre ou inversément.</li>\n</ul>\n<blockquote dir=\"auto\">\n<p>Pour lire le tableau, la première ligne est l'élément le plus fort, et il dicte la fusion qui va avoir lieu avec l'élément de la première colonne.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Ligne supérieure<br>à colonne</th>\n<th align=\"center\">Air</th>\n<th align=\"center\">Eau</th>\n<th align=\"center\">Terre</th>\n<th align=\"center\">Feu</th>\n<th align=\"center\">Foudre</th>\n<th align=\"center\">Lumière</th>\n<th align=\"center\">Ténèbres</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Air</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">Bilzzard</td>\n<td align=\"center\"></td>\n<td align=\"center\">Explosif</td>\n<td align=\"center\">Son</td>\n<td align=\"center\"></td>\n<td align=\"center\">Invisibilité</td>\n</tr>\n<tr>\n<td><strong>Eau</strong></td>\n<td align=\"center\">Brume</td>\n<td align=\"center\">-</td>\n<td align=\"center\">Newtonien</td>\n<td align=\"center\">Magma</td>\n<td align=\"center\"></td>\n<td align=\"center\">Soin</td>\n<td align=\"center\">Sang</td>\n</tr>\n<tr>\n<td><strong>Terre</strong></td>\n<td align=\"center\">Poussière</td>\n<td align=\"center\">Glace</td>\n<td align=\"center\">-</td>\n<td align=\"center\">Métal</td>\n<td align=\"center\">Magnétisme</td>\n<td align=\"center\">Cristal</td>\n<td align=\"center\">Portail</td>\n</tr>\n<tr>\n<td><strong>Feu</strong></td>\n<td align=\"center\">Explosif</td>\n<td align=\"center\">Magma</td>\n<td align=\"center\">Métal</td>\n<td align=\"center\">-</td>\n<td align=\"center\">Plasma</td>\n<td align=\"center\">Feu Céleste</td>\n<td align=\"center\">Feu d'Ames</td>\n</tr>\n<tr>\n<td><strong>Foudre</strong></td>\n<td align=\"center\">Orage</td>\n<td align=\"center\"></td>\n<td align=\"center\">Séisme</td>\n<td align=\"center\">Plasma</td>\n<td align=\"center\">-</td>\n<td align=\"center\"></td>\n<td align=\"center\"></td>\n</tr>\n<tr>\n<td><strong>Lumière</strong></td>\n<td align=\"center\">Mirage</td>\n<td align=\"center\">Purification</td>\n<td align=\"center\">Plantes</td>\n<td align=\"center\">Feu Céleste</td>\n<td align=\"center\">Vitesse</td>\n<td align=\"center\">-</td>\n<td align=\"center\">Invocations</td>\n</tr>\n<tr>\n<td><strong>Ténèbres</strong></td>\n<td align=\"center\"></td>\n<td align=\"center\">Poison</td>\n<td align=\"center\">Corruption</td>\n<td align=\"center\">Feu d'Ames</td>\n<td align=\"center\">Paralysie</td>\n<td align=\"center\">Illusions</td>\n<td align=\"center\">-</td>\n</tr>\n</tbody>\n</table></div>\n<pre class=\"language-exemple\"><code class=\"language-exemple is-loaded\">Eau (8) + Air (4) = Blizzard\nEau (6) + Air (9) = Vapeur\n</code></pre>\n<h2 data-heading=\"Réactions\" dir=\"auto\" id=\"ractions\">Réactions</h2>\n<blockquote dir=\"auto\">\n<p>Si un type de magie en recontre un autre sans être mélangé, une réaction immédiate se produit.</p>\n</blockquote>\n<p dir=\"auto\">Si la réaction est une AOE, toutes les cibles, alliées et ennemies, dans un rayon de 5m subissent les effets.</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Air</th>\n<th align=\"center\">Eau</th>\n<th align=\"center\">Terre</th>\n<th align=\"center\">Feu</th>\n<th align=\"center\">Foudre</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Air</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">Glissant<br><em>Désarmement</em></td>\n<td align=\"center\">Érosion<br><em>Annule les résistances</em></td>\n<td align=\"center\">Attisement<br><em>DMG du tour +50%</em></td>\n<td align=\"center\">Éblouissant<br>AOE<br><em>La prochaine cible est aléatoire</em></td>\n</tr>\n<tr>\n<td><strong>Eau</strong></td>\n<td align=\"center\">Glissant<br><em>Désarmement</em></td>\n<td align=\"center\">-</td>\n<td align=\"center\">Enlisement<br><em>AC -4</em></td>\n<td align=\"center\">Vapeur<br>AOE<br><em>Désavantage</em></td>\n<td align=\"center\">Propagation<br>AOE<br><em>DMG 50% aux cibles proches</em></td>\n</tr>\n<tr>\n<td><strong>Terre</strong></td>\n<td align=\"center\">Érosion<br><em>Annule les résistances</em></td>\n<td align=\"center\">Enlisement<br><em>AC -4</em></td>\n<td align=\"center\">-</td>\n<td align=\"center\">Fragmentation<br>AOE<br><em>3d4 DMG aux cibles proches</em></td>\n<td align=\"center\">Paratonnerre<br><em>Les attaques magiques sont redirigées dessus</em></td>\n</tr>\n<tr>\n<td><strong>Feu</strong></td>\n<td align=\"center\">Attisement<br><em>DMG du tour +50%</em></td>\n<td align=\"center\">Vapeur<br>AOE<br><em>Désavantage</em></td>\n<td align=\"center\">Fragmentation<br>AOE<br><em>3d4 DMG aux cibles proches</em></td>\n<td align=\"center\">-</td>\n<td align=\"center\">Surcharge<br>AOE<br><em>Magie impossible</em></td>\n</tr>\n<tr>\n<td><strong>Foudre</strong></td>\n<td align=\"center\">Éblouissant<br>AOE<br><em>La prochaine cible est aléatoire</em></td>\n<td align=\"center\">Propagation<br>AOE<br><em>DMG 50% aux cibles proches</em></td>\n<td align=\"center\">Paratonnerre<br><em>Les attaques magiques sont redirigées dessus</em></td>\n<td align=\"center\">Surcharge<br>AOE<br><em>Magie impossible</em></td>\n<td align=\"center\">-</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">La Lumière avec un élément confère une résistance à cet élément pendant 2 tours.<br>\nLes Ténèbres avec un élément confère une faiblesse à cet élément pendant 2 tours.<br>\nChacun ne peuvent s'appliquer à une cible qu'une fois par combat.</p>\n<pre class=\"language-exemple\"><code class=\"language-exemple is-loaded\">Cible couverte d'Eau + magie de Foudre = Propagation\nCible électrocuté + magie d'Eau = Propagation\n</code></pre>"}
  </div>
</article>

<LinkPreview />
