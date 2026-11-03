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
  <title>{"Érudition"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Érudition"}</h1>
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
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Durée</th><th>Interruption</th><th>Amélioration</th><th>Déconstruction</th><th>Consommation</th><th>Echec</th></tr></thead><tbody><tr><td>1h</td><td>Non</td><td>Non</td><td>Non</td><td>1 Crystal</td><td>Perte de l'objet de base<br>Possibilité d'effet négatif ajouté au joueur (<code>1d20 < 5</code>)</td></tr></tbody></table></div>"}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Apprentissages/Misc/Rappel"} fragment={""} />

	</section>
{/snippet}

{#snippet spcialisations()}
	<section>
		<h2 id="spcialisations">{@html "Spécialisations"}</h2>

	{@render enchanteur()}
	{@render invocateur()}
	{@render joaillier()}
	{@render runniste__Wip()}
	</section>
{/snippet}

{#snippet enchanteur()}
	<section>
		<h3 id="enchanteur">{@html "Enchanteur"}</h3>
	{@html applyBase("<blockquote>Enchante les équipements fabriquées par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"\">Artisan</a> ainsi que certaines matières inorganiques pour leur conférer des capacités spéciales.<br>~2po/h</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Ingrédients</th><th>Simple</th><th>Avancé</th><th>Incroyable</th></tr></thead><tbody><tr><td><strong>Peu Commun</strong></td><td>1-6</td><td>7-10</td><td>-</td></tr><tr><td><strong>Rare</strong></td><td>1-4</td><td>5-9</td><td>10</td></tr><tr><td><strong>Légendaire</strong></td><td>1-2</td><td>3-8</td><td>9-10</td></tr></tbody></table></div>\n<p>Des ingrédients plus rares augmentent les chances d'avoir de meilleurs enchantements.<br>\nLa rareté de l'enchantement obtenu se détermine par <code>1d10</code>.<br>\nL'enchantement précis se détermine par la recette utilisée par le joueur.</p>")}

	</section>
{/snippet}

{#snippet invocateur()}
	<section>
		<h3 id="invocateur">{@html "Invocateur"}</h3>
	{@html applyBase("<blockquote>Insuffle de la vie et de la puissance dans un élémentaire inerte créé par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Alchimie - New\" data-wiki-fragment=\"\">Alchimiste</a>.<br>~1po/h</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>x1</td><td>x2</td><td>x3</td></tr></tbody></table></div>\n<p>La puissance de l'élémentaire varie selon la rareté des ingrédients.</p>")}

	</section>
{/snippet}

{#snippet joaillier()}
	<section>
		<h3 id="joaillier">{@html "Joaillier"}</h3>
	{@html "<blockquote>Infuse des gemmes dans les armes pour modifier leur comportement.<br>~50pa/h</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>1</td><td>2</td><td>4</td></tr></tbody></table></div>\n<p>La modification de dégâts de l'arme varie selon la rareté de l'ingrédient.</p>"}

	</section>
{/snippet}

{#snippet runniste__Wip()}
	<section>
		<h3 id="runniste---wip">{@html "Runniste - WIP"}</h3>
	{@html "<blockquote>Schématise la magie sous forme de gravure, peinture et autre pour la préparer à l'avance et la déclencher à distance.<br>~50pa/h</blockquote>"}

	</section>
{/snippet}
