<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
          "id": "maniabilit",
          "text": "Maniabilité",
          "level": 3
      },
      {
          "id": "prcision",
          "text": "Précision",
          "level": 2
      },
      {
          "id": "distance-taille-et-couvert",
          "text": "Distance, Taille et Couvert",
          "level": 3
      },
      {
          "id": "entretien",
          "text": "Entretien",
          "level": 2
      },
      {
          "id": "incidents",
          "text": "Incidents",
          "level": 3
      },
      {
          "id": "effets-supplmentaires",
          "text": "Effets Supplémentaires",
          "level": 2
      },
      {
          "id": "munitions",
          "text": "Munitions",
          "level": 3
      },
      {
          "id": "propulsion",
          "text": "Propulsion",
          "level": 3
      },
      {
          "id": "huiles",
          "text": "Huiles",
          "level": 3
      },
      {
          "id": "enchantements",
          "text": "Enchantements",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Armes à distances - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Armes à distances - New</h1>
  </header>
  <div class="markdown-rendered">
		{@render catgories()}
		{@render prcision()}
		{@render entretien()}
		{@render effetsSupplmentaires()}
  </div>
</article>

<LinkPreview />

{#snippet catgories()}
	<section>
		<h2 id="catgories">Catégories</h2>
	{@html renderMarkdown("> Dé + Modificateur >= DR --> Dégâts aux HP en déduisant la DR.\n> Une réussite critique (tous les dés au max) ignore la DR.\n")}
	{@render type()}
	{@render maniabilit()}
	</section>
{/snippet}

{#snippet type()}
	<section>
		<h3 id="type">Type</h3>
	{@html renderMarkdown("> Le prix de la main d'œuvre (en plus des matériaux) est généralement de 5pa/jour.\n> Les armes à distances sont perforantes.\n\n| Catégorie  | Dégâts | Ignore la DR | Précision | Recharge  | Durée de fabrication |\n| ---------- | :----: | :----------: | :-------: | :-------: | -------------------: |\n| Arc        |   8    |     25%      |     0     |     -     |                  1 j |\n| Arbalète   |   14   |     50%      |   -4 DC   | 1 action  |                  3 j |\n| Arme à feu |   25   |     75%      |   +4 DC   | 2 actions |                  8 j |\n")}

	</section>
{/snippet}

{#snippet maniabilit()}
	<section>
		<h3 id="maniabilit">Maniabilité</h3>
	{@html renderMarkdown("> Influe la taille et les dégâts.\n\n|                  |   Petit/ Léger    |      Normal      | Grand/ Lourd |\n| ---------------- | :---------------: | :--------------: | :----------: |\n| **Dés**          |       2d10        |       2d8        |     2d6      |\n| **Fabrication**  |         -         |       x2 j       |     x3 j     |\n| **Modificateur** | Dextérité(Ranger) | Dextérité\\|Force | Force(Monk)  |\n| **Posture**      | 1 Main (sauf Arc) |     2 Mains      |   2 Mains    |\n\n| Dégâts | Arc | Arbalète | Arme à feu |\n| ------ | :-: | :------: | :--------: |\n| Petit  |  6  |    10    |     18     |\n| Normal |  8  |    14    |     26     |\n| Grand  | 10  |    18    |     34     |\n")}

	</section>
{/snippet}

{#snippet prcision()}
	<section>
		<h2 id="prcision">Précision</h2>
	{@html renderMarkdown("> Les armes à distance ignorent l'AC de la cible, car les tirs sont trop rapides que pour esquiver.\n")}
	{@render distanceTailleEtCouvert()}
	</section>
{/snippet}

{#snippet distanceTailleEtCouvert()}
	<section>
		<h3 id="distance-taille-et-couvert">Distance, Taille et Couvert</h3>
	{@html renderMarkdown("> La taille et la distance de la cible, ainsi que les obstacles entre elle et le tireur, changent la difficulté du jet pour toucher.\n\n| Distance | 2m  | 5m  | 10m | 15m | 20m | 25m |\n| -------- | --- | --- | --- | --- | --- | --- |\n| **DC**   | +2  | +4  | +8  | +12 | +16 | +20 |\n\n| Taille | Minuscule | Petit | Normal | Grand | Géant | Gargantuesque |\n| ------ | --------- | ----- | ------ | ----- | ----- | ------------- |\n| **DC** | +8        | +4    | 0      | -4    | -8    | -12           |\n\n| Couvert | Léger | Moyen | Total      |\n| ------- | ----- | ----- | ---------- |\n| **DC**  | +2    | +4    | Impossible |\n")}

	</section>
{/snippet}

{#snippet entretien()}
	<section>
		<h2 id="entretien">Entretien</h2>
	{@html renderMarkdown("> Une arme doit être entretenue régulièrement si on veut qu'elle soit toujours aussi efficace.\n\n|                         | Resplendissante | Neuve         | Usée          | Abîmée        | Critique |\n| ----------------------- | --------------- | ------------- | ------------- | ------------- | -------- |\n| **Dés**                 | Avantage        | -             | -1            | -2            | -4       |\n| **Prix**                | 5 pa            | 50 pc         | -             | -             | -        |\n| **Durée d'Entretien**   | 1 j             | 1 h           | -             | -             | -        |\n| **Durée d'Utilisation** | 1 semaine       | 1d4+6 combats | 1d4+4 combats | 1d4+2 combats | -        |\n| **Prérequis**           | Forge           | Aiguisoir     | -             | -             | -        |\n")}
	{@render incidents()}
	</section>
{/snippet}

{#snippet incidents()}
	<section>
		<h3 id="incidents">Incidents</h3>
	{@html renderMarkdown("> Les armes à feu peuvent se détériorer à chaque tir.\n> Le risque est plus grand avec les armes plus lourdes car elles émettent plus de puissance.\n\n| Petit/ Léger | Normal   | Grand/ Lourd         |\n| ------------ | -------- | -------------------- |\n| Double 1     | Double 1 | Double 1 ou Double 2 |\n\n| Incident 1                                    | Incident 2                        | Incident avec un état Critique |\n| --------------------------------------------- | --------------------------------- | ------------------------------ |\n| L'arme est coincée<br>(1 tour pour décoincer) | L'état de l'arme devient Critique | L'arme n'est plus récupérable  |\n")}

	</section>
{/snippet}

{#snippet effetsSupplmentaires()}
	<section>
		<h2 id="effets-supplmentaires">Effets Supplémentaires</h2>

	{@render munitions()}
	{@render propulsion()}
	{@render huiles()}
	{@render enchantements()}
	</section>
{/snippet}

{#snippet munitions()}
	<section>
		<h3 id="munitions">Munitions</h3>
	{@html renderMarkdown("> Les munitions utilisées avec une arme à feu possèdent leur propre propriété.\n\n| Type     | Prix/ unité |                                Propriétés                                 | Nombre de munition/ matériau |\n| -------- | ----------: | :-----------------------------------------------------------------------: | :--------------------------: |\n| Minerai  |          -- |                                    ---                                    |           2d4 +12            |\n| Plomb    |        5 pc |                                 Antimagie                                 |           2d6 + 8            |\n| Crystal  |        1 po |            <a href=\"%%BASE%%/Jeu/Regles/Statuts/Afflictions#surcharge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Afflictions\" data-wiki-fragment=\"Surcharge%5C\">Surcharge</a><br>5 munitions            |           2d4 + 2            |\n| Potion   |          -- |                        Zone d'effet de 5m de rayon                        |              1               |\n| Shrapnel |       20 pa |         <a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lacration\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lac%C3%A9ration%5C\">Lacération</a><br>Portée Max = 10m         |            2d4 +4            |\n| Boulet   |       50 pa | La cible touchée est <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#couch\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Couch%C3%A9%5C\">Couchée</a><br>Arme à feu(Lourde) |              1               |")}

	</section>
{/snippet}

{#snippet propulsion()}
	<section>
		<h3 id="propulsion">Propulsion</h3>
	{@html renderMarkdown("> Altère la technologie qui propulse les munitions, ce qui influe ses dégâts et ses propriétés.\n\n| Type         | Dégâts<br>(Multiplicateur) | Prix<br>(Multiplicateur) | Propriétés                                            |\n| ------------ | :------------------------: | -----------------------: | ----------------------------------------------------- |\n| Corde        |             1              |                       .5 | ---                                                   |\n| Poudre noire |            1.25            |                        1 | Bruyant et lumineux. Attire les ennemis proches (1km) |\n| Air comprimé |            .75             |                        1 | Sliencieux                                            |\n| Magnétique   |            1.5             |                        2 | L'arme se dégrade à chaque tir                        |\n| Magique      |             1              |                        1 | Consomme de la magie plutôt que des munitions         |\n")}

	</section>
{/snippet}

{#snippet huiles()}
	<section>
		<h3 id="huiles">Huiles</h3>
	{@html renderMarkdown("> Ajoute temporairement l'effet d'1 huile à votre arme (dure 1 combat).\n> Les huiles ne s'appliquent que sur les Arcs et Arbalètes.\n> Se fabrique par un Alchimiste(Potionniste).\n\n| Afflictions    | Effets                | Durée   | Soins           | Cumulable              |  Prix | Durée de fabrication |\n| -------------- | --------------------- | ------- | --------------- | ---------------------- | ----: | -------------------: |\n| Saignement     | -2HP/ tour            | 3 tours | Gel cicatrisant | Oui                    | 10 pa |                  2 j |\n| Hémorragie     | -2HP/ action          | 2 tours | Gel cicatrisant | Oui<br>+Reset la durée | 25 pa |                  5 j |\n| Poison         | -1HP/ tour            | -       | Antipoison      | -                      | 10 pa |                  2 j |\n| Toxique        | -4HP/ action          | 2 tours | -               | -                      | 25 pa |                  5 j |\n| Nausée         | -2 à son dé d'attaque | 3 tours | -               | -                      | 10 pa |                  2 j |\n| Discombobulate | Dé d'attaque / 2      | -       | Repos Court     | -                      | 25 pa |                  5 j |\n| Aveuglement    |                       |         |                 |                        |       |                      |\n")}

	</section>
{/snippet}

{#snippet enchantements()}
	<section>
		<h3 id="enchantements">Enchantements</h3>
	{@html renderMarkdown("> Ajoute des effets uniques à l'arme.\n> Enchanter une arme possède un risque de la détruire ?\n\n| Enchantement | Effet                                                                                                                               | Prix | Durée de fabrication |\n| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ---: | -------------------: |\n| Double coup  | Permet de préparer une deuxième munition avant le combat<br>(on ne peut toujours tirer qu'1 munition par action)                    | ? po |                 20 j |\n| Ellipse      | Réduit le DC de 2 lorsque la cible est partiellement couverte<br>Si elle est complètement couverte, la DC additionnelle devient +10 | ? po |                 20 j |\n| Solide       | Les munitions peuvent toutes être récupérées                                                                                        | ? po |                 20 j |")}

	</section>
{/snippet}
