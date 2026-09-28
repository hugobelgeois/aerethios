<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
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
		{@render preamble()}
		{@render type()}
		{@render taille()}
		{@render matriaux()}
		{@render infusions()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("**## Catégories\n> Dé + Modificateur >= AC → Dégâts aux HP\n")}
{/snippet}

{#snippet type()}
	<section>
		<h3 id="type">{@html applyBase("Type")}</h3>
	{@html renderMarkdown("> Détermine le modificateur de l'arme si la bonne infusion est utilisée.\n\nSeul le type principal de l'arme est pris en compte pour les modificateurs et les résistances.\n\n|                  |      Perforant      |               Tranchant               |   Contondant   |\n| ---------------- | :-----------------: | :-----------------------------------: | :------------: |\n| **Modificateur** | Dextérité(Bretteur) | Dextérité(Bretteur) \\| Force(Barbare) | Force(Barbare) |\n")}

	</section>
{/snippet}

{#snippet taille()}
	<section>
		<h3 id="taille">{@html applyBase("Taille")}</h3>
	{@html renderMarkdown("> Modifie le maniement de l'arme.\n\n|                |                              Court                              |        1 Main        |                                 2 Mains                                 |\n| -------------- | :-------------------------------------------------------------: | :------------------: | :---------------------------------------------------------------------: |\n| **Dé**         |                              2d10                               | 2d8 (+ Modificateur) |                    2d6 (+ Modificateur(Compétence))                     |\n| **Dégâts**     |                                8                                |          12          |                                   16                                    |\n| **Propriétés** | Critique<br>(Les attaques surprises sont une réussite critique) |          -           | Anti-Blindage<br>(Retire le bouclier ennemi pendant le tour des alliés) |\n| **Matériaux**  |                                1                                |          2           |                                    3                                    |\n")}

	</section>
{/snippet}

{#snippet matriaux()}
	<section>
		<h2 id="matriaux">{@html applyBase("Matériaux")}</h2>
	{@html renderMarkdown("> Fait par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New#forgeron\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"Forgeron\">Forgeron</a> pour rendre les armes efficaces contre certaines créatures.\n> La propriété VS ne concerne que les armes Tranchantes et Perforantes.\n> La propriété VS confère un malus non cumulable aux lancés de dé de la cible pour son prochain tour.\n\nVS 1 = Désavantage pour la cible\nVS 2 = Désavantage pour la cible + Résistance -1\n\tDiminue la résistance d'un rang pour cette attaque (Absorption → Immunisé → Résistance → Rien → Faiblesse)\n\n| Matériau   |        Effet         | Prix/ unité | Poids/ unité |     Rareté |\n| ---------- | :------------------: | ----------: | -----------: | ---------: |\n| Cuivre     |     VS 1 Plantes     |       50 pc |         2 kg |     Déchet |\n| Argent     |    VS 1 Hybrides     |       50 pa |         2 kg |     Commun |\n| Electrum   |    VS 1 Magiques     |       10 po |         2 kg | Peu Commun |\n| Or         |    VS 1 Mythiques    |       50 po |         4 kg |       Rare |\n| Platine    |   VS 1 Humanoïdes    |      500 po |         3 kg | Légendaire |\n| Fonte      |   VS 2 Nécrophages   |        2 pa |       1.5 kg |     Déchet |\n| Fer        |    VS 2 VS Bêtes     |       10 pa |         1 kg |     Commun |\n| Bronze     | VS 2 VS Insectoïdes  |       25 pa |       1.5 kg |     Commun |\n| Acier      |   VS 2 VS Mutants    |       50 pa |         1 kg |     Commun |\n| Titane     | VS 2 VS Invocations  |        1 po |       1.5 kg | Peu Commun |\n| Mythril    | VS 2 VS Elementaires |        5 po |         1 kg |       Rare |\n| Adamantite |  VS 2 VS Draconides  |        7 po |         2 kg |       Rare |\n| Palladium  |    VS 2 VS Anges     |        7 po |         2 kg |       Rare |\n| Orichalque |    VS 2 VS Démons    |       10 po |       2.5 kg | Légendaire |\n")}

	</section>
{/snippet}

{#snippet infusions()}
	<section>
		<h2 id="infusions">{@html applyBase("Infusions")}</h2>
	{@html renderMarkdown("> Fait par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition#joaillier\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"Joaillier\">Joaillier</a> pour déterminer leur dégâts (DMG [1 - 4]).\n> Utilise 1 Gemme pour altérer la structure de l'arme, et donc son utilisation.\n> Les dégâts d'une arme ne peuvent pas être négatif.\n\n| Matériau                                                       | Dégâts  | Modificateur                                                                   | Utilisation   |\n| -------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------ | ------------- |\n| Gemme Brute                                                    | +2DMG   | -DMG                                                                           | ---           |\n| Gemme Puissante                                                | +3DMG+4 | -DMG-2<br>Désavantage                                                          | ---           |\n| Gemme d'Equilibre                                              | -1.5DMG | Dextérité \\| Force<br>*valeur max : Rareté de la gemme*                        | Huiles        |\n| Gemme de Mélange                                               | -3DMG   | Dextérité + Force<br>*valeur max : 2 × Rareté de la gemme*                     | Huiles        |\n| Gemme de Balance                                               | -3DMG   | Dextérité(Bretteur) \\| Force(Barbare)<br>*valeur max : 2 × Rareté de la gemme* | Huiles        |\n| Gemme de Crystal<br>*Peu Commune*<br>1 Magie (Feu, Foudre, ..) | -4      | ---                                                                            | Magie         |\n| Gemme de Crystal<br>*Rare*<br>Croitiste ou Eletiste            | -8      | ---                                                                            | Magie         |\n| Gemme de Crystal<br>*Légendaire*<br>Universelle                | -12     | ---                                                                            | Magie         |\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles"} fragment={""} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Magies"} fragment={""} />

	</section>
{/snippet}
