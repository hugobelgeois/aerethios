<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

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
  <title>00a. 13-06-26</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>00a. 13-06-26</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render rglesHrp()}
		{@render pointsDinspiration__RelancerUnDDeSonChoix()}
		{@render prparationDuMonde()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("> Discussion autour du JDR en général pour comprendre l'expérience globale que tout le monde souhaite.\n")}
{/snippet}

{#snippet rglesHrp()}
	<section>
		<h2 id="rgles-hrp">Règles HRP</h2>
	{@html renderMarkdown("- Que fait-on d'un personnage lorsque son joueur est absent ?\n\t- Minimum 2 joueurs pour avancer, on trouve un prétexte RP\n\t\t- Caravane\n- Gsm pendant le jeu ?\n\t- On fait confiance et les joueurs se mettent en Do Not Disturb\n- Joueurs invités en one-shot ?\n\t- Pourquoi pas\n- Blagues hors RP/ références de memes et autres ?\n\t- On peut tenter une session fulle sérieux, mais il faudra sûrement faire des pauses mentales par moment\n\t- Sérieux = 0 & Fun = 10 -> Les attentes sont 3-4\n- Qui prend des notes ? (elles seront retranscrites sur Obsidian pour tout le monde après)\n\t- Diego ?\n- Qui gère les ressources du groupe (matériaux, richesses, nourriture, ..) ?\n- Qui est cartographe ?\n- Malus de groupe ou malus ciblé ?\n\t- Epée de Damocles sur le joueur, et le MJ choisir à quel moment de la session il lui met son désavantage\n")}

	</section>
{/snippet}

{#snippet pointsDinspiration__RelancerUnDDeSonChoix()}
	<section>
		<h2 id="points-dinspiration---relancer-un-d-de-son-choix">Points d'inspiration -> Relancer un dé de son choix</h2>
	{@html renderMarkdown("> Seulement pour des actions RP, sinon ça va forcer à sucer le mj\n> Seul le mj doit être au courant pour ne pas que les joueurs agissent d'une façon spécifique à en avoir\n- interaction forte,\n- résolution créative,\n- sacrifice cohérent,\n- développement de relation,\n- prise de risque,\n\n- Le groupe entier gagne quelque chose si :\n    - objectif de session atteint,\n    - excellent RP collectif.\n")}

	</section>
{/snippet}

{#snippet prparationDuMonde()}
	<section>
		<h2 id="prparation-du-monde">Préparation du monde</h2>
	{@html renderMarkdown("- Meilleur souvenir de JDR ?\n\tDiego : Challenge (arène sans arme ni magie), être privé de ses affaires et devoir se débrouiller\n\tLoïc : Ambiance Horreur super immersive\n\tMichel : Voir Diego se voler tout seul + Session solo, connaître des pnjs\n\tThomas : Interaction avec PJ/PNJ qui développent les relations\n- Qu'est-ce que vous avez envie de réaliser dans cette campagne ?\n- Heoric/ Light/ Dark Fantasy ?\n\t- Ca dépend de la région, aucune envie particulière\n- Politique/ Philosophie/ Religions/ Guerres/ Gestion des villes/ Commerce/ Travaux de l'ombre/ ... ?\n\t- Guerre car ça touche à tout (politique, commerce, voyages et quêtes, rencontres, ..)\n- Difficulté ? (Est-ce que vous êtes des humains qui peuvent mourir en 1 coup ou on reste dans le côté fantasy)\n- Complexité ? (Règles de combat, armure et armes, mini-jeux d'apprentissage, ..)\n- Combat stratégique et lent ou rapide et chaotique ?\n\t- D,L,M : Combat avec des règles strictes ou chacun peut agir sans poser des questions au MJ\n\t- T : Combat sans trop de calculs pour rester scénaristique\n- Combat et mini-jeux via gsm pour automatiser les règles ?\n\t- Peut être pratique mais ça risque de briser le côté social -> Il vaut mieux que le système ne soit pas complexe au point de nécessiter un gsm\n- Quel continent vous intéresse pour débuter l'histoire ?\n\t- Kothula\n- Ils commenceront lvl 1, donc ils n'auront probablement pas de magie")}

	</section>
{/snippet}
