<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "dtails",
          "text": "Détails",
          "level": 2
      },
      {
          "id": "notes",
          "text": "Notes",
          "level": 2
      },
      {
          "id": "scnario",
          "text": "Scénario",
          "level": 2
      },
      {
          "id": "1-billy-et-les-dieux",
          "text": "1) Billy et les Dieux",
          "level": 4
      },
      {
          "id": "2-combat-contre-un-dieu",
          "text": "2) Combat contre un Dieu",
          "level": 4
      },
      {
          "id": "3-prsentation-des-templis",
          "text": "3) Présentation des Templis",
          "level": 4
      },
      {
          "id": "4-trouver-le-gobelin",
          "text": "4) Trouver le gobelin",
          "level": 4
      },
      {
          "id": "5-abattre-le-gobelin",
          "text": "5) Abattre le gobelin",
          "level": 4
      },
      {
          "id": "6-retrouver-syrithia",
          "text": "6) Retrouver Syrithia",
          "level": 4
      },
      {
          "id": "joueurs",
          "text": "Joueurs",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Arc 4 - 18 - 02.01.26"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arc 4 - 18 - 02.01.26"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render dtails()}
		{@render notes()}
		{@render scnario()}
		{@render joueurs()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<blockquote>Résumé</blockquote>"}
{/snippet}

{#snippet dtails()}
	<section>
		<h2 id="dtails">{@html "Détails"}</h2>
	{@html "<p>Lieu actuel : Nirina, Pranels</p>\n<p>Objectif :</p>\n<p>Pnjs notables : Syrithia, Billy, Dieu Pourpre, Dieu Scintillant, Grande Mère</p>"}

	</section>
{/snippet}

{#snippet notes()}
	<section>
		<h2 id="notes">{@html "Notes"}</h2>


	</section>
{/snippet}

{#snippet scnario()}
	<section>
		<h2 id="scnario">{@html "Scénario"}</h2>

	{@render _BillyEtLesDieux()}
	{@render _CombatContreUnDieu()}
	{@render _PrsentationDesTemplis()}
	{@render _TrouverLeGobelin()}
	{@render _AbattreLeGobelin()}
	{@render _RetrouverSyrithia()}
	</section>
{/snippet}

{#snippet _BillyEtLesDieux()}
	<section>
		<h4 id="1-billy-et-les-dieux">{@html "1) Billy et les Dieux"}</h4>
	{@html "<blockquote><strong>Interaction</strong>, Qui > Quoi</blockquote>\n<p>Résumé de la situation actuelle avec le masque et les dieux.</p>\n<p>Dieux :</p>\n<ul><li>Dieu Pourpre</li><li>Dieu Scintillant</li><li>Grande Mère</li></ul>"}

	</section>
{/snippet}

{#snippet _CombatContreUnDieu()}
	<section>
		<h4 id="2-combat-contre-un-dieu">{@html "2) Combat contre un Dieu"}</h4>
	{@html "<blockquote><strong>Combat</strong>,</blockquote>\n<p>Le Dieu Pourpre veut tester le groupe.</p>\n<p>Celui qui arrive à lui faire mal aura une bénédiction (bénédiction de la pièce / fratricide).</p>\n<p>Si un joueur demande pour tester les dieux, le Dieu Pourpre le prends en 1v1.<br>\nIl le laisse le taper le temps de charger son attaque.</p>"}

	</section>
{/snippet}

{#snippet _PrsentationDesTemplis()}
	<section>
		<h4 id="3-prsentation-des-templis">{@html "3) Présentation des Templis"}</h4>
	{@html "<blockquote><strong>Interaction</strong>, Qui > Quoi</blockquote>\n<p>Syrithia leur demande de l'aider à réparer les dégâts causés par le masque</p>\n<p>Pour se faire ils doivent s'occuper d'un gobelin qui s'occupait de garder une maison de noble</p>\n<p>Le gobelin est un esprit qui ne peut pas pleinement se faire taper, mais il est fort et des Arvens en armure ne seraient pas de trop</p>\n<p>Pour l'abattre ils doivent utiliser un autre équipement fourni par Syrithia :</p>\n<ul><li>chaine en argent pour le capturer,</li><li>limaille de fer & sel pour l'affaiblir,</li><li>eau bénite pour le tuer,</li><li>bois d'olivier pour l'étourdir,</li><li>magies élétistes.</li></ul>\n<p>La magie des ténèbres attirent la créature, la lumière la révèle afin que l'équipement la touche, et la foudre lui fait mal.</p>\n<p>Jets entièrement basés sur le mental et la perception</p>\n<p>Si possible ne pas le tuer et le capturer avec la chaine d'argent</p>\n<p>Une fois que ce sera fait, elle leur demande de la retrouver, elle aidera les gens blessés</p>"}

	</section>
{/snippet}

{#snippet _TrouverLeGobelin()}
	<section>
		<h4 id="4-trouver-le-gobelin">{@html "4) Trouver le gobelin"}</h4>
	{@html "<blockquote><strong>Exploration</strong>, Dara/ Hazdaim > Magie de Ténèbres</blockquote>\n<p>Le bâtiment est rempli d'humidité, la brume empêche les torches de s'allumer correctement</p>\n<p>Les joueurs doivent se laisser plonger dans l'obscurité pour que la créature se manifeste</p>"}

	</section>
{/snippet}

{#snippet _AbattreLeGobelin()}
	<section>
		<h4 id="5-abattre-le-gobelin">{@html "5) Abattre le gobelin"}</h4>
	{@html "<blockquote><strong>Combat</strong>, Arek/ Hazdaim > Magie de Lumière</blockquote>"}

	</section>
{/snippet}

{#snippet _RetrouverSyrithia()}
	<section>
		<h4 id="6-retrouver-syrithia">{@html "6) Retrouver Syrithia"}</h4>
	{@html "<blockquote><strong>Exploration</strong>, Qui > Quoi</blockquote>\n<p>Ils parcourent la ville et constatent les dégâts</p>\n<p>Ils retrouvent Syrithia en train de soigner en masse avec la lumière</p>\n<p>Elle leur propose de s'équiper avec les matériaux du Shara Ishvalda pour les remercier</p>\n<p>Ils doivent faire attention au Magala.<br>\nLe masque a empêché sa transformation finale, mais il en aurait pris le contrôle</p>"}

	</section>
{/snippet}

{#snippet joueurs()}
	<section>
		<h2 id="joueurs">{@html "Joueurs"}</h2>
	{@html applyBase("<ul><li><input type=\"checkbox\" disabled checked> Diego 19</li><li><input type=\"checkbox\" disabled> Loïc 15</li><li><input type=\"checkbox\" disabled> Lucas 8</li><li><input type=\"checkbox\" disabled checked> Michel 21</li><li><input type=\"checkbox\" disabled checked> Nolan 7</li><li><input type=\"checkbox\" disabled checked> Thomas 19</li><li><input type=\"checkbox\" disabled> William 7</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Précédent</th><th>Suivant</th></tr></thead><tbody><tr><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 3/Arc 3 - 17 - 20.12.25\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 3/Arc 3 - 17 - 20.12.25\" data-wiki-fragment=\"\">Arc 3 - 17 - 20.12.25</a></td><td><a href=\"%%BASE%%/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Sessions du Masque/Arc 4/Arc 4 - 19 - 23.01.26\" data-wiki-fragment=\"\">Arc 4 - 19 - 23.01.26</a></td></tr></tbody></table></div>")}

	</section>
{/snippet}
