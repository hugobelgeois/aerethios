<script lang="ts">
  import { applyBase } from "$lib/basePath";
</script>

<svelte:head>
  <title>{"Armes de mêlée"}</title>
  <meta name="description" content={"Dés + modificateur >= AC → résultat + dégâts fixes. Voir Règles de base. Base 1 Main 2 Mains Dés 2d10 2d8 Dégâts fixes 2 12 Portée 2m 2m Matériaux 2 3 Les mains nues comptent comme une arme à 1 main…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Armes de mêlée"} />
  <meta property="og:description" content={"Dés + modificateur >= AC → résultat + dégâts fixes. Voir Règles de base. Base 1 Main 2 Mains Dés 2d10 2d8 Dégâts fixes 2 12 Portée 2m 2m Matériaux 2 3 Les mains nues comptent comme une arme à 1 main…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Armes de mêlée"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p><code>Dés + modificateur &gt;= AC</code> → <code>résultat + dégâts fixes</code>. Voir <a class=\"internal-link\" href=\"%%BASE%%/Jeu/Regles 2.0/Regles de base\" data-wiki-href=\"/Jeu/Regles 2.0/Regles de base\" data-wiki-fragment=\"\">Règles de base</a>.</p>\n</blockquote>\n<h2 data-heading=\"Base\" dir=\"auto\" id=\"base\">Base</h2>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">1 Main</th>\n<th align=\"center\">2 Mains</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Dés</strong></td>\n<td align=\"center\"><span class=\"atlas-dice-link\" data-formula=\"2d10\" role=\"button\" aria-label=\"Roll 2d10\">2d10</span></td>\n<td align=\"center\"><span class=\"atlas-dice-link\" data-formula=\"2d8\" role=\"button\" aria-label=\"Roll 2d8\">2d8</span></td>\n</tr>\n<tr>\n<td><strong>Dégâts fixes</strong></td>\n<td align=\"center\">2</td>\n<td align=\"center\">12</td>\n</tr>\n<tr>\n<td><strong>Portée</strong></td>\n<td align=\"center\">2m</td>\n<td align=\"center\">2m</td>\n</tr>\n<tr>\n<td><strong>Matériaux</strong></td>\n<td align=\"center\">2</td>\n<td align=\"center\">3</td>\n</tr>\n</tbody>\n</table></div>\n<blockquote dir=\"auto\">\n<p>Les mains nues comptent comme une arme à 1 main Contondante, sans dégâts fixes.</p>\n</blockquote>\n<h2 data-heading=\"Types\" dir=\"auto\" id=\"types\">Types</h2>\n<p dir=\"auto\">Chaque arme possède un type, choisi à sa création : <strong>Contondant</strong>, <strong>Perforant</strong> ou <strong>Tranchant</strong>.<br>\nSi une arme en possède plusieurs, annoncez celui que vous utilisez avant de lancer les dés.</p>\n<p dir=\"auto\">Le type utilisé détermine le Maniement qui s'applique. Voir <a class=\"internal-link\" href=\"%%BASE%%/Jeu/Regles 2.0/Combat/Maniements et styles\" data-wiki-href=\"/Jeu/Regles 2.0/Combat/Maniements et styles\" data-wiki-fragment=\"\">Maniements et styles</a>.<br>\nUne gemme peut améliorer les dégâts, le toucher ou permettre des ajouts. Voir <a class=\"internal-link\" href=\"%%BASE%%/Jeu/Regles 2.0/Combat/Preparation de lequipement\" data-wiki-href=\"/Jeu/Regles 2.0/Combat/Preparation de lequipement\" data-wiki-fragment=\"\">Préparation de l'équipement</a>.</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Modificateur</th>\n<th align=\"center\">Attribut</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>1 Main</strong></td>\n<td align=\"center\">Dextérité</td>\n</tr>\n<tr>\n<td><strong>2 Mains</strong></td>\n<td align=\"center\">Force</td>\n</tr>\n</tbody>\n</table></div>\n<h2 data-heading=\"Deux armes\" dir=\"auto\" id=\"deux-armes\">Deux armes</h2>\n<p dir=\"auto\">Vous choisissez à chaque attaque l'arme utilisée. Deux armes de types différents permettent donc de s'adapter à la cible.</p>\n<p dir=\"auto\"><strong>Seconde chance :</strong> si votre attaque rate, vous pouvez utiliser votre <strong>Action Bonus</strong> pour attaquer avec l'autre arme, avec désavantage et sans dégâts fixes. Le style Ambidextre retire ces deux malus, voir <a class=\"internal-link\" href=\"%%BASE%%/Jeu/Regles 2.0/Combat/Maniements et styles\" data-wiki-href=\"/Jeu/Regles 2.0/Combat/Maniements et styles\" data-wiki-fragment=\"\">Maniements et styles</a>.</p>")}
  </div>
</article>
