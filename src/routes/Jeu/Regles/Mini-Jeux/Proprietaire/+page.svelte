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
  <title>{"Propriétaire"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Propriétaire"}</h1>
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
	{@html "<blockquote>Ce <span class=\"wiki-unresolved\">Mini-Jeux</span> permet aux joueurs d'acheter et d'améliorer des bâtiments pour en faire des bases personnelles ou des activités commerciales pour le peuple.</blockquote>"}
{/snippet}

{#snippet fonctionnement()}
	<section>
		<h2 id="fonctionnement">{@html "Fonctionnement"}</h2>
	{@html "<p>Le joueur pourra, 1 fois par semaine, interagir avec son bâtiment pour modifier les plans ou donner des tâches aux habitants.</p>\n<p>Le joueur doit dessiner les plans sur une feuille quadrillée où 1cm en vrai = 1m en jeu (ou une autre échelle de son choix).</p>\n<p>Le bâtiment peut avoir plusieurs utilités :</p>\n<ul><li>une base pour les joueurs,</li></ul>\n<ul><li>un centre d'activité commerciale,</li></ul>\n<ul><li>un lieu habité par des PNJ.</li></ul>"}
	{@render construire()}
	{@render agrandir()}
	{@render modifier()}
	{@render bonusDeQualit()}
	{@render finances()}
	</section>
{/snippet}

{#snippet construire()}
	<section>
		<h3 id="construire">{@html "Construire"}</h3>
	{@html "<p>En dehors des chambres, des champs et des écuries, le joueur ne peut avoir qu'un type de pièce par bâtiment (les spécialisations des ateliers sont considérés comme des types différents).</p>\n<p>Les pièces se construisent en parallèle et leur durée de construction ne doit pas être additionnée entre elles.</p>\n<p>Selon l'endroit où il construit, le MJ peut imposer une surface maximum à ne pas dépasser (une maison mitoyenne ne peut pas construire dans la maison voisine).</p>"}

	</section>
{/snippet}

{#snippet agrandir()}
	<section>
		<h3 id="agrandir">{@html "Agrandir"}</h3>
	{@html "<p>Le joueur peut agrandir une pièce déjà existante en payant la différence entre la nouvelle taille et la taille actuelle (en multipliant selon la qualité).</p>\n<p>Cependant la durée de construction reste la même</p>"}

	</section>
{/snippet}

{#snippet modifier()}
	<section>
		<h3 id="modifier">{@html "Modifier"}</h3>
	{@html "<p>Le joueur peut modifier des pièces si besoin.</p>\n<p>S'il achète un bâtiment avec des pièces vides, il peut aménager une pièce vide pour 60% du prix de base (tant que la taille est similaire).</p>\n<blockquote><strong>Exemple</strong> : Une pièce vide de 4m² ne peut que devenir une petite chambre (pauvre) pour 12pa.</blockquote>\n<p>Il peut modifier le type d'une pièce en payant 80% du prix de base (tant que la taille est similaire).</p>\n<blockquote><strong>Exemple</strong> : Un modeste restaurant de 100m² peut devenir un grand atelier d'artisanat (pauvre) pour 12po.</blockquote>"}

	</section>
{/snippet}

{#snippet bonusDeQualit()}
	<section>
		<h3 id="bonus-de-qualit">{@html "Bonus de qualité"}</h3>
	{@html "<p>Chaque pièce peut être de différente qualité de construction afin de fournir des bonus différents (les pièces sont de qualité \"pauvre\" par défaut) :</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Pauvre</th><th>Aisé</th><th>Luxueux</th></tr></thead><tbody><tr><td><strong>Coût de construction</strong></td><td>x 1</td><td>x 2</td><td>x 4</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet finances()}
	<section>
		<h3 id="finances">{@html "Finances"}</h3>
	{@html "<p>Selon l'endroit où se situe le bâtiment, ses revenus et ses taxes vont varier :</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Faubourg</th><th>Ville</th><th>Centre-ville</th><th>Zone marchande</th></tr></thead><tbody><tr><td><strong>Revenus</strong></td><td>x 0.5</td><td>x 1</td><td>x 2</td><td>x3</td></tr><tr><td><strong>Taxes</strong></td><td>10%</td><td>15%</td><td>20%</td><td>30%</td></tr></tbody></table></div>\n<p>Si le nombre de personnel nécessaire n'est pas atteint pour une pièce, les revenus de cette pièce diminuent de 75% et le personnel actuellement présent dans la pièce devient <strong>stressé</strong>.</p>\n<p>Si le joueur n'arrive pas à payer les taxes ou les dettes liées à son bâtiment, il en perdra la propriété et la province pourrait envoyer des huissiers.</p>\n<hr>"}

	</section>
{/snippet}

{#snippet pices()}
	<section>
		<h2 id="pices">{@html "Pièces"}</h2>

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
		<h3 id="chambre">{@html "Chambre"}</h3>
	{@html "<p>Permet de loger les habitants ainsi que de donner des bonus aux joueurs lorsqu'ils dorment dans une chambre.</p>\n<p>Pour compter les revenus, ne pas oublier de décompter le personnel du nombre de clients.</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Petit</th><th>Modeste</th><th>Grand</th></tr></thead><tbody><tr><td><strong>Taille (m²)</strong></td><td>4</td><td>9</td><td>16</td></tr><tr><td><strong>Coût de construction</strong></td><td>20 pa</td><td>40 pa</td><td>70 pa</td></tr><tr><td><strong>Durée de construction (semaine)</strong></td><td>1</td><td>1</td><td>2</td></tr><tr><td><strong>Peut loger X personne.s</strong></td><td>1</td><td>2</td><td>4</td></tr><tr><td><strong>Revenu quotidien (par client)</strong></td><td>20 pc</td><td>20 pc</td><td>20 pc</td></tr><tr><td><strong>Revenu hebdomadaire maximum</strong></td><td>1.4 pa</td><td>2.8 pa</td><td>5.6 pa</td></tr><tr><td><strong>Revenu annuel maximum</strong></td><td>72.8 pa</td><td>1.45 po</td><td>2.91 po</td></tr></tbody></table></div>"}
	{@render bonusDeQualit_2()}
	</section>
{/snippet}

{#snippet bonusDeQualit_2()}
	<section>
		<h4 id="bonus-de-qualit">{@html "Bonus de qualité"}</h4>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Pauvre</th><th>Aisé</th><th>Luxueux</th></tr></thead><tbody><tr><td><strong>Régénération magique</strong></td><td>x 1</td><td>x 2</td><td>x 3</td></tr><tr><td><strong>Revenus</strong></td><td>x 1</td><td>x 1.5</td><td>x 2</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet champs()}
	<section>
		<h3 id="champs">{@html "Champs"}</h3>
	{@html "<p>Indispensable pour fournir de la nourriture au cuisinier afin de nourrir les habitants.</p>\n<p>Il est supposé que le champ entoure le bâtiment (pas besoin de le dessiner sur un plan).</p>\n<p>Si le champs produit trop, le surplus peut être vendu.</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Petit</th><th>Modeste</th><th>Grand</th></tr></thead><tbody><tr><td><strong>Taille (m²)</strong></td><td>200</td><td>500</td><td>1000</td></tr><tr><td><strong>Coût de construction</strong></td><td>2 pa</td><td>5 pa</td><td>10 pa</td></tr><tr><td><strong>Durée de construction (semaine)</strong></td><td>1</td><td>2</td><td>3</td></tr><tr><td><strong>Peut nourrir X personne.s</strong></td><td>2</td><td>5</td><td>10</td></tr><tr><td><strong>Personnel nécessaire</strong></td><td>1</td><td>1</td><td>1</td></tr><tr><td><strong>Revenu quotidien (par client)</strong></td><td>5 pc</td><td>5 pc</td><td>5 pc</td></tr><tr><td><strong>Revenu hebdomadaire maximum</strong></td><td>70 pc</td><td>1.75 pa</td><td>3.5 pa</td></tr><tr><td><strong>Revenu annuel maximum</strong></td><td>36.4 pa</td><td>91 pa</td><td>1.82 po</td></tr></tbody></table></div>"}
	{@render bonusDeQualit_3()}
	</section>
{/snippet}

{#snippet bonusDeQualit_3()}
	<section>
		<h4 id="bonus-de-qualit">{@html "Bonus de qualité"}</h4>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Pauvre</th><th>Aisé</th><th>Luxueux</th></tr></thead><tbody><tr><td><strong>Nombre de personne nourrie</strong></td><td>x 1</td><td>x 1.5</td><td>x 2</td></tr><tr><td><strong>Revenus</strong></td><td>x 1</td><td>x 1.5</td><td>x 2</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet cuisine()}
	<section>
		<h3 id="cuisine">{@html "Cuisine"}</h3>
	{@html "<p>Utilise ce que le champs produit pour nourrir les habitants ainsi que des clients potentiels.</p>\n<p>Si le champs ne produit pas assez, il faut acheter les ingrédients à 15pc/ client.</p>\n<p>Il ne peut y avoir qu'une seule cuisine par restaurant.</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Petit</th><th>Modeste</th><th>Grand</th></tr></thead><tbody><tr><td><strong>Taille (m²)</strong></td><td>9</td><td>25</td><td>49</td></tr><tr><td><strong>Coût de construction</strong></td><td>1.5 po</td><td>4 po</td><td>8 po</td></tr><tr><td><strong>Durée de construction (semaine)</strong></td><td>1</td><td>2</td><td>4</td></tr><tr><td><strong>Peut nourrir X personne.s</strong></td><td>20</td><td>50</td><td>100</td></tr><tr><td><strong>Personnel nécessaire</strong></td><td>1</td><td>2</td><td>2</td></tr></tbody></table></div>"}
	{@render bonusDeQualit_4()}
	</section>
{/snippet}

{#snippet bonusDeQualit_4()}
	<section>
		<h4 id="bonus-de-qualit">{@html "Bonus de qualité"}</h4>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Pauvre</th><th>Aisé</th><th>Luxueux</th></tr></thead><tbody><tr><td><strong>Revenus du restaurant</strong></td><td>x 1</td><td>x 1.5</td><td>x 2</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet restaurant()}
	<section>
		<h3 id="restaurant">{@html "Restaurant"}</h3>
	{@html "<p>Permet de vendre le surplus de nourriture pour avoir quelques revenus.</p>\n<p>Pour compter les revenus, ne pas oublier de décompter le personnel du nombre de clients.</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Petit</th><th>Modeste</th><th>Grand</th></tr></thead><tbody><tr><td><strong>Taille (m²)</strong></td><td>49</td><td>100</td><td>144</td></tr><tr><td><strong>Coût de construction</strong></td><td>50 pa</td><td>1 po</td><td>1.5 po</td></tr><tr><td><strong>Durée de construction (semaine)</strong></td><td>4</td><td>8</td><td>12</td></tr><tr><td><strong>Peut accueillir X personne.s</strong></td><td>20</td><td>50</td><td>100</td></tr><tr><td><strong>Personnel nécessaire</strong></td><td>2</td><td>4</td><td>5</td></tr><tr><td><strong>Revenu quotidien (par client)</strong></td><td>10 pc</td><td>10 pc</td><td>10 pc</td></tr><tr><td><strong>Revenu hebdomadaire maximum</strong></td><td>14 pa</td><td>35 pa</td><td>70 pa</td></tr><tr><td><strong>Revenu annuel maximum</strong></td><td>7.28 po</td><td>18.2 po</td><td>36.4 po</td></tr></tbody></table></div>"}
	{@render bonusDeQualit_5()}
	</section>
{/snippet}

{#snippet bonusDeQualit_5()}
	<section>
		<h4 id="bonus-de-qualit">{@html "Bonus de qualité"}</h4>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Pauvre</th><th>Aisé</th><th>Luxueux</th></tr></thead><tbody><tr><td><strong>Nombre de clients présents en moyenne</strong></td><td>50%</td><td>75%</td><td>100%</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet infirmerie()}
	<section>
		<h3 id="infirmerie">{@html "Infirmerie"}</h3>
	{@html "<p>Soigne les blessures plus ou moins graves.</p>\n<p>Ne peut pas être géré par des enfants.</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Petit</th><th>Modeste</th><th>Grand</th></tr></thead><tbody><tr><td><strong>Taille (m²)</strong></td><td>9</td><td>25</td><td>49</td></tr><tr><td><strong>Coût de construction</strong></td><td>2 po</td><td>5 po</td><td>10 po</td></tr><tr><td><strong>Durée de construction (semaine)</strong></td><td>1</td><td>2</td><td>4</td></tr><tr><td><strong>Peut accueillir X patient.s</strong></td><td>1</td><td>3</td><td>8</td></tr><tr><td><strong>Personnel nécessaire</strong></td><td>1</td><td>1</td><td>2</td></tr><tr><td><strong>Revenu quotidien (par client)</strong></td><td>2 pa</td><td>2 pa</td><td>2 pa</td></tr><tr><td><strong>Revenu hebdomadaire maximum</strong></td><td>14 pa</td><td>42 pa</td><td>112 pa</td></tr><tr><td><strong>Revenu annuel maximum</strong></td><td>7.28 po</td><td>21.84 po</td><td>58.24 po</td></tr></tbody></table></div>"}
	{@render bonusDeQualit_6()}
	</section>
{/snippet}

{#snippet bonusDeQualit_6()}
	<section>
		<h4 id="bonus-de-qualit">{@html "Bonus de qualité"}</h4>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Pauvre</th><th>Aisé</th><th>Luxueux</th></tr></thead><tbody><tr><td><strong>Type de soins</strong></td><td>Soins généralistes</td><td>Blessures de combat</td><td>Démembrement</td></tr><tr><td><strong>Revenus</strong></td><td>x 1</td><td>x 2</td><td>x 4</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet enclosPourMonture()}
	<section>
		<h3 id="enclos-pour-monture">{@html "Enclos pour monture"}</h3>
	{@html "<p>Permet aux montures de se reposer pour être plus efficaces lors de leur prochain voyage.</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Petit</th><th>Modeste</th><th>Grand</th></tr></thead><tbody><tr><td><strong>Taille (m²)</strong></td><td>16</td><td>36</td><td>81</td></tr><tr><td><strong>Coût de construction</strong></td><td>70 pa</td><td>1.5 po</td><td>3 po</td></tr><tr><td><strong>Durée de construction (semaine)</strong></td><td>2</td><td>3</td><td>6</td></tr><tr><td><strong>Peut accueillir 1 monture de taille X</strong></td><td>Moyenne</td><td>Grande</td><td>Très grande</td></tr><tr><td><strong>Consommation du champs</strong></td><td>+1</td><td>+3</td><td>+5</td></tr><tr><td><strong>Personnel nécessaire</strong></td><td>1</td><td>1</td><td>1</td></tr></tbody></table></div>"}
	{@render bonusDeQualit_7()}
	</section>
{/snippet}

{#snippet bonusDeQualit_7()}
	<section>
		<h4 id="bonus-de-qualit">{@html "Bonus de qualité"}</h4>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Pauvre</th><th>Aisé</th><th>Luxueux</th></tr></thead><tbody><tr><td><strong>Vitesse de voyage</strong></td><td>x 1</td><td>A déterminer</td><td>A déterminer</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet atelierDartisanat()}
	<section>
		<h3 id="atelier-dartisanat">{@html "Atelier d'artisanat"}</h3>
	{@html "<p>L'atelier permet au joueur et aux employés de fabriquer des objets pour s'en servir ou pour les revendre.</p>\n<p>Les matériaux pour la fabrication doivent toujours être fournis par le joueur.</p>\n<p>Chaque atelier doit se spécialiser parmi ces choix :</p>\n<ul><li>bijouterie <em>(coût de construction x4)</em>,</li></ul>\n<ul><li>forge <em>(coût de construction x2)</em>,</li></ul>\n<ul><li>atelier d'enchanteur <em>(coût de construction x3)</em>,</li></ul>\n<ul><li>tannerie <em>(coût de construction x1)</em>,</li></ul>\n<ul><li>atelier d'artificier <em>(coût de construction x1.5)</em>.</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Petit</th><th>Modeste</th><th>Grand</th></tr></thead><tbody><tr><td><strong>Taille (m²)</strong></td><td>25</td><td>49</td><td>100</td></tr><tr><td><strong>Coût de construction</strong></td><td>4 po</td><td>8 po</td><td>15 po</td></tr><tr><td><strong>Durée de construction (semaine)</strong></td><td>2</td><td>4</td><td>7</td></tr><tr><td><strong>Personnel nécessaire</strong></td><td>1</td><td>2</td><td>4</td></tr></tbody></table></div>"}
	{@render bonusDeQualit_8()}
	</section>
{/snippet}

{#snippet bonusDeQualit_8()}
	<section>
		<h4 id="bonus-de-qualit">{@html "Bonus de qualité"}</h4>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Pauvre</th><th>Aisé</th><th>Luxueux</th></tr></thead><tbody><tr><td><strong>Taux de réussite</strong></td><td>x 1</td><td>x 1.5</td><td>x 2</td></tr><tr><td><strong>Vitesse des habitants</strong></td><td>x 1</td><td>x 1.5</td><td>x 2</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet atelierDalchimie()}
	<section>
		<h3 id="atelier-dalchimie">{@html "Atelier d'alchimie"}</h3>
	{@html "<p>L'atelier permet au joueur et aux employés de fabriquer des objets pour s'en servir ou pour les revendre.</p>\n<p>Les matériaux pour la fabrication doivent toujours être fournis par le joueur.</p>\n<p>Chaque atelier doit se spécialiser parmi ces choix :</p>\n<ul><li>potionniste <em>(coût de construction x1)</em>,</li></ul>\n<ul><li>invocateur <em>(coût de construction x2)</em>.</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Petit</th><th>Modeste</th><th>Grand</th></tr></thead><tbody><tr><td><strong>Taille (m²)</strong></td><td>49</td><td>100</td><td>144</td></tr><tr><td><strong>Coût de construction</strong></td><td>10 po</td><td>20 po</td><td>30 po</td></tr><tr><td><strong>Durée de construction (semaine)</strong></td><td>4</td><td>7</td><td>10</td></tr><tr><td><strong>Personnel nécessaire</strong></td><td>2</td><td>4</td><td>5</td></tr></tbody></table></div>"}
	{@render bonusDeQualit_9()}
	</section>
{/snippet}

{#snippet bonusDeQualit_9()}
	<section>
		<h4 id="bonus-de-qualit">{@html "Bonus de qualité"}</h4>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Pauvre</th><th>Aisé</th><th>Luxueux</th></tr></thead><tbody><tr><td><strong>Taux de réussite</strong></td><td>x 1</td><td>x 1.5</td><td>x 2</td></tr><tr><td><strong>Vitesse des habitants</strong></td><td>x 1</td><td>x 1.5</td><td>x 2</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet htelDesVentes()}
	<section>
		<h3 id="htel-des-ventes">{@html "Hôtel des ventes"}</h3>
	{@html "<p>Rachète des biens pour tenter de les revendre plus chères.</p>\n<p>Si personne n'achète, les biens sont vendus à pertes.</p>\n<p>Chaque semaine, le joueur peut lancer 1d100 et faire 99 ou 100 pour récupérer un objet rare.</p>\n<p>Lorsqu'il y a un objet rare, il n'y a pas de revenus pour cette semaine.</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Petit</th><th>Modeste</th><th>Grand</th></tr></thead><tbody><tr><td><strong>Taille (m²)</strong></td><td>9</td><td>16</td><td>25</td></tr><tr><td><strong>Coût de construction</strong></td><td>1 po</td><td>5 po</td><td>10 po</td></tr><tr><td><strong>Durée de construction (semaine)</strong></td><td>1</td><td>2</td><td>2</td></tr><tr><td><strong>Personnel nécessaire</strong></td><td>1</td><td>1</td><td>1</td></tr><tr><td><strong>Revenus/ Pertes hebdomadaires</strong></td><td>10 pa</td><td>50 pa</td><td>1 po</td></tr><tr><td><strong>Revenu annuel maximum</strong></td><td>5.2 po</td><td>26 po</td><td>52 po</td></tr></tbody></table></div>"}
	{@render bonusDeQualit_10()}
	</section>
{/snippet}

{#snippet bonusDeQualit_10()}
	<section>
		<h4 id="bonus-de-qualit">{@html "Bonus de qualité"}</h4>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Pauvre</th><th>Aisé</th><th>Luxueux</th></tr></thead><tbody><tr><td><strong>Chances de revenus</strong></td><td>+ 0</td><td>+ 1</td><td>+ 2</td></tr></tbody></table></div>\n<p>Chaque semaine, le joueur lance 1d10 + <em>Chances de revenus</em>.</p>\n<p>S'il fait 6 ou plus, il gagne les revenus. Sinon il les déduit de son compte.</p>\n<blockquote><strong>Exemple</strong> : Modeste hôtel des ventes (<em>pauvre</em>) : 1d10 <em>+0</em>. Il fait 2 <em>+0</em> -> Il perd 1 po.</blockquote>"}

	</section>
{/snippet}

{#snippet portailDeTlportation()}
	<section>
		<h3 id="portail-de-tlportation">{@html "Portail de téléportation"}</h3>
	{@html "<p>La téléportation fonctionne par tranche de 100kg.</p>\n<p>Si on téléporte 101kg, il faut considérer qu'il y a \"2 téléportations\"</p>\n<p>On doit utiliser ses crystaux ou ceux du personnel pour utiliser le portail.</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Petit</th><th>Modeste</th><th>Grand</th></tr></thead><tbody><tr><td><strong>Taille (m²)</strong></td><td>100</td><td>225</td><td>400</td></tr><tr><td><strong>Coût de construction</strong></td><td>50 po</td><td>100 po</td><td>175 po</td></tr><tr><td><strong>Durée de construction (semaine)</strong></td><td>7</td><td>16</td><td>27</td></tr><tr><td><strong>Crystaux nécessaires pour téléporter 100kg</strong></td><td>12</td><td>8</td><td>4</td></tr></tbody></table></div>"}
	{@render bonusDeQualit_11()}
	</section>
{/snippet}

{#snippet bonusDeQualit_11()}
	<section>
		<h4 id="bonus-de-qualit">{@html "Bonus de qualité"}</h4>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Pauvre</th><th>Aisé</th><th>Luxueux</th></tr></thead><tbody><tr><td><strong>Crystaux nécessaires</strong></td><td>100%</td><td>75%</td><td>50%</td></tr></tbody></table></div>\n<hr>"}

	</section>
{/snippet}

{#snippet evnements()}
	<section>
		<h2 id="evnements">{@html "Evénements"}</h2>

	{@render btiment()}
	{@render habitants()}
	</section>
{/snippet}

{#snippet btiment()}
	<section>
		<h3 id="btiment">{@html "Bâtiment"}</h3>
	{@html "<p>Toutes les semaines où le joueur n'est pas dans son bâtiment, il doit lancer 1d20 pour déterminer ce qu'il s'est passé pendant son absence.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Jet</th><th>Résultat</th></tr></thead><tbody><tr><td>1-4</td><td>Un nouvel habitant s'est présenté</td></tr><tr><td>5</td><td>Un vol a eu lieu<br>Le joueur perd 50% de son revenu de la semaine</td></tr><tr><td>6</td><td>Un attaque a eu lieu<br>Le joueur lance 1d20 pour chaque habitant<br>1 résulte en la mort de l'habitant</td></tr><tr><td>7-20</td><td>Rien ne se passe</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet habitants()}
	<section>
		<h3 id="habitants">{@html "Habitants"}</h3>
	{@html "<p>Lorsqu'un nouvel habitant se présente, le joueur peut l'accepter et lui attribuer des tâches ou le renvoyer.</p>\n<p>S'il l'accepte, il faut :</p>\n<ul><li>lui fournir une chambre (ça ne peut pas être la chambre d'un joueur quand il ne s'en sert pas),</li></ul>\n<ul><li>le nourrir</li></ul>\n<ul><li>en payant 15pc de nourriture par jour,</li></ul>\n<ul><li>en ayant assez de nourriture à fournir à la cuisine.</li></ul>\n<p>Le joueur peut ensuite lui attribuer une tâche, en l'associant à une pièce.</p>\n<p>Chaque semaine, pour chaque pièce, le joueur doit jeter 1d12 pour déterminer les événements qui s'y sont produits.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Jet</th><th>Besoin</th><th>Conséquences</th></tr></thead><tbody><tr><td>1</td><td>Gourmandise</td><td>Consomme 2x plus de nourriture<br>S'il n'y a pas assez de nourriture, il abime une pièce</td></tr><tr><td>2</td><td>Luxe</td><td>Utilise 20% des revenus d'une pièce</td></tr><tr><td>3</td><td>Paresse</td><td>N'effectue pas sa tâche pour la semaine</td></tr><tr><td>4</td><td>Maladie</td><td>Diminue le revenu de 50%<br>S'il n'est pas soigné après 1 semaine, contamine un autre habitant<br>Après 2 semaines de maladie, il meurt</td></tr><tr><td>5</td><td>Folie</td><td>N'effectue pas sa tâche<br>Peut rendre fou un autre habitant si non traité<br>Déclenche une mutinerie s'il y a 10 fous</td></tr><tr><td>6</td><td>Studieux</td><td>Double ses revenus</td></tr><tr><td>7</td><td>Modèle</td><td>Augmente les revenus totaux de 25%</td></tr><tr><td>8-12</td><td>Rien</td><td>-</td></tr></tbody></table></div>"}

	</section>
{/snippet}
