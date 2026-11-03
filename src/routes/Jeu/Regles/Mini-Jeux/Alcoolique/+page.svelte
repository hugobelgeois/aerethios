<script lang="ts">
  import { applyBase } from "$lib/basePath";
</script>

<svelte:head>
  <title>{"Alcoolique"}</title>
  <meta name="description" content={"Ce Mini-Jeux permet aux joueurs de se bourrer la gueule pour essayer d'obtenir des informations sans violence. Fonctionnement A chaque fois qu'une personne boit une boisson alcoolisée, elle jette un…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Alcoolique"} />
  <meta property="og:description" content={"Ce Mini-Jeux permet aux joueurs de se bourrer la gueule pour essayer d'obtenir des informations sans violence. Fonctionnement A chaque fois qu'une personne boit une boisson alcoolisée, elle jette un…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Alcoolique"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<blockquote dir=\"auto\">\n<p>Ce Mini-Jeux permet aux joueurs de se bourrer la gueule pour essayer d'obtenir des informations sans violence.</p>\n</blockquote>\n<h2 data-heading=\"Fonctionnement\" dir=\"auto\" id=\"fonctionnement\">Fonctionnement</h2>\n<p dir=\"auto\">A chaque fois qu'une personne boit une boisson alcoolisée, elle jette un dé pour connaître son taux d'alcoolémie.</p>\n<p dir=\"auto\">Ce taux va de 0 à 100.</p>\n<ul>\n<li dir=\"auto\">\n<p>Entre 0 et 50 :</p>\n<ul>\n<li dir=\"auto\">Rien de particulier ne se passe.</li>\n</ul>\n</li>\n<li dir=\"auto\">\n<p>Entre 51 et 80 :</p>\n<ul>\n<li dir=\"auto\">\n<p>On ne peut plus refuser quand on reçoit à boire,</p>\n</li>\n<li dir=\"auto\">\n<p>désavantages sur tous les jets.</p>\n</li>\n</ul>\n</li>\n<li dir=\"auto\">\n<p>Entre 81 et 100 :</p>\n<ul>\n<li dir=\"auto\">On divulgue une information \"intéressant\" sur soit après chaque verre.<br>\n<em>S'il s'agit d'un joueur, le MJ décide si l'information est suffisamment intéressante.</em></li>\n</ul>\n</li>\n<li dir=\"auto\">\n<p>Après 100 :</p>\n<ul>\n<li dir=\"auto\">\n<p>On ne peut plus rien tirer de la personne,</p>\n</li>\n<li dir=\"auto\">\n<p>le joueur doit lancer 1d6 pour savoir combien de pièces d'argent il a dépensé avant d'arrêter de boire.</p>\n</li>\n</ul>\n</li>\n</ul>\n<p dir=\"auto\">Le taux redescend à 0 après 8h de repos.</p>\n<h2 data-heading=\"Boissons\" dir=\"auto\" id=\"boissons\">Boissons</h2>\n<p dir=\"auto\">En fonction de la boisson consommée, le dé d'alcoolémie varie :</p>\n<ul>\n<li dir=\"auto\">\n<p><strong>bière</strong> = 1d6,</p>\n</li>\n<li dir=\"auto\">\n<p><strong>vin</strong> = 5 + 1d8,</p>\n</li>\n<li dir=\"auto\">\n<p><strong>spiritueux</strong> = 10 + 1d10.</p>\n</li>\n</ul>"}
  </div>
</article>
