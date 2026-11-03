<script lang="ts">
  import { applyBase } from "$lib/basePath";
</script>

<svelte:head>
  <title>{"Magie"}</title>
  <meta name="description" content={"Combat Dé + Mental(Arcaniste|Intelligence|Sagesse) >= AC -> DR - (Résultat * (Crystaux + Toile Célèste)) = Dégâts au HP Dé de précision Résultat (Mental [-5:10]) Crystaux max (% de la Magie) Arrondi…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Magie"} />
  <meta property="og:description" content={"Combat Dé + Mental(Arcaniste|Intelligence|Sagesse) >= AC -> DR - (Résultat * (Crystaux + Toile Célèste)) = Dégâts au HP Dé de précision Résultat (Mental [-5:10]) Crystaux max (% de la Magie) Arrondi…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Magie"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h2 data-heading=\"Combat\" dir=\"auto\" id=\"combat\">Combat</h2>\n<blockquote dir=\"auto\">\n<p>Dé + Mental(Arcaniste|Intelligence|Sagesse) &gt;= AC -&gt; DR - (Résultat * (Crystaux + Toile Célèste)) = Dégâts au HP</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Dé de précision</th>\n<th align=\"center\">Résultat (Mental [-5:10])</th>\n<th align=\"center\">Crystaux max (% de la Magie)<br>Arrondi vers le haut</th>\n<th align=\"center\">Dégâts (Magie [0:10])</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\">2d12</td>\n<td align=\"center\">[-3:34]</td>\n<td align=\"center\">10%</td>\n<td align=\"center\">[3:34]</td>\n</tr>\n<tr>\n<td align=\"center\">2d8</td>\n<td align=\"center\">[-3:26]</td>\n<td align=\"center\">20%</td>\n<td align=\"center\">[3:52]</td>\n</tr>\n<tr>\n<td align=\"center\">1d12</td>\n<td align=\"center\">[-4:22]</td>\n<td align=\"center\">40%</td>\n<td align=\"center\">[4:88]</td>\n</tr>\n<tr>\n<td align=\"center\">1d8</td>\n<td align=\"center\">[-4:18]</td>\n<td align=\"center\">70%</td>\n<td align=\"center\">[4:126]</td>\n</tr>\n<tr>\n<td align=\"center\">1d4</td>\n<td align=\"center\">[-4:14]</td>\n<td align=\"center\">100%</td>\n<td align=\"center\">[4:140]</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">Si l'attaque n'atteint pas l'AC, lancer 1d4 pour savoir combien de crystaux ont été consommé.</p>\n<h3 data-heading=\"v2\" dir=\"auto\" id=\"v2\">v2</h3>\n<p dir=\"auto\">(Dé de magie + Maîtrise) x Nombre de crystaux + Toile Célèste = Dégâts</p>\n<p dir=\"auto\">(1d12 + [0:10]) x [1:20] + ? = [1:440]</p>\n<h2 data-heading=\"Utilitaire\" dir=\"auto\" id=\"utilitaire\">Utilitaire</h2>\n<blockquote dir=\"auto\">\n<p>1d20 + Mental (Arcaniste|Intelligence|Sagesse) &gt;= DC</p>\n</blockquote>\n<p dir=\"auto\">S'il s'agit d'un buff, le coût en crystaux varie selon le type de stats que l'on souhaite buffer.</p>\n<p dir=\"auto\">S'il s'agit d'une action particulière, le MJ décide du coût en crystaux.</p>\n<h2 data-heading=\"Toiles Célestes\" dir=\"auto\" id=\"toiles-celestes\">Toiles Célestes</h2>\n<p dir=\"auto\">S'il s'agit d'une Toile basée sur les magies courantes, on ajoute la valeur de la Toile</p>"}
  </div>
</article>
