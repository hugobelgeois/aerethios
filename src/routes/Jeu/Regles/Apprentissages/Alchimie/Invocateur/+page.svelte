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
          "id": "statistiques-de-linvocation",
          "text": "Statistiques de l'invocation",
          "level": 3
      },
      {
          "id": "types-dinvocations",
          "text": "Types d'invocations",
          "level": 2
      },
      {
          "id": "force",
          "text": "Force",
          "level": 3
      },
      {
          "id": "agilit",
          "text": "Agilité",
          "level": 3
      },
      {
          "id": "magicien",
          "text": "Magicien",
          "level": 3
      },
      {
          "id": "types-dingrdients-et-effets",
          "text": "Types d’ingrédients et effets",
          "level": 2
      },
      {
          "id": "dure-et-stabilit",
          "text": "Durée et stabilité",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Invocateur"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Invocateur"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render matriel()}
		{@render rsultatDeFabrication()}
		{@render typesDinvocations()}
		{@render typesDingrdientsEtEffets()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html applyBase("<blockquote><strong>Invocateur</strong> est une spécialité de l'<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" data-wiki-fragment=\"\">Alchimie</a> qui insuffle la <strong>magie vitale</strong> dans les composants pour leur donner <strong>forme et volonté</strong>.</blockquote>")}
{/snippet}

