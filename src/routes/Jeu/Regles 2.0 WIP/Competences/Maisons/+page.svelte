<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "arvens",
          "text": "Arvens",
          "level": 2
      },
      {
          "id": "runild---wip",
          "text": "Runild - WIP",
          "level": 2
      },
      {
          "id": "scienctes---wip",
          "text": "Scienctes - WIP",
          "level": 2
      },
      {
          "id": "templis---wip",
          "text": "Templis - WIP",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Maisons</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Maisons</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render arvens()}
		{@render runild__Wip()}
		{@render scienctes__Wip()}
		{@render templis__Wip()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("> Chaque nouveau rang garde les avantages des rangs précédents.\n")}
{/snippet}

{#snippet arvens()}
	<section>
		<h2 id="arvens">{@html applyBase("Arvens")}</h2>
	{@html renderMarkdown(">Ces rangs se gagnent en aidant le peuple de diverses manières.\n>Si un Arvens rate trop souvent ses missions ou n'est plus actif, ses rangs vont diminuer petit à petit (sauf une fois qu'il devient une légende).\n\n| **Rang**     | Prérequis                                                                                                                                                                | Avantages                                                                                                                                   |\n| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Bronze**   | Niveau 1 à 3 = Poids morts                                                                                                                                               | Tavernes Arvens gratuites (ingrédients Déchets)                                                                                             |\n| **Argent**   | Niveau 4 à 7 = Débutants                                                                                                                                                 | Tavernes (ingrédients Communs)<br>Implant de 5 crystaux offerts<br>Auberges Arvens gratuites                                                |\n| **Or**       | Niveau 8 à 12 = Aventuriers                                                                                                                                              | Tavernes (ingrédients Peu Communs)<br>Implant de 5 crystaux offerts<br>Salles de métiers Arvens gratuites<br>Transports fournis (terrestre) |\n| **Platine**  | Niveau 13 à 18 = Héros                                                                                                                                                   | Tavernes (ingrédients Rares)<br>Implant de 5 crystaux offerts<br>Rations de voyage fournies<br>Transports (maritime)                        |\n| **Légendes** | Niveau 19 à 20 = Légendes<br>Se débloque selon le continent :<br>- **Diamant** (Ovliin),<br>- **Emeraude** (Nirina),<br>- **Rubis** (Kothula),<br>- **Topaze** (Suraja). | Tavernes (ingrédients Légendaires)<br>Implant de 5 crystaux offerts<br>Réparation de l'équipement gratuit<br>Transports (téléportation)     |\n")}

	</section>
{/snippet}

{#snippet runild__Wip()}
	<section>
		<h2 id="runild---wip">{@html applyBase("Runild - WIP")}</h2>
	{@html renderMarkdown("> Rejoindre les Runild rend visible au public la fortune et les biens du joueurs.\n> Cela peut attirer l'intérêt de multiples personnes.\n\n| **Rang**          | Prérequis | Avantages                                                                                                              |\n| ----------------- | --------- | ---------------------------------------------------------------------------------------------------------------------- |\n| **Travailleur**   | 1 po      | Accès à l'hôtel des ventes                                                                                             |\n| **Nouveau Riche** | 50 po     | La banque ne taxe pas les retraits                                                                                     |\n| **Propriétaire**  | 100 po    | Octroie 10% de réduction cher les marchands Runild                                                                     |\n| **Gérant**        | 500 po    | Le compte bancaire peut être bloqué tous les mois pour que la somme actuellement présente engrange 1% de bénéfices     |\n| **Capitaliste**   | 2000 po   | Le compte bancaire peut être bloqué tous les mois pour que la somme actuellement présente engrange **2%** de bénéfices |\n")}

	</section>
{/snippet}

{#snippet scienctes__Wip()}
	<section>
		<h2 id="scienctes---wip">{@html applyBase("Scienctes - WIP")}</h2>
	{@html renderMarkdown("> Se concentrer permet soit de régénérer des crystaux, soit de prendre 10/20 au prochain jet.\n\n| **Rang**      | Prérequis | Régénération passive | Se concentrer | Dégâts magiques |\n| ------------- | --------- | -------------------- | ------------- | --------------- |\n| **Initié**    |           | -                    | -             | -               |\n| **Mage**      |           | +1                   | -             | -               |\n| **Archimage** |           | +2                   | +1 Crystal    | -               |\n| **Hiéromage** |           | +3                   | +2 Crystaux   | +2              |\n| **Magister**  |           | +4                   | +3 Crystaux   | +4              |\n")}

	</section>
{/snippet}

{#snippet templis__Wip()}
	<section>
		<h2 id="templis---wip">{@html applyBase("Templis - WIP")}</h2>
	{@html renderMarkdown("> Les rangs des Templis n'ont pas d'hiérarchie et peuvent être obtenus à tout moment.\n\n| **Rang**     | Prérequis                                               | Avantages                                                                                                                                               |\n| ------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Pèlerin**  | Pèleriner les 77 Temples pieds nus                      |                                                                                                                                                         |\n| **Passeur**  | Purger un village de la souffrance                      |                                                                                                                                                         |\n| **Oracle**   | Offrir un sens aux Dieux soi-même (généralement la vue) | Possibilité de détecter les entités planaires et d'être moins affecté par leur présence                                                                 |\n| **Forgeron** | Supporter une présence divine ?                         | Possibilité d'emprunter 1 objet béni aux Templis<br>\tIl peut être échangé et conservé aussi longtemps qu'on le souhaite, mais on ne peut en avoir qu'un |\n| **Juge**     | Purifier un démon                                       |                                                                                                                                                         |")}

	</section>
{/snippet}
