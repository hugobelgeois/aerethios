<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "fonctionnement",
          "text": "Fonctionnement",
          "level": 2
      },
      {
          "id": "rseau",
          "text": "Réseau",
          "level": 2
      },
      {
          "id": "rputation",
          "text": "Réputation",
          "level": 2
      },
      {
          "id": "dpenses-supplmentaires",
          "text": "Dépenses supplémentaires",
          "level": 2
      },
      {
          "id": "taxes",
          "text": "Taxes",
          "level": 3
      },
      {
          "id": "main-duvre",
          "text": "Main-d'œuvre",
          "level": 3
      },
      {
          "id": "paiements-rguliers",
          "text": "Paiements réguliers",
          "level": 3
      },
      {
          "id": "autres",
          "text": "Autres",
          "level": 3
      },
      {
          "id": "transports",
          "text": "Transports",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Commerçant</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Commerçant</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render fonctionnement()}
		{@render rseau()}
		{@render rputation()}
		{@render dpensesSupplmentaires()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("> Ce <span class=\"wiki-unresolved\">Mini-Jeux</span> permet aux joueurs d'acheter et de vendre des biens afin de gagner de l'argent ainsi que d'obtenir un réseau.\n")}
{/snippet}

{#snippet fonctionnement()}
	<section>
		<h2 id="fonctionnement">{@html applyBase("Fonctionnement")}</h2>
	{@html renderMarkdown("\nLe joueur recevra régulièrement une lettre avec :\n\n- des offres d'achats pour ses biens,\n\n- une liste de biens actuellement mis en vente (s'il est Runild)\n\nEn agrandissant son réseau et ses fonds, le joueur aura accès à plus d'offres.\n\nNe pouvant se rendre jusqu'au lieu de la transaction, le joueur choisit une main-d'oeuvre afin de faire les démarches à sa place (livrer, récupérer, escorter, ..) ainsi que les routes qu'elle devra parcourir.\n\nLe mini-jeu consiste à augmenter sa fortune en gérant ses achats, ses ventes, ses contacts et sa main-d'oeuvre.\n")}

	</section>
{/snippet}

{#snippet rseau()}
	<section>
		<h2 id="rseau">{@html applyBase("Réseau")}</h2>
	{@html renderMarkdown("\nSi le joueur possède des contacts, il pourra échanger régulièrement avec eux.\n\nSi vous échangez suffisamment avec un même contact, vos transactions seront plus intéressantes.\n\nLe joueur peut également rejoindre les Runild et rendre sa fortune bancaire visible au public.\n\nEn faisant cela, il accède à l'hôtel des ventes afin d'obtenir plus d'offres et de contacts.\n\nIl peut aussi louer un coffre fort pour sécuriser ses biens physiques.\n")}

	</section>
{/snippet}

{#snippet rputation()}
	<section>
		<h2 id="rputation">{@html applyBase("Réputation")}</h2>
	{@html renderMarkdown("\nIl existe 3 types de réputation pour le joueur, qui évolue avec ses compétences marchandes :\n\n- une pour la qualité de ses ventes (prix corrects, objet correct, ..),\n\n- une pour le type de marchandise qu'il vend (objet, vivant, dangereux, ..),\n\n- une pour la confiance que la main-d'œuvre a envers lui (bonne paie, mission suicide, ..).\n\nCette réputation influencera qui vient faire affaire avec le joueur, à quel point ils acceptent de négocier avec lui, le genre de bien qu'on lui propose, ainsi que la volonté de la main-d'œuvre de travailler avec lui.\n")}

	</section>
{/snippet}

{#snippet dpensesSupplmentaires()}
	<section>
		<h2 id="dpenses-supplmentaires">{@html applyBase("Dépenses supplémentaires")}</h2>
	{@html renderMarkdown("\nLe joueur peut faire différentes dépenses supplémentaires afin d'améliorer son réseau, ses transactions et sa réputation.\n\nPour un même type de dépense, la qualité peut varier. (bas - moyen - haut)\n\nAinsi il est possible de réduire les frais, mais rien ne garantit que le bien arrivera à bon port.\n")}
	{@render taxes()}
	{@render mainDuvre()}
	{@render paiementsRguliers()}
	{@render autres()}
	{@render transports()}
	</section>
{/snippet}

{#snippet taxes()}
	<section>
		<h3 id="taxes">{@html applyBase("Taxes")}</h3>
	{@html renderMarkdown("\nLes biens peuvent subir des taxes et réglementations différentes en fonction de leur catégorie.\n\nUn bien peut avoir plusieurs catégories.\n\n| Objet | Périssable | Vivant | Dangereux | Instable | Officiel | Illégal |\n| ----- | ---------- | ------ | --------- | -------- | -------- | ------- |\n| 20 pb | 20 pb      | 10 pa  | 50 pa     | 1 po     | -        | -       |\n")}

	</section>
{/snippet}

{#snippet mainDuvre()}
	<section>
		<h3 id="main-duvre">{@html applyBase("Main-d'œuvre")}</h3>
	{@html renderMarkdown("\n|             |                                                                      |                             |\n| ----------- | -------------------------------------------------------------------- | --------------------------- |\n| Informateur | Se renseigne sur le contact, ou la marchandises, ou la main d'oeuvre | 1 - 3 - 5 pa                |\n| Escorte     | Protège la marchandise lors des transports                           | 1 - 5 - 20<br><br>pa / jour |\n| Inspecteur  | Vérifie la marchandise et son état lors de sa réception              | 0.2 - 1 - 5 pa              |\n| Préparateur | Prépare la marchandise selon les réglementations                     | 10 - 20 - 50 pa             |\n| Prédicateur | Prévient des événements qui peuvent influencer la livraison          | 1 - 5 - 20 pa               |\n| Pisteur     | Traque une marchandise volée et ses voleurs                          | 50 - 1 00 - 2 00 pa         |\n| Leurre      | Crée une fausse livraison                                            | 1 - 3 - 5 po                |\n")}

	</section>
{/snippet}

{#snippet paiementsRguliers()}
	<section>
		<h3 id="paiements-rguliers">{@html applyBase("Paiements réguliers")}</h3>
	{@html renderMarkdown("\n|   |   |   |\n|---|---|---|\n|Stockage sécurisé <br>(Basé sur le bien)|Protège les biens contre les pertes et les vols|5 - 50 - 2 00 <br>pa / jdr|\n|Réseau de messagers|Augmente le nombre de ventes disponibles|5 - 20 - 50 <br>pa / jdr|\n")}

	</section>
{/snippet}

{#snippet autres()}
	<section>
		<h3 id="autres">{@html applyBase("Autres")}</h3>
	{@html renderMarkdown("\n|                   |                                                                                                                 |\n| ----------------- | --------------------------------------------------------------------------------------------------------------- |\n| Prime de fidélité | Augmente la probabilité que les clients deviennent réguliers                                                    |\n| Campagne          | Fait venir de nouveaux contacts                                                                                 |\n| Pot de vin        | Évite les problèmes de réglementation de marchandise<br><br>Réduit l'impact d'une transaction sur la réputation |\n")}

	</section>
{/snippet}

{#snippet transports()}
	<section>
		<h3 id="transports">{@html applyBase("Transports")}</h3>
	{@html renderMarkdown("\nCertaines marchandises ne peuvent être simplement portées à la main\n\n| Calèche                      | Bateau                       | Volant                     | Portail   |\n| ---------------------------- | ---------------------------- | -------------------------- | --------- |\n| 5 - 10 - 20<br><br>pa / jour | 10 - 30 -50<br><br>pa / jour | 1 - 3 - 5<br><br>po / jour | 1 po / kg |")}

	</section>
{/snippet}
