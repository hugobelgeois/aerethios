<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Maisons"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Maisons"}</h1>
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
	{@html "<blockquote>Chaque nouveau rang garde les avantages des rangs précédents.</blockquote>"}
{/snippet}

{#snippet arvens()}
	<section>
		<h2 id="arvens">{@html "Arvens"}</h2>
	{@html "<blockquote>Ces rangs se gagnent en aidant le peuple de diverses manières.<br>Si un Arvens rate trop souvent ses missions ou n'est plus actif, ses rangs vont diminuer petit à petit (sauf une fois qu'il devient une légende).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th><strong>Rang</strong></th><th>Prérequis</th><th>Avantages</th></tr></thead><tbody><tr><td><strong>Bronze</strong></td><td>Niveau 1 à 3 = Poids morts</td><td>Tavernes Arvens gratuites (ingrédients Déchets)</td></tr><tr><td><strong>Argent</strong></td><td>Niveau 4 à 7 = Débutants</td><td>Tavernes (ingrédients Communs)<br>Implant de 5 crystaux offerts<br>Auberges Arvens gratuites</td></tr><tr><td><strong>Or</strong></td><td>Niveau 8 à 12 = Aventuriers</td><td>Tavernes (ingrédients Peu Communs)<br>Implant de 5 crystaux offerts<br>Salles de métiers Arvens gratuites<br>Transports fournis (terrestre)</td></tr><tr><td><strong>Platine</strong></td><td>Niveau 13 à 18 = Héros</td><td>Tavernes (ingrédients Rares)<br>Implant de 5 crystaux offerts<br>Rations de voyage fournies<br>Transports (maritime)</td></tr><tr><td><strong>Légendes</strong></td><td>Niveau 19 à 20 = Légendes<br>Se débloque selon le continent :<br>- <strong>Diamant</strong> (Ovliin),<br>- <strong>Emeraude</strong> (Nirina),<br>- <strong>Rubis</strong> (Kothula),<br>- <strong>Topaze</strong> (Suraja).</td><td>Tavernes (ingrédients Légendaires)<br>Implant de 5 crystaux offerts<br>Réparation de l'équipement gratuit<br>Transports (téléportation)</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet runild__Wip()}
	<section>
		<h2 id="runild---wip">{@html "Runild - WIP"}</h2>
	{@html "<blockquote>Rejoindre les Runild rend visible au public la fortune et les biens du joueurs.<br>Cela peut attirer l'intérêt de multiples personnes.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th><strong>Rang</strong></th><th>Prérequis</th><th>Avantages</th></tr></thead><tbody><tr><td><strong>Travailleur</strong></td><td>1 po</td><td>Accès à l'hôtel des ventes</td></tr><tr><td><strong>Nouveau Riche</strong></td><td>50 po</td><td>La banque ne taxe pas les retraits</td></tr><tr><td><strong>Propriétaire</strong></td><td>100 po</td><td>Octroie 10% de réduction cher les marchands Runild</td></tr><tr><td><strong>Gérant</strong></td><td>500 po</td><td>Le compte bancaire peut être bloqué tous les mois pour que la somme actuellement présente engrange 1% de bénéfices</td></tr><tr><td><strong>Capitaliste</strong></td><td>2000 po</td><td>Le compte bancaire peut être bloqué tous les mois pour que la somme actuellement présente engrange <strong>2%</strong> de bénéfices</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet scienctes__Wip()}
	<section>
		<h2 id="scienctes---wip">{@html "Scienctes - WIP"}</h2>
	{@html "<blockquote>Se concentrer permet soit de régénérer des crystaux, soit de prendre 10/20 au prochain jet.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th><strong>Rang</strong></th><th>Prérequis</th><th>Régénération passive</th><th>Se concentrer</th><th>Dégâts magiques</th></tr></thead><tbody><tr><td><strong>Initié</strong></td><td></td><td>-</td><td>-</td><td>-</td></tr><tr><td><strong>Mage</strong></td><td></td><td>+1</td><td>-</td><td>-</td></tr><tr><td><strong>Archimage</strong></td><td></td><td>+2</td><td>+1 Crystal</td><td>-</td></tr><tr><td><strong>Hiéromage</strong></td><td></td><td>+3</td><td>+2 Crystaux</td><td>+2</td></tr><tr><td><strong>Magister</strong></td><td></td><td>+4</td><td>+3 Crystaux</td><td>+4</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet templis__Wip()}
	<section>
		<h2 id="templis---wip">{@html "Templis - WIP"}</h2>
	{@html "<blockquote>Les rangs des Templis n'ont pas d'hiérarchie et peuvent être obtenus à tout moment.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th><strong>Rang</strong></th><th>Prérequis</th><th>Avantages</th></tr></thead><tbody><tr><td><strong>Pèlerin</strong></td><td>Pèleriner les 77 Temples pieds nus</td><td></td></tr><tr><td><strong>Passeur</strong></td><td>Purger un village de la souffrance</td><td></td></tr><tr><td><strong>Oracle</strong></td><td>Offrir un sens aux Dieux soi-même (généralement la vue)</td><td>Possibilité de détecter les entités planaires et d'être moins affecté par leur présence</td></tr><tr><td><strong>Forgeron</strong></td><td>Supporter une présence divine ?</td><td>Possibilité d'emprunter 1 objet béni aux Templis<br>\tIl peut être échangé et conservé aussi longtemps qu'on le souhaite, mais on ne peut en avoir qu'un</td></tr><tr><td><strong>Juge</strong></td><td>Purifier un démon</td><td></td></tr></tbody></table></div>"}

	</section>
{/snippet}
