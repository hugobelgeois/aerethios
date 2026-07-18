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
  <title>Cuisinier</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Cuisinier</h1>
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
	{@html renderMarkdown("> **Cuisinier** est une spécialité dérivée de l’<a href=\"/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Alchimie/Alchimie\" data-wiki-fragment=\"\">Alchimie</a> qui sublime les ingrédients les plus simples — parfois sans valeur apparente — pour en tirer le meilleur. Là où l’alchimiste transforme, le cuisinier **révèle**.\n")}
{/snippet}

{#snippet matriel()}
	<section>
		<h2 id="matriel">Matériel</h2>
	{@html renderMarkdown("\nPour cuisiner, il faut disposer :\n\n- du **matériel de base**,\n\t- _(poids total ≈ 5 kg, coût : 1 PO)_\n\n- des **ingrédients frais**, en quantité suffisante **pour chaque convive**.\n")}

	</section>
{/snippet}

{#snippet rsultatDeFabrication()}
	<section>
		<h2 id="rsultat-de-fabrication">Résultat de Fabrication</h2>
	{@html renderMarkdown("\n- **Réussite critique** : le repas est **parfait** et **dure 3 jours**.\n\n- **Réussite** : le repas est **créé normalement**.\n\n- **Échec** : le repas **nourrit** mais donne **-1 dans les compétences ciblées**.\n\n- **Échec critique** : le repas **ne nourrit pas** (il faut refaire à manger) et **inverse le bonus en malus**.\n")}

	</section>
{/snippet}

{#snippet ingrdients()}
	<section>
		<h2 id="ingrdients">Ingrédients</h2>
	{@html renderMarkdown("\nLes repas offrent des **bonus journaliers** selon leur composition.\nChaque ingrédient utilisé doit être multiplié par le **nombre de convives**.\nLes effets ne sont **ni cumulatifs**, ni **stockables** — le plat doit être consommé immédiatement, sinon il se transforme en simple ration sans effet.\nLes ingrédients **se conservent 7 jours** avant de pourrir.\n\nChaque ingrédient accorde un bonus de **2** dans une **sous-compétence liée** à son type.\nLa sous-compétence est sélectionnée par un **D4**.\nSi le dé tombe sur **4**, l'ingrédient n'a **aucun effet**.\n")}
	{@render viandes_BonusPhysiques()}
	{@render accompagnements_BonusMagiques()}
	</section>
{/snippet}

{#snippet viandes_BonusPhysiques()}
	<section>
		<h3 id="viandes--bonus-physiques">**Viandes** — bonus physiques</h3>
	{@html renderMarkdown("\n| Aliment        | Bonus principal | Poids (kg) | Prix (pb) |\n| -------------- | --------------- | ---------- | --------- |\n| Viande rouge   | Force           | 1          | 15        |\n| Viande blanche | Dextérité       | 1          | 12        |\n| Viande noire   | Perception      | 1          | 10        |\n| Poisson        | Mental          | 1          | 7         |\n> **Exemple** : Viande rouge (Force) → Athlétisme, Bagarre ou Impénétrable.\n")}

	</section>
{/snippet}

{#snippet accompagnements_BonusMagiques()}
	<section>
		<h3 id="accompagnements--bonus-magiques">**Accompagnements** — bonus magiques</h3>
	{@html renderMarkdown("\n| Aliment       | Bonus magique   | Poids (kg) | Prix (pb) |\n| ------------- | --------------- | ---------- | --------- |\n| Légumes       | Magie Élétiste  | 0.5        | 5         |\n| Fruits        | Magie Croitiste | 0.5        | 5         |\n| Fruits de mer | Magie Mixte     | 0.5        | 10        |\n| Épices        | Magie de Feu    | 0.1        | 25        |\n> **Exemple** : Fruits (Magie Croitiste) → Lumière, Foudre ou Ténèbres.\n")}

	</section>
{/snippet}

{#snippet toucheDuChef()}
	<section>
		<h2 id="touche-du-chef">Touche du Chef</h2>
	{@html renderMarkdown("\nÀ partir du **niveau 3**, le cuisinier peut créer une **Touche du Chef** :\n\n- Il choisit un ingrédient \"mystère\" à incorporer.\n\n- Il lance un dé lié au tableau qui l'intéresse pour déterminer l’effet conféré.\n\n- Il peut aussi **acheter ou échanger** les Touches d’autres chefs afin d'avoir un effet préétablit.\n\n| Jet (D12) | Effet spécial |\n| --------- | ------------- |\n| 1         | Mule          |\n| 2         | Insensible    |\n| 3         | Intimidant    |\n| 4         | Veinard       |\n| 5         | Réflexe       |\n| 6         | Négociateur   |\n| 7         | Assidu        |\n| 8         | Imperturbable |\n| 9         | Charismatique |\n| 10        | Nyctalope     |\n| 11        | Intuition     |\n| 12        | Mentaliste    |\n\n| Jet (D8) | Effet spécial              |\n| -------- | -------------------------- |\n| 1        | Maîtrise d'armes +1        |\n| 2        | Maîtrise magique +1        |\n| 3        | Régénération Magique D100% |\n| 4        | Imperturbable              |\n| 5        | Réflexe                    |\n| 6        | Insensible                 |\n| 7        | Intuition                  |\n| 8        | Régénère 2 crystaux        |")}

	</section>
{/snippet}
