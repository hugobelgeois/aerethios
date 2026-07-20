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
          "id": "maniabilit",
          "text": "Maniabilité",
          "level": 3
      },
      {
          "id": "type",
          "text": "Type",
          "level": 3
      },
      {
          "id": "matriaux",
          "text": "Matériaux",
          "level": 2
      },
      {
          "id": "concentration",
          "text": "Concentration",
          "level": 3
      },
      {
          "id": "revtements",
          "text": "Revêtements",
          "level": 3
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
      },
      {
          "id": "styles",
          "text": "Styles",
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
		{@render catgories()}
		{@render matriaux()}
		{@render infusions()}
		{@render styles()}
  </div>
</article>

<LinkPreview />

{#snippet catgories()}
	<section>
		<h2 id="catgories">{@html applyBase("Catégories")}</h2>
	{@html renderMarkdown("> Dé + Modificateur >= AC --> Dégâts aux HP en déduisant la DR.\n")}
	{@render maniabilit()}
	{@render type()}
	</section>
{/snippet}

{#snippet maniabilit()}
	<section>
		<h3 id="maniabilit">{@html applyBase("Maniabilité")}</h3>
	{@html renderMarkdown("> Le prix de la main d'oeuvre (en plus des matériaux) est généralement de 5pa/jour.\n\n| Catégorie | Dé   | Dégâts (Multiplicateur) |                                                                    Propriétés                                                                     | Matériaux | Durée de fabrication |\n| --------- | ---- | :---------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: | --------: | -------------------: |\n| Courte    | 2d10 |           .5            | Ambidextre (peut jouer une deuxième fois avec l'arme dans son autre main)<br>Infiltration (Les Huiles s'appliquent peu importe la DR de la cible) |         1 |                  1 j |\n| 1 Main    | 2d8  |            1            |                                     Ambidextre (peut jouer une deuxième fois avec l'arme dans son autre main)                                     |         2 |                  2 j |\n| 2 Mains   | 2d6  |           1.5           |                                                   Destructrice (Double la dégradation de la DR)                                                   |         3 |                  4 j |\n")}

	</section>
{/snippet}

{#snippet type()}
	<section>
		<h3 id="type">{@html applyBase("Type")}</h3>
	{@html renderMarkdown("> Dégrade la DR d'une armure selon son poids (jusqu'à sa réparation).\n\n| Type       | Armure Légère | Intermédiaire | Lourde |\n| ---------- | ------------- | ------------- | ------ |\n| Contondant | 0             | 0             | -3     |\n| Tranchant  | -1            | -1            | 0      |\n")}

	</section>
{/snippet}

{#snippet matriaux()}
	<section>
		<h2 id="matriaux">{@html applyBase("Matériaux")}</h2>

	{@render concentration()}
	{@render revtements()}
	</section>
{/snippet}

{#snippet concentration()}
	<section>
		<h3 id="concentration">{@html applyBase("Concentration")}</h3>
	{@html renderMarkdown("> La concentration du métal dans les lingots utilisés.\n> Les multiplicateurs s'arrondissent vers le bas.\n\n| Concentration | Dégâts | Prix<br>(Multiplicateur) | Poids<br>(Multiplicateur) | Durée de fabricaton |         Note          |\n| ------------- | :----: | -----------------------: | :------------------------ | ------------------: | :-------------------: |\n| 25%           |   6    |                        1 | 0.5                       |                   - |          ---          |\n| 50%           |   8    |                      1.5 | 1                         |                 1 j |          ---          |\n| 75%           |   10   |                        2 | 1.5                       |                 3 j |          ---          |\n| 100%          |   14   |                        4 | 2                         |                 6 j | Contondant uniquement |\n")}

	</section>
{/snippet}

{#snippet revtements()}
	<section>
		<h3 id="revtements">{@html applyBase("Revêtements")}</h3>
	{@html renderMarkdown("> Le métal qui aura un effet selon le type de créature qu'il pénétrera.\n> La propriété VS ne concerne que les armes Tranchantes.\n> La propriété VS confère un malus non cumulable aux lancés de dé de la cible pour le combat.\n\nVS 1 = Désavantage pour la cible\nVS 2 = -1 dé pour la cible\n\n| Matériau   |        Effet         | Prix/ unité | Poids/ unité |     Rareté |\n| ---------- | :------------------: | ----------: | -----------: | ---------: |\n| Cuivre     |     VS 1 Plantes     |       50 pc |         2 kg |     Déchet |\n| Argent     |    VS 1 Hybrides     |       50 pa |         2 kg |     Commun |\n| Electrum   |    VS 1 Magiques     |       10 po |         2 kg | Peu Commun |\n| Or         |    VS 1 Mythiques    |       50 po |         4 kg |       Rare |\n| Platine    |   VS 1 Humanoïdes    |      500 po |         3 kg | Légendaire |\n| Fonte      |   VS 2 Nécrophages   |        2 pa |       1.5 kg |     Déchet |\n| Fer        |    VS 2 VS Bêtes     |       10 pa |         1 kg |     Commun |\n| Bronze     | VS 2 VS Insectoïdes  |       25 pa |       1.5 kg |     Commun |\n| Acier      |   VS 2 VS Mutants    |       50 pa |         1 kg |     Commun |\n| Titane     | VS 2 VS Invocations  |        1 po |       1.5 kg | Peu Commun |\n| Mythril    | VS 2 VS Elementaires |        5 po |         1 kg |       Rare |\n| Adamantite |  VS 2 VS Draconides  |        7 po |         2 kg |       Rare |\n| Palladium  |    VS 2 VS Anges     |        7 po |         2 kg |       Rare |\n| Orichalque |    VS 2 VS Démons    |       10 po |       2.5 kg | Légendaire |\n")}

	</section>
{/snippet}

{#snippet infusions()}
	<section>
		<h2 id="infusions">{@html applyBase("Infusions")}</h2>
	{@html renderMarkdown("> Utilise 1 Gemme pour altérer la structure de l'arme, et donc son utilisation.\n> Les dégâts d'une arme ne peuvent pas être négatif.\n\n| Matériau                                      | Dégâts | Modificateur                   | Utilisation |  Prix | Durée de fabrication |\n| --------------------------------------------- | ------ | ------------------------------ | ----------- | ----: | -------------------: |\n| Gemme Brute                                   | +5     | ---                            | Huiles      | 20 pa |                  2 j |\n| Gemme Puissante                               | +10    | ---<br>Désavantage             | Huiles      | 40 pa |                  5 j |\n| Gemme d'Equilibre                             | -2     | Dextérité\\|Force               | Huiles      | 20 pa |                  2 j |\n| Gemme de Balance                              | -4     | Dextérité(Ranger)\\|Force(Monk) | Huiles      | 40 pa |                  5 j |\n| Gemme de Crystal<br>1 Magie (Feu, Foudre, ..) | -2     | ---                            | Magie       | 20 pa |                  2 j |\n| Gemme de Crystal<br>Croitiste ou Eletiste     | -6     | ---                            | Magie       | 40 pa |                  5 j |\n| Gemme de Crystal<br>Universelle               | -10    | ---                            | Magie       | 80 pa |                 10 j |\n")}
	{@render magie()}
	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html applyBase("Magie")}</h3>
	{@html renderMarkdown("> Permet d'imprégner l'arme de la magie concernée.\n\nConvertit les dégâts de l'arme en dégâts magiques, et les augmente de 4 par crystal dépensé.\nLes dégâts magiques sont réduits de moitié si la cible a une résistance à cette magie.\n\tIls sont doublés si la cible a une faiblesse à cette magie.\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles"} fragment={"Huiles"} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles"} fragment={"Enchantements d'Arme de mêlée"} />

	</section>
{/snippet}

{#snippet styles()}
	<section>
		<h2 id="styles">{@html applyBase("Styles")}</h2>
	{@html renderMarkdown("> En début de combat, le joueur peut lancer 1d10 + Maîtrise pour appliquer un seul style.\n> Si le jet réussit, l'effet est positif, sinon il est négatif.\n> Un style s'apprend et s'améliore auprès d'un Maître d'Arme.\n\n| **Jet >=**            |  6  |  9  | 13  | 17  |\n| --------------------- | :-: | :-: | :-: | :-: |\n| **Valeur de l'Effet** |  1  |  2  |  3  |  4  |\n\n| Style        | Effet                                                                                        | Arme                    |\n| ------------ | -------------------------------------------------------------------------------------------- | ----------------------- |\n| Offensif     | Dégâts                                                                                       | \\*                      |\n| Défensif     | DR                                                                                           | Contondant<br>Tranchant |\n| Briseur      | Dégâts DR                                                                                    | Contondant              |\n| Conservateur | Durée des huiles                                                                             | Tranchant               |\n| Contre       | Contre-attaque<br>si la cible fait **dé d'arme < 2 \\* Valeur ** et qu'elle ne passe pas l'AC | Courte                  |\n| Esquive      | AC                                                                                           | 1 Main                  |\n| Clash        | Désarme<br>si la cible fait **1d10 < Valeur + Force(Barbare)**                               | 2 Mains                 |")}

	</section>
{/snippet}
