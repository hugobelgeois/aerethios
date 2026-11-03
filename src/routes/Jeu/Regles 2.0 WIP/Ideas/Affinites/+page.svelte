<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "affinits",
          "text": "Affinités",
          "level": 3
      },
      {
          "id": "ancienne-version",
          "text": "Ancienne version",
          "level": 3
      },
      {
          "id": "catgories",
          "text": "Catégories",
          "level": 2
      },
      {
          "id": "culture",
          "text": "Culture",
          "level": 3
      },
      {
          "id": "exploration",
          "text": "Exploration",
          "level": 3
      },
      {
          "id": "production",
          "text": "Production",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Affinités"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Affinités"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render affinits()}
		{@render ancienneVersion()}
		{@render catgories()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<p>L'affinité permet de définir la spécialisation d'un personnage (comme une classe) qui varie selon la race.<br>\nCe sont des outils d’interprétation, pas des générateurs d’information.</p>"}
{/snippet}

{#snippet affinits()}
	<section>
		<h3 id="affinits">{@html "Affinités"}</h3>
	{@html "<p>Le joueur débloque par défaut les affinités de niveau 1 liées à sa race.</p>\n<p>Il choisit la catégorie dans laquelle il excelle; les affinités débloquées dedans seront d'office niveau 2.<br>\nIl peut ensuite répartir 5 points dans les affinités de son choix.</p>\n<p>Les affinités liées à sa race coûtent toutes 1 points, tandis que les autres ont le prix de leur niveau.</p>\n<pre><code class=\"language-Exemple\">Une affinité de niveau 1 coûte 1 point, une affinité de niveau 3 coûte 3 points.</code></pre>\n<p>Le joueur pourra ensuite développer ses affinités de différentes manières :</p>\n<ul><li>au cours de ses aventures de façon scénarisée,</li><li>Tous les 5 niveaux (5, 10, 15, 20).</li></ul>\n<p>En débloquer de nouvelles est compliqué et ne peut arriver qu'avec une bonne raison scénaristique et une longue période de temps.</p>"}

	</section>
{/snippet}

{#snippet ancienneVersion()}
	<section>
		<h3 id="ancienne-version">{@html "Ancienne version"}</h3>
	{@html "<p>Au niveau 1, le joueur peut choisir une catégorie d'affinité dans laquelle il excelle (Culture, Exploration, Production) et possède 3 points qu'il peut dépenser dedans.<br>\nLes affinités liées à sa race coûtent 1 point, tandis que les autres coûtent 2 points (sauf l'elfe pour qui tout coûte 1 point).<br>\nLe joueur gagne 1 point tous les niveaux pairs.</p>\n<p>Au niveau 10 et 20, le joueur gagne 1 point supplémentaire, et il peut débloquer une catégorie si sa race lui permet.</p>"}

	</section>
{/snippet}

{#snippet catgories()}
	<section>
		<h2 id="catgories">{@html "Catégories"}</h2>

	{@render culture()}
	{@render exploration()}
	{@render production()}
	</section>
{/snippet}

{#snippet culture()}
	<section>
		<h3 id="culture">{@html "Culture"}</h3>
	{@html "<blockquote>Connaissance générale</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Niveau</th><th>Humain</th><th>Calico</th><th>Orc</th><th>Nain</th><th>Elfe</th></tr></thead><tbody><tr><td>1</td><td>Connait les personnalités importantes</td><td>Reconnait la magie possédée et maîtrisée par un être vivant</td><td>Connait le folklore de son continent d'origine</td><td>Reconnait les matériaux des créations (équipement, bâtiment, ..)</td><td>Reconnaît les symboles spirituels et religieux</td></tr><tr><td>2</td><td>Comprend le fonctionnement interne des villes</td><td>Comprend l'effet des runes et des sceaux magiques</td><td>Comprend l'origine probable des récits</td><td>Comprend le fonctionnement des créations, leurs forces et faiblesses</td><td>Comprend les entités spirituelles</td></tr><tr><td>3</td><td>Sait à qui s'adresser pour obtenir une information, un service ou une autorisation</td><td>Peut modifier ou désactiver un sceau ou une rune simple sans magie brute</td><td>Peut exploiter une tradition ou une superstition pour influencer une communauté</td><td>Peut démonter, réparer ou saboter une création de manière optimale</td><td>Peut communiquer ou négocier avec une entité spirituelle non hostile</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet exploration()}
	<section>
		<h3 id="exploration">{@html "Exploration"}</h3>
	{@html "<blockquote>S'applique lors des déplacements sur une carte (carte du monde, carte de donjon, ..)</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Niveau</th><th>Humain</th><th>Calico</th><th>Orc</th><th>Nain</th><th>Elfe</th></tr></thead><tbody><tr><td><strong>1</strong></td><td>Détecte les lieux de survie (cachette, nourriture, défenses, ..)</td><td>Détecte les sources de magie</td><td>Détecte les créatures</td><td>Détecte le chemin vers la sortie et la pièce la plus profonde</td><td>Détecte les présences spirituelles</td></tr><tr><td><strong>2</strong></td><td>Comprend comment exploiter les ressources du lieu</td><td>Comprend l'origine de la source de magie</td><td>Comprend leur origine (nombre, taille, race, vitesse, ..)</td><td>Comprend la structure complète du lieu</td><td>Comprend leur nature et leurs émotions</td></tr><tr><td><strong>3</strong></td><td>Evite les ralentissements dûs au terrain</td><td>Anticipe les effets ou comportements de la source</td><td>Prédit les déplacements</td><td>Détecte la pièces secrètes et raccourcis</td><td>Anticipe leur comportement ou leurs intentions</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet production()}
	<section>
		<h3 id="production">{@html "Production"}</h3>
	{@html "<blockquote>S'applique lors de la fabrication d'objets</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Niveau</th><th>Humain</th><th>Calico</th><th>Orc</th><th>Nain</th><th>Elfe</th></tr></thead><tbody><tr><td><strong>1</strong></td><td>Les fabrications échouent après 5 échecs au lieu de 3</td><td>Réduit de moitié les coûts magiques</td><td>Sait où trouver les ressources souhaitées</td><td>Le temps de fabrication est réduit de moitié</td><td>La déconstruction rend plus de ressources :<br>- Artisanat : 100%<br>- Alchimie : 50%</td></tr><tr><td><strong>2</strong></td><td>Peut intervertir un ingrédient avec un autre sans changer le résultat souhaité</td><td>Chaque réussite au dé compte comme 2 reussites</td><td>Double les ressources trouvées</td><td>Augmenter la qualité d'une fabrication ne prend pas plus de temps</td><td>Peut améliorer une fabrication déjà existante</td></tr><tr><td><strong>3</strong></td><td>Peut appliquer une partie de son niveau dans un métier de même catégorie</td><td>Ne subit pas les malus d'un artisanat magique raté</td><td>Augmente la rareté des ressources trouvées (<code>+7 au jet de récolte</code>)</td><td>Améliore automatiquement la qualité finale d'un niveau</td><td>Réveille le potentiel caché d'un objet</td></tr></tbody></table></div>"}

	</section>
{/snippet}
