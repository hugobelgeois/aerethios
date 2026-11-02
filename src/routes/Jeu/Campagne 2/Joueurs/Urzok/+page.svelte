<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "attributs",
          "text": "Attributs",
          "level": 2
      },
      {
          "id": "combat",
          "text": "Combat",
          "level": 3
      },
      {
          "id": "magie",
          "text": "Magie",
          "level": 3
      },
      {
          "id": "comptences",
          "text": "Compétences",
          "level": 2
      },
      {
          "id": "equipement",
          "text": "Equipement",
          "level": 2
      },
      {
          "id": "armes-de-mles---new--armes--distances---new",
          "text": "Armes de mêlées - New | Armes à distances - New",
          "level": 3
      },
      {
          "id": "armures---new",
          "text": "Armures - New",
          "level": 3
      },
      {
          "id": "apprentissages---new",
          "text": "Apprentissages - New",
          "level": 2
      },
      {
          "id": "inventaire",
          "text": "Inventaire",
          "level": 2
      },
      {
          "id": "notes",
          "text": "Notes",
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
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Urzok</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Urzok</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render attributs()}
		{@render comptences()}
		{@render equipement()}
		{@render apprentissages__New()}
		{@render inventaire()}
		{@render notes()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">Si vous voulez une image, envoyez-la moi et je la transforme pour avoir un style graphique similaire au reste\r\n\r")}
{/snippet}

{#snippet attributs()}
	<section>
		<h2 id="attributs">{@html applyBase("Attributs")}</h2>
	{@html renderMarkdown("> Niveau 1\r\n\r")}
	{@render combat()}
	{@render magie()}
	</section>
{/snippet}

{#snippet combat()}
	<section>
		<h3 id="combat">{@html applyBase("Combat")}</h3>
	{@html renderMarkdown(">55 points à mettre au niveau 1 (min 7, max 14)\r\n>+1 points par niveau sauf les niveaux 1, 5, 10, 15 et 20\r\n\r\n| Force | Dextérité | Mental | Perception | Charisme |\r\n| :---: | :-------: | :----: | :--------: | :------: |\r\n|       |           |        |            |          |\r\n|       |           |        |            |          |\r\n\r")}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html applyBase("Magie")}</h3>
	{@html renderMarkdown("> **Maîtrise** :\r\n> **Crystaux** :\r\n\r\n| Air | Eau | Roche | Feu | Foudre | Lumière | Ténèbres |\r\n| :-: | :-: | :---: | :-: | :----: | :-----: | :------: |\r\n|     |     |       |     |        |         |          |\r\n|     |     |       |     |        |         |          |\r\n\r")}

	</section>
{/snippet}

{#snippet comptences()}
	<section>
		<h2 id="comptences">{@html applyBase("Compétences")}</h2>
	{@html renderMarkdown("\r\n| **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Force\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Force\" data-wiki-fragment=\"\">Force</a>** | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Dexterite\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Dexterite\" data-wiki-fragment=\"\">Dextérité</a>** | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Mental\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Mental\" data-wiki-fragment=\"\">Mental</a>** | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Perception\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Perception\" data-wiki-fragment=\"\">Perception</a>** | **<a href=\"%%BASE%%/Jeu/Regles/Competences/Attributs/Charisme\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Competences/Attributs/Charisme\" data-wiki-fragment=\"\">Charisme</a>** |\r\n| :-----------: | :---------------: | :------------: | :----------------: | :--------------: |\r\n|               |                   |                |                    |                  |\r\n\r")}

	</section>
{/snippet}

{#snippet equipement()}
	<section>
		<h2 id="equipement">{@html applyBase("Equipement")}</h2>

	{@render armesDeMles__New_Armes_Distances__New()}
	{@render armures__New()}
	</section>
{/snippet}

{#snippet armesDeMles__New_Armes_Distances__New()}
	<section>
		<h3 id="armes-de-mles---new--armes--distances---new">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armes de melees - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armes de melees - New\" data-wiki-fragment=\"\">Armes de mêlées - New</a> | <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armes a distances - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armes a distances - New\" data-wiki-fragment=\"\">Armes à distances - New</a>")}</h3>
	{@html renderMarkdown("\r\n| Court | 1 Main | 2 Mains | Corde | Feu |\r\n| :---: | :----: | :-----: | :---: | --- |\r\n|       |        |         |       |     |\r\n|       |        |         |       |     |\r\n\r\n| Arme | Dégâts | Enchantements | Poids (kg) | Propriétés |\r\n| ---- | :----: | :-----------: | :--------: | :--------: |\r\n|      |        |               |            |            |\r\n\r")}

	</section>
{/snippet}

{#snippet armures__New()}
	<section>
		<h3 id="armures---new">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armures - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armures - New\" data-wiki-fragment=\"\">Armures - New</a>")}</h3>
	{@html renderMarkdown("\r\n| Armure | AC  | DR  | Enchantement | Poids (kg) | Dégâts | Propriétés |\r\n| ------ | :-: | :-: | :----------: | :--------: | :----: | :--------: |\r\n|        |     |     |              |            |        |            |\r\n\r")}

	</section>
{/snippet}

{#snippet apprentissages__New()}
	<section>
		<h2 id="apprentissages---new">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" data-wiki-fragment=\"\">Apprentissages - New</a>")}</h2>
	{@html renderMarkdown("\r\n-\r\n\r")}

	</section>
{/snippet}

