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
          "id": "pendant-le-tour-dun-ennemi",
          "text": "Pendant le tour d'un ennemi",
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
		{@render pendantLeTourDunEnnemi()}
  </div>
</article>

<LinkPreview />

{#snippet pendantSonTour()}
	<section>
		<h2 id="pendant-son-tour">{@html applyBase("Pendant son tour")}</h2>
	{@html renderMarkdown("\r\nAu début de son tour, le joueur prends en compte tous les effets qui lui sont appliqués.\r\nEnsuite il peut faire plusieurs choses :\r\n- Déplacement\r\n- Action\r\n- Action Bonus (s'il en possède une)\r\n\r")}
	{@render dplacement()}
	{@render action()}
	{@render actionBonus()}
	</section>
{/snippet}

{#snippet dplacement()}
	<section>
		<h3 id="dplacement">{@html applyBase("Déplacement")}</h3>
	{@html renderMarkdown("\r\nLa distance de déplacement maximale est définie par la Race de la créature.\r\nVient ensuite s'ajouter son Modificateur de Dextérité(Acrobatie).\r\nEnsuite les effets spéciaux s'ajoutent (Enchantement, Potion, Magie, ..)\r\n\r")}

	</section>
{/snippet}

{#snippet action()}
	<section>
		<h3 id="action">{@html applyBase("Action")}</h3>
	{@html renderMarkdown("\r\n- Attaquer\r\n- Lancer un sort\r\n- Se concentrer\r\n- Utiliser un objet, Chercher, Se préparer\r\n\r")}
	{@render attaquer_LancerUnSort()}
	{@render seConcentrer()}
	</section>
{/snippet}

{#snippet attaquer_LancerUnSort()}
	<section>
		<h4 id="attaquer--lancer-un-sort">{@html applyBase("Attaquer & Lancer un sort")}</h4>
	{@html renderMarkdown("> Dés de combat >= AC --> HP - (DMG - DR)\r\n\r\nPour savoir si une action ciblant un ennemi le touche, le joueur doit lancer les dés liés à son action.\r\nSi son jet atteint l'AC de la cible, il touche et peut déduire la DR de la cible de ses dégâts, avant de les appliquer sur le HP de la cible.\r\nSi son attaque possède des propriétés supplémentaires, il doit les indiquer au MJ sur le moment (Dégâts magiques, huiles, enchantements, ..).\r\n\r")}

	</section>
{/snippet}

{#snippet seConcentrer()}
	<section>
		<h4 id="se-concentrer">{@html applyBase("Se concentrer")}</h4>
	{@html renderMarkdown("> Besoin de tester ça.\r\n\r\nLe joueur \"passe son tour\" pour une de ces 3 raisons :\r\n- son attaque touche au prochain tour,\r\n- il régénère 1d4 crystaux,\r\n- il retire des effets qui l'affecte.\r\n\r")}

	</section>
{/snippet}

{#snippet actionBonus()}
	<section>
		<h3 id="action-bonus">{@html applyBase("Action Bonus")}</h3>
	{@html renderMarkdown("\r\n- Utiliser un Token\r\n- Changer de posture (tant qu'aucune action n'a été prise)\r\n\t- Course (double les déplacements, empêche d'attaquer)\r\n\t- Esquive (augmente l'AC de 50%, désavantage aux dés de combat)\r\n\t- Discret (réduit les déplacements de moitié, perd l'attention des ennemis s'il sort de leur champs de vision)\r\n\r")}

	</section>
{/snippet}

{#snippet dsDespoirDePeurEtTokens()}
	<section>
		<h2 id="ds-despoir-de-peur-et-tokens">{@html applyBase("Dés d'Espoir, de Peur et Tokens")}</h2>
	{@html renderMarkdown("\r\nLes dés de combats sont toujours doubles (contrairement au dé d'Attributs -qui ne ciblent personne- et utilise 1 dé).\r\nParmi ces 2 dés, le joueur choisit un dé d'Espoir et un dé de Peur.\r\n\r\n- Si le dé d'Espoir est plus élevé que le dé de Peur, le joueur gagne 1 Token\r\n\t- A l'inverse, le Maître du Jeu gagne 1 Token\r\n- Si le joueur obtient le même nombre sur les 2 dés, il gagne 1 Token\r\n- Le maître du Jeu gagne 1 Token à chaque fois qu'un joueur fait un échec critique (même avec des dés d'Attributs)\r\n\r\nLes Tokens des joueurs sont conservés entre les sessions.\r\n\tCe n'est pas le cas pour les Tokens du Maître du Jeu qui recommence chaque session avec autant de Tokens qu'il y a de joueurs.\r\n\r")}
	{@render utilisation()}
	</section>
{/snippet}

{#snippet utilisation()}
	<section>
		<h3 id="utilisation">{@html applyBase("Utilisation")}</h3>
	{@html renderMarkdown("\r\n| Pour les joueurs                                   | Coût         |     | Coût |                           Pour le MJ |\r\n| -------------------------------------------------- | ------------ | :-: | ---: | -----------------------------------: |\r\n| Aider un allié (lui donne +1d6 à son prochain jet) | 1            |     |    1 | Activer des dangers environnementaux |\r\n| Compétences spéciales                              | ?            |     |    ? |    Compétences spéciales des ennemis |\r\n| Evite le comas et tombe à 5 HP                     | 3            |     |    1 |                  Ajouter des ennemis |\r\n| Interrompre le MJ                                  | 1 par joueur |     |    2 |                Interrompre un joueur |\r\n\r")}

	</section>
{/snippet}

{#snippet pendantLeTourDunEnnemi()}
	<section>
		<h2 id="pendant-le-tour-dun-ennemi">{@html applyBase("Pendant le tour d'un ennemi")}</h2>
	{@html renderMarkdown("\r\nAu début de son tour, l'ennemi prends en compte tous les effets qui lui sont appliqués.")}

	</section>
{/snippet}
