<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Forgeron</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Forgeron</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render raffinage()}
		{@render techniqueDeForge()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown(">Spécialité de l'<a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Artisanat\" data-wiki-fragment=\"\">Artisanat</a> qui travaille les métaux pour en fabriquer des armes et armures.\n")}
{/snippet}

{#snippet raffinage()}
	<section>
		<h2 id="raffinage">{@html applyBase("Raffinage")}</h2>
	{@html renderMarkdown("Une fois que le joueur a lancé les dés pour connaitre la rareté du matériau qu'il a obtenu, il doit lancer les dés pour savoir précisément l'effet de ce matériau.\n")}
	{@render dchet()}
	{@render communs()}
	{@render peuCommuns()}
	{@render rares()}
	{@render lgendaires()}
	</section>
{/snippet}

{#snippet dchet()}
	<section>
		<h3 id="dchet">{@html applyBase("Déchet")}</h3>
	{@html renderMarkdown("> Métaux ou minerais bruts de faible qualité, oxydés, ou trop impurs pour produire un bon acier sans traitement lourd.\n> Souvent recyclés ou fondus en alliage.\n\n| Type    | Matériau | Utilité                                                     | Poids (kg) |  Prix |\n| ------- | -------- | ----------------------------------------------------------- | ---------- | ----: |\n| Pièces  | Cuivre   | Malléable                                                   | 2          | 40 pc |\n| Alliage | Étain    |                                                             |            |       |\n| Alliage | Chrome   | Anti Corrosion<br>Anti Acide                                |            |       |\n| Métal   | Fonte    | Equipement                                                  |            |       |\n| Métal   | Plomb    | Malléable<br>Munitions<br>Poison lent<br>Réduction de magie |            |       |\n")}

	</section>
{/snippet}

{#snippet communs()}
	<section>
		<h3 id="communs">{@html applyBase("Communs")}</h3>
	{@html renderMarkdown("> Métaux courants, faciles à extraire et à travailler, base de la forge classique.\n\n| Type    | Matériau                   | Utilité                                                  | Poids (kg) |  Prix |\n| ------- | -------------------------- | -------------------------------------------------------- | :--------- | ----: |\n| Pièces  | Argent                     | Malléable<br>Revêtement                                  | 2          | 50 pa |\n| Alliage | Carbone                    | Statut **Solide**                                        |            |       |\n| Métal   | Fer                        | Equipement                                               |            |       |\n| Métal   | Bronze<br>*Cuivre + Etain* | <br>Equipement                                           |            |       |\n| Métal   | Acier<br>*Fer + Carbone*   | Equipement                                               |            |       |\n| Métal   | Obsidienne                 | Couteau/ Flèche<br>Statut **Délicat**<br>Non fusionnable |            |       |\n- Laiton (cuivre + zinc, semblable à l'or, utilisé pour faire des pièces pendant l'empire Romain)\n")}

	</section>
{/snippet}

{#snippet peuCommuns()}
	<section>
		<h3 id="peu-communs">{@html applyBase("Peu communs")}</h3>
	{@html renderMarkdown("> Métaux plus résistants ou nécessitant un savoir-faire supérieur pour le travail à chaud.\n\n| Type    | Matériau                  | Utilité                    | Poids (kg) |    Prix |\n| ------- | ------------------------- | -------------------------- | ---------- | ------: |\n| Pièces  | Électrum<br>*Argent + Or* | Malléable                  | 3          |   25 po |\n| Alliage | Nickel                    | Non altérable par la magie |            |         |\n| Alliage | Cobalt                    | Outils                     |            |         |\n| Métal   | Titane                    | Equipement                 |            | 1 50 pa |\n| Métal   | Tungstène                 | Revêtement                 |            |         |\n- Acier trempé (carbone maîtrisé, haute dureté)\n- Tungstène (utilisé pour renforts ou tranchants fins, non forgé pur)\n")}

	</section>
{/snippet}

{#snippet rares()}
	<section>
		<h3 id="rares">{@html applyBase("Rares")}</h3>
	{@html renderMarkdown("> Métaux à haute valeur technique, demandant extraction et forge complexes.\n\n| Type    | Matériau     | Utilité                                                                      | Poids (kg) |  Prix |\n| ------- | ------------ | ---------------------------------------------------------------------------- | ---------- | ----: |\n| Pièces  | Or           | Malléable                                                                    | 4          | 50 po |\n| Alliage | Molybdène    |                                                                              |            |       |\n| Métal   | Osmium       | plus dense que l’or, extrêmement rare<br>+ Platine/ Iridium = bio compatible |            |       |\n| Métal   | Iridium      | ultra-dense, très dur, résistant à la chaleur                                |            |       |\n| Métal   | Poudre noire | Poudre à canon pour fusil (50 tirs)                                          |            |       |\n- Molybdène (alliage haute température)\n-\n- Acier inoxydable (alliage nickel + chrome)\n- Vanadium (pour acier élastique et tranchant durable)\n")}

	</section>
{/snippet}

{#snippet lgendaires()}
	<section>
		<h3 id="lgendaires">{@html applyBase("Légendaires")}</h3>
	{@html renderMarkdown("> Métaux exceptionnellement rares, difficiles à fondre ou forger sans technologie avancée.\n> Historiquement utilisés pour symboliser la perfection métallurgique.\n\n| Type   | Matériau   | Utilité                                                                        | Poids (kg) |   Prix |\n| ------ | ---------- | ------------------------------------------------------------------------------ | ---------- | -----: |\n| Pièces | Platine    | Malléable                                                                      | 2          | 500 po |\n| Métal  | Mythril    | Equipement<br>Absorbe les impacts -> +5 Impénétrable <br>Léger -> +2 Acrobatie |            |  10 po |\n| Métal  | Palladium  | Equipement                                                                     |            |        |\n| Métal  | Adamantite | Equipement<br>Vs Anges                                                         |            |        |\n| Métal  | Orichalque | Equipement<br>VS Démons                                                        |            |        |\n- Tantale (ultra-résistant, presque inoxydable)\n- Rhodium (dur, brillant, excellent conducteur)\n")}

	</section>
{/snippet}

{#snippet techniqueDeForge()}
	<section>
		<h2 id="technique-de-forge">{@html applyBase("Technique de forge")}</h2>
	{@html renderMarkdown("\n- Damassé")}

	</section>
{/snippet}
