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
  <title>Combat - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Combat - New</h1>
  </header>
  <div class="markdown-rendered">
		{@render pendantSonTour()}
		{@render attaquesSpciales()}
		{@render pendantLeTourDesEnnemi__Wip()}
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
	{@html renderMarkdown("\n- Analyser\n- Réaction\n- Utiliser un Token\n- WIP - Changer de posture (tant qu'aucune action n'a été prise)\n\t- Course (double les déplacements, empêche d'attaquer)\n\t- Esquive (augmente l'AC de 50%, désavantage aux dés de combat)\n\t- Discret (réduit les déplacements de moitié, perd l'attention des ennemis s'il sort de leur champs de vision)\n")}
	{@render analyser()}
	{@render raction()}
	</section>
{/snippet}

{#snippet analyser()}
	<section>
		<h4 id="analyser">{@html applyBase("Analyser")}</h4>
	{@html renderMarkdown("> `1d20 + Perception(Observateur) >= DC`\n\nChoisissez une créature visible.\nEffectuez `1d20 + Perception(Observateur)` contre une difficulté fixée par le MJ ou liée à la cible.\nEn cas de réussite, la créature est _Analysée_ jusqu'à la fin du combat.\n")}

	</section>
{/snippet}

{#snippet raction()}
	<section>
		<h4 id="raction">{@html applyBase("Réaction")}</h4>
	{@html renderMarkdown("> Pendant le tour ennemi.\n\nCertaines compétences permettent de réagir assez vite aux actions ennemies.\n")}

	</section>
{/snippet}

{#snippet attaquesSpciales()}
	<section>
		<h2 id="attaques-spciales">{@html applyBase("Attaques spéciales")}</h2>
	{@html renderMarkdown("> Augmentent les dégâts de `1d10` et se jouent avec avantage.\n\n- Attaque dans le dos,\n- attaque surprise,\n- attaque d'opportunité.\n\nUne attaque critique ne touche pas forcément, mais ses dégâts sont toujours maximum.\n")}

	</section>
{/snippet}

{#snippet pendantLeTourDesEnnemi__Wip()}
	<section>
		<h2 id="pendant-le-tour-des-ennemi---wip">{@html applyBase("Pendant le tour des ennemi - WIP")}</h2>
	{@html renderMarkdown("\nAu début du tour des ennemis, le MJ prend en compte tous les effets qui leur sont appliqués.\nEnsuite il agit pour chaque ennemi.\n\nLorsqu'un ennemi s'en prend à lui, le joueur peut choisir (ou pas) de faire une seule chose s'il n'a encore rien fait :\n - utiliser sa Réaction s'il n'a pas utilisé son Action Bonus pendant son tour,\n - tourner son personnage (ex: pour éviter une attaque dans le dos),\n - échanger sa place avec un allié voisin (< 2m).\n\n```Exemple\nEnnemi 1 m'attaque mais je ne fais rien.\nEnnemi 2 m'attaque et je me retourne pour ne pas lui montrer mon dos.\nMaintenant je ne peux plus rien faire jusqu'à mon tour.\n```")}

	</section>
{/snippet}
