<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Artisanat - New"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Artisanat - New"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render rappel()}
		{@render spcialisations()}
  </div>
</article>

<LinkPreview />

{#snippet rappel()}
	<section>
		<h3 id="rappel">{@html "Rappel"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Durée</th><th>Interruption</th><th>Amélioration</th><th>Déconstruction</th><th>Consommation</th><th>Echec</th></tr></thead><tbody><tr><td>4h</td><td>Oui</td><td>Oui</td><td>Durée : 50% du temps de construction<br>50% de matériaux récupérés</td><td>-</td><td>- +1 ingrédient inférieur</td></tr></tbody></table></div>"}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Rappel"} fragment={""} />

	</section>
{/snippet}

{#snippet spcialisations()}
	<section>
		<h2 id="spcialisations">{@html "Spécialisations"}</h2>

	{@render artificier__Wip()}
	{@render bijoutier()}
	{@render enchanteur()}
	{@render forgeron()}
	</section>
{/snippet}

{#snippet artificier__Wip()}
	<section>
		<h3 id="artificier---wip">{@html "Artificier - WIP"}</h3>
	{@html "<blockquote>Création d'armes à feu, d'automations, de mécanismes et d'explosifs.<br>~20pa/h</blockquote>"}

	</section>
{/snippet}

{#snippet bijoutier()}
	<section>
		<h3 id="bijoutier">{@html "Bijoutier"}</h3>
	{@html applyBase("<blockquote>Selon la rareté de l'ingrédient, augmente le nombre de magies qu'un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"\">Alchimiste</a> peut canaliser dedans.<br>~20pa/h</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Déchet</th><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>+1</td><td>+2</td><td>+3</td><td>+5</td><td>+7</td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet enchanteur()}
	<section>
		<h3 id="enchanteur">{@html "Enchanteur"}</h3>
	{@html applyBase("<blockquote>Prépare l'équipement pour accueillir l'enchantement d'un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"\">Érudit</a> sans imploser.<br>Les chances de réussite varient selon la rareté de l'ingrédient.<br>~50pa/h</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Rareté</th><th>Déchet</th><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td><strong>Bonus sur le Taux d'Échec</strong></td><td>+1</td><td>+2</td><td>+3</td><td>+5</td><td>+7</td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet forgeron()}
	<section>
		<h3 id="forgeron">{@html "Forgeron"}</h3>
	{@html "<blockquote>Fabrique des armes (sauf armes à feu) et des armures en tout genre et de tous matériaux.<br>Les minerais sont classés par rareté, qui en elle-même ne change rien au résultat final.<br>~5pa/h</blockquote>"}

	</section>
{/snippet}
