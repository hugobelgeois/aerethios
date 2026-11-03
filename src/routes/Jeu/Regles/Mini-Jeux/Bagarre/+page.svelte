<script lang="ts">
  import { applyBase } from "$lib/basePath";
</script>

<svelte:head>
  <title>{"Bagarre"}</title>
  <meta name="description" content={"Combat simplifié pour les combats non léthaux (amicaux/ de taverne). Chaque joueur : 10 PV, D4 de dégâts (Force = ×2 dégâts). Deux approches : → Force : brutale → Technique : précis et stratégique…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Bagarre"} />
  <meta property="og:description" content={"Combat simplifié pour les combats non léthaux (amicaux/ de taverne). Chaque joueur : 10 PV, D4 de dégâts (Force = ×2 dégâts). Deux approches : → Force : brutale → Technique : précis et stratégique…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Bagarre"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<blockquote dir=\"auto\">\n<p>Combat simplifié pour les combats non léthaux (amicaux/ de taverne).</p>\n</blockquote>\n<ul>\n<li dir=\"auto\">\n<p>Chaque joueur : <strong>10 PV</strong>, <strong>D4 de dégâts</strong> (Force = ×2 dégâts).</p>\n</li>\n<li dir=\"auto\">\n<p>Deux approches :<br>\n→ <strong>Force</strong> : brutale<br>\n→ <strong>Technique</strong> : précis et stratégique</p>\n</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Type</th>\n<th>Calcul</th>\n<th>Dé</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Force</td>\n<td>Force (Athlétisme)</td>\n<td>D20</td>\n</tr>\n<tr>\n<td>Technique</td>\n<td>Dextérité + Maîtrise Courte</td>\n<td>D12</td>\n</tr>\n</tbody>\n</table></div>\n<ul>\n<li dir=\"auto\">Pour agir, il faut faire un score <strong>&gt; AC</strong> de l’adversaire.</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Duel</th>\n<th>Effet</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Force vs Force</td>\n<td>Les deux peuvent infliger des dégâts</td>\n</tr>\n<tr>\n<td>Force vs Technique</td>\n<td>La Technique peut esquiver au lieu d’attaquer</td>\n</tr>\n<tr>\n<td>Technique vs Technique</td>\n<td>Pierre (Attaquer) / Papier (Esquiver) / Ciseaux (Attraper)</td>\n</tr>\n</tbody>\n</table></div>"}
  </div>
</article>
