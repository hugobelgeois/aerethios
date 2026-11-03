<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

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
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"00b. xx-xx-26"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render crationDePersonnages()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>Création des personnages pour leur donner du contenu autour duquel du scénario peut se développer.</blockquote>"}
{/snippet}

{#snippet crationDePersonnages()}
	<section>
		<h2 id="cration-de-personnages">{@html "Création de personnages"}</h2>

	{@render tape_0_Inspiration()}
	{@render tape_1_Identit()}
	{@render tape_2_Relations()}
	{@render tape_3_Monde()}
	{@render tape_4_Intrigues()}
	{@render tape_5_EnsembleAutourDeLaTable()}
	</section>
{/snippet}

{#snippet tape_0_Inspiration()}
	<section>
		<h3 id="tape-0--inspiration">{@html "Étape 0 : Inspiration"}</h3>
	{@html "<ul><li>Quel personnage existant de n'importe quel média t'inspire</li><li>Quel musique d'ambiance (sans/ peu de paroles) représente ton personnage</li><li>Quel est LE trait de caractère qui peut représenter à lui seul ton personnage (un extrême peut faciliter le RP)</li><li>Ex : une voix, un accent, une émotion, ...</li></ul>"}

	</section>
{/snippet}

{#snippet tape_1_Identit()}
	<section>
		<h3 id="tape-1--identit">{@html "Étape 1 : Identité"}</h3>
	{@html applyBase("<ul><li>D'où viens-tu (Kothula, Ovliin, Nirina, Suraja)</li><li>Si c'est ailleurs que Kothula, pourquoi as-tu voyagé jusque là (fuite, voyage, immigration, aventures, ..)</li><li>Quel âge as-tu</li><li>As-tu fait des études ou as-tu directement travaillé (<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" data-wiki-fragment=\"\">voir les métiers</a>)</li><li>Quel est ton statut social (économies & réputation locale)</li><li>Quel sont tes objectifs actuels (court et long terme)</li><li>Quelle est ta plus grande fierté</li><li>Quelle est ta plus grande honte</li><li>Que refuses-tu de faire</li><li>Quelle sont tes phobies</li><li>Quel est ton plus grand mensonge</li></ul>")}

	</section>
{/snippet}

{#snippet tape_2_Relations()}
	<section>
		<h3 id="tape-2--relations">{@html "Étape 2 : Relations"}</h3>
	{@html "<ul><li>As tu des proches (parents, partenaire, enfants, amis, ..)</li><li>Leur statut (vivant, quel continent/ville, actif dans la société, métier, ..)</li><li>Sous quelle occasion pourrait-on les croiser</li><li>Est-ce qu'ils te manquent et inversement</li><li>À qui dois-tu une dette</li><li>Quel personnage que tu as rencontré/ entendu parler t'a marqué et pour quelle raison</li><li>As-tu fait des promesses, possèdes-tu des objets qui sont précieux pour quelqu'un d'autre</li></ul>"}

	</section>
{/snippet}

{#snippet tape_3_Monde()}
	<section>
		<h3 id="tape-3--monde">{@html "Étape 3 : Monde"}</h3>
	{@html "<ul><li>Quel lieu de ton enfance existe encore</li><li>Quel lieu a disparu/ été grandement modifié</li><li>Par quoi, pour quelle raison</li><li>Dans quel groupe/ organisation as-tu travaillé/ étudié</li><li>A-t'il eu des conflits avec un autre groupe</li><li>A quel événement incroyable du monde as-tu assisté (procession d'un Doigt, bénédiction d'un dieu, destruction/ édification d'un bâtiment historique, ..)</li><li>Comment cela t'a-t-il impacté</li></ul>"}

	</section>
{/snippet}

{#snippet tape_4_Intrigues()}
	<section>
		<h3 id="tape-4--intrigues">{@html "Étape 4 : Intrigues"}</h3>
	{@html "<ul><li>Quel secret connais-tu ?</li><li>Qui voudrait t'empêcher de le révéler</li><li>Que risques-tu si la vérité éclate</li><li>Quelle rumeur as-tu entendu</li></ul>"}

	</section>
{/snippet}

{#snippet tape_5_EnsembleAutourDeLaTable()}
	<section>
		<h3 id="tape-5--ensemble-autour-de-la-table">{@html "Étape 5 : Ensemble autour de la table"}</h3>
	{@html "<ul><li>Je leur attribue à tous un numéro, et je leur distribue un papier avec le numéro d'un autre joueur</li><li>Raconter une histoire courte où le joueur sélectionné vous a aidé</li><li>Raconter une histoire courte où vous avez mis le joueur sélectionné dans la merde</li><li>Raconter une rumeur (vraie ou fausse) sur vous et la donner au joueur sélectionné</li><li>Quelles sont vos relations</li><li>Qui t'inspire confiance</li><li>Qui t'inquiète</li><li>Pourquoi restez-vous ensemble ?</li><li>Votre groupe a-t'il des missions ou des problèmes actuellement ?</li><li>Quelle est la dernière mission que vous avez faite ?</li></ul>"}

	</section>
{/snippet}
