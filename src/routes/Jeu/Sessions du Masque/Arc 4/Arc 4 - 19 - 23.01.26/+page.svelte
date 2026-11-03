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
          "id": "notes",
          "text": "Notes",
          "level": 2
      },
      {
          "id": "scnario",
          "text": "Scénario",
          "level": 2
      },
      {
          "id": "1-document-dinformation-sur-le-groupe",
          "text": "1) Document d'information sur le groupe",
          "level": 4
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
  <title>{"Arc 4 - 19 - 23.01.26"}</title>
  <meta name="description" content={"Résumé Détails Lieu actuel : Nirina, Pranels Objectif : Pnjs notables : Ilmar Hakka Notes Scénario 1) Document d'information sur le groupe Event, Qui > Quoi Contact : Théon, Templis, pourrait se…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Arc 4 - 19 - 23.01.26"} />
  <meta property="og:description" content={"Résumé Détails Lieu actuel : Nirina, Pranels Objectif : Pnjs notables : Ilmar Hakka Notes Scénario 1) Document d'information sur le groupe Event, Qui > Quoi Contact : Théon, Templis, pourrait se…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 4 - 19 - 23.01.26"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Résumé</p>\n</blockquote>\n<h2 data-heading=\"Détails\" dir=\"auto\" id=\"dtails\">Détails</h2>\n<p dir=\"auto\">Lieu actuel : Nirina, Pranels</p>\n<p dir=\"auto\">Objectif :</p>\n<p dir=\"auto\">Pnjs notables : Ilmar Hakka</p>\n<h2 data-heading=\"Notes\" dir=\"auto\" id=\"notes\">Notes</h2>\n<h2 data-heading=\"Scénario\" dir=\"auto\" id=\"scnario\">Scénario</h2>\n<h4 data-heading=\"1) Document d'information sur le groupe\" dir=\"auto\" id=\"1-document-dinformation-sur-le-groupe\">1) Document d'information sur le groupe</h4>\n<blockquote dir=\"auto\">\n<p><strong>Event</strong>, Qui &gt; Quoi</p>\n</blockquote>\n<p dir=\"auto\">Contact :</p>\n<ul>\n<li dir=\"auto\">\n<p>Théon, Templis, pourrait se renseigner en interne</p>\n</li>\n<li dir=\"auto\">\n<p>Nyx, contact d'Arek</p>\n</li>\n<li dir=\"auto\">\n<p>Thierry du Lion d'Argent</p>\n<ul>\n<li dir=\"auto\">Mattias du Lion Tuant</li>\n</ul>\n</li>\n<li dir=\"auto\">\n<p>Ferdinand du Lion d'Argent</p>\n<ul>\n<li dir=\"auto\">Chlodvig du Marteau Lourd<br>\nGroupe avec des sous-fifres</li>\n</ul>\n</li>\n<li dir=\"auto\">\n<p>Salomé du Lion d'Argent</p>\n<ul>\n<li dir=\"auto\">Nyx du Lion d'Argent<br>\nRépandent la foi</li>\n</ul>\n</li>\n<li dir=\"auto\">\n<p>Florian de l'Ancienne Bataille</p>\n<ul>\n<li dir=\"auto\">Erasmus du Tranchant</li>\n</ul>\n</li>\n<li dir=\"auto\">\n<p>Ilmar Hakka</p>\n<ul>\n<li dir=\"auto\">Kigan Krust<br>\nSe trouvent dans Sulimund, à Crache Poussière</li>\n</ul>\n</li>\n</ul>\n<p dir=\"auto\">Parmi les leaders se trouve forcément le planificateur de tout ce qu'il se passe.</p>\n<p dir=\"auto\">Il faudrait réussir à se renseigner auprès des autres leaders pour savoir de qui il s'agit.</p>\n<h2 data-heading=\"Joueurs\" dir=\"auto\" id=\"joueurs\">Joueurs</h2>\n<ul class=\"contains-task-list\">\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Diego 20</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Loïc 15</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Lucas 8</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Michel 22</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Nolan 8</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Thomas 20</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">William 7</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Précédent</th>\n<th align=\"center\">Suivant</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 18 - 02.01.26\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 18 - 02.01.26\" data-wiki-fragment=\"\">Arc 4 - 18 - 02.01.26</a></td>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 20 - 13.02.26\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 20 - 13.02.26\" data-wiki-fragment=\"\">Arc 4 - 20 - 13.02.26</a></td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
