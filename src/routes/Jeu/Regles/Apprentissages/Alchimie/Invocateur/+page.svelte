<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Invocateur</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Invocateur</h1>
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
	{@html renderMarkdown("> **Invocateur** est une spécialité de l'<a href=\"/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" data-wiki-fragment=\"\">Alchimie</a> qui insuffle la **magie vitale** dans les composants pour leur donner **forme et volonté**.\n")}
{/snippet}

{#snippet matriel()}
	<section>
		<h2 id="matriel">Matériel</h2>
	{@html renderMarkdown("\nPour faire des invocations, il faut disposer :\n\n- du **matériel de base**,\n\t- _(poids total ≈ 5 kg, coût : 2 PO)_\n\n- et des **ingrédients nécessaires** à la préparation.\n")}

	</section>
{/snippet}

{#snippet rsultatDeFabrication()}
	<section>
		<h2 id="rsultat-de-fabrication">Résultat de Fabrication</h2>
	{@html renderMarkdown("\n- **Réussite critique** : l'invocation est **parfaite** et possède **les statistiques maximales**.\n\n- **Réussite** : l'invocation est **créée normalement** et ses statistiques sont tirées aux dés.\n\n- **Échec** : l'invocation **échoue** et les ingrédients sont **perdus**.\n\n- **Échec critique** : l'invocation est **instable**, elle possède **les statistiques minimales** et **agresse son créateur**.\n")}
	{@render statistiquesDeLinvocation()}
	</section>
{/snippet}

{#snippet statistiquesDeLinvocation()}
	<section>
		<h3 id="statistiques-de-linvocation">Statistiques de l'invocation</h3>
	{@html renderMarkdown("\nLe joueur jette **1D20 + Magie + Maîtrise magique** pour **chaque ingrédient** utilisé afin de déterminer la **stat associée** à cet ingrédient.\nLa **valeur maximale** d’une statistique ne peut **pas dépasser la somme des trois ingrédients les plus rares**.\n\nLa création reste active **1 jour**, sauf mention contraire.\n")}

	</section>
{/snippet}

{#snippet typesDinvocations()}
	<section>
		<h2 id="types-dinvocations">Types d'invocations</h2>
	{@html renderMarkdown("\nElles ont une fonction de base d'auto destruction\n")}
	{@render force()}
	{@render agilit()}
	{@render magicien()}
	</section>
{/snippet}

{#snippet force()}
	<section>
		<h3 id="force">Force</h3>
	{@html renderMarkdown("\n**Statistique Min | Max**\nForce 3 | 6\nDextérité 1 | 2\nMental Celui de maître\nPerception 0 (+3 pour détecter son élément)\n\nVie 50 | 100\nArmure 20 | 25\n\nAttaque D6 + Force * 4 | D8 + Force * 4\nMagie D10 | D12\n")}

	</section>
{/snippet}

{#snippet agilit()}
	<section>
		<h3 id="agilit">Agilité</h3>
	{@html renderMarkdown("\nForce 1 | 2\nDextérité 3 | 6\nMental Celui de maître\nPerception 0 (+3 pour détecter son élément)\n\nVie 30 | 60\nArmure 10 | 15\n\nAttaque D12 + Force | D20 + Force\nMagie D10 | D12\n")}

	</section>
{/snippet}

{#snippet magicien()}
	<section>
		<h3 id="magicien">Magicien</h3>
	{@html renderMarkdown("\nForce 1 | 2\nDextérité 1 | 2\nMental Celui de maître\nPerception 0 (+7 pour détecter son élément)\n\nVie 30 | 50\nArmure 10 | 15\n\nAttaque D8 + Force | D10 + Force\nMagie D10 + 10 | D10 + 20\n")}

	</section>
{/snippet}

{#snippet typesDingrdientsEtEffets()}
	<section>
		<h2 id="types-dingrdients-et-effets">Types d’ingrédients et effets</h2>
	{@html renderMarkdown("\nLa création tire ses propriétés des ingrédients utilisés.\nPour chaque type d'ingrédient, la statistique maximale ne peut pas être plus grande que la somme des 3 ingrédients les plus rares.\n\n- Les **minerais** lui donnent de l'**Armure**\n\n- Les **plantes** améliorent sa **Dextérité**\n\n- Les **champignons** augmentent sa **Vie**\n\n- Les **cristaux** lui donne accès à la **Magie** employée par le joueur pour le fabriquer\n\n- Les **morceaux de créatures** augmentent son **Attaque**\n\n| Type d’effet   | Déchet | Commun | Peu Commun | Rare | Légendaire |\n| -------------- | ------ | ------ | ---------- | ---- | ---------- |\n| **Minerai**    | +0     | +5     | +10        | +15  | +20        |\n| **Plante**     | +0     | +2     | +4         | +6   | +8         |\n| **Champignon** | +0     | +1     | +2         | +30  | +50        |\n| **Crystal**    | +0     | +1     | +2         | +3   | +4         |\n| **Créature**   | +0     | +2     | +4         | +6   | +8         |")}
	{@render dureEtStabilit()}
	</section>
{/snippet}

{#snippet dureEtStabilit()}
	<section>
		<h3 id="dure-et-stabilit">Durée et stabilité</h3>
	{@html renderMarkdown("\n| Rareté dominante | Durée moyenne                       | Stabilité   |\n| ---------------- | ----------------------------------- | ----------- |\n| Déchet           | 1 jour                              | Très faible |\n| Commun           | 3 jours                             | Faible      |\n| Peu Commun       | 15 jours                            | Moyenne     |\n| Rare             | 70 jours                            | Élevée      |\n| Légendaire       | Permanente (ou liée à l’invocateur) | Parfaite    |")}

	</section>
{/snippet}
