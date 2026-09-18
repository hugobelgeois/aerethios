<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "actions",
          "text": "Actions",
          "level": 1
      },
      {
          "id": "mouvement",
          "text": "Mouvement",
          "level": 2
      },
      {
          "id": "action",
          "text": "Action",
          "level": 2
      },
      {
          "id": "action-bonus",
          "text": "Action Bonus",
          "level": 2
      },
      {
          "id": "raction",
          "text": "Réaction",
          "level": 2
      },
      {
          "id": "armures",
          "text": "Armures",
          "level": 1
      },
      {
          "id": "rsistances",
          "text": "Résistances",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Idea</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Idea</h1>
  </header>
  <div class="markdown-rendered">
		{@render actions()}
		{@render armures()}
  </div>
</article>

<LinkPreview />

{#snippet actions()}
	<section>
		<h1 id="actions">{@html applyBase("Actions")}</h1>
	{@html renderMarkdown("\r\nLes joueurs possèdent des Points d'Action (PA).\r\n> PA = 3 par défaut\r\n> +1 tous les 5 niveaux ? (5, 10, 15, 20) -> Max 7\r\n\r\nLes PA s'utilisent pendant le tour du joueur (Mouvement, Action, Action Bonus), mais également pendant le tour des ennemis (Réaction).\r\nIls se remplissent à chaque début de tour du joueur.\r\nTout coûte 1 PA de base sauf précision.\r\nPasser son tour à se concentrer permet d'avoir 1PA bonus au tour suivant\r\n\r")}
	{@render mouvement()}
	{@render action()}
	{@render actionBonus()}
	{@render raction()}
	</section>
{/snippet}

{#snippet mouvement()}
	<section>
		<h2 id="mouvement">{@html applyBase("Mouvement")}</h2>
	{@html renderMarkdown("\r\nPeu importe la distance (en restant dans les limites de déplacement), le déplacement coûte 1PA.\r\n\r")}

	</section>
{/snippet}

{#snippet action()}
	<section>
		<h2 id="action">{@html applyBase("Action")}</h2>
	{@html renderMarkdown("\r\nLes attaques physiques coûtent 1 PA.\r\nPeu importe le nombre de crystaux utilisés, les attaques magiques coûtent 1 PA.\r\n\r")}

	</section>
{/snippet}

{#snippet actionBonus()}
	<section>
		<h2 id="action-bonus">{@html applyBase("Action Bonus")}</h2>
	{@html renderMarkdown("\r\nLe joueur ne peut plus faire d'Actions normales une fois qu'une Action Bonus a été faite.\r\n\r")}

	</section>
{/snippet}

{#snippet raction()}
	<section>
		<h2 id="raction">{@html applyBase("Réaction")}</h2>
	{@html renderMarkdown("\r\nEsquiver : Pour chaque PA qu'il n'a pas dépensé, le joueur peut ajouter son modificateur de Dextérité à la mobilité de son armure afin d'avoir son Esquive.\r\nS'il a 3 PA non dépensé et qu'une attaque contre lui ne requiert que 2PA pour que son esquive soit supérieure à l'attaque, il peut en consommer seulement 2\r\n\r")}

	</section>
{/snippet}

{#snippet armures()}
	<section>
		<h1 id="armures">{@html applyBase("Armures")}</h1>
	{@html renderMarkdown("\r\nUne armure peut avoir jusqu'à 3 résistances ou 1 invulnérabilité (si 1 seul matériaux rare ou légendaire utilisé).\r\nLe type de résistance se base sur les matériaux utilisés.\r\nLa mobilité sans armure est de 10, et elle diminue selon le type de matériaux.\r\n\r\n| Matériaux         | Résistance | Mobilité |\r\n| ----------------- | ---------- | -------- |\r\n| Tissus/ Fourrures | Magique    | -1       |\r\n| Cuirs/ Peaux      | Magique    | -2       |\r\n| Ecailles          | Physique   | -3       |\r\n| Os                | Physique   | -4       |\r\n| Métaux            | Physique   | -5       |\r\n\r")}
	{@render rsistances()}
	</section>
{/snippet}

{#snippet rsistances()}
	<section>
		<h2 id="rsistances">{@html applyBase("Résistances")}</h2>
	{@html renderMarkdown("\r\n- Magique (Feu, Eau, Air, Foudre, Lumière, Ténèbres, Roche, Glace, ...)\r\n- Physique (Tranchant, Contondant, Perforant)")}

	</section>
{/snippet}
