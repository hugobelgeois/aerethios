<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "rappel",
          "text": "Rappel",
          "level": 3
      },
      {
          "id": "spcialisations",
          "text": "Spécialisations",
          "level": 2
      },
      {
          "id": "enchanteur",
          "text": "Enchanteur",
          "level": 3
      },
      {
          "id": "invocateur",
          "text": "Invocateur",
          "level": 3
      },
      {
          "id": "joaillier",
          "text": "Joaillier",
          "level": 3
      },
      {
          "id": "runniste---wip",
          "text": "Runniste - WIP",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Érudition</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Érudition</h1>
  </header>
  <div class="markdown-rendered">
		{@render rappel()}
		{@render spcialisations()}
  </div>
</article>

<LinkPreview />

{#snippet rappel()}
	<section>
		<h3 id="rappel">{@html applyBase("Rappel")}</h3>
	{@html renderMarkdown("\n| Durée | Interruption | Amélioration | Déconstruction | Consommation | Echec                                                                                 |\n| :---: | :----------: | :----------: | :------------: | :----------: | :------------------------------------------------------------------------------------ |\n|  1h   |      X       |      X       |       X        |  1 Crystal   | Perte de l'objet de base<br>Possibilité d'effet négatif ajouté au joueur (`1d20 < 5`) |\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Rappel"} fragment={""} />

	</section>
{/snippet}

{#snippet spcialisations()}
	<section>
		<h2 id="spcialisations">{@html applyBase("Spécialisations")}</h2>

	{@render enchanteur()}
	{@render invocateur()}
	{@render joaillier()}
	{@render runniste__Wip()}
	</section>
{/snippet}

{#snippet enchanteur()}
	<section>
		<h3 id="enchanteur">{@html applyBase("Enchanteur")}</h3>
	{@html renderMarkdown("> Enchante les équipements fabriquées par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"\">Artisan</a> ainsi que certaines matières inorganiques pour leur conférer des capacités spéciales.\n> ~2po/h\n\n|                             | Peu Commun | Rare | Légendaire |\n| --------------------------- | :--------: | :--: | :--------: |\n| **Enchantement commun**     |    1-6     | 7-9  |     10     |\n| **Enchantement rare**       |    1-4     | 5-8  |    9-10    |\n| **Enchantement légendaire** |    1-2     | 3-6  |    7-10    |\n\nDes ingrédients plus rares augmentent les chances d'avoir de meilleurs enchantements.\nLa rareté de l'enchantement obtenu se détermine par `1d10`.\nL'enchantement précis se détermine par la recette utilisée par le joueur.\n")}

	</section>
{/snippet}

{#snippet invocateur()}
	<section>
		<h3 id="invocateur">{@html applyBase("Invocateur")}</h3>
	{@html renderMarkdown("> Insuffle de la vie et de la puissance dans un élémentaire inerte créé par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"\">Alchimiste</a>.\n> ~1po/h\n\n| Peu Commun | Rare | Légendaire |\n| :--------: | :--: | :--------: |\n|     x1     |  x2  |     x3     |\nLa puissance de l'élémentaire varie selon la rareté des ingrédients.\n")}

	</section>
{/snippet}

{#snippet joaillier()}
	<section>
		<h3 id="joaillier">{@html applyBase("Joaillier")}</h3>
	{@html renderMarkdown("> Infuse des gemmes dans les armes pour modifier leur comportement.\n> ~50pa/h\n\n| Peu Commun | Rare | Légendaire |\n| :--------: | :--: | :--------: |\n|     1      |  2   |     4      |\n\nLa modification de dégâts de l'arme varie selon la rareté de l'ingrédient.\n")}

	</section>
{/snippet}

{#snippet runniste__Wip()}
	<section>
		<h3 id="runniste---wip">{@html applyBase("Runniste - WIP")}</h3>
	{@html renderMarkdown("> Schématise la magie sous forme de gravure, peinture et autre pour la préparer à l'avance et la déclencher à distance.\n> ~50pa/h")}

	</section>
{/snippet}
