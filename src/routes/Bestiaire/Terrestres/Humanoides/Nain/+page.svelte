<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "apparence",
          "text": "Apparence",
          "level": 2
      },
      {
          "id": "histoire",
          "text": "Histoire",
          "level": 2
      },
      {
          "id": "le-nuage",
          "text": "Le Nuage",
          "level": 2
      },
      {
          "id": "larmure",
          "text": "L'Armure",
          "level": 2
      },
      {
          "id": "religion",
          "text": "Religion",
          "level": 2
      },
      {
          "id": "particularits",
          "text": "Particularités",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Nain"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Nain"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render apparence()}
		{@render histoire()}
		{@render leNuage()}
		{@render larmure()}
		{@render religion()}
		{@render particularits()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<p>Originaires des profondeurs de Nirina, les Nains ont passé la majeure partie de leur histoire sous terre.</p>\n<p>Pendant des siècles, ils exploitèrent les immenses réseaux miniers situés sous la capitale, fournissant minerais et innovations à la couronne en échange de nourriture et de protection.</p>"}
{/snippet}

{#snippet apparence()}
	<section>
		<h2 id="apparence">{@html "Apparence"}</h2>
	{@html "<p>Leur petite taille résulte de plusieurs générations passées dans les profondeurs :</p>\n<ul><li>espaces confinés ;</li><li>faible exposition à la lumière ;</li><li>ressources limitées.</li></ul>\n<p>Leur morphologie compacte est parfaitement adaptée à la vie souterraine.</p>"}

	</section>
{/snippet}

{#snippet histoire()}
	<section>
		<h2 id="histoire">{@html "Histoire"}</h2>
	{@html "<p>Avant la Grande Fracture, leur existence était tenue secrète afin d'éviter les tensions avec la population humaine.</p>\n<p>Lorsque les mines s'effondrèrent durant la Grande Fracture, un immense nuage de cendres apparut au-dessus de la capitale.</p>\n<p>Protégés par cette obscurité permanente, les Nains purent enfin vivre à la surface.</p>\n<p>Aujourd'hui, la capitale est composée d'environ :</p>\n<ul><li>60 % d'humains ;</li><li>30 % de nains;</li><li>10 % d'autres races.</li></ul>\n<p>Bien qu'ils aient été pleinement accepté dans la capitale, le reste du continent possède un certain dégout des nains, les chassant dans les lieux les moins accueillant du pays.</p>"}

	</section>
{/snippet}

{#snippet leNuage()}
	<section>
		<h2 id="le-nuage">{@html "Le Nuage"}</h2>
	{@html "<p>Les Nains restent extrêmement sensibles à la lumière solaire.</p>\n<p>Pour survivre en surface, ils ont développé de vastes technologies industrielles produisant d'importantes quantités de fumée et de pollution afin d'étendre les zones habitables.<br>\nCela a réduit les jours de clarté à un dizaine par mois.</p>\n<p>Le déplacement du grand nuage de cendres rythme également leur calendrier et leurs traditions.<br>\nDes lois ont été créées pour interdire toute forme de lumière lors de leur célébration, afin qu'ils puissent profiter pleinement de leur culture.</p>"}

	</section>
{/snippet}

{#snippet larmure()}
	<section>
		<h2 id="larmure">{@html "L'Armure"}</h2>
	{@html "<p>Pour un Nain, l'armure ne constitue pas un simple équipement.</p>\n<p>Elle est considérée comme une seconde peau.</p>\n<p>Montrer son visage à quelqu'un est un acte d'une immense confiance.</p>\n<p>De nombreuses cérémonies utilisent ce symbole :</p>\n<ul><li>mariages ;</li><li>funérailles ;</li><li>serments ;</li><li>adoubements.</li></ul>"}

	</section>
{/snippet}

{#snippet religion()}
	<section>
		<h2 id="religion">{@html "Religion"}</h2>
	{@html "<p>Les Nains vénèrent principalement Obel, le Dieu Affamé.</p>\n<p>À leurs yeux, il est celui qui leur a permis de quitter les profondeurs et de grandir aux côtés des humains.</p>\n<p>Cette relation dépasse souvent la simple foi religieuse et s'apparente à une profonde gratitude historique.</p>"}

	</section>
{/snippet}

{#snippet particularits()}
	<section>
		<h2 id="particularits">{@html "Particularités"}</h2>
	{@html "<ul><li>Grande tradition d'ingénierie.</li><li>Culture fortement liée à l'armure.</li><li>Vulnérabilité au soleil.</li><li>Maîtrise des machines et automates.</li></ul>"}

	</section>
{/snippet}
