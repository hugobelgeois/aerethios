<script lang="ts">
  import { applyBase } from "$lib/basePath";
</script>

<svelte:head>
  <title>{"Recherche Alchimique"}</title>
  <meta name="description" content={"Ce Mini-Jeux permet aux joueurs de fabriquer des potions ou des invocations afin d'avoir de nouvelles recettes à fabriquer plus rapidement dans le futur. WIP Sélection des ingrédients Lorsqu’on…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Recherche Alchimique"} />
  <meta property="og:description" content={"Ce Mini-Jeux permet aux joueurs de fabriquer des potions ou des invocations afin d'avoir de nouvelles recettes à fabriquer plus rapidement dans le futur. WIP Sélection des ingrédients Lorsqu’on…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Recherche Alchimique"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<blockquote dir=\"auto\">\n<p>Ce Mini-Jeux permet aux joueurs de fabriquer des potions ou des invocations afin d'avoir de nouvelles recettes à fabriquer plus rapidement dans le futur.<br>\nWIP</p>\n</blockquote>\n<h2 data-heading=\"Sélection des ingrédients\" dir=\"auto\" id=\"selection-des-ingredients\">Sélection des ingrédients</h2>\n<p dir=\"auto\">Lorsqu’on expérimente, la qualité des ingrédients influe sur la facilité d’en tirer le plein potentiel, mais aussi sur le risque de les perdre.</p>\n<p dir=\"auto\"><strong>Modificateurs de difficulté :</strong></p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Déchet</th>\n<th>Commun</th>\n<th>Peu Commun</th>\n<th>Rare</th>\n<th>Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>+10</td>\n<td>+8</td>\n<td>+6</td>\n<td>+4</td>\n<td>+2</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Spécial Invocateur\" dir=\"auto\" id=\"special-invocateur\">Spécial Invocateur</h2>\n<p dir=\"auto\">Les conditions extérieures modifient les chances de succès.<br>\nChaque paramètre qui diffère d’un point de la condition optimale ajoute <strong>+1</strong> à la difficulté.<br>\nLes conditions optimales sont décidées par le MJ à l’avance.</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Facteur</th>\n<th>Exemples de conditions possibles</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Heure</td>\n<td>00h – 06h – 12h – 18h – 00h</td>\n</tr>\n<tr>\n<td>Température</td>\n<td>Froid – Normal – Chaud</td>\n</tr>\n<tr>\n<td>Météo</td>\n<td>Fortes chutes – Légères chutes – Couvert – Dégagé</td>\n</tr>\n<tr>\n<td>État physique</td>\n<td>Fatigué – Normal – Revigoré</td>\n</tr>\n</tbody>\n</table></div>\n<blockquote dir=\"auto\">\n<p>Exemple : si l’heure optimale est 00h mais que l’expérience a lieu à 12h, le joueur ajoute +2 à la difficulté.</p>\n</blockquote>\n<hr>\n<h2 data-heading=\"Modificateurs supplémentaires\" dir=\"auto\" id=\"modificateurs-supplementaires\">Modificateurs supplémentaires</h2>\n<ul>\n<li dir=\"auto\">\n<p>Hors laboratoire stérile : <strong>+3</strong> difficulté</p>\n</li>\n<li dir=\"auto\">\n<p>En présence d’une source magique instable : <strong>+2</strong></p>\n</li>\n<li dir=\"auto\">\n<p>Avec assistance d’un autre alchimiste : <strong>–1 par niveau de compétence du partenaire</strong> (max –3)</p>\n</li>\n</ul>\n<hr>\n<h2 data-heading=\"Résolution\" dir=\"auto\" id=\"resolution\">Résolution</h2>\n<p dir=\"auto\">Le joueur lance :<br>\n<strong>1D20 + Mental + Concentration</strong><br>\ncontre la <strong>difficulté finale</strong> calculée à partir des modificateurs ci-dessus.</p>\n<p dir=\"auto\"><strong>Résultats possibles :</strong></p>\n<ul>\n<li dir=\"auto\">\n<p><strong>Réussite critique (20 naturel)</strong> : découverte complète, ingrédient préservé.</p>\n</li>\n<li dir=\"auto\">\n<p><strong>Réussite (≥ difficulté)</strong> : résultat stable, ingrédient consommé.</p>\n</li>\n<li dir=\"auto\">\n<p><strong>Échec (&lt; difficulté)</strong> : échec partiel, ingrédient perdu.</p>\n</li>\n<li dir=\"auto\">\n<p><strong>Échec critique (1 naturel)</strong> : explosion, intoxication ou invocation instable (décidé par le MJ).</p>\n</li>\n</ul>"}
  </div>
</article>
