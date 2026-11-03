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
          "id": "scnario",
          "text": "Scénario",
          "level": 2
      },
      {
          "id": "notes",
          "text": "Notes",
          "level": 2
      },
      {
          "id": "joueurs",
          "text": "Joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Arc 2 - 05 - 27.04.25"}</title>
  <meta name="description" content={"Combat contre le Goss Harag Détails Lieu actuel : Ovliin, les terres d'Orvain, entre Siv, Bizmor et Ruvik Objectif : Combattre le Goss Harag et trouver des infos sur Orvain Pnjs notables : - Scénario…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Arc 2 - 05 - 27.04.25"} />
  <meta property="og:description" content={"Combat contre le Goss Harag Détails Lieu actuel : Ovliin, les terres d'Orvain, entre Siv, Bizmor et Ruvik Objectif : Combattre le Goss Harag et trouver des infos sur Orvain Pnjs notables : - Scénario…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 2 - 05 - 27.04.25"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Combat contre le Goss Harag</p>\n</blockquote>\n<h2 data-heading=\"Détails\" dir=\"auto\" id=\"dtails\">Détails</h2>\n<p dir=\"auto\">Lieu actuel : Ovliin, les terres d'Orvain, entre Siv, Bizmor et Ruvik</p>\n<p dir=\"auto\">Objectif : Combattre le Goss Harag et trouver des infos sur Orvain</p>\n<p dir=\"auto\">Pnjs notables : -</p>\n<h2 data-heading=\"Scénario\" dir=\"auto\" id=\"scnario\">Scénario</h2>\n<p dir=\"auto\">J-41<br>\nCombat contre Harag</p>\n<h2 data-heading=\"Notes\" dir=\"auto\" id=\"notes\">Notes</h2>\n<p dir=\"auto\"><strong>Combat contre Goss Harag</strong></p>\n<blockquote dir=\"auto\">\n<p>Armure : 14 (16 tête et bras avant)<br>\nArme : 8 +D6 (D8 quand enragé)</p>\n</blockquote>\n<p dir=\"auto\">Le monstre finit par se replier dans sa tanière<br>\nDedans on y trouve un laboratoire beaucoup plus sophistiqué que celui de la maison<br>\nIl y a le chien de Full Metal Alchemist</p>\n<p dir=\"auto\">Le monstre est retourné se soigner dans sa cuve, ils peuvent l'achever ou le laisser là<br>\nIls trouvent le journal d'Orvain, qui dit qu'il est parti à la capital, Ruvik<br>\nPour s'y rendre, il suffit de se diriger vers la montagne qui fume au nord (ils sont dans la région rocheuse entre Bizmor et Ruvik)</p>\n<h2 data-heading=\"Joueurs\" dir=\"auto\" id=\"joueurs\">Joueurs</h2>\n<ul class=\"contains-task-list\">\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Diego 7</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Loïc 5</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Michel 7</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Thomas 7</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">William 3</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Précédent</th>\n<th align=\"center\">Suivant</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"></td>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 06 - 18.05.25\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 06 - 18.05.25\" data-wiki-fragment=\"\">Arc 2 - 06 - 18.05.25</a></td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
