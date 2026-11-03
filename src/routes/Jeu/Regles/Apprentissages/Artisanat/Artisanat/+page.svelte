<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Artisanat"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Artisanat"}</h1>
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
	{@html "<blockquote>L’artisanat a pour objectif de <strong>façonner une matière existante</strong> pour lui donner une <strong>forme utile et durable</strong>.<br>Certains artisans se spécialisent dans les <strong>grandes constructions</strong> (bâtiments, véhicules, fortifications), mais ceux qui intéressent le plus les aventuriers sont ceux dont le <strong>savoir-faire</strong> améliore directement leurs <strong>armes, protections ou équipements</strong>.</blockquote>"}
{/snippet}

{#snippet spcialisations()}
	<section>
		<h2 id="spcialisations">{@html "Spécialisations"}</h2>

	{@render artificier()}
	{@render bijoutier()}
	{@render enchanteur()}
	{@render forgeron()}
	{@render tanneur()}
	</section>
{/snippet}

{#snippet artificier()}
	<section>
		<h3 id="artificier">{@html "<span class=\"wiki-unresolved\">Artificier</span>"}</h3>
	{@html "<p>Un <strong>Artificier</strong> conçoit et assemble des <strong>dispositifs mécaniques, alchimiques ou explosifs</strong>.<br>\nSon savoir combine <strong>ingénierie</strong>, <strong>alchimie</strong> et <strong>magie contrôlée</strong>, lui permettant de créer des <strong>pièges</strong>, <strong>bombes</strong>, <strong>mines</strong>, ou <strong>mécanismes défensifs</strong>.<br>\nCertains se spécialisent dans les armes de siège miniaturisées, d’autres dans les gadgets de précision.<br>\nLeur principal défi réside dans la <strong>stabilité</strong> de leurs créations — un chef-d’œuvre peut facilement devenir un désastre.</p>"}

	</section>
{/snippet}

{#snippet bijoutier()}
	<section>
		<h3 id="bijoutier">{@html "<span class=\"wiki-unresolved\">Bijoutier</span>"}</h3>
	{@html "<p>Un <strong>Bijoutier</strong> travaille les <strong>métaux précieux</strong> et <strong>pierres rares</strong> pour façonner des <strong>anneaux, amulettes, talismans et sceaux</strong>.<br>\nSon art ne se limite pas à l’esthétique : il conçoit des <strong>supports de cristaux</strong> capables de <strong>stocker la magie en canalisant ses effets négatifs</strong>.<br>\nLa qualité de ses œuvres dépend de la <strong>pureté des matériaux</strong> et de la <strong>précision des gravures</strong>.<br>\nLes meilleurs bijoutiers savent équilibrer beauté, symbolisme et puissance, créant des objets aussi spirituels que fonctionnels.</p>"}

	</section>
{/snippet}

{#snippet enchanteur()}
	<section>
		<h3 id="enchanteur">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"\">Enchanteur</a>")}</h3>
	{@html "<p>Un <strong>Enchanteur</strong> applique les <strong>savoirs ésotériques</strong> de son continent pour <strong>améliorer les propriétés</strong> d’une arme, d’une armure ou d’un objet.<br>\nChaque continent possède ses <strong>propres traditions enchantées</strong>, offrant des avantages uniques mais aussi des <strong>contreparties</strong> spécifiques.<br>\nL’enchanteur agit comme un pont entre <strong>artisanat et magie</strong>, infusant la matière de symboles, de runes ou d’essences spirituelles.</p>"}

	</section>
{/snippet}

{#snippet forgeron()}
	<section>
		<h3 id="forgeron">{@html applyBase("<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Forgeron\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Forgeron\" data-wiki-fragment=\"\">Forgeron</a>")}</h3>
	{@html "<p>Un <strong>Forgeron</strong> maîtrise la <strong>fusion et le travail du métal</strong> afin de créer des <strong>armes</strong> et <strong>armures lourdes</strong>.<br>\nSon expérience détermine sa capacité à forger des <strong>alliages rares</strong>, plus <strong>tranchants, résistants ou conducteurs de magie</strong>.<br>\nLes meilleurs forgerons savent adapter leurs créations aux porteurs, équilibrant puissance, poids et résonance magique.</p>"}

	</section>
{/snippet}

{#snippet tanneur()}
	<section>
		<h3 id="tanneur">{@html "<span class=\"wiki-unresolved\">Tanneur</span>"}</h3>
	{@html "<p>Un <strong>Tanneur</strong> (ou <em>Couturier</em>) transforme les <strong>peaux et fourrures</strong> en <strong>armures légères</strong> et vêtements de protection.<br>\nSon art dépend à la fois de la <strong>qualité de la matière première</strong> et de sa <strong>maîtrise du traitement</strong> : cuir souple, peau renforcée, ...<br>\nLes tanneurs les plus habiles allient esthétique, confort et résistance, produisant des pièces aussi pratiques que discrètes.</p>"}

	</section>
{/snippet}

{#snippet fabrication()}
	<section>
		<h2 id="fabrication">{@html "Fabrication"}</h2>

	{@render raffinage()}
	{@render fabrication_2()}
	{@render prixIndicatifsPa()}
	</section>
{/snippet}

{#snippet raffinage()}
	<section>
		<h3 id="raffinage">{@html "Raffinage"}</h3>
	{@html "<p>Le joueur doit d'abord raffiner ses ingrédients bruts en matériaux utilisables à l’aide d’un <strong>jet de D20 + Niveau d'Artisanat + Rareté de l'ingrédient</strong> (déchet= 0, commun= 1, 2, 4, 6).<br>\nUn ingrédient ne peut pas devenir un matériau de rareté plus élevé, mais il peut cependant perdre en rareté.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Déchet</th><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>1 +</td><td>8 +</td><td>16 +</td><td>22 +</td><td>26 +</td></tr></tbody></table></div>\n<p>Ensuite, le joueur lance un autre dé pour déterminer avec précision le matériau qu'il vient d'obtenir.<br>\nVoir la partie Raffinage de chaque spécialisation pour en savoir plus.</p>"}

	</section>
{/snippet}

{#snippet fabrication_2()}
	<section>
		<h3 id="fabrication">{@html "Fabrication"}</h3>
	{@html "<p>Une fois les ingrédients transformés en matériaux, le joueur peut tenter une <strong>fabrication</strong> à l’aide d’un <strong>jet de D20 + Niveau d'Artisanat</strong>.</p>\n<p>Pour réussir, le résultat final doit être <strong>supérieur</strong> à la <strong>difficulté totale</strong> de la création.</p>\n<p>Les <strong>chances de réussite</strong> dépendent :</p>\n<ul><li>du <strong>niveau d’artisanat</strong> du joueur,</li></ul>\n<ul><li>du <strong>nombre total d’ingrédients utilisés</strong>,</li></ul>\n<ul><li>et de la <strong>rareté</strong> de chacun d’eux.</li></ul>\n<blockquote>Les malus de difficulté s’additionnent pour chaque ingrédient.</blockquote>"}

	</section>
{/snippet}

{#snippet prixIndicatifsPa()}
	<section>
		<h3 id="prix-indicatifs-pa">{@html "Prix indicatifs (pa)"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Rareté</th><th>Déchet (0)</th><th>Commun (1)</th><th>Peu Commun (2)</th><th>Rare (4)</th><th>Légendaire (6)</th></tr></thead><tbody><tr><td>Ingrédient</td><td>1 - 10</td><td>10 - 30</td><td>50 - 1 00</td><td>1 00 - 2 00</td><td>2 00 – 4 00</td></tr><tr><td>Matériau</td><td>10 - 50</td><td>50 - 2 00</td><td>2 00 - 4 00</td><td>5 00 - 10 00</td><td>10 00 - 20 00</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet rcolte()}
	<section>
		<h2 id="rcolte">{@html "Récolte"}</h2>
	{@html "<p>Lors d’un voyage, le joueur peut doubler le temps qu'il passe dans un hex afin de récolter divers composants.<br>\nLe joueur lance :</p>\n<ul><li><strong>1D100</strong> pour déterminer la <strong>rareté</strong> de l'ingrédient trouvé.</li></ul>\n<ul><li>Pour connaître la <strong>quantité</strong> obtenue :</li></ul>\n<ul><li>D10 pour les déchets,</li></ul>\n<ul><li>D8 pour les communs,</li></ul>\n<ul><li>D6 pour les peu communs,</li></ul>\n<ul><li>D4 pour les rares,</li></ul>\n<ul><li>D2 pour les légendaires.</li></ul>\n<ul><li>Le type d'ingrédients est déterminé par l'hex dans lequelle le joueur fait sa récolte (minerais, gemmes, crystaux, ..).</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Déchet</th><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>Artisan</td><td>1 - 30</td><td>31 - 60</td><td>61 - 85</td><td>86 - 96</td><td>97 - 100</td></tr><tr><td>Non Artisan</td><td>1 - 50</td><td>51 - 90</td><td>91 - 97</td><td>98 - 100</td><td>-</td></tr></tbody></table></div>"}

	</section>
{/snippet}
