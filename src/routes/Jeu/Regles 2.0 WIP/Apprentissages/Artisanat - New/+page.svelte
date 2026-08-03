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
          "id": "artificier---wip",
          "text": "Artificier - WIP",
          "level": 3
      },
      {
          "id": "bijoutier",
          "text": "Bijoutier",
          "level": 3
      },
      {
          "id": "enchanteur",
          "text": "Enchanteur",
          "level": 3
      },
      {
          "id": "forgeron",
          "text": "Forgeron",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Artisanat - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Artisanat - New</h1>
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
	{@html renderMarkdown("\n| Durée | Interruption | Amélioration | Déconstruction                                                                    | Consommation | Echec                     |\n| :---: | :----------: | :----------: | :-------------------------------------------------------------------------------- | :----------: | :------------------------ |\n|  4h   |      V       |      V       | Durée : 50% du temps de construction<br>**(6+1d2) \\* 10%** de matériaux récupérés |      -       | - +1 ingrédient inférieur |\n\n<span class=\"wiki-unresolved\">Rappel</span>\n")}

	</section>
{/snippet}

{#snippet spcialisations()}
	<section>
		<h2 id="spcialisations">{@html applyBase("Spécialisations")}</h2>

	{@render artificier__Wip()}
	{@render bijoutier()}
	{@render enchanteur()}
	{@render forgeron()}
	</section>
{/snippet}

{#snippet artificier__Wip()}
	<section>
		<h3 id="artificier---wip">{@html applyBase("Artificier - WIP")}</h3>
	{@html renderMarkdown("> Création d'armes à feu, d'automations, de mécanismes et d'explosifs.\n> ~20pa/h\n")}

	</section>
{/snippet}

{#snippet bijoutier()}
	<section>
		<h3 id="bijoutier">{@html applyBase("Bijoutier")}</h3>
	{@html renderMarkdown("> Selon la rareté de l'ingrédient, augmente le nombre de magies qu'un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"\">Alchimiste</a> peut canaliser dedans.\n> ~20pa/h\n\n| Déchet | Commun | Peu Commun | Rare | Légendaire |\n| :----: | :----: | :--------: | :--: | :--------: |\n|   +1   |   +2   |     +3     |  +5  |     +7     |\n")}

	</section>
{/snippet}

{#snippet enchanteur()}
	<section>
		<h3 id="enchanteur">{@html applyBase("Enchanteur")}</h3>
	{@html renderMarkdown("> Prépare l'équipement pour accueillir l'enchantement d'un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"\">Érudit</a> sans imploser.\n> Les chances de réussite varient selon la rareté de l'ingrédient.\n> ~50pa/h\n\n| Rareté                        | Déchet | Commun | Peu Commun | Rare | Légendaire |\n| ----------------------------- | :----: | :----: | :--------: | :--: | :--------: |\n| **Bonus sur le Taux d'Échec** |   +1   |   +2   |     +3     |  +5  |     +7     |\n")}

	</section>
{/snippet}

{#snippet forgeron()}
	<section>
		<h3 id="forgeron">{@html applyBase("Forgeron")}</h3>
	{@html renderMarkdown("> Fabrique des armes (sauf armes à feu) et des armures en tout genre et de tous matériaux.\n> Les minerais sont classés par rareté, qui en elle-même ne change rien au résultat final.\n> ~5pa/h")}

	</section>
{/snippet}
