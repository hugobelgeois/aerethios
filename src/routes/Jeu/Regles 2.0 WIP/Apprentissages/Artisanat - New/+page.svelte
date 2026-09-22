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
		{@render preamble()}
		{@render rappel()}
		{@render spcialisations()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("---\r\ntags:\r\n  - Règles\r\n---\r")}
{/snippet}

{#snippet rappel()}
	<section>
		<h3 id="rappel">{@html applyBase("Rappel")}</h3>
	{@html renderMarkdown("\r\n| Durée | Interruption | Amélioration | Déconstruction                                                     | Consommation | Echec                     |\r\n| :---: | :----------: | :----------: | :----------------------------------------------------------------- | :----------: | :------------------------ |\r\n|  4h   |     Oui      |     Oui      | Durée : 50% du temps de construction<br>50% de matériaux récupérés |      -       | - +1 ingrédient inférieur |\r\n\r\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Rappel"} fragment={""} />

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
	{@html renderMarkdown("> Création d'armes à feu, d'automations, de mécanismes et d'explosifs.\r\n> ~20pa/h\r\n\r")}

	</section>
{/snippet}

{#snippet bijoutier()}
	<section>
		<h3 id="bijoutier">{@html applyBase("Bijoutier")}</h3>
	{@html renderMarkdown("> Selon la rareté de l'ingrédient, augmente le nombre de magies qu'un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"\">Alchimiste</a> peut canaliser dedans.\r\n> ~20pa/h\r\n\r\n| Déchet | Commun | Peu Commun | Rare | Légendaire |\r\n| :----: | :----: | :--------: | :--: | :--------: |\r\n|   +1   |   +2   |     +3     |  +5  |     +7     |\r\n\r")}

	</section>
{/snippet}

{#snippet enchanteur()}
	<section>
		<h3 id="enchanteur">{@html applyBase("Enchanteur")}</h3>
	{@html renderMarkdown("> Prépare l'équipement pour accueillir l'enchantement d'un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"\">Érudit</a> sans imploser.\r\n> Les chances de réussite varient selon la rareté de l'ingrédient.\r\n> ~50pa/h\r\n\r\n| Rareté                        | Déchet | Commun | Peu Commun | Rare | Légendaire |\r\n| ----------------------------- | :----: | :----: | :--------: | :--: | :--------: |\r\n| **Bonus sur le Taux d'Échec** |   +1   |   +2   |     +3     |  +5  |     +7     |\r\n\r")}

	</section>
{/snippet}

{#snippet forgeron()}
	<section>
		<h3 id="forgeron">{@html applyBase("Forgeron")}</h3>
	{@html renderMarkdown("> Fabrique des armes (sauf armes à feu) et des armures en tout genre et de tous matériaux.\r\n> Les minerais sont classés par rareté, qui en elle-même ne change rien au résultat final.\r\n> ~5pa/h")}

	</section>
{/snippet}
