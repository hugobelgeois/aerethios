<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "pendant-son-tour",
          "text": "Pendant son tour",
          "level": 2
      },
      {
          "id": "dplacement",
          "text": "Déplacement",
          "level": 3
      },
      {
          "id": "action",
          "text": "Action",
          "level": 3
      },
      {
          "id": "attaquer--lancer-un-sort",
          "text": "Attaquer & Lancer un sort",
          "level": 4
      },
      {
          "id": "se-concentrer",
          "text": "Se concentrer",
          "level": 4
      },
      {
          "id": "action-bonus",
          "text": "Action Bonus",
          "level": 3
      },
      {
          "id": "analyser",
          "text": "Analyser",
          "level": 4
      },
      {
          "id": "raction",
          "text": "Réaction",
          "level": 4
      },
      {
          "id": "attaques-spciales",
          "text": "Attaques spéciales",
          "level": 2
      },
      {
          "id": "pendant-le-tour-des-ennemi---wip",
          "text": "Pendant le tour des ennemi - WIP",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Combat - New"}</title>
  <meta name="description" content={"Pendant son tour Au début de son tour, le joueur prends en compte tous les effets qui lui sont appliqués. Ensuite il peut faire plusieurs choses : Déplacement Action Action Bonus (s'il en possède…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Combat - New"} />
  <meta property="og:description" content={"Pendant son tour Au début de son tour, le joueur prends en compte tous les effets qui lui sont appliqués. Ensuite il peut faire plusieurs choses : Déplacement Action Action Bonus (s'il en possède…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Combat - New"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h2 data-heading=\"Pendant son tour\" dir=\"auto\" id=\"pendant-son-tour\">Pendant son tour</h2>\n<p dir=\"auto\">Au début de son tour, le joueur prends en compte tous les effets qui lui sont appliqués.</p>\n<p dir=\"auto\">Ensuite il peut faire plusieurs choses :</p>\n<ul>\n<li dir=\"auto\">Déplacement</li>\n<li dir=\"auto\">Action</li>\n<li dir=\"auto\">Action Bonus (s'il en possède une, doit être prise après l'Action)</li>\n</ul>\n<h3 data-heading=\"Déplacement\" dir=\"auto\" id=\"dplacement\">Déplacement</h3>\n<p dir=\"auto\">La distance de déplacement maximale est définie par la Race de la créature.<br>\nVient ensuite s'ajouter son Modificateur de Dextérité(Acrobatie).<br>\nEnsuite les effets spéciaux s'ajoutent (Enchantement, Potion, Magie, ..)</p>\n<h3 data-heading=\"Action\" dir=\"auto\" id=\"action\">Action</h3>\n<ul>\n<li dir=\"auto\">Attaquer</li>\n<li dir=\"auto\">Lancer un sort</li>\n<li dir=\"auto\">Se concentrer</li>\n<li dir=\"auto\">Utiliser un objet, Chercher, Se préparer</li>\n</ul>\n<h4 data-heading=\"Attaquer &amp; Lancer un sort\" dir=\"auto\" id=\"attaquer--lancer-un-sort\">Attaquer &amp; Lancer un sort</h4>\n<blockquote dir=\"auto\">\n<p><code>Dés de combat &gt;= AC --&gt; HP - (DMG - DR)</code></p>\n</blockquote>\n<p dir=\"auto\">Pour savoir si une action ciblant un ennemi le touche, le joueur doit lancer les dés liés à son action.<br>\nSi son jet atteint l'AC de la cible, il touche et peut déduire la DR de la cible de ses dégâts, avant de les appliquer sur le HP de la cible.<br>\nSi son attaque possède des propriétés supplémentaires, il doit les indiquer au MJ sur le moment (Dégâts magiques, huiles, enchantements, ..).</p>\n<h4 data-heading=\"Se concentrer\" dir=\"auto\" id=\"se-concentrer\">Se concentrer</h4>\n<blockquote dir=\"auto\">\n<p>Besoin de tester ça.</p>\n</blockquote>\n<p dir=\"auto\">Le joueur \"passe son tour\" pour une de ces 3 raisons :</p>\n<ul>\n<li dir=\"auto\">son attaque touche au prochain tour,</li>\n<li dir=\"auto\">il régénère 1d4 crystaux,</li>\n<li dir=\"auto\">il retire des effets qui l'affecte.</li>\n</ul>\n<h3 data-heading=\"Action Bonus\" dir=\"auto\" id=\"action-bonus\">Action Bonus</h3>\n<ul>\n<li dir=\"auto\">Analyser</li>\n<li dir=\"auto\">Réaction</li>\n<li dir=\"auto\">Utiliser un Token</li>\n<li dir=\"auto\">WIP - Changer de posture (tant qu'aucune action n'a été prise)\n<ul>\n<li dir=\"auto\">Course (double les déplacements, empêche d'attaquer)</li>\n<li dir=\"auto\">Esquive (augmente l'AC de 50%, désavantage aux dés de combat)</li>\n<li dir=\"auto\">Discret (réduit les déplacements de moitié, perd l'attention des ennemis s'il sort de leur champs de vision)</li>\n</ul>\n</li>\n</ul>\n<h4 data-heading=\"Analyser\" dir=\"auto\" id=\"analyser\">Analyser</h4>\n<blockquote dir=\"auto\">\n<p><code>1d20 + Perception(Observateur) &gt;= DC</code></p>\n</blockquote>\n<p dir=\"auto\">Choisissez une créature visible.<br>\nEffectuez <code>1d20 + Perception(Observateur)</code> contre une difficulté fixée par le MJ ou liée à la cible.<br>\nEn cas de réussite, la créature est <em>Analysée</em> jusqu'à la fin du combat.</p>\n<h4 data-heading=\"Réaction\" dir=\"auto\" id=\"raction\">Réaction</h4>\n<blockquote dir=\"auto\">\n<p>Pendant le tour ennemi.</p>\n</blockquote>\n<p dir=\"auto\">Certaines compétences permettent de réagir assez vite aux actions ennemies.</p>\n<h2 data-heading=\"Attaques spéciales\" dir=\"auto\" id=\"attaques-spciales\">Attaques spéciales</h2>\n<blockquote dir=\"auto\">\n<p>Augmentent les dégâts de <code>1d10</code> et se jouent avec avantage.</p>\n</blockquote>\n<ul>\n<li dir=\"auto\">Attaque dans le dos,</li>\n<li dir=\"auto\">attaque surprise,</li>\n<li dir=\"auto\">attaque d'opportunité.</li>\n</ul>\n<p dir=\"auto\">Une attaque critique ne touche pas forcément, mais ses dégâts sont toujours maximum.</p>\n<h2 data-heading=\"Pendant le tour des ennemi - WIP\" dir=\"auto\" id=\"pendant-le-tour-des-ennemi---wip\">Pendant le tour des ennemi - WIP</h2>\n<p dir=\"auto\">Au début du tour des ennemis, le MJ prend en compte tous les effets qui leur sont appliqués.<br>\nEnsuite il agit pour chaque ennemi.</p>\n<p dir=\"auto\">Lorsqu'un ennemi s'en prend à lui, le joueur peut choisir (ou pas) de faire une seule chose s'il n'a encore rien fait :</p>\n<ul>\n<li dir=\"auto\">utiliser sa Réaction s'il n'a pas utilisé son Action Bonus pendant son tour,</li>\n<li dir=\"auto\">tourner son personnage (ex: pour éviter une attaque dans le dos),</li>\n<li dir=\"auto\">échanger sa place avec un allié voisin (&lt; 2m).</li>\n</ul>\n<pre class=\"language-exemple\"><code class=\"language-exemple is-loaded\">Ennemi 1 m'attaque mais je ne fais rien.\nEnnemi 2 m'attaque et je me retourne pour ne pas lui montrer mon dos.\nMaintenant je ne peux plus rien faire jusqu'à mon tour.\n</code></pre>"}
  </div>
</article>

<LinkPreview />
