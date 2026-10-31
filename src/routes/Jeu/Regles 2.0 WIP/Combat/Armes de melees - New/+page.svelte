<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "base",
          "text": "Base",
          "level": 2
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
		{@render base()}
		{@render matriaux()}
		{@render infusions()}
  </div>
</article>

<LinkPreview />

{#snippet base()}
	<section>
		<h2 id="base">{@html applyBase("Base")}</h2>
	{@html renderMarkdown("> Dé + Modificateur >= AC → Dégâts aux HP\n\nSi les dés jetés + modificateur (=résultat) passent l'AC de la cible, on ajoute ses dégâts au résultat pour savoir ce que la cible subit.\n\n|               | 1 Main | 2 Mains |\n| ------------- | :----: | :-----: |\n| **Dés**       |  2d10  |   2d6   |\n| **Dégâts**    |  x 1   |   x 2   |\n| **Matériaux** |   2    |    3    |\n\nUne arme doit ensuite être un des trois types suivants, ce qui changera son modificateur.\nLe modificateur n'est pas toujours actif selon l'infusion.\n\n| Modificateurs |    Contondant    |      Perforant      |      Tranchant      |\n| ------------- | :--------------: | :-----------------: | :-----------------: |\n| **1 Main**    | Dextérité(Moine) | Dextérité(Bretteur) | Dextérité(Assassin) |\n| **2 Mains**   |  Force(Barbare)  |       Force()       |   Force(Paladin)    |\n\n> Cela est important pour les résistances et faiblesses des ennemis.\n> Certaines armes rares peuvent posséder plusieurs types. Le joueur doit alors préciser celui qu'il utilise à chaque attaque.\n")}

	</section>
{/snippet}

{#snippet matriaux()}
	<section>
		<h2 id="matriaux">{@html applyBase("Matériaux")}</h2>
	{@html renderMarkdown("> Fait par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New#forgeron\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"Forgeron\">Forgeron</a> pour rendre les armes efficaces contre certaines créatures.\n> La propriété VS ne concerne que les armes Tranchantes et Perforantes.\n> La propriété VS confère un malus non cumulable au prochain tour de la cible.\n\nVS 1 = Désavantage pour la cible\nVS 2 = Désavantage pour la cible + Résistance -1\n\tDiminue la résistance d'un rang pour cette attaque (Absorption → Immunisé → Résistance → Rien → Faiblesse)\n\n| Matériau   | Effet                  | Prix/ unité | Poids/ unité | Rareté     |\n| ---------- | :--------------------- | ----------: | -----------: | :--------- |\n| Cuivre     | VS 1 - Plantes         |       50 pc |         2 kg | Déchet     |\n| Argent     | VS 1 - Hybrides        |       50 pa |         2 kg | Commun     |\n| Electrum   | VS 1 - Magiques        |       10 po |         2 kg | Peu Commun |\n| Or         | VS 1 - Mythiques       |       50 po |         4 kg | Rare       |\n| Platine    | VS 1 - Humanoïdes      |      500 po |         3 kg | Légendaire |\n| Fonte      | VS 2 - Nécrophages     |        2 pa |       1.5 kg | Déchet     |\n| Fer        | VS 2 - VS Bêtes        |       10 pa |         1 kg | Commun     |\n| Bronze     | VS 2 - VS Insectoïdes  |       25 pa |       1.5 kg | Commun     |\n| Acier      | VS 2 - VS Mutants      |       50 pa |         1 kg | Commun     |\n| Titane     | VS 2 - VS Invocations  |        1 po |       1.5 kg | Peu Commun |\n| Mythril    | VS 2 - VS Elementaires |        5 po |         1 kg | Rare       |\n| Adamantite | VS 2 - VS Draconides   |        7 po |         2 kg | Rare       |\n| Palladium  | VS 2 - VS Anges        |        7 po |         2 kg | Rare       |\n| Orichalque | VS 2 - VS Démons       |       10 po |       2.5 kg | Légendaire |\n")}

	</section>
{/snippet}

{#snippet infusions()}
	<section>
		<h2 id="infusions">{@html applyBase("Infusions")}</h2>
	{@html renderMarkdown("> Fait par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition#joaillier\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"Joaillier\">Joaillier</a> pour déterminer leur dégâts (DMG [1 - 4]).\n> Utilise 1 Gemme pour altérer la structure de l'arme, et donc son utilisation.\n> Les dégâts d'une arme ne peuvent pas être négatif.\n\n| Matériau                          | Dégâts | Modificateur                                                                                      | Effets                               |\n| --------------------------------- | -----: | ------------------------------------------------------------------------------------------------- | ------------------------------------ |\n| Rien                              |      8 | Modificateur                                                                                      | ---                                  |\n| Gemme Brute                       |   +DMG | ---                                                                                               | ---                                  |\n| Gemme Puissante                   |  +2DMG | Diminue les dés de 1 niveau                                                                       | ---                                  |\n| Gemme d'Equilibre                 |   -DMG | Modificateur(Compétence)<br>*valeur max : Rareté de la gemme*                                     | Huiles                               |\n| Gemme de Balance                  |  -2DMG | Augmente les dés de 1 niveau<br>Modificateur(Compétence)<br>*valeur max : 2 × Rareté de la gemme* | Huiles                               |\n| Gemme de Crystal<br>*Peu Commune* |     -2 | Modificateur                                                                                      | Magie :<br>1 Magie (Feu, Foudre, ..) |\n| Gemme de Crystal<br>*Rare*        |     -4 | Modificateur                                                                                      | Magie :<br>Croitiste ou Eletiste     |\n| Gemme de Crystal<br>*Légendaire*  |     -8 | ---                                                                                               | Magie :<br>Universelle               |\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles"} fragment={""} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Magies"} fragment={""} />

	</section>
{/snippet}