{#snippet inventaire()}
	<section>
		<h2 id="inventaire">{@html applyBase("Inventaire")}</h2>
	{@html renderMarkdown("\r\n**Poids maximum** :\r\n- *Force > 10 : 40 + (Force Modificateur x 10)*\r\n- *Force < 10 : 40 + (Force Modificateur x 2)*\r\n\r\n| Qty | Nom     | Poids (kg) |\r\n| --- | ------- | ---------: |\r\n|     | Armes   |            |\r\n|     | Armures |            |\r\n\r")}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html applyBase("Notes")}</h2>
	{@html renderMarkdown("\r\nOrc (ascendant loup-mousse) de Kothula\r\nEst parti dans une forêt pour faire des recherches sur les ingrédients alchimiques qui recouvraient son parent animal\r\nIl était au croisement de plusieurs villages qu'il aidait en leur vendant des remèdes\r\nLa forêt a fini par prendre feu, et il est parti pour d'autres aventures ?\r\n\r")}
	{@render tape_0_Inspiration()}
	{@render tape_1_Identit()}
	{@render tape_2_Relations()}
	{@render tape_3_Monde()}
	{@render tape_4_Intrigues()}
	</section>
{/snippet}

{#snippet tape_0_Inspiration()}
	<section>
		<h3 id="tape-0--inspiration">{@html applyBase("Étape 0 : Inspiration")}</h3>
	{@html renderMarkdown("- Quel personnage existant de n'importe quel média t'inspire\r\n- Quel musique d'ambiance (sans/ peu de paroles) représente ton personnage\r\n- Quel est LE trait de caractère qui peut représenter à lui seul ton personnage (un extrême peut faciliter le RP)\r\n\t- Ex : une voix, un accent, une émotion, ...\r\n\r")}

	</section>
{/snippet}

{#snippet tape_1_Identit()}
	<section>
		<h3 id="tape-1--identit">{@html applyBase("Étape 1 : Identité")}</h3>
	{@html renderMarkdown("- D'où viens-tu (Kothula, Ovliin, Nirina, Suraja)\r\n\t- Si c'est ailleurs que Kothula, pourquoi as-tu voyagé jusque là (fuite, voyage, immigration, aventures, ..)\r\n- Quel âge as-tu\r\n\t- As-tu fait des études ou as-tu directement travaillé (<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Apprentissages - New\" data-wiki-fragment=\"\">voir les métiers</a>)\r\n- Quel est ton statut social (économies & réputation locale)\r\n- Quel sont tes objectifs actuels (court et long terme)\r\n\t- Quelle est ta plus grande fierté\r\n\t- Quelle est ta plus grande honte\r\n- Que refuses-tu de faire\r\n\t- Quelle sont tes phobies\r\n- Quel est ton plus grand mensonge\r\n\r")}

	</section>
{/snippet}

{#snippet tape_2_Relations()}
	<section>
		<h3 id="tape-2--relations">{@html applyBase("Étape 2 : Relations")}</h3>
	{@html renderMarkdown("- As tu des proches (parents, partenaire, enfants, amis, ..)\r\n\t- Leur statut (vivant, quel continent/ville, actif dans la société, métier, ..)\r\n\t- Sous quelle occasion pourrait-on les croiser\r\n\t- Est-ce qu'ils te manquent et inversement\r\n- À qui dois-tu une dette\r\n- Quel personnage que tu as rencontré/ entendu parler t'a marqué et pour quelle raison\r\n- As-tu fait des promesses, possèdes-tu des objets qui sont précieux pour quelqu'un d'autre\r\n\r")}

	</section>
{/snippet}

{#snippet tape_3_Monde()}
	<section>
		<h3 id="tape-3--monde">{@html applyBase("Étape 3 : Monde")}</h3>
	{@html renderMarkdown("- Quel lieu de ton enfance existe encore\r\n- Quel lieu a disparu/ été grandement modifié\r\n\t- Par quoi, pour quelle raison\r\n- Dans quel groupe/ organisation as-tu travaillé/ étudié\r\n\t- A-t'il eu des conflits avec un autre groupe\r\n- A quel événement incroyable du monde as-tu assisté (procession d'un Doigt, bénédiction d'un dieu, destruction/ édification d'un bâtiment historique, ..)\r\n\t- Comment cela t'a-t-il impacté\r\n\r")}

	</section>
{/snippet}

{#snippet tape_4_Intrigues()}
	<section>
		<h3 id="tape-4--intrigues">{@html applyBase("Étape 4 : Intrigues")}</h3>
	{@html renderMarkdown("- Quel secret connais-tu ?\r\n\t- Qui voudrait t'empêcher de le révéler\r\n\t- Que risques-tu si la vérité éclate\r\n- Quelle rumeur as-tu entendu\r\n")}

	</section>
{/snippet}
