<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "rgles-hrp",
          "text": "Règles HRP",
          "level": 2
      },
      {
          "id": "points-dinspiration---relancer-un-d-de-son-choix",
          "text": "Points d'inspiration -> Relancer un dé de son choix",
          "level": 2
      },
      {
          "id": "prparation-du-monde",
          "text": "Préparation du monde",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"00a. 13-06-26"}</title>
  <meta name="description" content={"Discussion autour du JDR en général pour comprendre l'expérience globale que tout le monde souhaite. Règles HRP Que fait-on d'un personnage lorsque son joueur est absent ? Minimum 2 joueurs pour…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"00a. 13-06-26"} />
  <meta property="og:description" content={"Discussion autour du JDR en général pour comprendre l'expérience globale que tout le monde souhaite. Règles HRP Que fait-on d'un personnage lorsque son joueur est absent ? Minimum 2 joueurs pour…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"00a. 13-06-26"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<blockquote dir=\"auto\">\n<p>Discussion autour du JDR en général pour comprendre l'expérience globale que tout le monde souhaite.</p>\n</blockquote>\n<h2 data-heading=\"Règles HRP\" dir=\"auto\" id=\"rgles-hrp\">Règles HRP</h2>\n<ul>\n<li dir=\"auto\">Que fait-on d'un personnage lorsque son joueur est absent ?\n<ul>\n<li dir=\"auto\">Minimum 2 joueurs pour avancer, on trouve un prétexte RP\n<ul>\n<li dir=\"auto\">Caravane</li>\n</ul>\n</li>\n</ul>\n</li>\n<li dir=\"auto\">Gsm pendant le jeu ?\n<ul>\n<li dir=\"auto\">On fait confiance et les joueurs se mettent en Do Not Disturb</li>\n</ul>\n</li>\n<li dir=\"auto\">Joueurs invités en one-shot ?\n<ul>\n<li dir=\"auto\">Pourquoi pas</li>\n</ul>\n</li>\n<li dir=\"auto\">Blagues hors RP/ références de memes et autres ?\n<ul>\n<li dir=\"auto\">On peut tenter une session fulle sérieux, mais il faudra sûrement faire des pauses mentales par moment</li>\n<li dir=\"auto\">Sérieux = 0 &amp; Fun = 10 -&gt; Les attentes sont 3-4</li>\n</ul>\n</li>\n<li dir=\"auto\">Qui prend des notes ? (elles seront retranscrites sur Obsidian pour tout le monde après)\n<ul>\n<li dir=\"auto\">Diego ?</li>\n</ul>\n</li>\n<li dir=\"auto\">Qui gère les ressources du groupe (matériaux, richesses, nourriture, ..) ?</li>\n<li dir=\"auto\">Qui est cartographe ?</li>\n<li dir=\"auto\">Malus de groupe ou malus ciblé ?\n<ul>\n<li dir=\"auto\">Epée de Damocles sur le joueur, et le MJ choisir à quel moment de la session il lui met son désavantage</li>\n</ul>\n</li>\n</ul>\n<h2 data-heading=\"Points d'inspiration -&gt; Relancer un dé de son choix\" dir=\"auto\" id=\"points-dinspiration---relancer-un-d-de-son-choix\">Points d'inspiration -&gt; Relancer un dé de son choix</h2>\n<blockquote dir=\"auto\">\n<p>Seulement pour des actions RP, sinon ça va forcer à sucer le mj<br>\nSeul le mj doit être au courant pour ne pas que les joueurs agissent d'une façon spécifique à en avoir</p>\n</blockquote>\n<ul>\n<li dir=\"auto\">\n<p>interaction forte,</p>\n</li>\n<li dir=\"auto\">\n<p>résolution créative,</p>\n</li>\n<li dir=\"auto\">\n<p>sacrifice cohérent,</p>\n</li>\n<li dir=\"auto\">\n<p>développement de relation,</p>\n</li>\n<li dir=\"auto\">\n<p>prise de risque,</p>\n</li>\n<li dir=\"auto\">\n<p>Le groupe entier gagne quelque chose si :</p>\n<ul>\n<li dir=\"auto\">objectif de session atteint,</li>\n<li dir=\"auto\">excellent RP collectif.</li>\n</ul>\n</li>\n</ul>\n<h2 data-heading=\"Préparation du monde\" dir=\"auto\" id=\"prparation-du-monde\">Préparation du monde</h2>\n<ul>\n<li dir=\"auto\">Meilleur souvenir de JDR ?<br>\nDiego : Challenge (arène sans arme ni magie), être privé de ses affaires et devoir se débrouiller<br>\nLoïc : Ambiance Horreur super immersive<br>\nMichel : Voir Diego se voler tout seul + Session solo, connaître des pnjs<br>\nThomas : Interaction avec PJ/PNJ qui développent les relations</li>\n<li dir=\"auto\">Qu'est-ce que vous avez envie de réaliser dans cette campagne ?</li>\n<li dir=\"auto\">Heoric/ Light/ Dark Fantasy ?\n<ul>\n<li dir=\"auto\">Ca dépend de la région, aucune envie particulière</li>\n</ul>\n</li>\n<li dir=\"auto\">Politique/ Philosophie/ Religions/ Guerres/ Gestion des villes/ Commerce/ Travaux de l'ombre/ ... ?\n<ul>\n<li dir=\"auto\">Guerre car ça touche à tout (politique, commerce, voyages et quêtes, rencontres, ..)</li>\n</ul>\n</li>\n<li dir=\"auto\">Difficulté ? (Est-ce que vous êtes des humains qui peuvent mourir en 1 coup ou on reste dans le côté fantasy)</li>\n<li dir=\"auto\">Complexité ? (Règles de combat, armure et armes, mini-jeux d'apprentissage, ..)</li>\n<li dir=\"auto\">Combat stratégique et lent ou rapide et chaotique ?\n<ul>\n<li dir=\"auto\">D,L,M : Combat avec des règles strictes ou chacun peut agir sans poser des questions au MJ</li>\n<li dir=\"auto\">T : Combat sans trop de calculs pour rester scénaristique</li>\n</ul>\n</li>\n<li dir=\"auto\">Combat et mini-jeux via gsm pour automatiser les règles ?\n<ul>\n<li dir=\"auto\">Peut être pratique mais ça risque de briser le côté social -&gt; Il vaut mieux que le système ne soit pas complexe au point de nécessiter un gsm</li>\n</ul>\n</li>\n<li dir=\"auto\">Quel continent vous intéresse pour débuter l'histoire ?\n<ul>\n<li dir=\"auto\">Kothula</li>\n</ul>\n</li>\n<li dir=\"auto\">Ils commenceront lvl 1, donc ils n'auront probablement pas de magie</li>\n</ul>"}
  </div>
</article>

<LinkPreview />
