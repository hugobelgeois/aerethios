<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "apprentissage",
          "text": "Apprentissage",
          "level": 2
      },
      {
          "id": "composants",
          "text": "Composants",
          "level": 2
      },
      {
          "id": "prix-du-march-pour-enchanter-po",
          "text": "Prix du marché pour enchanter (po)",
          "level": 2
      },
      {
          "id": "kothula-wip",
          "text": "Kothula (WIP)",
          "level": 2
      },
      {
          "id": "nirina",
          "text": "Nirina",
          "level": 2
      },
      {
          "id": "ovliin",
          "text": "Ovliin",
          "level": 2
      },
      {
          "id": "arme",
          "text": "Arme",
          "level": 3
      },
      {
          "id": "armure",
          "text": "Armure",
          "level": 3
      },
      {
          "id": "suraja",
          "text": "Suraja",
          "level": 2
      },
      {
          "id": "ajouter",
          "text": "Ajouter",
          "level": 3
      },
      {
          "id": "amliorer",
          "text": "Améliorer",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Enchanteur"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Enchanteur"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render apprentissage()}
		{@render composants()}
		{@render prixDuMarchPourEnchanterPo()}
		{@render kothulaWip()}
		{@render nirina()}
		{@render ovliin()}
		{@render suraja()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html applyBase("<blockquote>Spécialité de l'<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" data-wiki-fragment=\"\">Artisanat</a> qui améliore magiquement les caractéristiques des équipements d'aventuriers.</blockquote>")}
{/snippet}

