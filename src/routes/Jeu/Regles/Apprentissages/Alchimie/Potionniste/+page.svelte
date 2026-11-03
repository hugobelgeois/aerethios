<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "matriel",
          "text": "Matériel",
          "level": 2
      },
      {
          "id": "utilisation-des-concoctions",
          "text": "Utilisation des concoctions",
          "level": 2
      },
      {
          "id": "rsultat-de-fabrication",
          "text": "Résultat de Fabrication",
          "level": 2
      },
      {
          "id": "consommation-et-intoxication",
          "text": "Consommation et Intoxication",
          "level": 2
      },
      {
          "id": "prix-indicatif-par-nombre-dingrdients-pa",
          "text": "Prix indicatif par nombre d'ingrédients (pa)",
          "level": 2
      },
      {
          "id": "types-dingrdients-et-effets",
          "text": "Types d’ingrédients et effets",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Potionniste"}</title>
  <meta name="description" content={"Potionniste est une spécialité de l'Alchimie qui combine différents ingrédients pour créer des substances consommables. Matériel Pour faire des concoctions, il faut disposer : du matériel de base,…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Potionniste"} />
  <meta property="og:description" content={"Potionniste est une spécialité de l'Alchimie qui combine différents ingrédients pour créer des substances consommables. Matériel Pour faire des concoctions, il faut disposer : du matériel de base,…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Potionniste"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p><strong>Potionniste</strong> est une spécialité de l'<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" data-wiki-fragment=\"\">Alchimie</a> qui combine différents ingrédients pour créer des <strong>substances consommables</strong>.</p>\n</blockquote>\n<h2 data-heading=\"Matériel\" dir=\"auto\" id=\"matriel\">Matériel</h2>\n<p dir=\"auto\">Pour faire des concoctions, il faut disposer :</p>\n<ul>\n<li dir=\"auto\">\n<p>du <strong>matériel de base</strong>,</p>\n<ul>\n<li dir=\"auto\"><em>(poids total ≈ 10 kg, coût : 3 PO)</em></li>\n</ul>\n</li>\n<li dir=\"auto\">\n<p>d'un <strong>diluant</strong>,</p>\n</li>\n<li dir=\"auto\">\n<p>et des <strong>ingrédients nécessaires</strong> à la préparation.</p>\n</li>\n</ul>\n<h2 data-heading=\"Utilisation des concoctions\" dir=\"auto\" id=\"utilisation-des-concoctions\">Utilisation des concoctions</h2>\n<p dir=\"auto\">Le <strong>diluant</strong> détermine <strong>comment la concoction s’applique</strong> et <strong>comment elle agit</strong>.</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Diluant</th>\n<th>Application</th>\n<th>Effet principal</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Eau déionisée</td>\n<td>À boire</td>\n<td>Effet généralisé sur le corps</td>\n</tr>\n<tr>\n<td>Huile</td>\n<td>Sur une arme</td>\n<td>Effet appliqué pendant 1 journée</td>\n</tr>\n<tr>\n<td>Slime</td>\n<td>Sur la peau</td>\n<td>Effet ciblé et durable</td>\n</tr>\n<tr>\n<td>Poudre noire</td>\n<td>Jetée ou brûlée</td>\n<td>Effet explosif ou de zone</td>\n</tr>\n</tbody>\n</table></div>\n<blockquote dir=\"auto\">\n<p>Toute création alchimique est une <strong>concoction</strong>.<br>\nSa forme finale (potion, pommade, huile, poudre…) dépend du <strong>diluant</strong> utilisé.</p>\n</blockquote>\n<h2 data-heading=\"Résultat de Fabrication\" dir=\"auto\" id=\"rsultat-de-fabrication\">Résultat de Fabrication</h2>\n<ul>\n<li dir=\"auto\">\n<p><strong>Réussite critique</strong> : la préparation est <strong>parfaite</strong> et <strong>produite en double</strong>.</p>\n</li>\n<li dir=\"auto\">\n<p><strong>Réussite</strong> : la préparation est <strong>créée normalement</strong>.</p>\n</li>\n<li dir=\"auto\">\n<p><strong>Échec</strong> : la préparation <strong>échoue</strong> et les ingrédients sont <strong>perdus</strong>.</p>\n</li>\n<li dir=\"auto\">\n<p><strong>Échec critique</strong> : une <strong>concoction mystère</strong> est créée.</p>\n</li>\n</ul>\n<blockquote dir=\"auto\">\n<p>Une <strong>concoction mystère</strong> est instable et imprévisible.<br>\nSon effet exact est déterminé au moment de l’utilisation :<br>\nLancez <strong>1d20</strong> →<br>\n• Résultat &lt; 5 : effet <strong>négatif</strong><br>\n• Résultat &gt; 15 : effet <strong>positif</strong><br>\n• Résultat 5 &lt; 15 : effet <strong>aléatoire</strong><br>\nPlus on s’éloigne de 10, plus l’effet est <strong>puissant</strong>.<br>\nIl est possible de <strong>faire analyser</strong> la concoction contre un certain prix.</p>\n</blockquote>\n<h2 data-heading=\"Consommation et Intoxication\" dir=\"auto\" id=\"consommation-et-intoxication\">Consommation et Intoxication</h2>\n<p dir=\"auto\">Chaque concoction consommée augmente l’<strong>intoxication</strong> du buveur.<br>\nLe seuil maximal tolérable pour un humain est <strong>100</strong>.<br>\nDormir réduit l’intoxication de <strong>50 points</strong>.</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Rareté de l’ingrédient le plus rare</th>\n<th>Intoxication</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Déchet</td>\n<td>+0</td>\n</tr>\n<tr>\n<td>Commun</td>\n<td>+20</td>\n</tr>\n<tr>\n<td>Peu commun</td>\n<td>+40</td>\n</tr>\n<tr>\n<td>Rare</td>\n<td>+60</td>\n</tr>\n<tr>\n<td>Légendaire</td>\n<td>+80</td>\n</tr>\n</tbody>\n</table></div>\n<blockquote dir=\"auto\">\n<p>Au-delà de <strong>100</strong>, le joueur perd 10HP par pallier de 10 intoxications.</p>\n</blockquote>\n<p dir=\"auto\">Il existe des potions rares qui réduisent l'intoxication de 100, mais elles divisent également les effets actifs par 2.</p>\n<h2 data-heading=\"Prix indicatif par nombre d'ingrédients (pa)\" dir=\"auto\" id=\"prix-indicatif-par-nombre-dingrdients-pa\">Prix indicatif par nombre d'ingrédients (pa)</h2>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Objet</th>\n<th>Déchet</th>\n<th>Commun</th>\n<th>Peu Commun</th>\n<th>Rare</th>\n<th>Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Ingrédients</td>\n<td>0.01 – 0.2</td>\n<td>0.5 – 2</td>\n<td>10 – 30</td>\n<td>1 00 - 2 00</td>\n<td>5 00 – 10 00</td>\n</tr>\n<tr>\n<td>Concoction finie</td>\n<td>0.01 – 0.2</td>\n<td>1 – 5</td>\n<td>30 – 1 00</td>\n<td>5 00 – 10 00</td>\n<td>40 00 – 80 00</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Types d’ingrédients et effets\" dir=\"auto\" id=\"types-dingrdients-et-effets\">Types d’ingrédients et effets</h2>\n<p dir=\"auto\">Lorsqu’une concoction est fabriquée avec <strong>un seul ingrédient</strong>, son effet agit directement sur les <strong>statistiques du joueur</strong>.<br>\nCes effets durent <strong>1 jour</strong>, sauf mention contraire.</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Force</th>\n<th>Dextérité</th>\n<th>Mental</th>\n<th>Perception</th>\n<th>Charisme</th>\n<th>AC</th>\n<th>Max HP</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Minerais</td>\n<td>Plantes</td>\n<td>Crystaux</td>\n<td>Champignons</td>\n<td>Morceaux de créatures</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Déchet</th>\n<th>Commun</th>\n<th>Peu Commun</th>\n<th>Rare</th>\n<th>Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>+0</td>\n<td>+1</td>\n<td>+2</td>\n<td>+4</td>\n<td>+6</td>\n</tr>\n</tbody>\n</table></div>\n<blockquote dir=\"auto\">\n<p>C’est en <strong>combinant plusieurs ingrédients</strong> que les effets deviennent <strong>plus complexes</strong>, ouvrant la voie à des <strong>concoctions expérimentales</strong> aux propriétés uniques.<br>\nAttention qu'à partir de 3 ingrédients, les effets deviennent <strong>instables</strong>.</p>\n</blockquote>")}
  </div>
</article>

<LinkPreview />
