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
          "id": "enchanteur---wip",
          "text": "Enchanteur - WIP",
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
	{@html renderMarkdown("\n| Durée | Interruption | Amélioration | Déconstruction | Consommation | Echec                                                                              |\n| :---: | :----------: | :----------: | :------------: | :----------: | :--------------------------------------------------------------------------------- |\n|  1h   |      X       |      X       |       X        |  1 Crystal   | - +1 ingrédient inférieur<br>- Possibilité d'effet négatif ajouté au joueur (DC 5) |\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Fabrication"} fragment={""} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Recolte"} fragment={""} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Lieu"} fragment={""} />

	</section>
{/snippet}

{#snippet spcialisations()}
	<section>
		<h2 id="spcialisations">{@html applyBase("Spécialisations")}</h2>

	{@render enchanteur__Wip()}
	{@render invocateur()}
	{@render joaillier()}
	{@render runniste__Wip()}
	</section>
{/snippet}

{#snippet enchanteur__Wip()}
	<section>
		<h3 id="enchanteur---wip">{@html applyBase("Enchanteur - WIP")}</h3>
	{@html renderMarkdown("> Enchante les équipements fabriquées par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"\">Artisan</a> ainsi que certaines matières inorganiques pour leur conférer des capacités spéciales.\n> Infuse\n> ~2po/h\n\nDes ingrédients plus rares augmentent les chances d'avoir de meilleurs enchantements.\n")}

	</section>
{/snippet}

{#snippet invocateur()}
	<section>
		<h3 id="invocateur">{@html applyBase("Invocateur")}</h3>
	{@html renderMarkdown("> Insuffle de la vie et de la puissance dans un élémentaire inerte créé par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"\">Alchimiste</a>.\n> ~1po/h\n\n| Déchet | Commun | Peu Commun | Rare | Légendaire |\n| :----: | :----: | :--------: | :--: | :--------: |\n|   -    |   -    |     x1     |  x2  |     x3     |\nLa puissance de l'élémentaire varie selon la rareté des ingrédients.\n")}

	</section>
{/snippet}

{#snippet joaillier()}
	<section>
		<h3 id="joaillier">{@html applyBase("Joaillier")}</h3>
	{@html renderMarkdown("> Infuse des gemmes dans les armes pour modifier leur comportement.\n> ~/h\n\n| Déchet | Commun | Peu Commun | Rare | Légendaire |\n| :----: | :----: | :--------: | :--: | :--------: |\n|   -    |   -    |     1      |  2   |     4      |\n\nLa modification de dégâts de l'arme varie selon la rareté de l'ingrédient.\n")}

	</section>
{/snippet}

{#snippet runniste__Wip()}
	<section>
		<h3 id="runniste---wip">{@html applyBase("Runniste - WIP")}</h3>
	{@html renderMarkdown("> Schématise la magie sous forme de gravure, peinture et autre pour la préparer à l'avance et la déclencher à distance.\n> ~50pa/h")}

	</section>
{/snippet}
