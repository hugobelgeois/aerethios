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
          "id": "5-chlorys-vient-sexcuser",
          "text": "5) Chlorys vient s'excuser",
          "level": 4
      },
      {
          "id": "6-le-vol-de-raja",
          "text": "6) Le vol de Raja",
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
  <title>{"Arc 3 - 16 - 28.11.25"}</title>
  <meta name="description" content={"Résumé Détails Lieu actuel : Suraja, Irkma Objectif : Pnjs notables : Chlorys Scénario Notes 5) Chlorys vient s'excuser NPC Interaction, Dara, Haelrak, Zvein > Elle n'était pas au courant qu'ils…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Arc 3 - 16 - 28.11.25"} />
  <meta property="og:description" content={"Résumé Détails Lieu actuel : Suraja, Irkma Objectif : Pnjs notables : Chlorys Scénario Notes 5) Chlorys vient s'excuser NPC Interaction, Dara, Haelrak, Zvein > Elle n'était pas au courant qu'ils…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 3 - 16 - 28.11.25"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Résumé</p>\n</blockquote>\n<h2 data-heading=\"Détails\" dir=\"auto\" id=\"dtails\">Détails</h2>\n<p dir=\"auto\">Lieu actuel : Suraja, Irkma</p>\n<p dir=\"auto\">Objectif :</p>\n<p dir=\"auto\">Pnjs notables : Chlorys</p>\n<h2 data-heading=\"Scénario\" dir=\"auto\" id=\"scnario\">Scénario</h2>\n<h2 data-heading=\"Notes\" dir=\"auto\" id=\"notes\">Notes</h2>\n<h4 data-heading=\"5) Chlorys vient s'excuser\" dir=\"auto\" id=\"5-chlorys-vient-sexcuser\">5) Chlorys vient s'excuser</h4>\n<blockquote dir=\"auto\">\n<p><strong>NPC Interaction</strong>, Dara, Haelrak, Zvein &gt;</p>\n</blockquote>\n<p dir=\"auto\">Elle n'était pas au courant qu'ils volaient un compagnon à Arek, et veut se faire pardonner en ayant fait des recherches pour eux</p>\n<p dir=\"auto\">Le masque est lié à la religion, potentiellement pour servir d'arme contre les dieux.<br>\nLéoric et Hazdaim pour contacter le dieu dormant<br>\nArek pour les protéger<br>\nElle propose à Dara de voler Raja car c'est elle qui a commandité son vol<br>\nÉquipe de 3 pour la discrétion</p>\n<h4 data-heading=\"6) Le vol de Raja\" dir=\"auto\" id=\"6-le-vol-de-raja\">6) Le vol de Raja</h4>\n<blockquote dir=\"auto\">\n<p><strong>Énigme</strong>, - &gt; le coffre est sécurisé</p>\n</blockquote>\n<p dir=\"auto\">Raja a utilisé la magie de Lumière et de Ténèbres pour sécuriser le coffre<br>\nS'ils ratent leur jet, il explose et leur met un malus</p>\n<h2 data-heading=\"Joueurs\" dir=\"auto\" id=\"joueurs\">Joueurs</h2>\n<ul class=\"contains-task-list\">\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Diego 17</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Loïc 14</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Lucas 7</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Michel 19</li>\n<li data-task=\"x\" class=\"task-list-item is-checked\" dir=\"auto\"><input checked=\"\" type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Nolan 5</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">Thomas 17</li>\n<li data-task=\"\" class=\"task-list-item\" dir=\"auto\"><input type=\"checkbox\" class=\"task-list-item-checkbox\" disabled=\"\">William 7</li>\n</ul>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th align=\"center\">Précédent</th>\n<th align=\"center\">Suivant</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 15 - 14.11.25\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 15 - 14.11.25\" data-wiki-fragment=\"\">Arc 3 - 15 - 14.11.25</a></td>\n<td align=\"center\"><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 17 - 20.12.25\" class=\"internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 17 - 20.12.25\" data-wiki-fragment=\"\">Arc 3 - 17 - 20.12.25</a></td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
