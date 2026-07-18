<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "apprentissage",
          "text": "Apprentissage",
          "level": 2
      },
      {
          "id": "composants",
          "text": "Composants",
          "level": 2
      },
      {
          "id": "prix-du-march-pour-enchanter-po",
          "text": "Prix du marché pour enchanter (po)",
          "level": 2
      },
      {
          "id": "kothula-wip",
          "text": "Kothula (WIP)",
          "level": 2
      },
      {
          "id": "nirina",
          "text": "Nirina",
          "level": 2
      },
      {
          "id": "ovliin",
          "text": "Ovliin",
          "level": 2
      },
      {
          "id": "arme",
          "text": "Arme",
          "level": 3
      },
      {
          "id": "armure",
          "text": "Armure",
          "level": 3
      },
      {
          "id": "suraja",
          "text": "Suraja",
          "level": 2
      },
      {
          "id": "ajouter",
          "text": "Ajouter",
          "level": 3
      },
      {
          "id": "amliorer",
          "text": "Améliorer",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Enchanteur</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Enchanteur</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render apprentissage()}
		{@render composants()}
		{@render prixDuMarchPourEnchanterPo()}
		{@render kothulaWip()}
		{@render nirina()}
		{@render ovliin()}
		{@render suraja()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">Spécialité de l'<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" data-wiki-fragment=\"\">Artisanat</a> qui améliore magiquement les caractéristiques des équipements d'aventuriers.\n")}
{/snippet}

