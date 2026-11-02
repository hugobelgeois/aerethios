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
          "id": "armes-de-mle--armes--distance",
          "text": "Armes de Mêlée | Armes à Distance",
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
          "id": "histoire",
          "text": "Histoire",
          "level": 3
      },
      {
          "id": "tape-0--inspiration",
          "text": "Étape 0 : Inspiration",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Aldrich</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Aldrich</h1>
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
	{@html renderMarkdown("\r\nEnchantement Vampirisme pour se soigner en tapant ?\r\nou un outil qui peut récupérer du sang dans certaines conditions\r\nOu un sort pour pomper le sang/ Eau+ténèbres pour fabriquer son sang\r\n\r")}
	{@render armesDeMle_Armes_Distance()}
	{@render armures__New()}
	</section>
{/snippet}

{#snippet armesDeMle_Armes_Distance()}
	<section>
		<h3 id="armes-de-mle--armes--distance">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armes de melees - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armes de melees - New\" data-wiki-fragment=\"\">Armes de Mêlée</a> | <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Combat/Armes a distances - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Combat/Armes a distances - New\" data-wiki-fragment=\"\">Armes à Distance</a>")}</h3>
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
	{@html renderMarkdown("\r\nObjectif court terme :\r\n- Maîtriser la magie\r\nObjectifs Long terme :\r\n- Abattre Zaledra à qui il doit sa maladie et sa dette\r\n- Soigner/ Atténuer la maladie vampirique à l'aide de la magie/ de mécanismes\r\n\t- Trouver le vampire qui aurait contré sa maladie pour en savoir plus\r\n\r")}
	{@render histoire()}
	{@render tape_0_Inspiration()}
	</section>
{/snippet}

{#snippet histoire()}
	<section>
		<h3 id="histoire">{@html applyBase("Histoire")}</h3>
	{@html renderMarkdown("\r\nNain solitaire de Kothula de 113 ans\r\nEst devenu vampire pour pouvoir rembourser une dette sur le très long terme auprès de Zaledra\r\nS'adonne aux recherches sur cette maladie pour atténuer ses effets/ la soigner\r\nIl fabrique des machines (dont il est fier) qui analysent et filtrent le sang sans tuer, mais commence à atteindre les limites et doit se pencher sur la magie pour aller plus loin\r\nProfite de sa faiblesse de nain face à la lumière pour cacher sa maladie sous une armure\r\nSa maladie l'a rendu solitaire pour éviter les dérapages, et il est ainsi devenu discret et ne parle pas sans raison\r\nHonte d'être un vampire et méfiance envers eux\r\nIl ment pour ne pas qu'on le sache, ni qu'on sache qu'il a consommé des vivants avant de maitriser sa maladie\r\nIl est connu localement et répare les objets des villageois par moment\r\nIl connait Loïc, chez qui il va régulièrement demander un verre de sang\r\n\r\nConnaissances :\r\n+++Vampire (lore, relation magique(eau + ténèbres = sang), fonctionnement, ...)\r\n++Artificier/ Ingénieur (pratique & théorique)\r\n+Architecte (théorique)\r\n+Nain\r\n\r\nJustifier qu'il soit lvl 0/1\r\nIl est resté dans les études longtemps, stagne et pense que voyager pourrait aider à débloquer des choses + Apprendre la magie\r\nAccompagnera les joueurs s'ils ont un objectif commun et qu'ils le convainquent\r\n\r")}

	</section>
{/snippet}

{#snippet tape_0_Inspiration()}
	<section>
		<h3 id="tape-0--inspiration">{@html applyBase("Étape 0 : Inspiration")}</h3>
	{@html renderMarkdown("- Quel personnage existant de n'importe quel média t'inspire\r\n- Quel musique d'ambiance (sans/ peu de paroles) représente ton personnage\r\n- Quel est LE trait de caractère qui peut représenter à lui seul ton personnage (un extrême peut faciliter le RP)\r\n\t- Ex : une voix, un accent, une émotion, ...")}

	</section>
{/snippet}
