<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "spcialisations",
          "text": "Spécialisations",
          "level": 2
      },
      {
          "id": "artificier",
          "text": "Artificier",
          "level": 3
      },
      {
          "id": "bijoutier",
          "text": "Bijoutier",
          "level": 3
      },
      {
          "id": "enchanteur",
          "text": "Enchanteur",
          "level": 3
      },
      {
          "id": "forgeron",
          "text": "Forgeron",
          "level": 3
      },
      {
          "id": "tanneur",
          "text": "Tanneur",
          "level": 3
      },
      {
          "id": "fabrication",
          "text": "Fabrication",
          "level": 2
      },
      {
          "id": "raffinage",
          "text": "Raffinage",
          "level": 3
      },
      {
          "id": "fabrication",
          "text": "Fabrication",
          "level": 3
      },
      {
          "id": "prix-indicatifs-pa",
          "text": "Prix indicatifs (pa)",
          "level": 3
      },
      {
          "id": "rcolte",
          "text": "Récolte",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Artisanat</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Artisanat</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render spcialisations()}
		{@render fabrication()}
		{@render rcolte()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">L’artisanat a pour objectif de **façonner une matière existante** pour lui donner une **forme utile et durable**.\n>Certains artisans se spécialisent dans les **grandes constructions** (bâtiments, véhicules, fortifications), mais ceux qui intéressent le plus les aventuriers sont ceux dont le **savoir-faire** améliore directement leurs **armes, protections ou équipements**.\n")}
{/snippet}

