<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "fonctionnement",
          "text": "Fonctionnement",
          "level": 2
      },
      {
          "id": "construire",
          "text": "Construire",
          "level": 3
      },
      {
          "id": "agrandir",
          "text": "Agrandir",
          "level": 3
      },
      {
          "id": "modifier",
          "text": "Modifier",
          "level": 3
      },
      {
          "id": "bonus-de-qualit",
          "text": "Bonus de qualité",
          "level": 3
      },
      {
          "id": "finances",
          "text": "Finances",
          "level": 3
      },
      {
          "id": "pices",
          "text": "Pièces",
          "level": 2
      },
      {
          "id": "chambre",
          "text": "Chambre",
          "level": 3
      },
      {
          "id": "bonus-de-qualit",
          "text": "Bonus de qualité",
          "level": 4
      },
      {
          "id": "champs",
          "text": "Champs",
          "level": 3
      },
      {
          "id": "bonus-de-qualit",
          "text": "Bonus de qualité",
          "level": 4
      },
      {
          "id": "cuisine",
          "text": "Cuisine",
          "level": 3
      },
      {
          "id": "bonus-de-qualit",
          "text": "Bonus de qualité",
          "level": 4
      },
      {
          "id": "restaurant",
          "text": "Restaurant",
          "level": 3
      },
      {
          "id": "bonus-de-qualit",
          "text": "Bonus de qualité",
          "level": 4
      },
      {
          "id": "infirmerie",
          "text": "Infirmerie",
          "level": 3
      },
      {
          "id": "bonus-de-qualit",
          "text": "Bonus de qualité",
          "level": 4
      },
      {
          "id": "enclos-pour-monture",
          "text": "Enclos pour monture",
          "level": 3
      },
      {
          "id": "bonus-de-qualit",
          "text": "Bonus de qualité",
          "level": 4
      },
      {
          "id": "atelier-dartisanat",
          "text": "Atelier d'artisanat",
          "level": 3
      },
      {
          "id": "bonus-de-qualit",
          "text": "Bonus de qualité",
          "level": 4
      },
      {
          "id": "atelier-dalchimie",
          "text": "Atelier d'alchimie",
          "level": 3
      },
      {
          "id": "bonus-de-qualit",
          "text": "Bonus de qualité",
          "level": 4
      },
      {
          "id": "htel-des-ventes",
          "text": "Hôtel des ventes",
          "level": 3
      },
      {
          "id": "bonus-de-qualit",
          "text": "Bonus de qualité",
          "level": 4
      },
      {
          "id": "portail-de-tlportation",
          "text": "Portail de téléportation",
          "level": 3
      },
      {
          "id": "bonus-de-qualit",
          "text": "Bonus de qualité",
          "level": 4
      },
      {
          "id": "evnements",
          "text": "Evénements",
          "level": 2
      },
      {
          "id": "btiment",
          "text": "Bâtiment",
          "level": 3
      },
      {
          "id": "habitants",
          "text": "Habitants",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Propriétaire</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Propriétaire</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render fonctionnement()}
		{@render pices()}
		{@render evnements()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("> Ce <span class=\"wiki-unresolved\">Mini-Jeux</span> permet aux joueurs d'acheter et d'améliorer des bâtiments pour en faire des bases personnelles ou des activités commerciales pour le peuple.\n")}
{/snippet}

