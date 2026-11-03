<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "raffinage",
          "text": "Raffinage",
          "level": 2
      },
      {
          "id": "dchet",
          "text": "Déchet",
          "level": 3
      },
      {
          "id": "communs",
          "text": "Communs",
          "level": 3
      },
      {
          "id": "peu-communs",
          "text": "Peu communs",
          "level": 3
      },
      {
          "id": "rares",
          "text": "Rares",
          "level": 3
      },
      {
          "id": "lgendaires",
          "text": "Légendaires",
          "level": 3
      },
      {
          "id": "technique-de-forge",
          "text": "Technique de forge",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Forgeron"}</title>
  <meta name="description" content={"Spécialité de l'Artisanat qui travaille les métaux pour en fabriquer des armes et armures. Raffinage Une fois que le joueur a lancé les dés pour connaitre la rareté du matériau qu'il a obtenu, il…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Forgeron"} />
  <meta property="og:description" content={"Spécialité de l'Artisanat qui travaille les métaux pour en fabriquer des armes et armures. Raffinage Une fois que le joueur a lancé les dés pour connaitre la rareté du matériau qu'il a obtenu, il…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Forgeron"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Spécialité de l'<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" data-wiki-fragment=\"\">Artisanat</a> qui travaille les métaux pour en fabriquer des armes et armures.</p>\n</blockquote>\n<h2 data-heading=\"Raffinage\" dir=\"auto\" id=\"raffinage\">Raffinage</h2>\n<p dir=\"auto\">Une fois que le joueur a lancé les dés pour connaitre la rareté du matériau qu'il a obtenu, il doit lancer les dés pour savoir précisément l'effet de ce matériau.</p>\n<h3 data-heading=\"Déchet\" dir=\"auto\" id=\"dchet\">Déchet</h3>\n<blockquote dir=\"auto\">\n<p>Métaux ou minerais bruts de faible qualité, oxydés, ou trop impurs pour produire un bon acier sans traitement lourd.<br>\nSouvent recyclés ou fondus en alliage.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Type</th>\n<th>Matériau</th>\n<th>Utilité</th>\n<th>Poids (kg)</th>\n<th align=\"right\">Prix</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Pièces</td>\n<td>Cuivre</td>\n<td>Malléable</td>\n<td>2</td>\n<td align=\"right\">40 pc</td>\n</tr>\n<tr>\n<td>Alliage</td>\n<td>Étain</td>\n<td></td>\n<td></td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td>Alliage</td>\n<td>Chrome</td>\n<td>Anti Corrosion<br>Anti Acide</td>\n<td></td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td>Métal</td>\n<td>Fonte</td>\n<td>Equipement</td>\n<td></td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td>Métal</td>\n<td>Plomb</td>\n<td>Malléable<br>Munitions<br>Poison lent<br>Réduction de magie</td>\n<td></td>\n<td align=\"right\"></td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Communs\" dir=\"auto\" id=\"communs\">Communs</h3>\n<blockquote dir=\"auto\">\n<p>Métaux courants, faciles à extraire et à travailler, base de la forge classique.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Type</th>\n<th>Matériau</th>\n<th>Utilité</th>\n<th align=\"left\">Poids (kg)</th>\n<th align=\"right\">Prix</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Pièces</td>\n<td>Argent</td>\n<td>Malléable<br>Revêtement</td>\n<td align=\"left\">2</td>\n<td align=\"right\">50 pa</td>\n</tr>\n<tr>\n<td>Alliage</td>\n<td>Carbone</td>\n<td>Statut <strong>Solide</strong></td>\n<td align=\"left\"></td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td>Métal</td>\n<td>Fer</td>\n<td>Equipement</td>\n<td align=\"left\"></td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td>Métal</td>\n<td>Bronze<br><em>Cuivre + Etain</em></td>\n<td><br>Equipement</td>\n<td align=\"left\"></td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td>Métal</td>\n<td>Acier<br><em>Fer + Carbone</em></td>\n<td>Equipement</td>\n<td align=\"left\"></td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td>Métal</td>\n<td>Obsidienne</td>\n<td>Couteau/ Flèche<br>Statut <strong>Délicat</strong><br>Non fusionnable</td>\n<td align=\"left\"></td>\n<td align=\"right\"></td>\n</tr>\n</tbody>\n</table></div>\n<ul>\n<li dir=\"auto\">Laiton (cuivre + zinc, semblable à l'or, utilisé pour faire des pièces pendant l'empire Romain)</li>\n</ul>\n<h3 data-heading=\"Peu communs\" dir=\"auto\" id=\"peu-communs\">Peu communs</h3>\n<blockquote dir=\"auto\">\n<p>Métaux plus résistants ou nécessitant un savoir-faire supérieur pour le travail à chaud.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Type</th>\n<th>Matériau</th>\n<th>Utilité</th>\n<th>Poids (kg)</th>\n<th align=\"right\">Prix</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Pièces</td>\n<td>Électrum<br><em>Argent + Or</em></td>\n<td>Malléable</td>\n<td>3</td>\n<td align=\"right\">25 po</td>\n</tr>\n<tr>\n<td>Alliage</td>\n<td>Nickel</td>\n<td>Non altérable par la magie</td>\n<td></td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td>Alliage</td>\n<td>Cobalt</td>\n<td>Outils</td>\n<td></td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td>Métal</td>\n<td>Titane</td>\n<td>Equipement</td>\n<td></td>\n<td align=\"right\">1 50 pa</td>\n</tr>\n<tr>\n<td>Métal</td>\n<td>Tungstène</td>\n<td>Revêtement</td>\n<td></td>\n<td align=\"right\"></td>\n</tr>\n</tbody>\n</table></div>\n<ul>\n<li dir=\"auto\">Acier trempé (carbone maîtrisé, haute dureté)</li>\n<li dir=\"auto\">Tungstène (utilisé pour renforts ou tranchants fins, non forgé pur)</li>\n</ul>\n<h3 data-heading=\"Rares\" dir=\"auto\" id=\"rares\">Rares</h3>\n<blockquote dir=\"auto\">\n<p>Métaux à haute valeur technique, demandant extraction et forge complexes.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Type</th>\n<th>Matériau</th>\n<th>Utilité</th>\n<th>Poids (kg)</th>\n<th align=\"right\">Prix</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Pièces</td>\n<td>Or</td>\n<td>Malléable</td>\n<td>4</td>\n<td align=\"right\">50 po</td>\n</tr>\n<tr>\n<td>Alliage</td>\n<td>Molybdène</td>\n<td></td>\n<td></td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td>Métal</td>\n<td>Osmium</td>\n<td>plus dense que l’or, extrêmement rare<br>+ Platine/ Iridium = bio compatible</td>\n<td></td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td>Métal</td>\n<td>Iridium</td>\n<td>ultra-dense, très dur, résistant à la chaleur</td>\n<td></td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td>Métal</td>\n<td>Poudre noire</td>\n<td>Poudre à canon pour fusil (50 tirs)</td>\n<td></td>\n<td align=\"right\"></td>\n</tr>\n</tbody>\n</table></div>\n<ul>\n<li dir=\"auto\">Molybdène (alliage haute température)</li>\n<li dir=\"auto\"></li>\n<li dir=\"auto\">Acier inoxydable (alliage nickel + chrome)</li>\n<li dir=\"auto\">Vanadium (pour acier élastique et tranchant durable)</li>\n</ul>\n<h3 data-heading=\"Légendaires\" dir=\"auto\" id=\"lgendaires\">Légendaires</h3>\n<blockquote dir=\"auto\">\n<p>Métaux exceptionnellement rares, difficiles à fondre ou forger sans technologie avancée.<br>\nHistoriquement utilisés pour symboliser la perfection métallurgique.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Type</th>\n<th>Matériau</th>\n<th>Utilité</th>\n<th>Poids (kg)</th>\n<th align=\"right\">Prix</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Pièces</td>\n<td>Platine</td>\n<td>Malléable</td>\n<td>2</td>\n<td align=\"right\">500 po</td>\n</tr>\n<tr>\n<td>Métal</td>\n<td>Mythril</td>\n<td>Equipement<br>Absorbe les impacts -&gt; +5 Impénétrable <br>Léger -&gt; +2 Acrobatie</td>\n<td></td>\n<td align=\"right\">10 po</td>\n</tr>\n<tr>\n<td>Métal</td>\n<td>Palladium</td>\n<td>Equipement</td>\n<td></td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td>Métal</td>\n<td>Adamantite</td>\n<td>Equipement<br>Vs Anges</td>\n<td></td>\n<td align=\"right\"></td>\n</tr>\n<tr>\n<td>Métal</td>\n<td>Orichalque</td>\n<td>Equipement<br>VS Démons</td>\n<td></td>\n<td align=\"right\"></td>\n</tr>\n</tbody>\n</table></div>\n<ul>\n<li dir=\"auto\">Tantale (ultra-résistant, presque inoxydable)</li>\n<li dir=\"auto\">Rhodium (dur, brillant, excellent conducteur)</li>\n</ul>\n<h2 data-heading=\"Technique de forge\" dir=\"auto\" id=\"technique-de-forge\">Technique de forge</h2>\n<ul>\n<li dir=\"auto\">Damassé</li>\n</ul>")}
  </div>
</article>

<LinkPreview />
