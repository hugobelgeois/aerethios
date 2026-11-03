<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "matriel",
          "text": "Matériel",
          "level": 2
      },
      {
          "id": "rsultat-de-fabrication",
          "text": "Résultat de Fabrication",
          "level": 2
      },
      {
          "id": "ingrdients",
          "text": "Ingrédients",
          "level": 2
      },
      {
          "id": "viandes--bonus-physiques",
          "text": "**Viandes** — bonus physiques",
          "level": 3
      },
      {
          "id": "accompagnements--bonus-magiques",
          "text": "**Accompagnements** — bonus magiques",
          "level": 3
      },
      {
          "id": "touche-du-chef",
          "text": "Touche du Chef",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Cuisinier"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Cuisinier"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render matriel()}
		{@render rsultatDeFabrication()}
		{@render ingrdients()}
		{@render toucheDuChef()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html applyBase("<blockquote><strong>Cuisinier</strong> est une spécialité dérivée de l’<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" data-wiki-fragment=\"\">Alchimie</a> qui sublime les ingrédients les plus simples — parfois sans valeur apparente — pour en tirer le meilleur. Là où l’alchimiste transforme, le cuisinier <strong>révèle</strong>.</blockquote>")}
{/snippet}

{#snippet matriel()}
	<section>
		<h2 id="matriel">{@html "Matériel"}</h2>
	{@html "<p>Pour cuisiner, il faut disposer :</p>\n<ul><li>du <strong>matériel de base</strong>,</li><li><em>(poids total ≈ 5 kg, coût : 1 PO)</em></li></ul>\n<ul><li>des <strong>ingrédients frais</strong>, en quantité suffisante <strong>pour chaque convive</strong>.</li></ul>"}

	</section>
{/snippet}

{#snippet rsultatDeFabrication()}
	<section>
		<h2 id="rsultat-de-fabrication">{@html "Résultat de Fabrication"}</h2>
	{@html "<ul><li><strong>Réussite critique</strong> : le repas est <strong>parfait</strong> et <strong>dure 3 jours</strong>.</li></ul>\n<ul><li><strong>Réussite</strong> : le repas est <strong>créé normalement</strong>.</li></ul>\n<ul><li><strong>Échec</strong> : le repas <strong>nourrit</strong> mais donne <strong>-1 dans les compétences ciblées</strong>.</li></ul>\n<ul><li><strong>Échec critique</strong> : le repas <strong>ne nourrit pas</strong> (il faut refaire à manger) et <strong>inverse le bonus en malus</strong>.</li></ul>"}

	</section>
{/snippet}

{#snippet ingrdients()}
	<section>
		<h2 id="ingrdients">{@html "Ingrédients"}</h2>
	{@html "<p>Les repas offrent des <strong>bonus journaliers</strong> selon leur composition.<br>\nChaque ingrédient utilisé doit être multiplié par le <strong>nombre de convives</strong>.<br>\nLes effets ne sont <strong>ni cumulatifs</strong>, ni <strong>stockables</strong> — le plat doit être consommé immédiatement, sinon il se transforme en simple ration sans effet.<br>\nLes ingrédients <strong>se conservent 7 jours</strong> avant de pourrir.</p>\n<p>Chaque ingrédient accorde un bonus de <strong>2</strong> dans une <strong>sous-compétence liée</strong> à son type.<br>\nLa sous-compétence est sélectionnée par un <strong>D4</strong>.<br>\nSi le dé tombe sur <strong>4</strong>, l'ingrédient n'a <strong>aucun effet</strong>.</p>"}
	{@render viandes_BonusPhysiques()}
	{@render accompagnements_BonusMagiques()}
	</section>
{/snippet}

{#snippet viandes_BonusPhysiques()}
	<section>
		<h3 id="viandes--bonus-physiques">{@html "**Viandes** — bonus physiques"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Aliment</th><th>Bonus principal</th><th>Poids (kg)</th><th>Prix (pb)</th></tr></thead><tbody><tr><td>Viande rouge</td><td>Force</td><td>1</td><td>15</td></tr><tr><td>Viande blanche</td><td>Dextérité</td><td>1</td><td>12</td></tr><tr><td>Viande noire</td><td>Perception</td><td>1</td><td>10</td></tr><tr><td>Poisson</td><td>Mental</td><td>1</td><td>7</td></tr></tbody></table></div>\n<blockquote><strong>Exemple</strong> : Viande rouge (Force) → Athlétisme, Bagarre ou Impénétrable.</blockquote>"}

	</section>
{/snippet}

{#snippet accompagnements_BonusMagiques()}
	<section>
		<h3 id="accompagnements--bonus-magiques">{@html "**Accompagnements** — bonus magiques"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Aliment</th><th>Bonus magique</th><th>Poids (kg)</th><th>Prix (pb)</th></tr></thead><tbody><tr><td>Légumes</td><td>Magie Élétiste</td><td>0.5</td><td>5</td></tr><tr><td>Fruits</td><td>Magie Croitiste</td><td>0.5</td><td>5</td></tr><tr><td>Fruits de mer</td><td>Magie Mixte</td><td>0.5</td><td>10</td></tr><tr><td>Épices</td><td>Magie de Feu</td><td>0.1</td><td>25</td></tr></tbody></table></div>\n<blockquote><strong>Exemple</strong> : Fruits (Magie Croitiste) → Lumière, Foudre ou Ténèbres.</blockquote>"}

	</section>
{/snippet}

{#snippet toucheDuChef()}
	<section>
		<h2 id="touche-du-chef">{@html "Touche du Chef"}</h2>
	{@html "<p>À partir du <strong>niveau 3</strong>, le cuisinier peut créer une <strong>Touche du Chef</strong> :</p>\n<ul><li>Il choisit un ingrédient \"mystère\" à incorporer.</li></ul>\n<ul><li>Il lance un dé lié au tableau qui l'intéresse pour déterminer l’effet conféré.</li></ul>\n<ul><li>Il peut aussi <strong>acheter ou échanger</strong> les Touches d’autres chefs afin d'avoir un effet préétablit.</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Jet (D12)</th><th>Effet spécial</th></tr></thead><tbody><tr><td>1</td><td>Mule</td></tr><tr><td>2</td><td>Insensible</td></tr><tr><td>3</td><td>Intimidant</td></tr><tr><td>4</td><td>Veinard</td></tr><tr><td>5</td><td>Réflexe</td></tr><tr><td>6</td><td>Négociateur</td></tr><tr><td>7</td><td>Assidu</td></tr><tr><td>8</td><td>Imperturbable</td></tr><tr><td>9</td><td>Charismatique</td></tr><tr><td>10</td><td>Nyctalope</td></tr><tr><td>11</td><td>Intuition</td></tr><tr><td>12</td><td>Mentaliste</td></tr></tbody></table></div>\n<div class=\"table-scroll\"><table><thead><tr><th>Jet (D8)</th><th>Effet spécial</th></tr></thead><tbody><tr><td>1</td><td>Maîtrise d'armes +1</td></tr><tr><td>2</td><td>Maîtrise magique +1</td></tr><tr><td>3</td><td>Régénération Magique D100%</td></tr><tr><td>4</td><td>Imperturbable</td></tr><tr><td>5</td><td>Réflexe</td></tr><tr><td>6</td><td>Insensible</td></tr><tr><td>7</td><td>Intuition</td></tr><tr><td>8</td><td>Régénère 2 crystaux</td></tr></tbody></table></div>"}

	</section>
{/snippet}
