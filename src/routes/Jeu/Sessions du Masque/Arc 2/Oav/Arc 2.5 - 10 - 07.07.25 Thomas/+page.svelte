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
  <title>{"Arc 2.5 - 10 - 07.07.25 Thomas"}</title>
  <meta name="description" content={"Résumé Détails Lieu actuel : Nirina, Galmag + Pulmius Objectif : Pnjs notables : Theon, Grogon, la grosse Berta Scénario Notes Vie à Galmag avec son \"frère\" Theon Le rat de la grosse Berta Assassinat…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Arc 2.5 - 10 - 07.07.25 Thomas"} />
  <meta property="og:description" content={"Résumé Détails Lieu actuel : Nirina, Galmag + Pulmius Objectif : Pnjs notables : Theon, Grogon, la grosse Berta Scénario Notes Vie à Galmag avec son \"frère\" Theon Le rat de la grosse Berta Assassinat…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 2.5 - 10 - 07.07.25 Thomas"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Résumé</p>\n</blockquote>\n<h2 data-heading=\"Détails\" dir=\"auto\" id=\"dtails\">Détails</h2>\n<p dir=\"auto\">Lieu actuel : Nirina, Galmag + Pulmius</p>\n<p dir=\"auto\">Objectif :</p>\n<p dir=\"auto\">Pnjs notables : Theon, Grogon, la grosse Berta</p>\n<h2 data-heading=\"Scénario\" dir=\"auto\" id=\"scnario\">Scénario</h2>\n<h2 data-heading=\"Notes\" dir=\"auto\" id=\"notes\">Notes</h2>\n<blockquote dir=\"auto\">\n<p>Vie à Galmag avec son \"frère\" Theon<br>\nLe rat de la grosse Berta<br>\nAssassinat de son maître/propriétaire Grogon</p>\n<p>Fuite pour Pulmius<br>\nApprentissage de l'alchimie pendant 2 ans</p>\n<p>Emprunt bancaire pour rembourser le médicament de Theon et éviter sa mort<br>\nTheon rejoint les Templis pour aider les autres (ouvrir son orphelinat ambulant?) et part en pèlerinage</p>\n<p>Il fait des quêtes pour monter rang Argent en attendant ses 19 ans<br>\nIl prend le bateau pour Kothula afin de retrouver sa vie du jdr</p>\n</blockquote>\n<p dir=\"auto\">Résultat :</p>\n<ul>\n<li dir=\"auto\">Rang Arvens Argent 2</li>\n<li dir=\"auto\">Survie de Theon</li>\n<li dir=\"auto\">Alchimie</li>\n<li dir=\"auto\">Nouvelle magie d'air</li>\n<li dir=\"auto\">Nouveaux styles de combat :\n<ul>\n<li dir=\"auto\">Trancher les magies</li>\n</ul>\n</li>\n</ul>\n<h2 data-heading=\"Joueurs\" dir=\"auto\" id=\"joueurs\">Joueurs</h2>\n<ul class=\"contains-task-list\">\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Diego</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Loïc</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Michel</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Thomas</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">William</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Précédent</th>\n<th align=\"center\">Suivant</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 2/Arc 2 - 09b - 27.06.25\" data-wiki-fragment=\"\">Arc 2 - 09b - 27.06.25</a></td>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3\" data-wiki-fragment=\"\">Arc 3</a></td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
