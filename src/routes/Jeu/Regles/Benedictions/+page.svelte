<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Bénédictions"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Bénédictions"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render bndictionsComplexes()}
		{@render bndictionsSimples()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>Lorsqu'une divinité le souhaite, elle peut accorder une bénédiction à une entité, lui offrant un incroyable pouvoir, ainsi qu'une lourde responsabilité.<br>Cette entité ne peut avoir qu'une bénédiction et se doit d'accomplir le souhait du dieu s'il ne veut en subir les représailles.<br>Le type de souhait ne dépend pas du type de bénédiction reçu.</blockquote>"}
{/snippet}

{#snippet bndictionsComplexes()}
	<section>
		<h2 id="bndictions-complexes">{@html "Bénédictions Complexes"}</h2>
	{@html "<p>Les bénédictions complexes sont très rares et ne possède aucune règle particulière, empêchant leur recensement correct.</p>"}

	</section>
{/snippet}

{#snippet bndictionsSimples()}
	<section>
		<h2 id="bndictions-simples">{@html "Bénédictions Simples"}</h2>
	{@html "<p>Les bénédictions simples offrent un pouvoir précis, régis par des lois, permettant leur recensement.</p>"}
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
		<h3 id="bndiction-conservatrice">{@html "Bénédiction Conservatrice"}</h3>
	{@html "<p>Le joueur lance 1d20 et conserve le résultat.</p>\n<p>A chaque fois qu'il lance 1d20, il peut échanger son résultat avec celui qui est conservé.</p>"}

	</section>
{/snippet}

{#snippet bndictionOpportune()}
	<section>
		<h3 id="bndiction-opportune">{@html "Bénédiction Opportune"}</h3>
	{@html "<p>A chaque réussite critique sur 1d20, le joueur peut conserver pour l'échanger avec un futur jet.</p>\n<p>Il peut stocker autant de D20 d'opportunités qu'il veut, mais ne peut en utiliser que 1 par repos dans une lieu sécurisé.</p>\n<p>Il peut ensuite utiliser ces D20 d'opportunité pour échanger des jets de dés de son choix.<br>\nQue ce soit entre ennemis, entre alliés, ou entre les deux.</p>"}

	</section>
{/snippet}

{#snippet bndictionExplosive()}
	<section>
		<h3 id="bndiction-explosive">{@html "Bénédiction Explosive"}</h3>
	{@html "<p>A chaque fois que tous les dés du joueur roulent leur valeur maximale, le joueur peut relancer ses dés et accumuler les résultats.</p>\n<p>Cela ne marche que pour les jets d'attaque et si on jette au moins 2 dés.</p>"}

	</section>
{/snippet}

{#snippet bndictionHasardeuse()}
	<section>
		<h3 id="bndiction-hasardeuse">{@html "Bénédiction Hasardeuse"}</h3>
	{@html "<p>Le joueur peut lancer 1d10 pour modifier ses dégâts :</p>\n<ul><li>1 = Diviser par 2</li><li>2-5 = Soustraire par 1d4 x 10%</li><li>5-9 = Additionner par 1d4 x 10%</li><li>10 = Multiplier par 2</li></ul>"}

	</section>
{/snippet}

{#snippet bndictionDouble()}
	<section>
		<h3 id="bndiction-double">{@html "Bénédiction Double"}</h3>
	{@html "<p>Le joueur peut doubler 1 dé par jet et accumuler les résultats.</p>\n<p>Lorsqu'il fait cela, les modificateurs du jet sont réduits de la valeur sélectionnée.</p>\n<blockquote>Ex : 4d6 + (12) = 1,2,3,5 (on double le 5) -> 1,2,3,5,<strong>5</strong> + (12 <strong>- 5</strong>) = 16 + 7</blockquote>"}

	</section>
{/snippet}

{#snippet bndictionFratricide()}
	<section>
		<h3 id="bndiction-fratricide">{@html "Bénédiction Fratricide"}</h3>
	{@html "<p>Lorsque le joueur fait un échec critique, il peut le transformer en réussite critique, mais transforme les jets de ses alliés en échec pour ce tour.</p>"}

	</section>
{/snippet}

{#snippet bndictionDeMoyenne()}
	<section>
		<h3 id="bndiction-de-moyenne">{@html "Bénédiction de Moyenne"}</h3>
	{@html "<p>Le joueur lance 2D10 au lieu de 1D20.</p>\n<p>L'échec critique devient 2 au lieu de 1 sur le résultat total.</p>"}

	</section>
{/snippet}

{#snippet bndictionDeLaPice()}
	<section>
		<h3 id="bndiction-de-la-pice">{@html "Bénédiction de la pièce"}</h3>
	{@html "<p>Le joueur peut remplacer n'importe quel d20 en pile ou face critique.</p>\n<p>Cette compétence se recharge lors d'un repos dans un lieu sécurisée.</p>"}

	</section>
{/snippet}