{#snippet spcialisations()}
	<section>
		<h2 id="spcialisations">{@html applyBase("Spécialisations")}</h2>

	{@render artificier()}
	{@render bijoutier()}
	{@render enchanteur()}
	{@render forgeron()}
	{@render tanneur()}
	</section>
{/snippet}

{#snippet artificier()}
	<section>
		<h3 id="artificier">{@html applyBase("<span class=\"wiki-unresolved\">Artificier</span>")}</h3>
	{@html renderMarkdown("\nUn **Artificier** conçoit et assemble des **dispositifs mécaniques, alchimiques ou explosifs**.\nSon savoir combine **ingénierie**, **alchimie** et **magie contrôlée**, lui permettant de créer des **pièges**, **bombes**, **mines**, ou **mécanismes défensifs**.\nCertains se spécialisent dans les armes de siège miniaturisées, d’autres dans les gadgets de précision.\nLeur principal défi réside dans la **stabilité** de leurs créations — un chef-d’œuvre peut facilement devenir un désastre.\n")}

	</section>
{/snippet}

{#snippet bijoutier()}
	<section>
		<h3 id="bijoutier">{@html applyBase("<span class=\"wiki-unresolved\">Bijoutier</span>")}</h3>
	{@html renderMarkdown("\nUn **Bijoutier** travaille les **métaux précieux** et **pierres rares** pour façonner des **anneaux, amulettes, talismans et sceaux**.\nSon art ne se limite pas à l’esthétique : il conçoit des **supports de cristaux** capables de **stocker la magie en canalisant ses effets négatifs**.\nLa qualité de ses œuvres dépend de la **pureté des matériaux** et de la **précision des gravures**.\nLes meilleurs bijoutiers savent équilibrer beauté, symbolisme et puissance, créant des objets aussi spirituels que fonctionnels.\n")}

	</section>
{/snippet}

{#snippet enchanteur()}
	<section>
		<h3 id="enchanteur">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"\">Enchanteur</a>")}</h3>
	{@html renderMarkdown("\nUn **Enchanteur** applique les **savoirs ésotériques** de son continent pour **améliorer les propriétés** d’une arme, d’une armure ou d’un objet.\nChaque continent possède ses **propres traditions enchantées**, offrant des avantages uniques mais aussi des **contreparties** spécifiques.\nL’enchanteur agit comme un pont entre **artisanat et magie**, infusant la matière de symboles, de runes ou d’essences spirituelles.\n")}

	</section>
{/snippet}

{#snippet forgeron()}
	<section>
		<h3 id="forgeron">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Forgeron\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Forgeron\" data-wiki-fragment=\"\">Forgeron</a>")}</h3>
	{@html renderMarkdown("\nUn **Forgeron** maîtrise la **fusion et le travail du métal** afin de créer des **armes** et **armures lourdes**.\nSon expérience détermine sa capacité à forger des **alliages rares**, plus **tranchants, résistants ou conducteurs de magie**.\nLes meilleurs forgerons savent adapter leurs créations aux porteurs, équilibrant puissance, poids et résonance magique.\n")}

	</section>
{/snippet}

{#snippet tanneur()}
	<section>
		<h3 id="tanneur">{@html applyBase("<span class=\"wiki-unresolved\">Tanneur</span>")}</h3>
	{@html renderMarkdown("\nUn **Tanneur** (ou _Couturier_) transforme les **peaux et fourrures** en **armures légères** et vêtements de protection.\nSon art dépend à la fois de la **qualité de la matière première** et de sa **maîtrise du traitement** : cuir souple, peau renforcée, ...\nLes tanneurs les plus habiles allient esthétique, confort et résistance, produisant des pièces aussi pratiques que discrètes.\n")}

	</section>
{/snippet}

{#snippet fabrication()}
	<section>
		<h2 id="fabrication">{@html applyBase("Fabrication")}</h2>

	{@render raffinage()}
	{@render fabrication_2()}
	{@render prixIndicatifsPa()}
	</section>
{/snippet}

{#snippet raffinage()}
	<section>
		<h3 id="raffinage">{@html applyBase("Raffinage")}</h3>
	{@html renderMarkdown("\nLe joueur doit d'abord raffiner ses ingrédients bruts en matériaux utilisables à l’aide d’un **jet de D20 + Niveau d'Artisanat + Rareté de l'ingrédient** (déchet= 0, commun= 1, 2, 4, 6).\nUn ingrédient ne peut pas devenir un matériau de rareté plus élevé, mais il peut cependant perdre en rareté.\n\n| Déchet | Commun | Peu Commun | Rare | Légendaire |\n| ------ | ------ | ---------- | ---- | ---------- |\n| 1 +    | 8 +    | 16 +       | 22 + | 26 +       |\n\nEnsuite, le joueur lance un autre dé pour déterminer avec précision le matériau qu'il vient d'obtenir.\nVoir la partie Raffinage de chaque spécialisation pour en savoir plus.\n")}

	</section>
{/snippet}

{#snippet fabrication_2()}
	<section>
		<h3 id="fabrication">{@html applyBase("Fabrication")}</h3>
	{@html renderMarkdown("\nUne fois les ingrédients transformés en matériaux, le joueur peut tenter une **fabrication** à l’aide d’un **jet de D20 + Niveau d'Artisanat**.\n\nPour réussir, le résultat final doit être **supérieur** à la **difficulté totale** de la création.\n\nLes **chances de réussite** dépendent :\n\n- du **niveau d’artisanat** du joueur,\n\n- du **nombre total d’ingrédients utilisés**,\n\n- et de la **rareté** de chacun d’eux.\n\n> Les malus de difficulté s’additionnent pour chaque ingrédient.\n")}

	</section>
{/snippet}

{#snippet prixIndicatifsPa()}
	<section>
		<h3 id="prix-indicatifs-pa">{@html applyBase("Prix indicatifs (pa)")}</h3>
	{@html renderMarkdown("\n| Rareté     | Déchet (0) | Commun (1) | Peu Commun (2) | Rare (4)     | Légendaire (6) |\n| ---------- | ---------- | ---------- | -------------- | ------------ | -------------- |\n| Ingrédient | 1 - 10     | 10 - 30    | 50 - 1 00      | 1 00 - 2 00  | 2 00 – 4 00    |\n| Matériau   | 10 - 50    | 50 - 2 00  | 2 00 - 4 00    | 5 00 - 10 00 | 10 00 - 20 00  |\n")}

	</section>
{/snippet}

{#snippet rcolte()}
	<section>
		<h2 id="rcolte">{@html applyBase("Récolte")}</h2>
	{@html renderMarkdown("\nLors d’un voyage, le joueur peut doubler le temps qu'il passe dans un hex afin de récolter divers composants.\nLe joueur lance :\n\n- **1D100** pour déterminer la **rareté** de l'ingrédient trouvé.\n\n- Pour connaître la **quantité** obtenue :\n\n    - D10 pour les déchets,\n\n    - D8 pour les communs,\n\n    - D6 pour les peu communs,\n\n    - D4 pour les rares,\n\n    - D2 pour les légendaires.\n\n- Le type d'ingrédients est déterminé par l'hex dans lequelle le joueur fait sa récolte (minerais, gemmes, crystaux, ..).\n\n|             | Déchet | Commun  | Peu Commun | Rare     | Légendaire |\n| ----------- | ------ | ------- | ---------- | -------- | ---------- |\n| Artisan     | 1 - 30 | 31 - 60 | 61 - 85    | 86 - 96  | 97 - 100   |\n| Non Artisan | 1 - 50 | 51 - 90 | 91 - 97    | 98 - 100 | -          |")}

	</section>
{/snippet}