{#snippet apprentissage()}
	<section>
		<h2 id="apprentissage">{@html "Apprentissage"}</h2>
	{@html "<p>Chaque continent possède sa technique d'enchantement.</p>\n<p>Pour l'apprendre, il faut se rendre sur le continent concerné.</p>"}

	</section>
{/snippet}

{#snippet composants()}
	<section>
		<h2 id="composants">{@html "Composants"}</h2>
	{@html "<p>Pour enchanter, il faut :</p>\n<ul><li>l'objet à enchanter,</li></ul>\n<ul><li>un crystal purgé, qui facilite l'apport magique de l'enchanteur vers l'enchantement.</li></ul>\n<p>\tCe crystal coûte 5po et a 20% de chance de casser à chaque utilisation.<br>\n\tAu niveau 4, le crystal a 10% de chance de casser,</p>\n<ul><li>une réserve de magie sur soi,</li></ul>\n<ul><li>8h de travail continu.</li></ul>"}

	</section>
{/snippet}

{#snippet prixDuMarchPourEnchanterPo()}
	<section>
		<h2 id="prix-du-march-pour-enchanter-po">{@html "Prix du marché pour enchanter (po)"}</h2>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Kothula</th><th>Nirina</th><th>Ovliin</th><th>Suraja</th></tr></thead><tbody><tr><td>40 - 60</td><td>20 - 40</td><td>2 - 5 * Rareté de l'Os (Commun = 1)</td><td>Nombre d'enchantements * niveau actuel</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet kothulaWip()}
	<section>
		<h2 id="kothula-wip">{@html applyBase("<a href=\"%%BASE%%/Geographie/Kothula/Kothula\" class=\"wiki-link internal-link\" data-wiki-href=\"/Geographie/Kothula/Kothula\" data-wiki-fragment=\"\">Kothula</a> (WIP)")}</h2>
	{@html "<blockquote>Enchanter des parties du corps pour fluidifier les flux magiques qui circulent dedans et améliorer l'utilisation de la magie.</blockquote>\n<p>Les parties du corps enchantables sont les bras, le dos et les jambes.</p>\n<p>Rater le processus d'enchantement le rend juste temporaire (1 semaine)</p>\n<p>Un échec critique (95 - 99) affaiblit le corps et réduit les chances de tatouage pendant 100 jours. (-50% de réussite)</p>\n<p>Un échec super critique (100) empêche de se faire tatouer sur cette partie du corps à l'avenir.<br>\n\tUn objet rare permet d'empêcher cet échec (20 po au marché ou trouvable en expédition)</p>\n<p>L'effet dépend de l'architecture du tatouage (non cumulables sans conséquences) :</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Anneau</th><th>Lignes</th><th>X Points</th></tr></thead><tbody><tr><td>Maîtrise Magique +2</td><td>Régénération x2</td><td>+X crystaux</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet nirina()}
	<section>
		<h2 id="nirina">{@html applyBase("<a href=\"%%BASE%%/Geographie/Nirina/Nirina\" class=\"wiki-link internal-link\" data-wiki-href=\"/Geographie/Nirina/Nirina\" data-wiki-fragment=\"\">Nirina</a>")}</h2>
	{@html "<blockquote>Enchanter les métaux pour augmenter leur efficacité.</blockquote>\n<p>Rater l'enchantement donne un malus au lieu d'un bonus.</p>\n<p>Une réussite critique fait que le montant minimum est la moitié de la valeur du dé.</p>\n<p>Une armure possède 2 \"slots\" à enchanter, et une arme en possède 1.</p>\n<p>Pour nettoyer les slots, il faut faire fondre et reforger l'équipement (la magie de métal n'est pas suffisante).</p>\n<p>En fonction du bonus souhaité, les chances de réussites varient :</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>D4</th><th>D6</th><th>D8</th><th>D10</th></tr></thead><tbody><tr><td><strong>Taux de Réussite</strong></td><td>-0%</td><td>-20%</td><td>-40%</td><td>-60%</td></tr><tr><td><strong>Malus d'Echec</strong></td><td>-1</td><td>-2</td><td>-3</td><td>-4</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet ovliin()}
	<section>
		<h2 id="ovliin">{@html applyBase("<a href=\"%%BASE%%/Geographie/Ovliin/Ovliin\" class=\"wiki-link internal-link\" data-wiki-href=\"/Geographie/Ovliin/Ovliin\" data-wiki-fragment=\"\">Ovliin</a>")}</h2>
	{@html "<blockquote>Enchanter les os pour en extraire la puissance élémentaire de son ancien \"propriétaire\".</blockquote>\n<p>Une armure en os ou une arme avec le manche en os peuvent bénéficier de cette puissance.</p>\n<p>Pour enchanter, le joueur lance <strong>1d20 + Niveau d'enchanteur</strong> (le bonus obtenu varie selon le résultat et la rareté de l'os).</p>\n<p>Un échec diminue la rareté de l'os de 1.</p>\n<p>Un échec critique rend l'os inutilisable.</p>"}
	{@render arme()}
	{@render armure()}
	</section>
{/snippet}

{#snippet arme()}
	<section>
		<h3 id="arme">{@html "Arme"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Arme</th><th>+1</th><th>+2</th><th>+3</th><th>+4</th><th>+5</th></tr></thead><tbody><tr><td><strong>Normal</strong></td><td>2 - 9</td><td>10 - 16</td><td>17 +</td><td>-</td><td>-</td></tr><tr><td><strong>Commun</strong></td><td>2 - 7</td><td>8 - 14</td><td>14 - 19</td><td>20 +</td><td>-</td></tr><tr><td><strong>Peu Commun</strong></td><td>2 - 4</td><td>5 - 9</td><td>10 - 16</td><td>17 - 19</td><td>20 +</td></tr><tr><td><strong>Rare</strong></td><td>-</td><td>2 - 6</td><td>7 - 13</td><td>14 - 18</td><td>19 +</td></tr><tr><td><strong>Légendaire</strong></td><td>-</td><td>-</td><td>2 - 10</td><td>11 - 17</td><td>18 +</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet armure()}
	<section>
		<h3 id="armure">{@html "Armure"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Bonus</th><th>+1</th><th>+2</th><th>+3</th><th>+4</th><th>+5</th></tr></thead><tbody><tr><td><strong>Normal</strong></td><td>2 - 9</td><td>10 - 16</td><td>17 +</td><td>-</td><td>-</td></tr><tr><td><strong>Commun</strong></td><td>2 - 7</td><td>8 - 14</td><td>14 - 19</td><td>20 +</td><td>-</td></tr><tr><td><strong>Peu Commun</strong></td><td>2 - 4</td><td>5 - 9</td><td>10 - 16</td><td>17 - 19</td><td>20 +</td></tr><tr><td><strong>Rare</strong></td><td>-</td><td>2 - 6</td><td>7 - 13</td><td>14 - 18</td><td>19 +</td></tr><tr><td><strong>Légendaire</strong></td><td>-</td><td>-</td><td>2 - 10</td><td>11 - 17</td><td>18 +</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet suraja()}
	<section>
		<h2 id="suraja">{@html applyBase("<a href=\"%%BASE%%/Geographie/Suraja/Suraja\" class=\"wiki-link internal-link\" data-wiki-href=\"/Geographie/Suraja/Suraja\" data-wiki-fragment=\"\">Suraja</a>")}</h2>
	{@html "<blockquote>Enchanter les tissus pour augmenter leur résistance aux éléments magiques.</blockquote>\n<p>Un tissu peut cumuler plusieurs enchantements (le maximum dépend du type de tissu).</p>\n<p>Le joueur peut ajouter de nouveaux enchantements (au risque d'en perdre d'autres), ou améliorer ceux déjà présents.</p>"}
	{@render ajouter()}
	{@render amliorer()}
	</section>
{/snippet}

{#snippet ajouter()}
	<section>
		<h3 id="ajouter">{@html "Ajouter"}</h3>
	{@html "<p>Le joueur lance <strong>1d20 + Niveau d'enchanteur</strong>.</p>\n<p>La difficulté de réussite change selon le nombre d'enchantements déjà présents :</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Nombre d'enchantements présents sur le tissu</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><td><strong>Valeur minimale à obtenir</strong> (<)</td><td>10</td><td>12</td><td>14</td><td>16</td><td>18</td><td>20</td><td>22</td></tr></tbody></table></div>\n<p>Résultats :</p>\n<ul><li>réussite critique, l'enchantement est créé et a une valeur de 2,</li><li>réussite, l'enchantement est créé et a une valeur de 1,</li><li>échec, le tissu perd le dernier enchantement ajouté,</li><li>échec critique, le tissu perd les 2 derniers enchantements ajoutés.</li></ul>"}

	</section>
{/snippet}

{#snippet amliorer()}
	<section>
		<h3 id="amliorer">{@html "Améliorer"}</h3>
	{@html "<p>Le joueur lance 1d6, la valeur de l'enchantement est le résultat obtenu.</p>\n<p>Si le dé fait 6, la valeur devient 0 (l'enchantement est désactivé mais pas supprimé).</p>\n<p>L'enchantement disparaît si le joueur fait 6 ou un nombre inférieur à la valeur actuelle deux fois de suite.</p>"}

	</section>
{/snippet}