{#snippet fonctionnement()}
	<section>
		<h2 id="fonctionnement">Fonctionnement</h2>
	{@html renderMarkdown("\nLe joueur pourra, 1 fois par semaine, interagir avec son bâtiment pour modifier les plans ou donner des tâches aux habitants.\n\nLe joueur doit dessiner les plans sur une feuille quadrillée où 1cm en vrai = 1m en jeu (ou une autre échelle de son choix).\n\nLe bâtiment peut avoir plusieurs utilités :\n\n- une base pour les joueurs,\n\n- un centre d'activité commerciale,\n\n- un lieu habité par des PNJ.\n")}
	{@render construire()}
	{@render agrandir()}
	{@render modifier()}
	{@render bonusDeQualit()}
	{@render finances()}
	</section>
{/snippet}

{#snippet construire()}
	<section>
		<h3 id="construire">Construire</h3>
	{@html renderMarkdown("\nEn dehors des chambres, des champs et des écuries, le joueur ne peut avoir qu'un type de pièce par bâtiment (les spécialisations des ateliers sont considérés comme des types différents).\n\nLes pièces se construisent en parallèle et leur durée de construction ne doit pas être additionnée entre elles.\n\nSelon l'endroit où il construit, le MJ peut imposer une surface maximum à ne pas dépasser (une maison mitoyenne ne peut pas construire dans la maison voisine).\n")}

	</section>
{/snippet}

{#snippet agrandir()}
	<section>
		<h3 id="agrandir">Agrandir</h3>
	{@html renderMarkdown("\nLe joueur peut agrandir une pièce déjà existante en payant la différence entre la nouvelle taille et la taille actuelle (en multipliant selon la qualité).\n\nCependant la durée de construction reste la même\n")}

	</section>
{/snippet}

{#snippet modifier()}
	<section>
		<h3 id="modifier">Modifier</h3>
	{@html renderMarkdown("\nLe joueur peut modifier des pièces si besoin.\n\nS'il achète un bâtiment avec des pièces vides, il peut aménager une pièce vide pour 60% du prix de base (tant que la taille est similaire).\n\n>**Exemple** : Une pièce vide de 4m² ne peut que devenir une petite chambre (pauvre) pour 12pa.\n\nIl peut modifier le type d'une pièce en payant 80% du prix de base (tant que la taille est similaire).\n\n>**Exemple** : Un modeste restaurant de 100m² peut devenir un grand atelier d'artisanat (pauvre) pour 12po.\n")}

	</section>
{/snippet}

{#snippet bonusDeQualit()}
	<section>
		<h3 id="bonus-de-qualit">Bonus de qualité</h3>
	{@html renderMarkdown("\nChaque pièce peut être de différente qualité de construction afin de fournir des bonus différents (les pièces sont de qualité \"pauvre\" par défaut) :\n\n|                          | Pauvre | Aisé | Luxueux |\n| ------------------------ | :----: | :--: | :-----: |\n| **Coût de construction** |  x 1   | x 2  |   x 4   |")}

	</section>
{/snippet}

{#snippet finances()}
	<section>
		<h3 id="finances">Finances</h3>
	{@html renderMarkdown("\nSelon l'endroit où se situe le bâtiment, ses revenus et ses taxes vont varier :\n\n|             | Faubourg | Ville | Centre-ville | Zone marchande |\n| ----------- | :------: | :---: | :----------: | :------------: |\n| **Revenus** |  x 0.5   |  x 1  |     x 2      |       x3       |\n| **Taxes**   |   10%    |  15%  |     20%      |      30%       |\nSi le nombre de personnel nécessaire n'est pas atteint pour une pièce, les revenus de cette pièce diminuent de 75% et le personnel actuellement présent dans la pièce devient **stressé**.\n\nSi le joueur n'arrive pas à payer les taxes ou les dettes liées à son bâtiment, il en perdra la propriété et la province pourrait envoyer des huissiers.\n\n---\n")}

	</section>
{/snippet}

{#snippet pices()}
	<section>
		<h2 id="pices">Pièces</h2>

	{@render chambre()}
	{@render champs()}
	{@render cuisine()}
	{@render restaurant()}
	{@render infirmerie()}
	{@render enclosPourMonture()}
	{@render atelierDartisanat()}
	{@render atelierDalchimie()}
	{@render htelDesVentes()}
	{@render portailDeTlportation()}
	</section>
{/snippet}

{#snippet chambre()}
	<section>
		<h3 id="chambre">Chambre</h3>
	{@html renderMarkdown("\nPermet de loger les habitants ainsi que de donner des bonus aux joueurs lorsqu'ils dorment dans une chambre.\n\nPour compter les revenus, ne pas oublier de décompter le personnel du nombre de clients.\n\n|                                     |  Petit  | Modeste |  Grand  |\n| ----------------------------------- | :-----: | :-----: | :-----: |\n| **Taille (m²)**                     |    4    |    9    |   16    |\n| **Coût de construction**            |  20 pa  |  40 pa  |  70 pa  |\n| **Durée de construction (semaine)** |    1    |    1    |    2    |\n| **Peut loger X personne.s**         |    1    |    2    |    4    |\n| **Revenu quotidien (par client)**   |  20 pc  |  20 pc  |  20 pc  |\n| **Revenu hebdomadaire maximum**     | 1.4 pa  | 2.8 pa  | 5.6 pa  |\n| **Revenu annuel maximum**           | 72.8 pa | 1.45 po | 2.91 po |\n")}
	{@render bonusDeQualit_2()}
	</section>
{/snippet}

{#snippet bonusDeQualit_2()}
	<section>
		<h4 id="bonus-de-qualit">Bonus de qualité</h4>
	{@html renderMarkdown("\n|                          | Pauvre | Aisé  | Luxueux |\n| ------------------------ | :----: | :---: | :-----: |\n| **Régénération magique** |  x 1   |  x 2  |   x 3   |\n| **Revenus**              |  x 1   | x 1.5 |   x 2   |\n")}

	</section>
{/snippet}

{#snippet champs()}
	<section>
		<h3 id="champs">Champs</h3>
	{@html renderMarkdown("\nIndispensable pour fournir de la nourriture au cuisinier afin de nourrir les habitants.\n\nIl est supposé que le champ entoure le bâtiment (pas besoin de le dessiner sur un plan).\n\nSi le champs produit trop, le surplus peut être vendu.\n\n|                                     |  Petit  | Modeste |  Grand  |\n| ----------------------------------- | :-----: | :-----: | :-----: |\n| **Taille (m²)**                     |   200   |   500   |  1000   |\n| **Coût de construction**            |  2 pa   |  5 pa   |  10 pa  |\n| **Durée de construction (semaine)** |    1    |    2    |    3    |\n| **Peut nourrir X personne.s**       |    2    |    5    |   10    |\n| **Personnel nécessaire**            |    1    |    1    |    1    |\n| **Revenu quotidien (par client)**   |  5 pc   |  5 pc   |  5 pc   |\n| **Revenu hebdomadaire maximum**     |  70 pc  | 1.75 pa | 3.5 pa  |\n| **Revenu annuel maximum**           | 36.4 pa |  91 pa  | 1.82 po |\n")}
	{@render bonusDeQualit_3()}
	</section>
{/snippet}

{#snippet bonusDeQualit_3()}
	<section>
		<h4 id="bonus-de-qualit">Bonus de qualité</h4>
	{@html renderMarkdown("\n|                                | Pauvre | Aisé  | Luxueux |\n| ------------------------------ | :----: | :---: | :-----: |\n| **Nombre de personne nourrie** |  x 1   | x 1.5 |   x 2   |\n| **Revenus**                    |  x 1   | x 1.5 |   x 2   |\n")}

	</section>
{/snippet}

{#snippet cuisine()}
	<section>
		<h3 id="cuisine">Cuisine</h3>
	{@html renderMarkdown("\nUtilise ce que le champs produit pour nourrir les habitants ainsi que des clients potentiels.\n\nSi le champs ne produit pas assez, il faut acheter les ingrédients à 15pc/ client.\n\nIl ne peut y avoir qu'une seule cuisine par restaurant.\n\n|                                     | Petit  | Modeste | Grand |\n| ----------------------------------- | :----: | :-----: | :---: |\n| **Taille (m²)**                     |   9    |   25    |  49   |\n| **Coût de construction**            | 1.5 po |  4 po   | 8 po  |\n| **Durée de construction (semaine)** |   1    |    2    |   4   |\n| **Peut nourrir X personne.s**       |   20   |   50    |  100  |\n| **Personnel nécessaire**            |   1    |    2    |   2   |\n")}
	{@render bonusDeQualit_4()}
	</section>
{/snippet}

{#snippet bonusDeQualit_4()}
	<section>
		<h4 id="bonus-de-qualit">Bonus de qualité</h4>
	{@html renderMarkdown("\n|                           | Pauvre | Aisé  | Luxueux |\n| ------------------------- | :----: | :---: | :-----: |\n| **Revenus du restaurant** |  x 1   | x 1.5 |   x 2   |\n")}

	</section>
{/snippet}

{#snippet restaurant()}
	<section>
		<h3 id="restaurant">Restaurant</h3>
	{@html renderMarkdown("\nPermet de vendre le surplus de nourriture pour avoir quelques revenus.\n\nPour compter les revenus, ne pas oublier de décompter le personnel du nombre de clients.\n\n|                                     |  Petit  | Modeste |  Grand  |\n| ----------------------------------- | :-----: | :-----: | :-----: |\n| **Taille (m²)**                     |   49    |   100   |   144   |\n| **Coût de construction**            |  50 pa  |  1 po   | 1.5 po  |\n| **Durée de construction (semaine)** |    4    |    8    |   12    |\n| **Peut accueillir X personne.s**    |   20    |   50    |   100   |\n| **Personnel nécessaire**            |    2    |    4    |    5    |\n| **Revenu quotidien (par client)**   |  10 pc  |  10 pc  |  10 pc  |\n| **Revenu hebdomadaire maximum**     |  14 pa  |  35 pa  |  70 pa  |\n| **Revenu annuel maximum**           | 7.28 po | 18.2 po | 36.4 po |\n")}
	{@render bonusDeQualit_5()}
	</section>
{/snippet}

{#snippet bonusDeQualit_5()}
	<section>
		<h4 id="bonus-de-qualit">Bonus de qualité</h4>
	{@html renderMarkdown("\n|                                           | Pauvre | Aisé | Luxueux |\n| ----------------------------------------- | :----: | :--: | :-----: |\n| **Nombre de clients présents en moyenne** |  50%   | 75%  |  100%   |\n")}

	</section>
{/snippet}

{#snippet infirmerie()}
	<section>
		<h3 id="infirmerie">Infirmerie</h3>
	{@html renderMarkdown("\nSoigne les blessures plus ou moins graves.\n\nNe peut pas être géré par des enfants.\n\n|                                     |  Petit  | Modeste  |  Grand   |\n| ----------------------------------- | :-----: | :------: | :------: |\n| **Taille (m²)**                     |    9    |    25    |    49    |\n| **Coût de construction**            |  2 po   |   5 po   |  10 po   |\n| **Durée de construction (semaine)** |    1    |    2     |    4     |\n| **Peut accueillir X patient.s**     |    1    |    3     |    8     |\n| **Personnel nécessaire**            |    1    |    1     |    2     |\n| **Revenu quotidien (par client)**   |  2 pa   |   2 pa   |   2 pa   |\n| **Revenu hebdomadaire maximum**     |  14 pa  |  42 pa   |  112 pa  |\n| **Revenu annuel maximum**           | 7.28 po | 21.84 po | 58.24 po |\n")}
	{@render bonusDeQualit_6()}
	</section>
{/snippet}

{#snippet bonusDeQualit_6()}
	<section>
		<h4 id="bonus-de-qualit">Bonus de qualité</h4>
	{@html renderMarkdown("\n|                   |       Pauvre       |        Aisé         |   Luxueux    |\n| ----------------- | :----------------: | :-----------------: | :----------: |\n| **Type de soins** | Soins généralistes | Blessures de combat | Démembrement |\n| **Revenus**       |        x 1         |         x 2         |     x 4      |\n")}

	</section>
{/snippet}

{#snippet enclosPourMonture()}
	<section>
		<h3 id="enclos-pour-monture">Enclos pour monture</h3>
	{@html renderMarkdown("\nPermet aux montures de se reposer pour être plus efficaces lors de leur prochain voyage.\n\n|                                           |  Petit  | Modeste |    Grand    |\n| ----------------------------------------- | :-----: | :-----: | :---------: |\n| **Taille (m²)**                           |   16    |   36    |     81      |\n| **Coût de construction**                  |  70 pa  | 1.5 po  |    3 po     |\n| **Durée de construction (semaine)**       |    2    |    3    |      6      |\n| **Peut accueillir 1 monture de taille X** | Moyenne | Grande  | Très grande |\n| **Consommation du champs**                |   +1    |   +3    |     +5      |\n| **Personnel nécessaire**                  |    1    |    1    |      1      |\n")}
	{@render bonusDeQualit_7()}
	</section>
{/snippet}

{#snippet bonusDeQualit_7()}
	<section>
		<h4 id="bonus-de-qualit">Bonus de qualité</h4>
	{@html renderMarkdown("\n|                       | Pauvre |     Aisé     |   Luxueux    |\n| --------------------- | :----: | :----------: | :----------: |\n| **Vitesse de voyage** |  x 1   | A déterminer | A déterminer |\n")}

	</section>
{/snippet}

{#snippet atelierDartisanat()}
	<section>
		<h3 id="atelier-dartisanat">Atelier d'artisanat</h3>
	{@html renderMarkdown("\nL'atelier permet au joueur et aux employés de fabriquer des objets pour s'en servir ou pour les revendre.\n\nLes matériaux pour la fabrication doivent toujours être fournis par le joueur.\n\nChaque atelier doit se spécialiser parmi ces choix :\n\n- bijouterie *(coût de construction x4)*,\n\n- forge *(coût de construction x2)*,\n\n- atelier d'enchanteur *(coût de construction x3)*,\n\n- tannerie *(coût de construction x1)*,\n\n- atelier d'artificier *(coût de construction x1.5)*.\n\n|                                     | Petit | Modeste | Grand |\n| ----------------------------------- | :---: | :-----: | :---: |\n| **Taille (m²)**                     |  25   |   49    |  100  |\n| **Coût de construction**            | 4 po  |  8 po   | 15 po |\n| **Durée de construction (semaine)** |   2   |    4    |   7   |\n| **Personnel nécessaire**            |   1   |    2    |   4   |\n")}
	{@render bonusDeQualit_8()}
	</section>
{/snippet}

{#snippet bonusDeQualit_8()}
	<section>
		<h4 id="bonus-de-qualit">Bonus de qualité</h4>
	{@html renderMarkdown("\n|                           | Pauvre | Aisé  | Luxueux |\n| ------------------------- | :----: | :---: | :-----: |\n| **Taux de réussite**      |  x 1   | x 1.5 |   x 2   |\n| **Vitesse des habitants** |  x 1   | x 1.5 |   x 2   |\n")}

	</section>
{/snippet}

{#snippet atelierDalchimie()}
	<section>
		<h3 id="atelier-dalchimie">Atelier d'alchimie</h3>
	{@html renderMarkdown("\nL'atelier permet au joueur et aux employés de fabriquer des objets pour s'en servir ou pour les revendre.\n\nLes matériaux pour la fabrication doivent toujours être fournis par le joueur.\n\nChaque atelier doit se spécialiser parmi ces choix :\n\n- potionniste *(coût de construction x1)*,\n\n- invocateur *(coût de construction x2)*.\n\n|                                     | Petit | Modeste | Grand |\n| ----------------------------------- | :---: | :-----: | :---: |\n| **Taille (m²)**                     |  49   |   100   |  144  |\n| **Coût de construction**            | 10 po |  20 po  | 30 po |\n| **Durée de construction (semaine)** |   4   |    7    |  10   |\n| **Personnel nécessaire**            |   2   |    4    |   5   |\n")}
	{@render bonusDeQualit_9()}
	</section>
{/snippet}

{#snippet bonusDeQualit_9()}
	<section>
		<h4 id="bonus-de-qualit">Bonus de qualité</h4>
	{@html renderMarkdown("\n|                           | Pauvre | Aisé  | Luxueux |\n| ------------------------- | :----: | :---: | :-----: |\n| **Taux de réussite**      |  x 1   | x 1.5 |   x 2   |\n| **Vitesse des habitants** |  x 1   | x 1.5 |   x 2   |\n")}

	</section>
{/snippet}

{#snippet htelDesVentes()}
	<section>
		<h3 id="htel-des-ventes">Hôtel des ventes</h3>
	{@html renderMarkdown("\nRachète des biens pour tenter de les revendre plus chères.\n\nSi personne n'achète, les biens sont vendus à pertes.\n\nChaque semaine, le joueur peut lancer 1d100 et faire 99 ou 100 pour récupérer un objet rare.\n\nLorsqu'il y a un objet rare, il n'y a pas de revenus pour cette semaine.\n\n|                                     | Petit  | Modeste | Grand  |\n| ----------------------------------- | :----: | :-----: | :----: |\n| **Taille (m²)**                     |   9    |   16    |   25   |\n| **Coût de construction**            |  1 po  |  5 po   |  10 po |\n| **Durée de construction (semaine)** |   1    |    2    |   2    |\n| **Personnel nécessaire**            |   1    |    1    |   1    |\n| **Revenus/ Pertes hebdomadaires**   | 10 pa  |  50 pa  |  1 po  |\n| **Revenu annuel maximum**           | 5.2 po |  26 po  | 52 po  |\n")}
	{@render bonusDeQualit_10()}
	</section>
{/snippet}

{#snippet bonusDeQualit_10()}
	<section>
		<h4 id="bonus-de-qualit">Bonus de qualité</h4>
	{@html renderMarkdown("\n|                        | Pauvre | Aisé | Luxueux |\n| ---------------------- | :----: | :--: | :-----: |\n| **Chances de revenus** |  + 0   | + 1  |   + 2   |\nChaque semaine, le joueur lance 1d10 + *Chances de revenus*.\n\nS'il fait 6 ou plus, il gagne les revenus. Sinon il les déduit de son compte.\n\n>**Exemple** : Modeste hôtel des ventes (*pauvre*) : 1d10 *+0*. Il fait 2 *+0* -> Il perd 1 po.\n")}

	</section>
{/snippet}

{#snippet portailDeTlportation()}
	<section>
		<h3 id="portail-de-tlportation">Portail de téléportation</h3>
	{@html renderMarkdown("\nLa téléportation fonctionne par tranche de 100kg.\n\nSi on téléporte 101kg, il faut considérer qu'il y a \"2 téléportations\"\n\nOn doit utiliser ses crystaux ou ceux du personnel pour utiliser le portail.\n\n|                                                | Petit | Modeste | Grand  |\n| ---------------------------------------------- | :---: | :-----: | :----: |\n| **Taille (m²)**                                |  100  |   225   |  400   |\n| **Coût de construction**                       | 50 po | 100 po  | 175 po |\n| **Durée de construction (semaine)**            |   7   |   16    |   27   |\n| **Crystaux nécessaires pour téléporter 100kg** |  12   |    8    |   4    |\n")}
	{@render bonusDeQualit_11()}
	</section>
{/snippet}

{#snippet bonusDeQualit_11()}
	<section>
		<h4 id="bonus-de-qualit">Bonus de qualité</h4>
	{@html renderMarkdown("\n|                          | Pauvre | Aisé | Luxueux |\n| ------------------------ | :----: | :--: | :-----: |\n| **Crystaux nécessaires** |  100%  | 75%  |   50%   |\n\n---\n")}

	</section>
{/snippet}

{#snippet evnements()}
	<section>
		<h2 id="evnements">Evénements</h2>

	{@render btiment()}
	{@render habitants()}
	</section>
{/snippet}

{#snippet btiment()}
	<section>
		<h3 id="btiment">Bâtiment</h3>
	{@html renderMarkdown("\nToutes les semaines où le joueur n'est pas dans son bâtiment, il doit lancer 1d20 pour déterminer ce qu'il s'est passé pendant son absence.\n\n| Jet  | Résultat                                                                                                |\n| ---- | ------------------------------------------------------------------------------------------------------- |\n| 1-4  | Un nouvel habitant s'est présenté                                                                       |\n| 5    | Un vol a eu lieu<br>Le joueur perd 50% de son revenu de la semaine                                      |\n| 6    | Un attaque a eu lieu<br>Le joueur lance 1d20 pour chaque habitant<br>1 résulte en la mort de l'habitant |\n| 7-20 | Rien ne se passe                                                                                        |\n")}

	</section>
{/snippet}

{#snippet habitants()}
	<section>
		<h3 id="habitants">Habitants</h3>
	{@html renderMarkdown("\nLorsqu'un nouvel habitant se présente, le joueur peut l'accepter et lui attribuer des tâches ou le renvoyer.\n\nS'il l'accepte, il faut :\n\n- lui fournir une chambre (ça ne peut pas être la chambre d'un joueur quand il ne s'en sert pas),\n\n- le nourrir\n\n\t- en payant 15pc de nourriture par jour,\n\n\t- en ayant assez de nourriture à fournir à la cuisine.\n\nLe joueur peut ensuite lui attribuer une tâche, en l'associant à une pièce.\n\nChaque semaine, pour chaque pièce, le joueur doit jeter 1d12 pour déterminer les événements qui s'y sont produits.\n\n| Jet  | Besoin      | Conséquences                                                                                                                            |\n| ---- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |\n| 1    | Gourmandise | Consomme 2x plus de nourriture<br>S'il n'y a pas assez de nourriture, il abime une pièce                                                |\n| 2    | Luxe        | Utilise 20% des revenus d'une pièce                                                                                                     |\n| 3    | Paresse     | N'effectue pas sa tâche pour la semaine                                                                                                 |\n| 4    | Maladie     | Diminue le revenu de 50%<br>S'il n'est pas soigné après 1 semaine, contamine un autre habitant<br>Après 2 semaines de maladie, il meurt |\n| 5    | Folie       | N'effectue pas sa tâche<br>Peut rendre fou un autre habitant si non traité<br>Déclenche une mutinerie s'il y a 10 fous                  |\n| 6    | Studieux    | Double ses revenus                                                                                                                      |\n| 7    | Modèle      | Augmente les revenus totaux de 25%                                                                                                      |\n| 8-12 | Rien        | -                                                                                                                                       |")}

	</section>
{/snippet}
