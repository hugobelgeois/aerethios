<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "bndictions-complexes",
          "text": "Bénédictions Complexes",
          "level": 2
      },
      {
          "id": "bndictions-simples",
          "text": "Bénédictions Simples",
          "level": 2
      },
      {
          "id": "bndiction-conservatrice",
          "text": "Bénédiction Conservatrice",
          "level": 3
      },
      {
          "id": "bndiction-opportune",
          "text": "Bénédiction Opportune",
          "level": 3
      },
      {
          "id": "bndiction-explosive",
          "text": "Bénédiction Explosive",
          "level": 3
      },
      {
          "id": "bndiction-hasardeuse",
          "text": "Bénédiction Hasardeuse",
          "level": 3
      },
      {
          "id": "bndiction-double",
          "text": "Bénédiction Double",
          "level": 3
      },
      {
          "id": "bndiction-fratricide",
          "text": "Bénédiction Fratricide",
          "level": 3
      },
      {
          "id": "bndiction-de-moyenne",
          "text": "Bénédiction de Moyenne",
          "level": 3
      },
      {
          "id": "bndiction-de-la-pice",
          "text": "Bénédiction de la pièce",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Bénédictions</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Bénédictions</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render bndictionsComplexes()}
		{@render bndictionsSimples()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">Lorsqu'une divinité le souhaite, elle peut accorder une bénédiction à une entité, lui offrant un incroyable pouvoir, ainsi qu'une lourde responsabilité.\n>Cette entité ne peut avoir qu'une bénédiction et se doit d'accomplir le souhait du dieu s'il ne veut en subir les représailles.\n>Le type de souhait ne dépend pas du type de bénédiction reçu.\n")}
{/snippet}

{#snippet bndictionsComplexes()}
	<section>
		<h2 id="bndictions-complexes">{@html applyBase("Bénédictions Complexes")}</h2>
	{@html renderMarkdown("\nLes bénédictions complexes sont très rares et ne possède aucune règle particulière, empêchant leur recensement correct.\n")}

	</section>
{/snippet}

{#snippet bndictionsSimples()}
	<section>
		<h2 id="bndictions-simples">{@html applyBase("Bénédictions Simples")}</h2>
	{@html renderMarkdown("\nLes bénédictions simples offrent un pouvoir précis, régis par des lois, permettant leur recensement.\n")}
	{@render bndictionConservatrice()}
	{@render bndictionOpportune()}
	{@render bndictionExplosive()}
	{@render bndictionHasardeuse()}
	{@render bndictionDouble()}
	{@render bndictionFratricide()}
	{@render bndictionDeMoyenne()}
	{@render bndictionDeLaPice()}
	</section>
{/snippet}

{#snippet bndictionConservatrice()}
	<section>
		<h3 id="bndiction-conservatrice">{@html applyBase("Bénédiction Conservatrice")}</h3>
	{@html renderMarkdown("\nLe joueur lance 1d20 et conserve le résultat.\n\nA chaque fois qu'il lance 1d20, il peut échanger son résultat avec celui qui est conservé.\n")}

	</section>
{/snippet}

{#snippet bndictionOpportune()}
	<section>
		<h3 id="bndiction-opportune">{@html applyBase("Bénédiction Opportune")}</h3>
	{@html renderMarkdown("\nA chaque réussite critique sur 1d20, le joueur peut conserver pour l'échanger avec un futur jet.\n\nIl peut stocker autant de D20 d'opportunités qu'il veut, mais ne peut en utiliser que 1 par repos dans une lieu sécurisé.\n\nIl peut ensuite utiliser ces D20 d'opportunité pour échanger des jets de dés de son choix.\nQue ce soit entre ennemis, entre alliés, ou entre les deux.\n")}

	</section>
{/snippet}

{#snippet bndictionExplosive()}
	<section>
		<h3 id="bndiction-explosive">{@html applyBase("Bénédiction Explosive")}</h3>
	{@html renderMarkdown("\nA chaque fois que tous les dés du joueur roulent leur valeur maximale, le joueur peut relancer ses dés et accumuler les résultats.\n\nCela ne marche que pour les jets d'attaque et si on jette au moins 2 dés.\n")}

	</section>
{/snippet}

{#snippet bndictionHasardeuse()}
	<section>
		<h3 id="bndiction-hasardeuse">{@html applyBase("Bénédiction Hasardeuse")}</h3>
	{@html renderMarkdown("\nLe joueur peut lancer 1d10 pour modifier ses dégâts :\n- 1 = Diviser par 2\n- 2-5 = Soustraire par 1d4 x 10%\n- 5-9 = Additionner par 1d4 x 10%\n- 10 = Multiplier par 2\n")}

	</section>
{/snippet}

{#snippet bndictionDouble()}
	<section>
		<h3 id="bndiction-double">{@html applyBase("Bénédiction Double")}</h3>
	{@html renderMarkdown("\nLe joueur peut doubler 1 dé par jet et accumuler les résultats.\n\nLorsqu'il fait cela, les modificateurs du jet sont réduits de la valeur sélectionnée.\n\n>Ex : 4d6 + (12) = 1,2,3,5 (on double le 5) -> 1,2,3,5,**5** + (12 **- 5**) = 16 + 7\n")}

	</section>
{/snippet}

{#snippet bndictionFratricide()}
	<section>
		<h3 id="bndiction-fratricide">{@html applyBase("Bénédiction Fratricide")}</h3>
	{@html renderMarkdown("\nLorsque le joueur fait un échec critique, il peut le transformer en réussite critique, mais transforme les jets de ses alliés en échec pour ce tour.\n")}

	</section>
{/snippet}

{#snippet bndictionDeMoyenne()}
	<section>
		<h3 id="bndiction-de-moyenne">{@html applyBase("Bénédiction de Moyenne")}</h3>
	{@html renderMarkdown("\nLe joueur lance 2D10 au lieu de 1D20.\n\nL'échec critique devient 2 au lieu de 1 sur le résultat total.\n")}

	</section>
{/snippet}

{#snippet bndictionDeLaPice()}
	<section>
		<h3 id="bndiction-de-la-pice">{@html applyBase("Bénédiction de la pièce")}</h3>
	{@html renderMarkdown("\nLe joueur peut remplacer n'importe quel d20 en pile ou face critique.\n\nCette compétence se recharge lors d'un repos dans un lieu sécurisée.")}

	</section>
{/snippet}
