<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "fabrication",
          "text": "Fabrication",
          "level": 4
      },
      {
          "id": "rcolte",
          "text": "Récolte",
          "level": 4
      },
      {
          "id": "lieu",
          "text": "Lieu",
          "level": 4
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Rappel"}</title>
  <meta name="description" content={"Fabrication Déchet Commun Peu Commun Rare Légendaire Difficulté de Fabrication 10 20 40 80 150 Expérience de Fabrication - 1 2 4 8 Taux d'Échec 1 3 6 10 15 Récolte Rien Déchet Commun Peu Commun Rare…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Rappel"} />
  <meta property="og:description" content={"Fabrication Déchet Commun Peu Commun Rare Légendaire Difficulté de Fabrication 10 20 40 80 150 Expérience de Fabrication - 1 2 4 8 Taux d'Échec 1 3 6 10 15 Récolte Rien Déchet Commun Peu Commun Rare…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Rappel"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h4 data-heading=\"Fabrication\" dir=\"auto\" id=\"fabrication\">Fabrication</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Déchet</th>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Difficulté de Fabrication</strong></td>\n<td align=\"center\">10</td>\n<td align=\"center\">20</td>\n<td align=\"center\">40</td>\n<td align=\"center\">80</td>\n<td align=\"center\">150</td>\n</tr>\n<tr>\n<td><strong>Expérience de Fabrication</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">1</td>\n<td align=\"center\">2</td>\n<td align=\"center\">4</td>\n<td align=\"center\">8</td>\n</tr>\n<tr>\n<td><strong>Taux d'Échec</strong></td>\n<td align=\"center\">1</td>\n<td align=\"center\">3</td>\n<td align=\"center\">6</td>\n<td align=\"center\">10</td>\n<td align=\"center\">15</td>\n</tr>\n</tbody>\n</table></div>\n<h4 data-heading=\"Récolte\" dir=\"auto\" id=\"rcolte\">Récolte</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th align=\"center\">Rien</th>\n<th align=\"center\">Déchet</th>\n<th align=\"center\">Commun</th>\n<th align=\"center\">Peu Commun</th>\n<th align=\"center\">Rare</th>\n<th align=\"center\">Légendaire</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Chance Récolte</strong></td>\n<td align=\"center\">1 - 10</td>\n<td align=\"center\">11 - 30</td>\n<td align=\"center\">31 - 60</td>\n<td align=\"center\">61 - 85</td>\n<td align=\"center\">86 - 96</td>\n<td align=\"center\">97+</td>\n</tr>\n<tr>\n<td><strong>Quantité de Récolte</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">1d10</td>\n<td align=\"center\">1d8</td>\n<td align=\"center\">1d6</td>\n<td align=\"center\">1d4</td>\n<td align=\"center\">1d2</td>\n</tr>\n<tr>\n<td><strong>Prix Moyen</strong></td>\n<td align=\"center\">-</td>\n<td align=\"center\">~10pc</td>\n<td align=\"center\">~1pa</td>\n<td align=\"center\">~10pa</td>\n<td align=\"center\">~1po</td>\n<td align=\"center\">~10po</td>\n</tr>\n</tbody>\n</table></div>\n<h4 data-heading=\"Lieu\" dir=\"auto\" id=\"lieu\">Lieu</h4>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Zone sauvage</th>\n<th>Campement</th>\n<th>Lieu sécurisé</th>\n<th>Lieu conçu pour</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Désavantage</td>\n<td>Résultat</td>\n<td>Avantage</td>\n<td>Difficulté de Fabrication/2</td>\n</tr>\n<tr>\n<td>---</td>\n<td>---</td>\n<td>Rareté +1</td>\n<td>Rareté +2</td>\n</tr>\n</tbody>\n</table></div>"}
  </div>
</article>

<LinkPreview />
