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
	{@html renderMarkdown("> Dé + Modificateur >= AC --> Dégâts aux HP en déduisant la DR.\r\n\r")}
	{@render maniabilit()}
	{@render type()}
	</section>
{/snippet}

{#snippet maniabilit()}
	<section>
		<h3 id="maniabilit">{@html applyBase("Maniabilité")}</h3>
	{@html renderMarkdown("> Le prix de la main d'oeuvre (en plus des matériaux) est généralement de 5pa/jour.\r\n\r\n| Catégorie | Dé   | Dégâts (Multiplicateur) |                                                                    Propriétés                                                                     | Matériaux | Durée de fabrication |\r\n| --------- | ---- | :---------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: | --------: | -------------------: |\r\n| Courte    | 2d10 |           .5            | Ambidextre (peut jouer une deuxième fois avec l'arme dans son autre main)<br>Infiltration (Les Huiles s'appliquent peu importe la DR de la cible) |         1 |                  1 j |\r\n| 1 Main    | 2d8  |            1            |                                     Ambidextre (peut jouer une deuxième fois avec l'arme dans son autre main)                                     |         2 |                  2 j |\r\n| 2 Mains   | 2d6  |           1.5           |                                                   Destructrice (Double la dégradation de la DR)                                                   |         3 |                  4 j |\r\n\r")}

	</section>
{/snippet}

{#snippet type()}
	<section>
		<h3 id="type">{@html applyBase("Type")}</h3>
	{@html renderMarkdown("> Dégrade la DR d'une armure selon son poids (jusqu'à sa réparation).\r\n\r\n| Type       | Armure Légère | Intermédiaire | Lourde |\r\n| ---------- | ------------- | ------------- | ------ |\r\n| Contondant | 0             | 0             | -3     |\r\n| Tranchant  | -1            | -1            | 0      |\r\n\r")}

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
	{@html renderMarkdown("> La concentration du métal dans les lingots utilisés.\r\n> Les multiplicateurs s'arrondissent vers le bas.\r\n\r\n| Concentration | Dégâts | Prix<br>(Multiplicateur) | Poids<br>(Multiplicateur) | Durée de fabricaton |         Note          |\r\n| ------------- | :----: | -----------------------: | :------------------------ | ------------------: | :-------------------: |\r\n| 25%           |   6    |                        1 | 0.5                       |                   - |          ---          |\r\n| 50%           |   8    |                      1.5 | 1                         |                 1 j |          ---          |\r\n| 75%           |   10   |                        2 | 1.5                       |                 3 j |          ---          |\r\n| 100%          |   14   |                        4 | 2                         |                 6 j | Contondant uniquement |\r\n\r")}

	</section>
{/snippet}

{#snippet revtements()}
	<section>
		<h3 id="revtements">{@html applyBase("Revêtements")}</h3>
	{@html renderMarkdown("> Le métal qui aura un effet selon le type de créature qu'il pénétrera.\r\n> La propriété VS ne concerne que les armes Tranchantes.\r\n> La propriété VS confère un malus non cumulable aux lancés de dé de la cible pour le combat.\r\n\r\nVS 1 = Désavantage pour la cible\r\nVS 2 = -1 dé pour la cible\r\n\r\n| Matériau   |        Effet         | Prix/ unité | Poids/ unité |\r\n| ---------- | :------------------: | ----------: | -----------: |\r\n| Cuivre     |     VS 1 Plantes     |       50 pc |         2 kg |\r\n| Argent     |    VS 1 Hybrides     |       50 pa |         2 kg |\r\n| Electrum   |    VS 1 Magiques     |       10 po |         2 kg |\r\n| Or         |    VS 1 Mythiques    |       50 po |         4 kg |\r\n| Platine    |   VS 1 Humanoïdes    |      500 po |         3 kg |\r\n| Fonte      |   VS 2 Nécrophages   |        2 pa |       1.5 kg |\r\n| Fer        |    VS 2 VS Bêtes     |       10 pa |         1 kg |\r\n| Bronze     | VS 2 VS Insectoïdes  |       25 pa |       1.5 kg |\r\n| Acier      |   VS 2 VS Mutants    |       50 pa |         1 kg |\r\n| Titane     | VS 2 VS Invocations  |        1 po |       1.5 kg |\r\n| Mythril    | VS 2 VS Elementaires |        5 po |         1 kg |\r\n| Adamantite |  VS 2 VS Draconides  |        7 po |         2 kg |\r\n| Palladium  |    VS 2 VS Anges     |        7 po |         2 kg |\r\n| Orichalque |    VS 2 VS Démons    |       10 po |       2.5 kg |\r\n\r")}

	</section>
{/snippet}

{#snippet infusions()}
	<section>
		<h2 id="infusions">{@html applyBase("Infusions")}</h2>
	{@html renderMarkdown("> Utilise 1 Gemme pour altérer la structure de l'arme, et donc son utilisation.\r\n> Les dégâts d'une arme ne peuvent pas être négatif.\r\n\r\n| Matériau                                      | Dégâts | Modificateur                   | Utilisation |  Prix | Durée de fabrication |\r\n| --------------------------------------------- | ------ | ------------------------------ | ----------- | ----: | -------------------: |\r\n| Gemme Brute                                   | +5     | ---                            | Huiles      | 20 pa |                  2 j |\r\n| Gemme Puissante                               | +10    | ---<br>Désavantage             | Huiles      | 40 pa |                  5 j |\r\n| Gemme d'Equilibre                             | -2     | Dextérité\\|Force               | Huiles      | 20 pa |                  2 j |\r\n| Gemme de Balance                              | -4     | Dextérité(Ranger)\\|Force(Monk) | Huiles      | 40 pa |                  5 j |\r\n| Gemme de Crystal<br>1 Magie (Feu, Foudre, ..) | -2     | ---                            | Magie       | 20 pa |                  2 j |\r\n| Gemme de Crystal<br>Croitiste ou Eletiste     | -6     | ---                            | Magie       | 40 pa |                  5 j |\r\n| Gemme de Crystal<br>Universelle               | -10    | ---                            | Magie       | 80 pa |                 10 j |\r\n\r")}
	{@render magie()}
	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h3 id="magie">{@html applyBase("Magie")}</h3>
	{@html renderMarkdown("> Permet d'imprégner l'arme de la magie concernée.\r\n\r\nConvertit les dégâts de l'arme en dégâts magiques, et les augmente de 4 par crystal dépensé.\r\nLes dégâts magiques sont réduits de moitié si la cible a une résistance à cette magie.\r\n\tIls sont doublés si la cible a une faiblesse à cette magie.\r\n\r\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles"} fragment={"Huiles"} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles"} fragment={"Enchantements d'Arme de mêlée"} />

	</section>
{/snippet}

{#snippet styles()}
	<section>
		<h2 id="styles">{@html applyBase("Styles")}</h2>
	{@html renderMarkdown("> En début de combat, le joueur peut lancer 1d10 + Maîtrise pour appliquer un seul style.\r\n> Si le jet réussit, l'effet est positif, sinon il est négatif.\r\n> Un style s'apprend et s'améliore auprès d'un Maître d'Arme.\r\n\r\n| **Jet >=**            |  6  |  9  | 13  | 17  |\r\n| --------------------- | :-: | :-: | :-: | :-: |\r\n| **Valeur de l'Effet** |  1  |  2  |  3  |  4  |\r\n\r\n| Style        | Effet                                                                                        | Arme                    |\r\n| ------------ | -------------------------------------------------------------------------------------------- | ----------------------- |\r\n| Offensif     | Dégâts                                                                                       | \\*                      |\r\n| Défensif     | DR                                                                                           | Contondant<br>Tranchant |\r\n| Briseur      | Dégâts DR                                                                                    | Contondant              |\r\n| Conservateur | Durée des huiles                                                                             | Tranchant               |\r\n| Contre       | Contre-attaque<br>si la cible fait **dé d'arme < 2 \\* Valeur ** et qu'elle ne passe pas l'AC | Courte                  |\r\n| Esquive      | AC                                                                                           | 1 Main                  |\r\n| Clash        | Désarme<br>si la cible fait **1d10 < Valeur + Force(Barbare)**                               | 2 Mains                 |")}

	</section>
{/snippet}
