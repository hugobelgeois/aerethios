<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "catgories",
          "text": "Catégories",
          "level": 2
      },
      {
          "id": "type",
          "text": "Type",
          "level": 3
      },
      {
          "id": "taille",
          "text": "Taille",
          "level": 3
      },
      {
          "id": "matriaux",
          "text": "Matériaux",
          "level": 2
      },
      {
          "id": "infusions",
          "text": "Infusions",
          "level": 2
      },
      {
          "id": "magie",
          "text": "Magie",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Armes de mêlées - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Armes de mêlées - New</h1>
  </header>
  <div class="markdown-rendered">
		{@render catgories()}
		{@render matriaux()}
		{@render infusions()}
  </div>
</article>

<LinkPreview />

{#snippet catgories()}
	<section>
		<h2 id="catgories">{@html applyBase("Catégories")}</h2>
	{@html renderMarkdown("> Dé + Modificateur >= AC --> Dégâts aux HP en déduisant la DR.\r\n\r")}
	{@render type()}
	{@render taille()}
	</section>
{/snippet}

{#snippet type()}
	<section>
		<h3 id="type">{@html applyBase("Type")}</h3>
	{@html renderMarkdown("> Modifie l'utilisation de l'arme.\r\n\r\n|            | Perforant | Tranchant | Contondant |\r\n| ---------- | :-------: | :-------: | :--------: |\r\n| **Dégâts** |     6     |     8     |     12     |\r\n\r\nSi une arme possède 2 types, le type prioritaire détermine les dégâts.\r\n\r")}

	</section>
{/snippet}

{#snippet taille()}
	<section>
		<h3 id="taille">{@html applyBase("Taille")}</h3>
	{@html renderMarkdown("> Modifie la façon d'utiliser l'arme.\r\n\r\n|                               |                          Court                           | 1 Main |                                 2 Mains                                 |\r\n| ----------------------------- | :------------------------------------------------------: | :----: | :---------------------------------------------------------------------: |\r\n| **Dé**                        |                           2d10                           |  2d8   |                                   2d6                                   |\r\n| **Dégâts<br>(Multiplicateur** |                            .5                            |   1    |                                   1.5                                   |\r\n| **Propriétés**                | Ambidextre<br>(Action Bonus : Deuxième attaque physique) |   -    | Anti-Blindage<br>(Retire le bouclier ennemi pendant le tour des alliés) |\r\n| **Matériaux**                 |                            1                             |   2    |                                    3                                    |\r\n| **PA**                        |                            +1                            |   -    |                                   -1                                    |\r\n\r")}

	</section>
{/snippet}

{#snippet matriaux()}
	<section>
		<h2 id="matriaux">{@html applyBase("Matériaux")}</h2>
	{@html renderMarkdown("> Fait par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New#forgeron\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"Forgeron\">Forgeron</a> pour rendre les armes efficaces contre certaines créatures.\r\n> La propriété VS ne concerne que les armes Tranchantes et Perforantes.\r\n> La propriété VS confère un malus non cumulable aux lancés de dé de la cible pour son prochain tour.\r\n\r\nVS 1 = Désavantage pour la cible\r\nVS 2 = -1 dé pour la cible\r\n\r\n| Matériau   |        Effet         | Prix/ unité | Poids/ unité |     Rareté |\r\n| ---------- | :------------------: | ----------: | -----------: | ---------: |\r\n| Cuivre     |     VS 1 Plantes     |       50 pc |         2 kg |     Déchet |\r\n| Argent     |    VS 1 Hybrides     |       50 pa |         2 kg |     Commun |\r\n| Electrum   |    VS 1 Magiques     |       10 po |         2 kg | Peu Commun |\r\n| Or         |    VS 1 Mythiques    |       50 po |         4 kg |       Rare |\r\n| Platine    |   VS 1 Humanoïdes    |      500 po |         3 kg | Légendaire |\r\n| Fonte      |   VS 2 Nécrophages   |        2 pa |       1.5 kg |     Déchet |\r\n| Fer        |    VS 2 VS Bêtes     |       10 pa |         1 kg |     Commun |\r\n| Bronze     | VS 2 VS Insectoïdes  |       25 pa |       1.5 kg |     Commun |\r\n| Acier      |   VS 2 VS Mutants    |       50 pa |         1 kg |     Commun |\r\n| Titane     | VS 2 VS Invocations  |        1 po |       1.5 kg | Peu Commun |\r\n| Mythril    | VS 2 VS Elementaires |        5 po |         1 kg |       Rare |\r\n| Adamantite |  VS 2 VS Draconides  |        7 po |         2 kg |       Rare |\r\n| Palladium  |    VS 2 VS Anges     |        7 po |         2 kg |       Rare |\r\n| Orichalque |    VS 2 VS Démons    |       10 po |       2.5 kg | Légendaire |\r\n\r")}

	</section>
{/snippet}

{#snippet infusions()}
	<section>
		<h2 id="infusions">{@html applyBase("Infusions")}</h2>
	{@html renderMarkdown("> Fait par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition#joaillier\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"Joaillier\">Joaillier</a> pour déterminer leur dégâts (DMG [1 - 4]).\r\n> Utilise 1 Gemme pour altérer la structure de l'arme, et donc son utilisation.\r\n> Les dégâts d'une arme ne peuvent pas être négatif.\r\n\r\n| Matériau                                                       | Dégâts  | Modificateur                                                            | Utilisation |\r\n| -------------------------------------------------------------- | ------- | ----------------------------------------------------------------------- | ----------- |\r\n| Gemme Brute                                                    | +2DMG   | ---                                                                     | ---         |\r\n| Gemme Puissante                                                | +3DMG+4 | ---<br>Désavantage                                                      | ---         |\r\n| Gemme d'Equilibre                                              | -DMG    | Dextérité\\|Force<br>*valeur max : Rareté de la gemme*                   | Huiles      |\r\n| Gemme de Mélange                                               | -1.5DMG | Dextérité + Force<br>*valeur max : 2 × Rareté de la gemme*              | Huiles      |\r\n| Gemme de Balance                                               | -1.5DMG | Dextérité(Ranger)\\|Force(Monk)<br>*valeur max : 2 × Rareté de la gemme* | Huiles      |\r\n| Gemme de Crystal<br>*Peu Commune*<br>1 Magie (Feu, Foudre, ..) | -2      | ---                                                                     | Magie       |\r\n| Gemme de Crystal<br>*Rare*<br>Croitiste ou Eletiste            | -6      | ---                                                                     | Magie       |\r\n| Gemme de Crystal<br>*Légendaire*<br>Universelle                | -10     | ---                                                                     | Magie       |\r\n\r\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Enchantements de Melees"} fragment={""} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles"} fragment={""} />
	{@render magie()}
	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html applyBase("Magie")}</h3>
	{@html renderMarkdown("> Permet d'imprégner l'arme de la magie concernée.\r\n\r\nConvertit les dégâts de l'arme en dégâts magiques, et les augmente de 1 par crystal dépensé.\r\n\r\nLa limite magique ne peut pas être dépassée lors de l'application de magie sur une arme.\r\n\r\nLes dégâts magiques peuvent être amplifiés ou réduits selon l'affinité aux dégâts de la cible avec cette magie :\r\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Affinites aux Degats"} fragment={""} />

	</section>
{/snippet}
