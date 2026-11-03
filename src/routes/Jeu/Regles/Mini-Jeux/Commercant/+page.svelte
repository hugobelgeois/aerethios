<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Commerçant"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Commerçant"}</h1>
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
	{@html "<blockquote>Ce <span class=\"wiki-unresolved\">Mini-Jeux</span> permet aux joueurs d'acheter et de vendre des biens afin de gagner de l'argent ainsi que d'obtenir un réseau.</blockquote>"}
{/snippet}

{#snippet fonctionnement()}
	<section>
		<h2 id="fonctionnement">{@html "Fonctionnement"}</h2>
	{@html "<p>Le joueur recevra régulièrement une lettre avec :</p>\n<ul><li>des offres d'achats pour ses biens,</li></ul>\n<ul><li>une liste de biens actuellement mis en vente (s'il est Runild)</li></ul>\n<p>En agrandissant son réseau et ses fonds, le joueur aura accès à plus d'offres.</p>\n<p>Ne pouvant se rendre jusqu'au lieu de la transaction, le joueur choisit une main-d'oeuvre afin de faire les démarches à sa place (livrer, récupérer, escorter, ..) ainsi que les routes qu'elle devra parcourir.</p>\n<p>Le mini-jeu consiste à augmenter sa fortune en gérant ses achats, ses ventes, ses contacts et sa main-d'oeuvre.</p>"}

	</section>
{/snippet}

{#snippet rseau()}
	<section>
		<h2 id="rseau">{@html "Réseau"}</h2>
	{@html "<p>Si le joueur possède des contacts, il pourra échanger régulièrement avec eux.</p>\n<p>Si vous échangez suffisamment avec un même contact, vos transactions seront plus intéressantes.</p>\n<p>Le joueur peut également rejoindre les Runild et rendre sa fortune bancaire visible au public.</p>\n<p>En faisant cela, il accède à l'hôtel des ventes afin d'obtenir plus d'offres et de contacts.</p>\n<p>Il peut aussi louer un coffre fort pour sécuriser ses biens physiques.</p>"}

	</section>
{/snippet}

{#snippet rputation()}
	<section>
		<h2 id="rputation">{@html "Réputation"}</h2>
	{@html "<p>Il existe 3 types de réputation pour le joueur, qui évolue avec ses compétences marchandes :</p>\n<ul><li>une pour la qualité de ses ventes (prix corrects, objet correct, ..),</li></ul>\n<ul><li>une pour le type de marchandise qu'il vend (objet, vivant, dangereux, ..),</li></ul>\n<ul><li>une pour la confiance que la main-d'œuvre a envers lui (bonne paie, mission suicide, ..).</li></ul>\n<p>Cette réputation influencera qui vient faire affaire avec le joueur, à quel point ils acceptent de négocier avec lui, le genre de bien qu'on lui propose, ainsi que la volonté de la main-d'œuvre de travailler avec lui.</p>"}

	</section>
{/snippet}

{#snippet dpensesSupplmentaires()}
	<section>
		<h2 id="dpenses-supplmentaires">{@html "Dépenses supplémentaires"}</h2>
	{@html "<p>Le joueur peut faire différentes dépenses supplémentaires afin d'améliorer son réseau, ses transactions et sa réputation.</p>\n<p>Pour un même type de dépense, la qualité peut varier. (bas - moyen - haut)</p>\n<p>Ainsi il est possible de réduire les frais, mais rien ne garantit que le bien arrivera à bon port.</p>"}
	{@render taxes()}
	{@render mainDuvre()}
	{@render paiementsRguliers()}
	{@render autres()}
	{@render transports()}
	</section>
{/snippet}

{#snippet taxes()}
	<section>
		<h3 id="taxes">{@html "Taxes"}</h3>
	{@html "<p>Les biens peuvent subir des taxes et réglementations différentes en fonction de leur catégorie.</p>\n<p>Un bien peut avoir plusieurs catégories.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Objet</th><th>Périssable</th><th>Vivant</th><th>Dangereux</th><th>Instable</th><th>Officiel</th><th>Illégal</th></tr></thead><tbody><tr><td>20 pb</td><td>20 pb</td><td>10 pa</td><td>50 pa</td><td>1 po</td><td>-</td><td>-</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet mainDuvre()}
	<section>
		<h3 id="main-duvre">{@html "Main-d'œuvre"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td>Informateur</td><td>Se renseigne sur le contact, ou la marchandises, ou la main d'oeuvre</td><td>1 - 3 - 5 pa</td></tr><tr><td>Escorte</td><td>Protège la marchandise lors des transports</td><td>1 - 5 - 20<br><br>pa / jour</td></tr><tr><td>Inspecteur</td><td>Vérifie la marchandise et son état lors de sa réception</td><td>0.2 - 1 - 5 pa</td></tr><tr><td>Préparateur</td><td>Prépare la marchandise selon les réglementations</td><td>10 - 20 - 50 pa</td></tr><tr><td>Prédicateur</td><td>Prévient des événements qui peuvent influencer la livraison</td><td>1 - 5 - 20 pa</td></tr><tr><td>Pisteur</td><td>Traque une marchandise volée et ses voleurs</td><td>50 - 1 00 - 2 00 pa</td></tr><tr><td>Leurre</td><td>Crée une fausse livraison</td><td>1 - 3 - 5 po</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet paiementsRguliers()}
	<section>
		<h3 id="paiements-rguliers">{@html "Paiements réguliers"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td>Stockage sécurisé <br>(Basé sur le bien)</td><td>Protège les biens contre les pertes et les vols</td><td>5 - 50 - 2 00 <br>pa / jdr</td></tr><tr><td>Réseau de messagers</td><td>Augmente le nombre de ventes disponibles</td><td>5 - 20 - 50 <br>pa / jdr</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet autres()}
	<section>
		<h3 id="autres">{@html "Autres"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Prime de fidélité</td><td>Augmente la probabilité que les clients deviennent réguliers</td></tr><tr><td>Campagne</td><td>Fait venir de nouveaux contacts</td></tr><tr><td>Pot de vin</td><td>Évite les problèmes de réglementation de marchandise<br><br>Réduit l'impact d'une transaction sur la réputation</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet transports()}
	<section>
		<h3 id="transports">{@html "Transports"}</h3>
	{@html "<p>Certaines marchandises ne peuvent être simplement portées à la main</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Calèche</th><th>Bateau</th><th>Volant</th><th>Portail</th></tr></thead><tbody><tr><td>5 - 10 - 20<br><br>pa / jour</td><td>10 - 30 -50<br><br>pa / jour</td><td>1 - 3 - 5<br><br>po / jour</td><td>1 po / kg</td></tr></tbody></table></div>"}

	</section>
{/snippet}
