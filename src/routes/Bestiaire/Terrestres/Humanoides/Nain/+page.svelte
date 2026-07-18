<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Nain</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Nain</h1>
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
	{@html renderMarkdown("Originaires des profondeurs de Nirina, les Nains ont passé la majeure partie de leur histoire sous terre.\n\nPendant des siècles, ils exploitèrent les immenses réseaux miniers situés sous la capitale, fournissant minerais et innovations à la couronne en échange de nourriture et de protection.\n")}
{/snippet}

{#snippet apparence()}
	<section>
		<h2 id="apparence">Apparence</h2>
	{@html renderMarkdown("\nLeur petite taille résulte de plusieurs générations passées dans les profondeurs :\n- espaces confinés ;\n- faible exposition à la lumière ;\n- ressources limitées.\n\nLeur morphologie compacte est parfaitement adaptée à la vie souterraine.\n")}

	</section>
{/snippet}

{#snippet histoire()}
	<section>
		<h2 id="histoire">Histoire</h2>
	{@html renderMarkdown("\nAvant la Grande Fracture, leur existence était tenue secrète afin d'éviter les tensions avec la population humaine.\n\nLorsque les mines s'effondrèrent durant la Grande Fracture, un immense nuage de cendres apparut au-dessus de la capitale.\n\nProtégés par cette obscurité permanente, les Nains purent enfin vivre à la surface.\n\nAujourd'hui, la capitale est composée d'environ :\n- 60 % d'humains ;\n- 30 % de nains;\n- 10 % d'autres races.\n\nBien qu'ils aient été pleinement accepté dans la capitale, le reste du continent possède un certain dégout des nains, les chassant dans les lieux les moins accueillant du pays.\n")}

	</section>
{/snippet}

{#snippet leNuage()}
	<section>
		<h2 id="le-nuage">Le Nuage</h2>
	{@html renderMarkdown("\nLes Nains restent extrêmement sensibles à la lumière solaire.\n\nPour survivre en surface, ils ont développé de vastes technologies industrielles produisant d'importantes quantités de fumée et de pollution afin d'étendre les zones habitables.\nCela a réduit les jours de clarté à un dizaine par mois.\n\nLe déplacement du grand nuage de cendres rythme également leur calendrier et leurs traditions.\nDes lois ont été créées pour interdire toute forme de lumière lors de leur célébration, afin qu'ils puissent profiter pleinement de leur culture.\n")}

	</section>
{/snippet}

{#snippet larmure()}
	<section>
		<h2 id="larmure">L'Armure</h2>
	{@html renderMarkdown("\nPour un Nain, l'armure ne constitue pas un simple équipement.\n\nElle est considérée comme une seconde peau.\n\nMontrer son visage à quelqu'un est un acte d'une immense confiance.\n\nDe nombreuses cérémonies utilisent ce symbole :\n- mariages ;\n- funérailles ;\n- serments ;\n- adoubements.\n")}

	</section>
{/snippet}

{#snippet religion()}
	<section>
		<h2 id="religion">Religion</h2>
	{@html renderMarkdown("\nLes Nains vénèrent principalement Obel, le Dieu Affamé.\n\nÀ leurs yeux, il est celui qui leur a permis de quitter les profondeurs et de grandir aux côtés des humains.\n\nCette relation dépasse souvent la simple foi religieuse et s'apparente à une profonde gratitude historique.\n")}

	</section>
{/snippet}

{#snippet particularits()}
	<section>
		<h2 id="particularits">Particularités</h2>
	{@html renderMarkdown("\n- Grande tradition d'ingénierie.\n- Culture fortement liée à l'armure.\n- Vulnérabilité au soleil.\n- Maîtrise des machines et automates.")}

	</section>
{/snippet}
