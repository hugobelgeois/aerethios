<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "cration-de-personnages",
          "text": "Création de personnages",
          "level": 2
      },
      {
          "id": "tape-0--inspiration",
          "text": "Étape 0 : Inspiration",
          "level": 3
      },
      {
          "id": "tape-1--identit",
          "text": "Étape 1 : Identité",
          "level": 3
      },
      {
          "id": "tape-2--relations",
          "text": "Étape 2 : Relations",
          "level": 3
      },
      {
          "id": "tape-3--monde",
          "text": "Étape 3 : Monde",
          "level": 3
      },
      {
          "id": "tape-4--intrigues",
          "text": "Étape 4 : Intrigues",
          "level": 3
      },
      {
          "id": "tape-5--ensemble-autour-de-la-table",
          "text": "Étape 5 : Ensemble autour de la table",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"00b. xx-xx-26"}</title>
  <meta name="description" content={"Création des personnages pour leur donner du contenu autour duquel du scénario peut se développer. Création de personnages Étape 0 : Inspiration Quel personnage existant de n'importe quel média…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"00b. xx-xx-26"} />
  <meta property="og:description" content={"Création des personnages pour leur donner du contenu autour duquel du scénario peut se développer. Création de personnages Étape 0 : Inspiration Quel personnage existant de n'importe quel média…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"00b. xx-xx-26"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Création des personnages pour leur donner du contenu autour duquel du scénario peut se développer.</p>\n</blockquote>\n<h2 data-heading=\"Création de personnages\" dir=\"auto\" id=\"cration-de-personnages\">Création de personnages</h2>\n<h3 data-heading=\"Étape 0 : Inspiration\" dir=\"auto\" id=\"tape-0--inspiration\">Étape 0 : Inspiration</h3>\n<ul>\n<li dir=\"auto\">Quel personnage existant de n'importe quel média t'inspire</li>\n<li dir=\"auto\">Quel musique d'ambiance (sans/ peu de paroles) représente ton personnage</li>\n<li dir=\"auto\">Quel est LE trait de caractère qui peut représenter à lui seul ton personnage (un extrême peut faciliter le RP)\n<ul>\n<li dir=\"auto\">Ex : une voix, un accent, une émotion, ...</li>\n</ul>\n</li>\n</ul>\n<h3 data-heading=\"Étape 1 : Identité\" dir=\"auto\" id=\"tape-1--identit\">Étape 1 : Identité</h3>\n<ul>\n<li dir=\"auto\">D'où viens-tu (Kothula, Ovliin, Nirina, Suraja)\n<ul>\n<li dir=\"auto\">Si c'est ailleurs que Kothula, pourquoi as-tu voyagé jusque là (fuite, voyage, immigration, aventures, ..)</li>\n</ul>\n</li>\n<li dir=\"auto\">Quel âge as-tu\n<ul>\n<li dir=\"auto\">As-tu fait des études ou as-tu directement travaillé (<a data-tooltip-position=\"top\" aria-label=\"Apprentissages - New\" href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" class=\"internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" data-wiki-fragment=\"\">voir les métiers</a>)</li>\n</ul>\n</li>\n<li dir=\"auto\">Quel est ton statut social (économies &amp; réputation locale)</li>\n<li dir=\"auto\">Quel sont tes objectifs actuels (court et long terme)\n<ul>\n<li dir=\"auto\">Quelle est ta plus grande fierté</li>\n<li dir=\"auto\">Quelle est ta plus grande honte</li>\n</ul>\n</li>\n<li dir=\"auto\">Que refuses-tu de faire\n<ul>\n<li dir=\"auto\">Quelle sont tes phobies</li>\n</ul>\n</li>\n<li dir=\"auto\">Quel est ton plus grand mensonge</li>\n</ul>\n<h3 data-heading=\"Étape 2 : Relations\" dir=\"auto\" id=\"tape-2--relations\">Étape 2 : Relations</h3>\n<ul>\n<li dir=\"auto\">As tu des proches (parents, partenaire, enfants, amis, ..)\n<ul>\n<li dir=\"auto\">Leur statut (vivant, quel continent/ville, actif dans la société, métier, ..)</li>\n<li dir=\"auto\">Sous quelle occasion pourrait-on les croiser</li>\n<li dir=\"auto\">Est-ce qu'ils te manquent et inversement</li>\n</ul>\n</li>\n<li dir=\"auto\">À qui dois-tu une dette</li>\n<li dir=\"auto\">Quel personnage que tu as rencontré/ entendu parler t'a marqué et pour quelle raison</li>\n<li dir=\"auto\">As-tu fait des promesses, possèdes-tu des objets qui sont précieux pour quelqu'un d'autre</li>\n</ul>\n<h3 data-heading=\"Étape 3 : Monde\" dir=\"auto\" id=\"tape-3--monde\">Étape 3 : Monde</h3>\n<ul>\n<li dir=\"auto\">Quel lieu de ton enfance existe encore</li>\n<li dir=\"auto\">Quel lieu a disparu/ été grandement modifié\n<ul>\n<li dir=\"auto\">Par quoi, pour quelle raison</li>\n</ul>\n</li>\n<li dir=\"auto\">Dans quel groupe/ organisation as-tu travaillé/ étudié\n<ul>\n<li dir=\"auto\">A-t'il eu des conflits avec un autre groupe</li>\n</ul>\n</li>\n<li dir=\"auto\">A quel événement incroyable du monde as-tu assisté (procession d'un Doigt, bénédiction d'un dieu, destruction/ édification d'un bâtiment historique, ..)\n<ul>\n<li dir=\"auto\">Comment cela t'a-t-il impacté</li>\n</ul>\n</li>\n</ul>\n<h3 data-heading=\"Étape 4 : Intrigues\" dir=\"auto\" id=\"tape-4--intrigues\">Étape 4 : Intrigues</h3>\n<ul>\n<li dir=\"auto\">Quel secret connais-tu ?\n<ul>\n<li dir=\"auto\">Qui voudrait t'empêcher de le révéler</li>\n<li dir=\"auto\">Que risques-tu si la vérité éclate</li>\n</ul>\n</li>\n<li dir=\"auto\">Quelle rumeur as-tu entendu</li>\n</ul>\n<h3 data-heading=\"Étape 5 : Ensemble autour de la table\" dir=\"auto\" id=\"tape-5--ensemble-autour-de-la-table\">Étape 5 : Ensemble autour de la table</h3>\n<ul>\n<li dir=\"auto\">Je leur attribue à tous un numéro, et je leur distribue un papier avec le numéro d'un autre joueur\n<ul>\n<li dir=\"auto\">Raconter une histoire courte où le joueur sélectionné vous a aidé</li>\n<li dir=\"auto\">Raconter une histoire courte où vous avez mis le joueur sélectionné dans la merde</li>\n<li dir=\"auto\">Raconter une rumeur (vraie ou fausse) sur vous et la donner au joueur sélectionné</li>\n</ul>\n</li>\n<li dir=\"auto\">Quelles sont vos relations\n<ul>\n<li dir=\"auto\">Qui t'inspire confiance</li>\n<li dir=\"auto\">Qui t'inquiète</li>\n</ul>\n</li>\n<li dir=\"auto\">Pourquoi restez-vous ensemble ?</li>\n<li dir=\"auto\">Votre groupe a-t'il des missions ou des problèmes actuellement ?</li>\n<li dir=\"auto\">Quelle est la dernière mission que vous avez faite ?</li>\n</ul>")}
  </div>
</article>

<LinkPreview />
