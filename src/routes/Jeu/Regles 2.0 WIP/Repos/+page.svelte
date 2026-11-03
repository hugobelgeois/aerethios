<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Repos"}</title>
  <meta name="description" content={"Le repos permet de récupérer de la vie et de la magie, ainsi que de revenir d'un comas. Court Long Sécurisé Durée < 8h 8h 8h Lieu - - Dans un lieu sûr (maison personnelle ou de proche) HP +10 +20 +40…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Repos"} />
  <meta property="og:description" content={"Le repos permet de récupérer de la vie et de la magie, ainsi que de revenir d'un comas. Court Long Sécurisé Durée < 8h 8h 8h Lieu - - Dans un lieu sûr (maison personnelle ou de proche) HP +10 +20 +40…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Repos"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<p dir=\"auto\">Le repos permet de récupérer de la vie et de la magie, ainsi que de revenir d'un comas.</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th>Court</th>\n<th>Long</th>\n<th>Sécurisé</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Durée</strong></td>\n<td>&lt; 8h</td>\n<td>8h</td>\n<td>8h</td>\n</tr>\n<tr>\n<td><strong>Lieu</strong></td>\n<td>-</td>\n<td>-</td>\n<td>Dans un lieu sûr (maison personnelle ou de proche)</td>\n</tr>\n<tr>\n<td><strong>HP</strong></td>\n<td>+10</td>\n<td>+20</td>\n<td>+40</td>\n</tr>\n<tr>\n<td><strong>MP</strong></td>\n<td>+1 (si les HP sont pleins)</td>\n<td>+1 (cumulatif si les HP sont pleins)<br>+1 (non cumulatif sinon)<br>-(5-crystaux) nécrose</td>\n<td>+2 (cumulatif si les HP sont pleins)<br>+2 (non cumulatif sinon)<br>-(5-crystaux) nécrose</td>\n</tr>\n<tr>\n<td><strong>Comas</strong></td>\n<td>Impossible d'en revenir</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div>\n<p dir=\"auto\">Pendant un comas, le joueur ne peut pas régénérer des MP, et la régénération de HP est divisée par 2.</p>"}
  </div>
</article>

<LinkPreview />
