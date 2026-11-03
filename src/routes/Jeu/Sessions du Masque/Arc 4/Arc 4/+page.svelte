<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "dtails",
          "text": "Détails",
          "level": 2
      },
      {
          "id": "sessions",
          "text": "Sessions",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Arc 4"}</title>
  <meta name="description" content={"Détails Lieu actuel : Nirina Objectif.s : Enquêter sur le culte du masque et leurs armes pour le maîtriser, Abattre le Magala Pnjs notables : Syrithia, Boss final : Sessions Arc 4 - 18 - 02.01.26 Arc…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Arc 4"} />
  <meta property="og:description" content={"Détails Lieu actuel : Nirina Objectif.s : Enquêter sur le culte du masque et leurs armes pour le maîtriser, Abattre le Magala Pnjs notables : Syrithia, Boss final : Sessions Arc 4 - 18 - 02.01.26 Arc…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 4"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<h2 data-heading=\"Détails\" dir=\"auto\" id=\"dtails\">Détails</h2>\n<p dir=\"auto\">Lieu actuel : Nirina</p>\n<p dir=\"auto\">Objectif.s : Enquêter sur le culte du masque et leurs armes pour le maîtriser, Abattre le Magala</p>\n<p dir=\"auto\">Pnjs notables : Syrithia,</p>\n<p dir=\"auto\">Boss final : </p>\n<h2 data-heading=\"Sessions\" dir=\"auto\" id=\"sessions\">Sessions</h2>\n<p dir=\"auto\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 18 - 02.01.26\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 18 - 02.01.26\" data-wiki-fragment=\"\">Arc 4 - 18 - 02.01.26</a></p>\n<p dir=\"auto\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" data-wiki-fragment=\"\">Arc 4 - 19 - 23.01.26</a></p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Précédent</th>\n<th align=\"center\">Suivant</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3\" data-wiki-fragment=\"\">Arc 3</a></td>\n<td align=\"center\">Arc 5</td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
