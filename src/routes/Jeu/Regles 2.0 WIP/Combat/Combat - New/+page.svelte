<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Combat - New"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Combat - New"}</h1>
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
		<h2 id="pendant-son-tour">{@html "Pendant son tour"}</h2>
	{@html "<p>Au début de son tour, le joueur prends en compte tous les effets qui lui sont appliqués.</p>\n<p>Ensuite il peut faire plusieurs choses :</p>\n<ul><li>Déplacement</li><li>Action</li><li>Action Bonus (s'il en possède une, doit être prise après l'Action)</li></ul>"}
	{@render dplacement()}
	{@render action()}
	{@render actionBonus()}
	</section>
{/snippet}

{#snippet dplacement()}
	<section>
		<h3 id="dplacement">{@html "Déplacement"}</h3>
	{@html "<p>La distance de déplacement maximale est définie par la Race de la créature.<br>\nVient ensuite s'ajouter son Modificateur de Dextérité(Acrobatie).<br>\nEnsuite les effets spéciaux s'ajoutent (Enchantement, Potion, Magie, ..)</p>"}

	</section>
{/snippet}

{#snippet action()}
	<section>
		<h3 id="action">{@html "Action"}</h3>
	{@html "<ul><li>Attaquer</li><li>Lancer un sort</li><li>Se concentrer</li><li>Utiliser un objet, Chercher, Se préparer</li></ul>"}
	{@render attaquer_LancerUnSort()}
	{@render seConcentrer()}
	</section>
{/snippet}

{#snippet attaquer_LancerUnSort()}
	<section>
		<h4 id="attaquer--lancer-un-sort">{@html "Attaquer & Lancer un sort"}</h4>
	{@html "<blockquote><code>Dés de combat >= AC --> HP - (DMG - DR)</code></blockquote>\n<p>Pour savoir si une action ciblant un ennemi le touche, le joueur doit lancer les dés liés à son action.<br>\nSi son jet atteint l'AC de la cible, il touche et peut déduire la DR de la cible de ses dégâts, avant de les appliquer sur le HP de la cible.<br>\nSi son attaque possède des propriétés supplémentaires, il doit les indiquer au MJ sur le moment (Dégâts magiques, huiles, enchantements, ..).</p>"}

	</section>
{/snippet}

{#snippet seConcentrer()}
	<section>
		<h4 id="se-concentrer">{@html "Se concentrer"}</h4>
	{@html "<blockquote>Besoin de tester ça.</blockquote>\n<p>Le joueur \"passe son tour\" pour une de ces 3 raisons :</p>\n<ul><li>son attaque touche au prochain tour,</li><li>il régénère 1d4 crystaux,</li><li>il retire des effets qui l'affecte.</li></ul>"}

	</section>
{/snippet}

{#snippet actionBonus()}
	<section>
		<h3 id="action-bonus">{@html "Action Bonus"}</h3>
	{@html "<ul><li>Analyser</li><li>Réaction</li><li>Utiliser un Token</li><li>WIP - Changer de posture (tant qu'aucune action n'a été prise)</li><li>Course (double les déplacements, empêche d'attaquer)</li><li>Esquive (augmente l'AC de 50%, désavantage aux dés de combat)</li><li>Discret (réduit les déplacements de moitié, perd l'attention des ennemis s'il sort de leur champs de vision)</li></ul>"}
	{@render analyser()}
	{@render raction()}
	</section>
{/snippet}

{#snippet analyser()}
	<section>
		<h4 id="analyser">{@html "Analyser"}</h4>
	{@html "<blockquote><code>1d20 + Perception(Observateur) >= DC</code></blockquote>\n<p>Choisissez une créature visible.<br>\nEffectuez <code>1d20 + Perception(Observateur)</code> contre une difficulté fixée par le MJ ou liée à la cible.<br>\nEn cas de réussite, la créature est <em>Analysée</em> jusqu'à la fin du combat.</p>"}

	</section>
{/snippet}

{#snippet raction()}
	<section>
		<h4 id="raction">{@html "Réaction"}</h4>
	{@html "<blockquote>Pendant le tour ennemi.</blockquote>\n<p>Certaines compétences permettent de réagir assez vite aux actions ennemies.</p>"}

	</section>
{/snippet}

{#snippet attaquesSpciales()}
	<section>
		<h2 id="attaques-spciales">{@html "Attaques spéciales"}</h2>
	{@html "<blockquote>Augmentent les dégâts de <code>1d10</code> et se jouent avec avantage.</blockquote>\n<ul><li>Attaque dans le dos,</li><li>attaque surprise,</li><li>attaque d'opportunité.</li></ul>\n<p>Une attaque critique ne touche pas forcément, mais ses dégâts sont toujours maximum.</p>"}

	</section>
{/snippet}

{#snippet pendantLeTourDesEnnemi__Wip()}
	<section>
		<h2 id="pendant-le-tour-des-ennemi---wip">{@html "Pendant le tour des ennemi - WIP"}</h2>
	{@html "<p>Au début du tour des ennemis, le MJ prend en compte tous les effets qui leur sont appliqués.<br>\nEnsuite il agit pour chaque ennemi.</p>\n<p>Lorsqu'un ennemi s'en prend à lui, le joueur peut choisir (ou pas) de faire une seule chose s'il n'a encore rien fait :</p>\n<ul><li>utiliser sa Réaction s'il n'a pas utilisé son Action Bonus pendant son tour,</li><li>tourner son personnage (ex: pour éviter une attaque dans le dos),</li><li>échanger sa place avec un allié voisin (< 2m).</li></ul>\n<pre><code class=\"language-Exemple\">Ennemi 1 m'attaque mais je ne fais rien.\nEnnemi 2 m'attaque et je me retourne pour ne pas lui montrer mon dos.\nMaintenant je ne peux plus rien faire jusqu'à mon tour.</code></pre>"}

	</section>
{/snippet}