{#snippet apprentissage()}
	<section>
		<h2 id="apprentissage">{@html applyBase("Apprentissage")}</h2>
	{@html renderMarkdown("\nChaque continent possède sa technique d'enchantement.\n\nPour l'apprendre, il faut se rendre sur le continent concerné.\n")}

	</section>
{/snippet}

{#snippet composants()}
	<section>
		<h2 id="composants">{@html applyBase("Composants")}</h2>
	{@html renderMarkdown("\nPour enchanter, il faut :\n\n- l'objet à enchanter,\n\n- un crystal purgé, qui facilite l'apport magique de l'enchanteur vers l'enchantement.\n\tCe crystal coûte 5po et a 20% de chance de casser à chaque utilisation.\n\tAu niveau 4, le crystal a 10% de chance de casser,\n\n- une réserve de magie sur soi,\n\n- 8h de travail continu.\n")}

	</section>
{/snippet}

{#snippet prixDuMarchPourEnchanterPo()}
	<section>
		<h2 id="prix-du-march-pour-enchanter-po">{@html applyBase("Prix du marché pour enchanter (po)")}</h2>
	{@html renderMarkdown("\n| Kothula | Nirina  | Ovliin                              | Suraja                                 |\n| ------- | ------- | ----------------------------------- | -------------------------------------- |\n| 40 - 60 | 20 - 40 | 2 - 5 * Rareté de l'Os (Commun = 1) | Nombre d'enchantements * niveau actuel |\n")}

	</section>
{/snippet}

{#snippet kothulaWip()}
	<section>
		<h2 id="kothula-wip">{@html applyBase("<a href=\"%%BASE%%/Geographie/Kothula/Kothula\" class=\"wiki-link internal-link\" data-wiki-href=\"/Geographie/Kothula/Kothula\" data-wiki-fragment=\"\">Kothula</a> (WIP)")}</h2>
	{@html renderMarkdown(">Enchanter des parties du corps pour fluidifier les flux magiques qui circulent dedans et améliorer l'utilisation de la magie.\n\nLes parties du corps enchantables sont les bras, le dos et les jambes.\n\nRater le processus d'enchantement le rend juste temporaire (1 semaine)\n\nUn échec critique (95 - 99) affaiblit le corps et réduit les chances de tatouage pendant 100 jours. (-50% de réussite)\n\nUn échec super critique (100) empêche de se faire tatouer sur cette partie du corps à l'avenir.\n\tUn objet rare permet d'empêcher cet échec (20 po au marché ou trouvable en expédition)\n\nL'effet dépend de l'architecture du tatouage (non cumulables sans conséquences) :\n\n| Anneau              | Lignes          | X Points    |\n| ------------------- | --------------- | ----------- |\n| Maîtrise Magique +2 | Régénération x2 | +X crystaux |\n")}

	</section>
{/snippet}

{#snippet nirina()}
	<section>
		<h2 id="nirina">{@html applyBase("<a href=\"%%BASE%%/Geographie/Nirina/Nirina\" class=\"wiki-link internal-link\" data-wiki-href=\"/Geographie/Nirina/Nirina\" data-wiki-fragment=\"\">Nirina</a>")}</h2>
	{@html renderMarkdown(">Enchanter les métaux pour augmenter leur efficacité.\n\nRater l'enchantement donne un malus au lieu d'un bonus.\n\nUne réussite critique fait que le montant minimum est la moitié de la valeur du dé.\n\nUne armure possède 2 \"slots\" à enchanter, et une arme en possède 1.\n\nPour nettoyer les slots, il faut faire fondre et reforger l'équipement (la magie de métal n'est pas suffisante).\n\nEn fonction du bonus souhaité, les chances de réussites varient :\n\n|                      | D4  | D6   | D8   | D10  |\n| -------------------- | --- | ---- | ---- | ---- |\n| **Taux de Réussite** | -0% | -20% | -40% | -60% |\n| **Malus d'Echec**    | -1  | -2   | -3   | -4   |\n")}

	</section>
{/snippet}

{#snippet ovliin()}
	<section>
		<h2 id="ovliin">{@html applyBase("<a href=\"%%BASE%%/Geographie/Ovliin/Ovliin\" class=\"wiki-link internal-link\" data-wiki-href=\"/Geographie/Ovliin/Ovliin\" data-wiki-fragment=\"\">Ovliin</a>")}</h2>
	{@html renderMarkdown(">Enchanter les os pour en extraire la puissance élémentaire de son ancien \"propriétaire\".\n\nUne armure en os ou une arme avec le manche en os peuvent bénéficier de cette puissance.\n\nPour enchanter, le joueur lance **1d20 + Niveau d'enchanteur** (le bonus obtenu varie selon le résultat et la rareté de l'os).\n\nUn échec diminue la rareté de l'os de 1.\n\nUn échec critique rend l'os inutilisable.\n")}
	{@render arme()}
	{@render armure()}
	</section>
{/snippet}

{#snippet arme()}
	<section>
		<h3 id="arme">{@html applyBase("Arme")}</h3>
	{@html renderMarkdown("\n| Arme           |  +1   |   +2    |   +3    |   +4    |  +5  |\n| -------------- | :---: | :-----: | :-----: | :-----: | :--: |\n| **Normal**     | 2 - 9 | 10 - 16 |  17 +   |    -    |  -   |\n| **Commun**     | 2 - 7 | 8 - 14  | 14 - 19 |  20 +   |  -   |\n| **Peu Commun** | 2 - 4 |  5 - 9  | 10 - 16 | 17 - 19 | 20 + |\n| **Rare**       |   -   |  2 - 6  | 7 - 13  | 14 - 18 | 19 + |\n| **Légendaire** |   -   |    -    | 2 - 10  | 11 - 17 | 18 + |\n")}

	</section>
{/snippet}

{#snippet armure()}
	<section>
		<h3 id="armure">{@html applyBase("Armure")}</h3>
	{@html renderMarkdown("\n| Bonus          |  +1   |   +2    |   +3    |   +4    |  +5  |\n| -------------- | :---: | :-----: | :-----: | :-----: | :--: |\n| **Normal**     | 2 - 9 | 10 - 16 |  17 +   |    -    |  -   |\n| **Commun**     | 2 - 7 | 8 - 14  | 14 - 19 |  20 +   |  -   |\n| **Peu Commun** | 2 - 4 |  5 - 9  | 10 - 16 | 17 - 19 | 20 + |\n| **Rare**       |   -   |  2 - 6  | 7 - 13  | 14 - 18 | 19 + |\n| **Légendaire** |   -   |    -    | 2 - 10  | 11 - 17 | 18 + |\n")}

	</section>
{/snippet}

{#snippet suraja()}
	<section>
		<h2 id="suraja">{@html applyBase("<a href=\"%%BASE%%/Geographie/Suraja/Suraja\" class=\"wiki-link internal-link\" data-wiki-href=\"/Geographie/Suraja/Suraja\" data-wiki-fragment=\"\">Suraja</a>")}</h2>
	{@html renderMarkdown("\n>Enchanter les tissus pour augmenter leur résistance aux éléments magiques.\n\nUn tissu peut cumuler plusieurs enchantements (le maximum dépend du type de tissu).\n\nLe joueur peut ajouter de nouveaux enchantements (au risque d'en perdre d'autres), ou améliorer ceux déjà présents.\n")}
	{@render ajouter()}
	{@render amliorer()}
	</section>
{/snippet}

{#snippet ajouter()}
	<section>
		<h3 id="ajouter">{@html applyBase("Ajouter")}</h3>
	{@html renderMarkdown("\nLe joueur lance **1d20 + Niveau d'enchanteur**.\n\nLa difficulté de réussite change selon le nombre d'enchantements déjà présents :\n\n| Nombre d'enchantements présents sur le tissu | 0   | 1   | 2   | 3   | 4   | 5   | 6   |\n| -------------------------------------------- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |\n| **Valeur minimale à obtenir** (<)            | 10  | 12  | 14  | 16  | 18  | 20  | 22  |\n\nRésultats :\n- réussite critique, l'enchantement est créé et a une valeur de 2,\n- réussite, l'enchantement est créé et a une valeur de 1,\n- échec, le tissu perd le dernier enchantement ajouté,\n- échec critique, le tissu perd les 2 derniers enchantements ajoutés.\n")}

	</section>
{/snippet}

{#snippet amliorer()}
	<section>
		<h3 id="amliorer">{@html applyBase("Améliorer")}</h3>
	{@html renderMarkdown("\nLe joueur lance 1d6, la valeur de l'enchantement est le résultat obtenu.\n\nSi le dé fait 6, la valeur devient 0 (l'enchantement est désactivé mais pas supprimé).\n\nL'enchantement disparaît si le joueur fait 6 ou un nombre inférieur à la valeur actuelle deux fois de suite.")}

	</section>
{/snippet}
