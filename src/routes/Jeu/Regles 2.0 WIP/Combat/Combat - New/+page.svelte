<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

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
          "id": "ds-despoir-de-peur-et-tokens",
          "text": "Dés d'Espoir, de Peur et Tokens",
          "level": 2
      },
      {
          "id": "utilisation",
          "text": "Utilisation",
          "level": 3
      },
      {
          "id": "pendant-le-tour-dun-ennemi---wip",
          "text": "Pendant le tour d'un ennemi - WIP",
          "level": 2
      },
      {
          "id": "raction",
          "text": "Réaction",
          "level": 3
      },
      {
          "id": "attaques-spciales",
          "text": "Attaques spéciales",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Combat - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Combat - New</h1>
  </header>
  <div class="markdown-rendered">
		{@render pendantSonTour()}
		{@render dsDespoirDePeurEtTokens()}
		{@render pendantLeTourDunEnnemi__Wip()}
		{@render attaquesSpciales()}
  </div>
</article>

<LinkPreview />

{#snippet pendantSonTour()}
	<section>
		<h2 id="pendant-son-tour">{@html applyBase("Pendant son tour")}</h2>
	{@html renderMarkdown("\nAu début de son tour, le joueur prends en compte tous les effets qui lui sont appliqués.\n\nEnsuite il peut faire plusieurs choses :\n- Déplacement\n- Action\n- Action Bonus (s'il en possède une, doit être prise après l'Action)\n")}
	{@render dplacement()}
	{@render action()}
	{@render actionBonus()}
	</section>
{/snippet}

{#snippet dplacement()}
	<section>
		<h3 id="dplacement">{@html applyBase("Déplacement")}</h3>
	{@html renderMarkdown("\nLa distance de déplacement maximale est définie par la Race de la créature.\nVient ensuite s'ajouter son Modificateur de Dextérité(Acrobatie).\nEnsuite les effets spéciaux s'ajoutent (Enchantement, Potion, Magie, ..)\n")}

	</section>
{/snippet}

{#snippet action()}
	<section>
		<h3 id="action">{@html applyBase("Action")}</h3>
	{@html renderMarkdown("\n- Attaquer\n- Lancer un sort\n- Se concentrer\n- Utiliser un objet, Chercher, Se préparer\n")}
	{@render attaquer_LancerUnSort()}
	{@render seConcentrer()}
	</section>
{/snippet}

{#snippet attaquer_LancerUnSort()}
	<section>
		<h4 id="attaquer--lancer-un-sort">{@html applyBase("Attaquer & Lancer un sort")}</h4>
	{@html renderMarkdown("> `Dés de combat >= AC --> HP - (DMG - DR)`\n\nPour savoir si une action ciblant un ennemi le touche, le joueur doit lancer les dés liés à son action.\nSi son jet atteint l'AC de la cible, il touche et peut déduire la DR de la cible de ses dégâts, avant de les appliquer sur le HP de la cible.\nSi son attaque possède des propriétés supplémentaires, il doit les indiquer au MJ sur le moment (Dégâts magiques, huiles, enchantements, ..).\n")}

	</section>
{/snippet}

{#snippet seConcentrer()}
	<section>
		<h4 id="se-concentrer">{@html applyBase("Se concentrer")}</h4>
	{@html renderMarkdown("> Besoin de tester ça.\n\nLe joueur \"passe son tour\" pour une de ces 3 raisons :\n- son attaque touche au prochain tour,\n- il régénère 1d4 crystaux,\n- il retire des effets qui l'affecte.\n")}

	</section>
{/snippet}

{#snippet actionBonus()}
	<section>
		<h3 id="action-bonus">{@html applyBase("Action Bonus")}</h3>
	{@html renderMarkdown("\n- Analyser\n- Utiliser un Token\n- Changer de posture (tant qu'aucune action n'a été prise)\n\t- Course (double les déplacements, empêche d'attaquer)\n\t- Esquive (augmente l'AC de 50%, désavantage aux dés de combat)\n\t- Discret (réduit les déplacements de moitié, perd l'attention des ennemis s'il sort de leur champs de vision)\n")}
	{@render analyser()}
	</section>
{/snippet}

{#snippet analyser()}
	<section>
		<h4 id="analyser">{@html applyBase("Analyser")}</h4>
	{@html renderMarkdown("> `1d20 + Perception(Observateur) >= DC`\n\nChoisissez une créature visible.\nEffectuez `1d20 + Perception(Observateur)` contre une difficulté fixée par le MJ ou liée à la cible.\nEn cas de réussite, la créature est _Analysée_ jusqu'à la fin du combat.\n")}

	</section>
{/snippet}

{#snippet dsDespoirDePeurEtTokens()}
	<section>
		<h2 id="ds-despoir-de-peur-et-tokens">{@html applyBase("Dés d'Espoir, de Peur et Tokens")}</h2>
	{@html renderMarkdown("\nLes dés de combats sont toujours doubles (contrairement au dé d'Attributs -qui ne ciblent personne- et utilise 1 dé).\nParmi ces 2 dés, le joueur choisit un dé d'Espoir et un dé de Peur.\n\n- Si le dé d'Espoir est plus élevé que le dé de Peur, le joueur gagne 1 Token\n\t- A l'inverse, le Maître du Jeu gagne 1 Token\n- Si le joueur obtient le même nombre sur les 2 dés, il gagne 1 Token\n- Le maître du Jeu gagne 1 Token à chaque fois qu'un joueur fait un échec critique (même avec des dés d'Attributs)\n\nLes Tokens des joueurs sont conservés entre les sessions.\n\tCe n'est pas le cas pour les Tokens du Maître du Jeu qui recommence chaque session avec autant de Tokens qu'il y a de joueurs.\n")}
	{@render utilisation()}
	</section>
{/snippet}

{#snippet utilisation()}
	<section>
		<h3 id="utilisation">{@html applyBase("Utilisation")}</h3>
	{@html renderMarkdown("\n| Pour les joueurs                                   | Coût         |     | Coût |                           Pour le MJ |\n| -------------------------------------------------- | ------------ | :-: | ---: | -----------------------------------: |\n| Aider un allié (lui donne +1d6 à son prochain jet) | 1            |     |    1 | Activer des dangers environnementaux |\n| Compétences spéciales                              | ?            |     |    ? |    Compétences spéciales des ennemis |\n| Evite le comas et tombe à 5 HP                     | 3            |     |    1 |                  Ajouter des ennemis |\n| Interrompre le MJ                                  | 1 par joueur |     |    2 |                Interrompre un joueur |\n")}

	</section>
{/snippet}

{#snippet pendantLeTourDunEnnemi__Wip()}
	<section>
		<h2 id="pendant-le-tour-dun-ennemi---wip">{@html applyBase("Pendant le tour d'un ennemi - WIP")}</h2>
	{@html renderMarkdown("\nAu début de son tour, l'ennemi prends en compte tous les effets qui lui sont appliqués.\nEnsuite il agit selon ses compétences.\n\nUne fois par tour, lorsqu'un ennemi agit contre un joueur, celui-ci peut utiliser une Réaction.\n")}
	{@render raction()}
	</section>
{/snippet}

{#snippet raction()}
	<section>
		<h3 id="raction">{@html applyBase("Réaction")}</h3>


	</section>
{/snippet}

{#snippet attaquesSpciales()}
	<section>
		<h2 id="attaques-spciales">{@html applyBase("Attaques spéciales")}</h2>
	{@html renderMarkdown("> Augmentent les dégâts (cumulable) de `1d10` et se jouent avec avantage.\n\n- Attaque dans le dos,\n- attaque surprise,\n- attaque d'opportunité.\n\nUne attaque critique ne touche pas forcément, mais ses dégâts sont toujours maximum.")}

	</section>
{/snippet}
