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
          "id": "artificier",
          "text": "Artificier",
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
	{@html renderMarkdown("\n| Durée | Interruption | Amélioration | Déconstruction                                                                    | Consommation | Echec                     |\n| :---: | :----------: | :----------: | :-------------------------------------------------------------------------------- | :----------: | :------------------------ |\n|  8h   |      V       |      V       | Durée : 50% du temps de construction<br>**(6+1d2) \\* 10%** de matériaux récupérés |      -       | - +1 ingrédient inférieur |\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Fabrication"} fragment={""} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Recolte"} fragment={""} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Lieu"} fragment={""} />

	</section>
{/snippet}

{#snippet spcialisations()}
	<section>
		<h2 id="spcialisations">{@html applyBase("Spécialisations")}</h2>

	{@render artificier()}
	{@render bijoutier()}
	{@render enchanteur()}
	{@render forgeron()}
	</section>
{/snippet}

{#snippet artificier()}
	<section>
		<h3 id="artificier">{@html applyBase("Artificier")}</h3>
	{@html renderMarkdown("> Les minerais sont classés par rareté.\n> La rareté en elle-même ne change rien au résultat final.\n")}

	</section>
{/snippet}

{#snippet bijoutier()}
	<section>
		<h3 id="bijoutier">{@html applyBase("Bijoutier")}</h3>
	{@html renderMarkdown("> Selon la rareté de l'ingrédient, augmente le nombre de magie qu'un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"\">Alchimiste</a> peut canaliser dedans.\n\n| Déchet | Commun | Peu Commun | Rare | Légendaire |\n| :----: | :----: | :--------: | :--: | :--------: |\n|   +1   |   +2   |     +3     |  +5  |     +7     |\n")}

	</section>
{/snippet}

{#snippet enchanteur()}
	<section>
		<h3 id="enchanteur">{@html applyBase("Enchanteur")}</h3>
	{@html renderMarkdown("\nUn **Enchanteur** applique les **savoirs ésotériques** de son continent pour **améliorer les propriétés** d’une arme, d’une armure ou d’un objet.\nChaque continent possède ses **propres traditions enchantées**, offrant des avantages uniques mais aussi des **contreparties** spécifiques.\nL’enchanteur agit comme un pont entre **artisanat et magie**, infusant la matière de symboles, de runes ou d’essences spirituelles.\n")}

	</section>
{/snippet}

{#snippet forgeron()}
	<section>
		<h3 id="forgeron">{@html applyBase("Forgeron")}</h3>
	{@html renderMarkdown("> Les minerais sont classés par rareté.\n> La rareté en elle-même ne change rien au résultat final.")}

	</section>
{/snippet}
