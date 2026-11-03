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
  <title>{"Arc 2 - 08 - 30.05.25"}</title>
  <meta name="description" content={"Résumé Détails Lieu actuel : Ovliin, Ruvik Objectif : Chercher Orvain Thessarion à Ruvik Pnjs notables : Bryumnes, Einar, Orvain Thessarion Scénario Notes Capitale Chercher Orvain Thessarion Emmené…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Arc 2 - 08 - 30.05.25"} />
  <meta property="og:description" content={"Résumé Détails Lieu actuel : Ovliin, Ruvik Objectif : Chercher Orvain Thessarion à Ruvik Pnjs notables : Bryumnes, Einar, Orvain Thessarion Scénario Notes Capitale Chercher Orvain Thessarion Emmené…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 2 - 08 - 30.05.25"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Résumé</p>\n</blockquote>\n<h2 data-heading=\"Détails\" dir=\"auto\" id=\"dtails\">Détails</h2>\n<p dir=\"auto\">Lieu actuel : Ovliin, Ruvik</p>\n<p dir=\"auto\">Objectif : Chercher Orvain Thessarion à Ruvik</p>\n<p dir=\"auto\">Pnjs notables : Bryumnes, Einar, Orvain Thessarion</p>\n<h2 data-heading=\"Scénario\" dir=\"auto\" id=\"scnario\">Scénario</h2>\n<h2 data-heading=\"Notes\" dir=\"auto\" id=\"notes\">Notes</h2>\n<p dir=\"auto\">Capitale</p>\n<ul>\n<li dir=\"auto\">Chercher Orvain Thessarion</li>\n<li dir=\"auto\">Emmené par l'Eglise pour expérimentation illégale</li>\n<li dir=\"auto\">Exécuté par Einar (ne connaît pas le nom des victimes pour ne pas être biaisé)</li>\n<li dir=\"auto\">Einar les amène à Bryumnes</li>\n<li dir=\"auto\">Leur conversation avec Billy avait été espionnée, les états sont en froids car ils pensent que les autres font des armes contre eux</li>\n</ul>\n<p dir=\"auto\">La guerre</p>\n<ul>\n<li dir=\"auto\">Elle veut les tester pour voir s'ils ont une chance de réussir leur mission</li>\n<li dir=\"auto\">Les garder à Ovliin est trop dangereux pour le peuple, Bryumnes veut les dégager</li>\n<li dir=\"auto\">Ils doivent attendre 3 jours le temps qu'elle récupère des infos sur Tarquin Alsyon</li>\n</ul>\n<h2 data-heading=\"Joueurs\" dir=\"auto\" id=\"joueurs\">Joueurs</h2>\n<ul class=\"contains-task-list\">\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Diego 9</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Loïc 7</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Lucas 2</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Michel 10</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Thomas 9</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">William 4</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Précédent</th>\n<th align=\"center\">Suivant</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 07 - 21.05.25\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 07 - 21.05.25\" data-wiki-fragment=\"\">Arc 2 - 07 - 21.05.25</a></td>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09 - 13.06.25\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09 - 13.06.25\" data-wiki-fragment=\"\">Arc 2 - 09 - 13.06.25</a></td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