{#snippet matriel()}
	<section>
		<h2 id="matriel">{@html "Matériel"}</h2>
	{@html "<p>Pour faire des invocations, il faut disposer :</p>\n<ul><li>du <strong>matériel de base</strong>,</li><li><em>(poids total ≈ 5 kg, coût : 2 PO)</em></li></ul>\n<ul><li>et des <strong>ingrédients nécessaires</strong> à la préparation.</li></ul>"}

	</section>
{/snippet}

{#snippet rsultatDeFabrication()}
	<section>
		<h2 id="rsultat-de-fabrication">{@html "Résultat de Fabrication"}</h2>
	{@html "<ul><li><strong>Réussite critique</strong> : l'invocation est <strong>parfaite</strong> et possède <strong>les statistiques maximales</strong>.</li></ul>\n<ul><li><strong>Réussite</strong> : l'invocation est <strong>créée normalement</strong> et ses statistiques sont tirées aux dés.</li></ul>\n<ul><li><strong>Échec</strong> : l'invocation <strong>échoue</strong> et les ingrédients sont <strong>perdus</strong>.</li></ul>\n<ul><li><strong>Échec critique</strong> : l'invocation est <strong>instable</strong>, elle possède <strong>les statistiques minimales</strong> et <strong>agresse son créateur</strong>.</li></ul>"}
	{@render statistiquesDeLinvocation()}
	</section>
{/snippet}

{#snippet statistiquesDeLinvocation()}
	<section>
		<h3 id="statistiques-de-linvocation">{@html "Statistiques de l'invocation"}</h3>
	{@html "<p>Le joueur jette <strong>1D20 + Magie + Maîtrise magique</strong> pour <strong>chaque ingrédient</strong> utilisé afin de déterminer la <strong>stat associée</strong> à cet ingrédient.<br>\nLa <strong>valeur maximale</strong> d’une statistique ne peut <strong>pas dépasser la somme des trois ingrédients les plus rares</strong>.</p>\n<p>La création reste active <strong>1 jour</strong>, sauf mention contraire.</p>"}

	</section>
{/snippet}

{#snippet typesDinvocations()}
	<section>
		<h2 id="types-dinvocations">{@html "Types d'invocations"}</h2>
	{@html "<p>Elles ont une fonction de base d'auto destruction</p>"}
	{@render force()}
	{@render agilit()}
	{@render magicien()}
	</section>
{/snippet}

{#snippet force()}
	<section>
		<h3 id="force">{@html "Force"}</h3>
	{@html "<p><strong>Statistique Min | Max</strong><br>\nForce 3 | 6<br>\nDextérité 1 | 2<br>\nMental Celui de maître<br>\nPerception 0 (+3 pour détecter son élément)</p>\n<p>Vie 50 | 100<br>\nArmure 20 | 25</p>\n<p>Attaque D6 + Force <em> 4 | D8 + Force </em> 4<br>\nMagie D10 | D12</p>"}

	</section>
{/snippet}

{#snippet agilit()}
	<section>
		<h3 id="agilit">{@html "Agilité"}</h3>
	{@html "<p>Force 1 | 2<br>\nDextérité 3 | 6<br>\nMental Celui de maître<br>\nPerception 0 (+3 pour détecter son élément)</p>\n<p>Vie 30 | 60<br>\nArmure 10 | 15</p>\n<p>Attaque D12 + Force | D20 + Force<br>\nMagie D10 | D12</p>"}

	</section>
{/snippet}

{#snippet magicien()}
	<section>
		<h3 id="magicien">{@html "Magicien"}</h3>
	{@html "<p>Force 1 | 2<br>\nDextérité 1 | 2<br>\nMental Celui de maître<br>\nPerception 0 (+7 pour détecter son élément)</p>\n<p>Vie 30 | 50<br>\nArmure 10 | 15</p>\n<p>Attaque D8 + Force | D10 + Force<br>\nMagie D10 + 10 | D10 + 20</p>"}

	</section>
{/snippet}

{#snippet typesDingrdientsEtEffets()}
	<section>
		<h2 id="types-dingrdients-et-effets">{@html "Types d’ingrédients et effets"}</h2>
	{@html "<p>La création tire ses propriétés des ingrédients utilisés.<br>\nPour chaque type d'ingrédient, la statistique maximale ne peut pas être plus grande que la somme des 3 ingrédients les plus rares.</p>\n<ul><li>Les <strong>minerais</strong> lui donnent de l'<strong>Armure</strong></li></ul>\n<ul><li>Les <strong>plantes</strong> améliorent sa <strong>Dextérité</strong></li></ul>\n<ul><li>Les <strong>champignons</strong> augmentent sa <strong>Vie</strong></li></ul>\n<ul><li>Les <strong>cristaux</strong> lui donne accès à la <strong>Magie</strong> employée par le joueur pour le fabriquer</li></ul>\n<ul><li>Les <strong>morceaux de créatures</strong> augmentent son <strong>Attaque</strong></li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Type d’effet</th><th>Déchet</th><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td><strong>Minerai</strong></td><td>+0</td><td>+5</td><td>+10</td><td>+15</td><td>+20</td></tr><tr><td><strong>Plante</strong></td><td>+0</td><td>+2</td><td>+4</td><td>+6</td><td>+8</td></tr><tr><td><strong>Champignon</strong></td><td>+0</td><td>+1</td><td>+2</td><td>+30</td><td>+50</td></tr><tr><td><strong>Crystal</strong></td><td>+0</td><td>+1</td><td>+2</td><td>+3</td><td>+4</td></tr><tr><td><strong>Créature</strong></td><td>+0</td><td>+2</td><td>+4</td><td>+6</td><td>+8</td></tr></tbody></table></div>"}
	{@render dureEtStabilit()}
	</section>
{/snippet}

{#snippet dureEtStabilit()}
	<section>
		<h3 id="dure-et-stabilit">{@html "Durée et stabilité"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Rareté dominante</th><th>Durée moyenne</th><th>Stabilité</th></tr></thead><tbody><tr><td>Déchet</td><td>1 jour</td><td>Très faible</td></tr><tr><td>Commun</td><td>3 jours</td><td>Faible</td></tr><tr><td>Peu Commun</td><td>15 jours</td><td>Moyenne</td></tr><tr><td>Rare</td><td>70 jours</td><td>Élevée</td></tr><tr><td>Légendaire</td><td>Permanente (ou liée à l’invocateur)</td><td>Parfaite</td></tr></tbody></table></div>"}

	</section>
{/snippet}
