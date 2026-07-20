<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "huiles",
          "text": "Huiles",
          "level": 3
      },
      {
          "id": "enchantements",
          "text": "Enchantements",
          "level": 2
      },
      {
          "id": "enchantements-darme-de-mle",
          "text": "Enchantements d'Arme de mêlée",
          "level": 3
      },
      {
          "id": "enchantements-darme--distance",
          "text": "Enchantements d'Arme à distance",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Huiles</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Huiles</h1>
  </header>
  <div class="markdown-rendered">
		{@render huiles()}
		{@render enchantements()}
  </div>
</article>

<LinkPreview />

{#snippet huiles()}
	<section>
		<h3 id="huiles">{@html applyBase("Huiles")}</h3>
	{@html renderMarkdown("> Ajoute temporairement l'effet d'1 huile à votre arme (dure 1 combat).\r\n> Les huiles ne s'appliquent que sur les armes Tranchantes ainsi que les Arcs et Arbalètes.\r\n> Se fabrique par un Alchimiste(Potionniste).\r\n\r\n| Afflictions    | Effets                | Durée   | Soins           | Cumulable              |  Prix | Durée de fabrication |\r\n| -------------- | --------------------- | ------- | --------------- | ---------------------- | ----: | -------------------: |\r\n| Saignement     | -2HP/ tour            | 3 tours | Gel cicatrisant | Oui                    | 10 pa |                  2 j |\r\n| Hémorragie     | -2HP/ action          | 2 tours | Gel cicatrisant | Oui<br>+Reset la durée | 25 pa |                  5 j |\r\n| Poison         | -1HP/ tour            | -       | Antipoison      | -                      | 10 pa |                  2 j |\r\n| Toxique        | -4HP/ action          | 2 tours | -               | -                      | 25 pa |                  5 j |\r\n| Nausée         | -2 à son dé d'attaque | 3 tours | -               | -                      | 10 pa |                  2 j |\r\n| Discombobulate | Dé d'attaque / 2      | -       | Repos Court     | -                      | 25 pa |                  5 j |\r\n| Aveuglement    |                       |         |                 |                        |       |                      |\r\n\r")}

	</section>
{/snippet}

{#snippet enchantements()}
	<section>
		<h2 id="enchantements">{@html applyBase("Enchantements")}</h2>

	{@render enchantementsDarmeDeMle()}
	{@render enchantementsDarme_Distance()}
	</section>
{/snippet}

{#snippet enchantementsDarmeDeMle()}
	<section>
		<h3 id="enchantements-darme-de-mle">{@html applyBase("Enchantements d'Arme de mêlée")}</h3>
	{@html renderMarkdown("> Ajoute des effets uniques à l'arme si aucune infusion n'a été appliquée dessus.\r\n\r\n| Enchantement | Effet                                                                | Prix | Durée de fabrication |\r\n| ------------ | -------------------------------------------------------------------- | ---: | -------------------: |\r\n| Critique     | Permet de faire des coups critiques (les dégâts passent outre la DR) | ? po |                 20 j |\r\n| Vampirique   | Récupère 4HP par coup qui passe outre la DR                          | ? po |                 20 j |\r\n| Crystallique | Récupère 1MP par coup qui passe outre la DR si la cible est magique  | ? po |                 20 j |\r\n\r")}

	</section>
{/snippet}

{#snippet enchantementsDarme_Distance()}
	<section>
		<h3 id="enchantements-darme--distance">{@html applyBase("Enchantements d'Arme à distance")}</h3>
	{@html renderMarkdown("> Ajoute des effets uniques à l'arme.\r\n> S'applique uniquement aux Arcs et Arbalètes.\r\n\r\n| Enchantement | Effet                                                                                                                               | Prix | Durée de fabrication |\r\n| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ---: | -------------------: |\r\n| Double coup  | Permet de préparer une deuxième munition avant le combat<br>(on ne peut toujours tirer qu'1 munition par action)                    | ? po |                 20 j |\r\n| Ellipse      | Réduit le DC de 2 lorsque la cible est partiellement couverte<br>Si elle est complètement couverte, la DC additionnelle devient +10 | ? po |                 20 j |")}

	</section>
{/snippet}
