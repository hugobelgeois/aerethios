<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

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
  <meta name="description" content={"Ce Mini-Jeux permet aux joueurs d'acheter et de vendre des biens afin de gagner de l'argent ainsi que d'obtenir un réseau. Fonctionnement Le joueur recevra régulièrement une lettre avec : des offres…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Commerçant"} />
  <meta property="og:description" content={"Ce Mini-Jeux permet aux joueurs d'acheter et de vendre des biens afin de gagner de l'argent ainsi que d'obtenir un réseau. Fonctionnement Le joueur recevra régulièrement une lettre avec : des offres…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Commerçant"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<blockquote dir=\"auto\">\n<p>Ce Mini-Jeux permet aux joueurs d'acheter et de vendre des biens afin de gagner de l'argent ainsi que d'obtenir un réseau.</p>\n</blockquote>\n<h2 data-heading=\"Fonctionnement\" dir=\"auto\" id=\"fonctionnement\">Fonctionnement</h2>\n<p dir=\"auto\">Le joueur recevra régulièrement une lettre avec :</p>\n<ul>\n<li dir=\"auto\">\n<p>des offres d'achats pour ses biens,</p>\n</li>\n<li dir=\"auto\">\n<p>une liste de biens actuellement mis en vente (s'il est Runild)</p>\n</li>\n</ul>\n<p dir=\"auto\">En agrandissant son réseau et ses fonds, le joueur aura accès à plus d'offres.</p>\n<p dir=\"auto\">Ne pouvant se rendre jusqu'au lieu de la transaction, le joueur choisit une main-d'oeuvre afin de faire les démarches à sa place (livrer, récupérer, escorter, ..) ainsi que les routes qu'elle devra parcourir.</p>\n<p dir=\"auto\">Le mini-jeu consiste à augmenter sa fortune en gérant ses achats, ses ventes, ses contacts et sa main-d'oeuvre.</p>\n<h2 data-heading=\"Réseau\" dir=\"auto\" id=\"rseau\">Réseau</h2>\n<p dir=\"auto\">Si le joueur possède des contacts, il pourra échanger régulièrement avec eux.</p>\n<p dir=\"auto\">Si vous échangez suffisamment avec un même contact, vos transactions seront plus intéressantes.</p>\n<p dir=\"auto\">Le joueur peut également rejoindre les Runild et rendre sa fortune bancaire visible au public.</p>\n<p dir=\"auto\">En faisant cela, il accède à l'hôtel des ventes afin d'obtenir plus d'offres et de contacts.</p>\n<p dir=\"auto\">Il peut aussi louer un coffre fort pour sécuriser ses biens physiques.</p>\n<h2 data-heading=\"Réputation\" dir=\"auto\" id=\"rputation\">Réputation</h2>\n<p dir=\"auto\">Il existe 3 types de réputation pour le joueur, qui évolue avec ses compétences marchandes :</p>\n<ul>\n<li dir=\"auto\">\n<p>une pour la qualité de ses ventes (prix corrects, objet correct, ..),</p>\n</li>\n<li dir=\"auto\">\n<p>une pour le type de marchandise qu'il vend (objet, vivant, dangereux, ..),</p>\n</li>\n<li dir=\"auto\">\n<p>une pour la confiance que la main-d'œuvre a envers lui (bonne paie, mission suicide, ..).</p>\n</li>\n</ul>\n<p dir=\"auto\">Cette réputation influencera qui vient faire affaire avec le joueur, à quel point ils acceptent de négocier avec lui, le genre de bien qu'on lui propose, ainsi que la volonté de la main-d'œuvre de travailler avec lui.</p>\n<h2 data-heading=\"Dépenses supplémentaires\" dir=\"auto\" id=\"dpenses-supplmentaires\">Dépenses supplémentaires</h2>\n<p dir=\"auto\">Le joueur peut faire différentes dépenses supplémentaires afin d'améliorer son réseau, ses transactions et sa réputation.</p>\n<p dir=\"auto\">Pour un même type de dépense, la qualité peut varier. (bas - moyen - haut)</p>\n<p dir=\"auto\">Ainsi il est possible de réduire les frais, mais rien ne garantit que le bien arrivera à bon port.</p>\n<h3 data-heading=\"Taxes\" dir=\"auto\" id=\"taxes\">Taxes</h3>\n<p dir=\"auto\">Les biens peuvent subir des taxes et réglementations différentes en fonction de leur catégorie.</p>\n<p dir=\"auto\">Un bien peut avoir plusieurs catégories.</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Objet</th>\n<th>Périssable</th>\n<th>Vivant</th>\n<th>Dangereux</th>\n<th>Instable</th>\n<th>Officiel</th>\n<th>Illégal</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>20 pb</td>\n<td>20 pb</td>\n<td>10 pa</td>\n<td>50 pa</td>\n<td>1 po</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Main-d'œuvre\" dir=\"auto\" id=\"main-duvre\">Main-d'œuvre</h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Informateur</td>\n<td>Se renseigne sur le contact, ou la marchandises, ou la main d'oeuvre</td>\n<td>1 - 3 - 5 pa</td>\n</tr>\n<tr>\n<td>Escorte</td>\n<td>Protège la marchandise lors des transports</td>\n<td>1 - 5 - 20<br><br>pa / jour</td>\n</tr>\n<tr>\n<td>Inspecteur</td>\n<td>Vérifie la marchandise et son état lors de sa réception</td>\n<td>0.2 - 1 - 5 pa</td>\n</tr>\n<tr>\n<td>Préparateur</td>\n<td>Prépare la marchandise selon les réglementations</td>\n<td>10 - 20 - 50 pa</td>\n</tr>\n<tr>\n<td>Prédicateur</td>\n<td>Prévient des événements qui peuvent influencer la livraison</td>\n<td>1 - 5 - 20 pa</td>\n</tr>\n<tr>\n<td>Pisteur</td>\n<td>Traque une marchandise volée et ses voleurs</td>\n<td>50 - 1 00 - 2 00 pa</td>\n</tr>\n<tr>\n<td>Leurre</td>\n<td>Crée une fausse livraison</td>\n<td>1 - 3 - 5 po</td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Paiements réguliers\" dir=\"auto\" id=\"paiements-rguliers\">Paiements réguliers</h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Stockage sécurisé <br>(Basé sur le bien)</td>\n<td>Protège les biens contre les pertes et les vols</td>\n<td>5 - 50 - 2 00 <br>pa / jdr</td>\n</tr>\n<tr>\n<td>Réseau de messagers</td>\n<td>Augmente le nombre de ventes disponibles</td>\n<td>5 - 20 - 50 <br>pa / jdr</td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Autres\" dir=\"auto\" id=\"autres\">Autres</h3>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Prime de fidélité</td>\n<td>Augmente la probabilité que les clients deviennent réguliers</td>\n</tr>\n<tr>\n<td>Campagne</td>\n<td>Fait venir de nouveaux contacts</td>\n</tr>\n<tr>\n<td>Pot de vin</td>\n<td>Évite les problèmes de réglementation de marchandise<br><br>Réduit l'impact d'une transaction sur la réputation</td>\n</tr>\n</tbody>\n</table></div>\n<h3 data-heading=\"Transports\" dir=\"auto\" id=\"transports\">Transports</h3>\n<p dir=\"auto\">Certaines marchandises ne peuvent être simplement portées à la main</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Calèche</th>\n<th>Bateau</th>\n<th>Volant</th>\n<th>Portail</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>5 - 10 - 20<br><br>pa / jour</td>\n<td>10 - 30 -50<br><br>pa / jour</td>\n<td>1 - 3 - 5<br><br>po / jour</td>\n<td>1 po / kg</td>\n</tr>\n</tbody>\n</table></div>"}
  </div>
</article>

<LinkPreview />
