<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "raffinage",
          "text": "Raffinage",
          "level": 2
      },
      {
          "id": "dchet",
          "text": "Déchet",
          "level": 3
      },
      {
          "id": "communs",
          "text": "Communs",
          "level": 3
      },
      {
          "id": "peu-communs",
          "text": "Peu communs",
          "level": 3
      },
      {
          "id": "rares",
          "text": "Rares",
          "level": 3
      },
      {
          "id": "lgendaires",
          "text": "Légendaires",
          "level": 3
      },
      {
          "id": "technique-de-forge",
          "text": "Technique de forge",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Forgeron"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Forgeron"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render raffinage()}
		{@render techniqueDeForge()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html applyBase("<blockquote>Spécialité de l'<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" data-wiki-fragment=\"\">Artisanat</a> qui travaille les métaux pour en fabriquer des armes et armures.</blockquote>")}
{/snippet}

{#snippet raffinage()}
	<section>
		<h2 id="raffinage">{@html "Raffinage"}</h2>
	{@html "<p>Une fois que le joueur a lancé les dés pour connaitre la rareté du matériau qu'il a obtenu, il doit lancer les dés pour savoir précisément l'effet de ce matériau.</p>"}
	{@render dchet()}
	{@render communs()}
	{@render peuCommuns()}
	{@render rares()}
	{@render lgendaires()}
	</section>
{/snippet}

{#snippet dchet()}
	<section>
		<h3 id="dchet">{@html "Déchet"}</h3>
	{@html "<blockquote>Métaux ou minerais bruts de faible qualité, oxydés, ou trop impurs pour produire un bon acier sans traitement lourd.<br>Souvent recyclés ou fondus en alliage.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Type</th><th>Matériau</th><th>Utilité</th><th>Poids (kg)</th><th>Prix</th></tr></thead><tbody><tr><td>Pièces</td><td>Cuivre</td><td>Malléable</td><td>2</td><td>40 pc</td></tr><tr><td>Alliage</td><td>Étain</td><td></td><td></td><td></td></tr><tr><td>Alliage</td><td>Chrome</td><td>Anti Corrosion<br>Anti Acide</td><td></td><td></td></tr><tr><td>Métal</td><td>Fonte</td><td>Equipement</td><td></td><td></td></tr><tr><td>Métal</td><td>Plomb</td><td>Malléable<br>Munitions<br>Poison lent<br>Réduction de magie</td><td></td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet communs()}
	<section>
		<h3 id="communs">{@html "Communs"}</h3>
	{@html "<blockquote>Métaux courants, faciles à extraire et à travailler, base de la forge classique.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Type</th><th>Matériau</th><th>Utilité</th><th>Poids (kg)</th><th>Prix</th></tr></thead><tbody><tr><td>Pièces</td><td>Argent</td><td>Malléable<br>Revêtement</td><td>2</td><td>50 pa</td></tr><tr><td>Alliage</td><td>Carbone</td><td>Statut <strong>Solide</strong></td><td></td><td></td></tr><tr><td>Métal</td><td>Fer</td><td>Equipement</td><td></td><td></td></tr><tr><td>Métal</td><td>Bronze<br><em>Cuivre + Etain</em></td><td><br>Equipement</td><td></td><td></td></tr><tr><td>Métal</td><td>Acier<br><em>Fer + Carbone</em></td><td>Equipement</td><td></td><td></td></tr><tr><td>Métal</td><td>Obsidienne</td><td>Couteau/ Flèche<br>Statut <strong>Délicat</strong><br>Non fusionnable</td><td></td><td></td></tr></tbody></table></div>\n<ul><li>Laiton (cuivre + zinc, semblable à l'or, utilisé pour faire des pièces pendant l'empire Romain)</li></ul>"}

	</section>
{/snippet}

{#snippet peuCommuns()}
	<section>
		<h3 id="peu-communs">{@html "Peu communs"}</h3>
	{@html "<blockquote>Métaux plus résistants ou nécessitant un savoir-faire supérieur pour le travail à chaud.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Type</th><th>Matériau</th><th>Utilité</th><th>Poids (kg)</th><th>Prix</th></tr></thead><tbody><tr><td>Pièces</td><td>Électrum<br><em>Argent + Or</em></td><td>Malléable</td><td>3</td><td>25 po</td></tr><tr><td>Alliage</td><td>Nickel</td><td>Non altérable par la magie</td><td></td><td></td></tr><tr><td>Alliage</td><td>Cobalt</td><td>Outils</td><td></td><td></td></tr><tr><td>Métal</td><td>Titane</td><td>Equipement</td><td></td><td>1 50 pa</td></tr><tr><td>Métal</td><td>Tungstène</td><td>Revêtement</td><td></td><td></td></tr></tbody></table></div>\n<ul><li>Acier trempé (carbone maîtrisé, haute dureté)</li><li>Tungstène (utilisé pour renforts ou tranchants fins, non forgé pur)</li></ul>"}

	</section>
{/snippet}

{#snippet rares()}
	<section>
		<h3 id="rares">{@html "Rares"}</h3>
	{@html "<blockquote>Métaux à haute valeur technique, demandant extraction et forge complexes.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Type</th><th>Matériau</th><th>Utilité</th><th>Poids (kg)</th><th>Prix</th></tr></thead><tbody><tr><td>Pièces</td><td>Or</td><td>Malléable</td><td>4</td><td>50 po</td></tr><tr><td>Alliage</td><td>Molybdène</td><td></td><td></td><td></td></tr><tr><td>Métal</td><td>Osmium</td><td>plus dense que l’or, extrêmement rare<br>+ Platine/ Iridium = bio compatible</td><td></td><td></td></tr><tr><td>Métal</td><td>Iridium</td><td>ultra-dense, très dur, résistant à la chaleur</td><td></td><td></td></tr><tr><td>Métal</td><td>Poudre noire</td><td>Poudre à canon pour fusil (50 tirs)</td><td></td><td></td></tr></tbody></table></div>\n<ul><li>Molybdène (alliage haute température)</li></ul>\n<p>-</p>\n<ul><li>Acier inoxydable (alliage nickel + chrome)</li><li>Vanadium (pour acier élastique et tranchant durable)</li></ul>"}

	</section>
{/snippet}

{#snippet lgendaires()}
	<section>
		<h3 id="lgendaires">{@html "Légendaires"}</h3>
	{@html "<blockquote>Métaux exceptionnellement rares, difficiles à fondre ou forger sans technologie avancée.<br>Historiquement utilisés pour symboliser la perfection métallurgique.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Type</th><th>Matériau</th><th>Utilité</th><th>Poids (kg)</th><th>Prix</th></tr></thead><tbody><tr><td>Pièces</td><td>Platine</td><td>Malléable</td><td>2</td><td>500 po</td></tr><tr><td>Métal</td><td>Mythril</td><td>Equipement<br>Absorbe les impacts -> +5 Impénétrable <br>Léger -> +2 Acrobatie</td><td></td><td>10 po</td></tr><tr><td>Métal</td><td>Palladium</td><td>Equipement</td><td></td><td></td></tr><tr><td>Métal</td><td>Adamantite</td><td>Equipement<br>Vs Anges</td><td></td><td></td></tr><tr><td>Métal</td><td>Orichalque</td><td>Equipement<br>VS Démons</td><td></td><td></td></tr></tbody></table></div>\n<ul><li>Tantale (ultra-résistant, presque inoxydable)</li><li>Rhodium (dur, brillant, excellent conducteur)</li></ul>"}

	</section>
{/snippet}

{#snippet techniqueDeForge()}
	<section>
		<h2 id="technique-de-forge">{@html "Technique de forge"}</h2>
	{@html "<ul><li>Damassé</li></ul>"}

	</section>
{/snippet}
