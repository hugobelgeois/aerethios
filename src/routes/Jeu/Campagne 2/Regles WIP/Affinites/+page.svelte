<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "culture",
          "text": "Culture",
          "level": 2
      },
      {
          "id": "exploration",
          "text": "Exploration",
          "level": 2
      },
      {
          "id": "production",
          "text": "Production",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Affinités</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Affinités</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render culture()}
		{@render exploration()}
		{@render production()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("L'affinité permet de définir la spécialisation d'un personnage (comme une classe) qui varie selon la race.\nCe sont des outils d’interprétation, pas des générateurs d’information.\n\nAu niveau 1, le joueur peut choisir une catégorie d'affinité dans laquelle il excelle (Culture, Exploration, Production) et possède 3 points qu'il peut dépenser dedans.\nLes affinités liées à sa race coûtent 1 point, tandis que les autres coûtent 2 points (sauf l'elfe pour qui tout coûte 1 point).\nLe joueur gagne 1 point tous les niveaux pairs.\n\nAu niveau 10 et 20, le joueur gagne 1 point supplémentaire, et il peut débloquer une catégorie si sa race lui permet.\n\n|                                            | Humain | Calico | Orc | Nain | Elfe |\n| ------------------------------------------ | ------ | ------ | --- | ---- | ---- |\n| **Nombre max de<br>catégories d'affinité** | 3      | 2      | 2   | 2    | 1    |\n")}
{/snippet}

{#snippet culture()}
	<section>
		<h2 id="culture">Culture</h2>
	{@html renderMarkdown("> Connaissance générale\n\n| Niveau | Humain                                                                             | Calico                                                                   | Orc                                                                             | Nain                                                                 | Elfe                                                                 |\n| ------ | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |\n| 1      | Connait les personnalités importantes                                              | Reconnait la magie possédée et maîtrisée par un être vivant              | Connait le folklore du monde                                                    | Reconnait les matériaux des créations (équipement, bâtiment, ..)     | Reconnaît les symboles spirituels et religieux                       |\n| 2      | Comprend le fonctionnement interne des villes                                      | Comprend l'effet des runes et des sceaux magiques                        | Comprend l'origine probable des récits                                          | Comprend le fonctionnement des créations, leurs forces et faiblesses | Comprend les entités spirituelles                                    |\n| 3      | Sait à qui s'adresser pour obtenir une information, un service ou une autorisation | Peut modifier ou désactiver un sceau ou une rune simple sans magie brute | Peut exploiter une tradition ou une superstition pour influencer une communauté | Peut démonter, réparer ou saboter une création de manière optimale   | Peut communiquer ou négocier avec une entité spirituelle non hostile |\n")}

	</section>
{/snippet}

{#snippet exploration()}
	<section>
		<h2 id="exploration">Exploration</h2>
	{@html renderMarkdown("> S'applique lors des déplacements sur une carte (carte du monde, carte de donjon, ..)\n\n| Niveau | Humain                                                           | Calico                                            | Orc                                                       | Nain                                                          | Elfe                                           |\n| ------ | ---------------------------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------- |\n| **1**  | Détecte les lieux de survie (cachette, nourriture, défenses, ..) | Détecte les sources de magie                      | Détecte les créatures                                     | Détecte le chemin vers la sortie et la pièce la plus profonde | Détecte les présences spirituelles             |\n| **2**  | Comprend comment exploiter les ressources du lieu                | Comprend l'origine de la source de magie          | Comprend leur origine (nombre, taille, race, vitesse, ..) | Comprend la structure complète du lieu                        | Comprend leur nature et leurs émotions         |\n| **3**  | Evite les ralentissements dûs au terrain                         | Anticipe les effets ou comportements de la source | Prédit les déplacements                                   | Détecte la pièces secrètes et raccourcis                      | Anticipe leur comportement ou leurs intentions |\n")}

	</section>
{/snippet}

{#snippet production()}
	<section>
		<h2 id="production">Production</h2>
	{@html renderMarkdown("> S'applique lors de la fabrication d'objets\n\n| Niveau | Humain                                                                         | Calico                                             | Orc                                        | Nain                                                              | Elfe                                                       |\n| ------ | ------------------------------------------------------------------------------ | -------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------- |\n| **1**  | Les fabrications échouent après 5 échecs au lieu de 3                          | Réduit de moitié les coûts magiques                | Sait où trouver les ressources souhaitées  | Le temps de fabrication est réduit de moitié                      | Peut déconstuire un objet pour en récupérer des ressources |\n| **2**  | Peut intervertir un ingrédient avec un autre sans changer le résultat souhaité | Chaque réussite au dé compte comme 2 reussites     | Double les ressources trouvées             | Augmenter la qualité d'une fabrication ne prend pas plus de temps | Peut améliorer une fabrication déjà existante              |\n| **3**  | Peut appliquer une partie de son niveau dans un métier de même catégorie       | Ne subit pas les malus d'un artisanat magique raté | Augmente la rareté des ressources trouvées | Améliore automatiquement la qualité finale d'un niveau            | Réveille le potentiel caché d'un objet                     |")}

	</section>
{/snippet}
