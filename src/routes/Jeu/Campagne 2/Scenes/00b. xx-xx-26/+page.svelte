<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
  <title>00b. xx-xx-26</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>00b. xx-xx-26</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render crationDePersonnages()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("> Création des personnages pour leur donner du contenu autour duquel du scénario peut se développer.\n")}
{/snippet}

{#snippet crationDePersonnages()}
	<section>
		<h2 id="cration-de-personnages">Création de personnages</h2>

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
		<h3 id="tape-0--inspiration">Étape 0 : Inspiration</h3>
	{@html renderMarkdown("- Quel personnage existant de n'importe quel média t'inspire\n- Quel musique d'ambiance (sans/ peu de paroles) représente ton personnage\n- Quel est LE trait de charactère qui peut représenter à lui seul ton personnage (un extrême peut faciliter le RP)\n\t- Ex : une voix, un accent, une émotion, ...\n")}

	</section>
{/snippet}

{#snippet tape_1_Identit()}
	<section>
		<h3 id="tape-1--identit">Étape 1 : Identité</h3>
	{@html renderMarkdown("- D'où viens-tu (Kothula, Ovliin, Nirina, Suraja)\n\t- Si c'est ailleurs que Kothula, pourquoi as-tu voyagé jusque là (fuite, voyage, immigration, aventures, ..)\n- Quel âge as-tu\n\t- As-tu fait des études ou as-tu directement travaillé (dans quel domaine)\n- Quel est ton statut social (économies & réputation locale)\n- Quel sont tes objectifs actuels (court et long terme)\n\t- Quelle est ta plus grande fierté\n\t- Quelle est ta plus grande honte\n- Que refuses-tu de faire\n\t- Quelle sont tes phobies\n- Quel est ton plus grand mensonge\n")}

	</section>
{/snippet}

{#snippet tape_2_Relations()}
	<section>
		<h3 id="tape-2--relations">Étape 2 : Relations</h3>
	{@html renderMarkdown("- As tu des proches (parents, partenaire, enfants, amis, ..)\n\t- Leur statut (vivant, quel continent/ville, actif dans la société, métier, ..)\n\t- Sous quelle occasion pourrait-on les croiser\n\t- Est-ce qu'ils te manquent et inversement\n- À qui dois-tu une dette\n- Quel personnage que tu as rencontré/ entendu parler t'a marqué et pour quelle raison\n- As-tu fait des promesses, possèdes-tu des objets qui sont précieux pour quelqu'un d'autre\n")}

	</section>
{/snippet}

{#snippet tape_3_Monde()}
	<section>
		<h3 id="tape-3--monde">Étape 3 : Monde</h3>
	{@html renderMarkdown("- Quel lieu de ton enfance existe encore\n- Quel lieu a disparu/ été grandement modifié\n\t- Par quoi, pour quelle raison\n- Dans quel groupe/ organisation as-tu travaillé/ étudié\n\t- A-t'il eu des conflits avec un autre groupe\n- A quel événement incroyable du monde as-tu assisté (procession d'un Doigt, bénédiction d'un dieu, destruction/ édification d'un bâtiment historique, ..)\n\t- Comment cela t'a-t-il impacté\n")}

	</section>
{/snippet}

{#snippet tape_4_Intrigues()}
	<section>
		<h3 id="tape-4--intrigues">Étape 4 : Intrigues</h3>
	{@html renderMarkdown("- Quel secret connais-tu ?\n\t- Qui voudrait t'empêcher de le révéler\n\t- Que risques-tu si la vérité éclate\n- Quelle rumeur as-tu entendu\n")}

	</section>
{/snippet}

{#snippet tape_5_EnsembleAutourDeLaTable()}
	<section>
		<h3 id="tape-5--ensemble-autour-de-la-table">Étape 5 : Ensemble autour de la table</h3>
	{@html renderMarkdown("- Je leur attribue à tous un numéro, et je leur distribue un papier avec le numéro d'un autre joueur\n\t- Raconter une histoire courte où le joueur sélectionné vous a aidé\n\t- Raconter une histoire courte où vous avez mis le joueur sélectionné dans la merde\n\t- Raconter une rumeur (vraie ou fausse) sur vous et la donner au joueur sélectionné\n- Quelles sont vos relations\n\t- Qui t'inspire confiance\n\t- Qui t'inquiète\n- Pourquoi restez-vous ensemble ?\n- Votre groupe a-t'il des missions ou des problèmes actuellement ?\n- Quelle est la dernière mission que vous avez faite ?")}

	</section>
{/snippet}
