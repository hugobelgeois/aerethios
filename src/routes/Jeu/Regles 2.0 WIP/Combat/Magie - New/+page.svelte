<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "crystaux",
          "text": "Crystaux",
          "level": 2
      },
      {
          "id": "catalyseurs",
          "text": "Catalyseurs",
          "level": 2
      },
      {
          "id": "utilisation",
          "text": "Utilisation",
          "level": 2
      },
      {
          "id": "dangers",
          "text": "Dangers",
          "level": 3
      },
      {
          "id": "types",
          "text": "Types",
          "level": 2
      },
      {
          "id": "fusion",
          "text": "Fusion",
          "level": 3
      },
      {
          "id": "fusions-avec-le-feu",
          "text": "Fusions avec le feu",
          "level": 4
      },
      {
          "id": "autres-fusions",
          "text": "Autres fusions",
          "level": 4
      },
      {
          "id": "apprentissage",
          "text": "Apprentissage",
          "level": 2
      },
      {
          "id": "matrise",
          "text": "Maîtrise",
          "level": 2
      },
      {
          "id": "amliorer",
          "text": "Améliorer",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Magie - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Magie - New</h1>
  </header>
  <div class="markdown-rendered">
		{@render crystaux()}
		{@render catalyseurs()}
		{@render utilisation()}
		{@render types()}
		{@render apprentissage()}
		{@render matrise()}
  </div>
</article>

<LinkPreview />

{#snippet crystaux()}
	<section>
		<h2 id="crystaux">{@html applyBase("Crystaux")}</h2>
	{@html renderMarkdown("> Les crystaux ne sont pas exploitables tels quels, il faut d'abord les traiter.\r\n> Ne pas avoir de crystal empêche l'utilisation de la magie.\r\n\r\n| Utilisation | Durée    | Effets                                                                                                                       | Effets secondaires                                                                                                                                                                                                                           | Prix/ unité |\r\n| ----------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------: |\r\n| Implanter   | -        | - Augmente durablement la réserve de crystaux de 1<br>- Régénération des crystaux<br>- Cumulable (jusqu'à 10 sans problèmes) | ---                                                                                                                                                                                                                                          |        5 po |\r\n| Manger      | 1 jour   | - Augmente temporairement la réserve de crystaux de 5<br>- Permet d'utiliser 1 crystal en plus sans danger<br>- Cumulable    | - Désavantage                                                                                                                                                                                                                                |       50 pa |\r\n| Inhaler     | 1 combat | - Augmente temporairement la réserve de crystaux de 10<br>- Permet d'utiliser 3 crystaux en plus sans danger<br>- Cumulable  | - Diminue temporairement les HP de 20 (jusqu'au prochain long repos)                                                                                                                                                                         |       25 pa |\r\n| Injecter    | 2 tours  | - Augmente temporairement la réserve de crystaux de 30<br>- Permet d'utiliser 5 crystaux en plus sans danger<br>- Cumulable  | - Le joueur doit faire 1d20 + Mental(Volonté) >= Nombre d'injection \\* 12 avant chacune de ses actions pour rester conscient <br>- Diminue durablement les HP de 1d4<br>- Diminue temporairement les HP de 10 (jusqu'au prochain long repos) |       20 pa |\r\n\r")}

	</section>
{/snippet}

{#snippet catalyseurs()}
	<section>
		<h2 id="catalyseurs">{@html applyBase("Catalyseurs")}</h2>
	{@html renderMarkdown("> Les catalyseurs permettent de concentrer sa magie pour mieux viser.\r\n> Baguettes, Sceptres, Sceaux, Grimoires, ...\r\n\r\n| Relique | Modificateur                             |\r\n| ------- | ---------------------------------------- |\r\n| 1 Main  | Mental                                   |\r\n| 2 Mains | Mental(Arcaniste\\|Intelligence\\|Sagesse) |\r\n\r")}

	</section>
{/snippet}

{#snippet utilisation()}
	<section>
		<h2 id="utilisation">{@html applyBase("Utilisation")}</h2>
	{@html renderMarkdown("> Un haut niveau dans une magie permet de jouer entre puissance et précision.\r\n\r\n| Magie Minimum |  1  |  2  |  4  |     6      |  8  |     10     | 12  |     14      |  16  |      18      |  20  |\r\n| ------------- | :-: | :-: | :-: | :--------: | :-: | :--------: | :-: | :---------: | :--: | :----------: | :--: |\r\n| Dés           | 1d4 | 1d6 | 2d4 | 1d4<br>1d6 | 2d6 | 1d6<br>1d8 | 2d8 | 2d8<br>2d10 | 2d10 | 2d10<br>2d12 | 2d12 |\r\n\r\nLa valeur de base des crystaux de base est de 3.\r\nLe joueur peut augmenter sa puissance magique (attaque ou effet) en réduisant ses dés.\r\n\tChaque réduction augmente la puissance de ses crystaux ainsi que le rayon d'action de la magie de 1.\r\n\r\nPour une magie d'effet, le MJ donnera un DC en corrélation avec l'objectif magique du joueur.\r\nLe tableau ci-dessous peut servir d'exemple :\r\n\r\n| Difficulté | Trivial | Simple | Moyen | Difficile | Extrême | Légendaire |\r\n| ---------- | :-----: | :----: | :---: | :-------: | :-----: | :--------: |\r\n| DC         |    5    |   10   |  15   |    20     |   25    |     30     |\r\n\r\n\tExemples : J'ai 17 en magie (2d10). Je réduis mes dés jusque 1d4+1d6, ce qui augmente ma puissance de 5.\r\n\tAttaque Feu : 3+5 DMG/ Crystal. Je dois passer outre la DR pour endommager les HP.\r\n\tEffet Ténèbres : 3+5 /Crystal. Le DC pour contrôller mentalement un humain est de 50 car il est très intelligent. Pour une souris c'est un DC 5.\r\n\r")}
	{@render dangers()}
	</section>
{/snippet}

{#snippet dangers()}
	<section>
		<h3 id="dangers">{@html applyBase("Dangers")}</h3>
	{@html renderMarkdown("> La magie est mauvaise pour un corps non entraîné. Dépasser ses limites peut être dangereux.\r\n\r\nLa limite de crystaux par sort varie selon la race et la maîtrise.\r\nPour chaque crystal supplémentaire qui dépasse ce seuil, les HP du joueur subiront les dégâts de son attaque.\r\n\r\n\tExemple : Ma limite magique est de 4 mais j'utilise 6 crystaux qui font chacun 3 dégâts --> HP - 3*(6-4) = 6\r\n\r")}

	</section>
{/snippet}

{#snippet types()}
	<section>
		<h2 id="types">{@html applyBase("Types")}</h2>
	{@html renderMarkdown("> La liste des sorts est exhaustive. Parlez à votre MJ de vos idées d'utilisation et il les ajoutera s'il considère que cela fait sens avec la magie de base.\r\n\r\nLes types de magie ne sont pas limités à ces exemples, mais ce sont leurs utilisations les plus fréquentes.\r\n\r\n| Gazeux              | Liquide  | Solide     |  Feu   |         Foudre |                        Lumière |                      Ténèbres |\r\n| ------------------- | -------- | ---------- | :----: | -------------: | -----------------------------: | ----------------------------: |\r\n| Effets (HP, DR, AC) | Soins    | Dégâts     | Dégâts |         Dégâts | Dévoiler les entités planaires | Attirer les entités planaires |\r\n| Perception          | Mobilité | Protection |        |   Vitesse (AC) |            Buffs des Attributs |         Débuffs des Attributs |\r\n|                     |          | Terrain    |        | Immobilisation |                         Mental |                    Perception |\r\n|                     |          |            |        |                |                          Soins |                    Discrétion |\r\n\r")}
	{@render fusion()}
	</section>
{/snippet}

{#snippet fusion()}
	<section>
		<h3 id="fusion">{@html applyBase("Fusion")}</h3>
	{@html renderMarkdown("> Prendre la moyenne des niveau de magie utilisée pour la fusion afin de déterminer le dé à utiliser.\r\n> Le caster du sort est celui avec le plus gros niveau dans sa magie.\r\n\r\nIl est possible de fusionner des types de magie ensemble pour obtenir des effets différents.\r\nSeulement, cela requiert la participation de plusieurs personnes en même temps.\r\nFusionner des magies soi-même requiert des compétences spécifiques.\r\n\r\nLes magies fusionnent principalement avec le feu, mais d'autres compétences permettent de fusionner tous les types de magie ensemble.\r\n\r")}
	{@render fusionsAvecLeFeu()}
	{@render autresFusions()}
	</section>
{/snippet}

{#snippet fusionsAvecLeFeu()}
	<section>
		<h4 id="fusions-avec-le-feu">{@html applyBase("Fusions avec le feu")}</h4>
	{@html renderMarkdown("\r\n|  Gazeux  | Liquide | Solide | Foudre |   Lumière   |  Ténèbres  |\r\n| :------: | :-----: | :----: | :----: | :---------: | :--------: |\r\n| Explosif |  Magma  | Métal  | Plasma | Feu Céleste | Feu d'Ames |\r\n\r\n> Feu Céleste : Feu qui se déplace très lentement mais qui brûle comme un soleil ce qu'il touche.\r\n> Feu d'Ames : Feu qu'on ne peut pas lancer, mais qui ne s'éteint, ni ne se répand, une fois qu'il touche une cible dotée d'une âme.\r\n\r")}

	</section>
{/snippet}

{#snippet autresFusions()}
	<section>
		<h4 id="autres-fusions">{@html applyBase("Autres fusions")}</h4>
	{@html renderMarkdown("> Celles-ci ne servent que d'exemples et peuvent être étendues avec la validation de votre MJ (avant la session de préférence).\r\n\r\n| Fusion             | Résultat                       |\r\n| ------------------ | ------------------------------ |\r\n| Solide + Liquide   | Glace<br>Liquide Newtonien     |\r\n| Liquide + Gazeux   | Zone de brume qui buff/ débuff |\r\n| Liquide + Ténèbres | Sang                           |\r\n| Lumière + Ténèbres | Illusions                      |\r\n\r")}

	</section>
{/snippet}

{#snippet apprentissage()}
	<section>
		<h2 id="apprentissage">{@html applyBase("Apprentissage")}</h2>
	{@html renderMarkdown("> Tout le monde possède 1 magie en venant au monde, et peut en avoir jusqu'à 7.\r\n> Jet : **1d20 + Maîtrise Magique**\r\n\r\nL’amélioration de sa **magie** prend 1 jour par entrainement (jet de dé).\r\n\tSauf pour passer une magie de 0 à 1, auquel cas le joueur doit prendre 15 jours de leçons (30 pour apprendre le Feu).\r\n\r\n| Avec Tuteur                  |                              Résultat |\r\n| :--------------------------- | ------------------------------------: |\r\n| 1 réussite critique          |              2 réussites consécutives |\r\n| 3 réussites consécutives     |                             +2 points |\r\n| 3 réussites non consécutives |                              +1 point |\r\n| niveau actuel +1 PO/ leçon   |                                     - |\r\n\r\n| Niveau de la Magie | 0   | 1-3 | 4-6 | 7-9 | 10-11 | 12-13 | 14-15 | 16-17 | 18  | 19  |\r\n| ------------------ | --- | :-: | :-: | :-: | :---: | :---: | :---: | :---: | :-: | :-: |\r\n| **DC**             | 8   | 10  | 12  | 14  |  16   |  18   |  20   |  22   | 24  | 26  |\r\n\r\n\tExemple : pour améliorer une magie de niveau 3, le jet doit être supérieur à 10 et le joueur doit payer 3po par jet.\r\n\r")}

	</section>
{/snippet}

{#snippet matrise()}
	<section>
		<h2 id="matrise">{@html applyBase("Maîtrise")}</h2>
	{@html renderMarkdown("> La maîtrise réduit le coût en crystaux d'un sort et permet d'en utiliser plus\r\n\r\nTous les niveaux impairs de maîtrise, le joueur peut utiliser 1 crystal en plus sans le consommer.\r\nTous les niveaux pairs de maîtrise, le joueur peut utiliser 1 crystal en plus par sort sans se blesser.\r\n\r")}
	{@render amliorer()}
	</section>
{/snippet}

{#snippet amliorer()}
	<section>
		<h3 id="amliorer">{@html applyBase("Améliorer")}</h3>
	{@html renderMarkdown("\r\nLa maîtrise de magie s'améliore d'elle même lorsque le joueur atteint ces paliers :\r\n\r\n| Niveau de Maîtrise          |  1  | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |\r\n| :-------------------------- | :-: | --- | --- | --- | --- | --- | --- | --- | --- | --- |\r\n| **Niveau total des magies** | 14  | 28  | 42  | 56  | 70  | 84  | 98  | 112 | 126 | 140 |")}

	</section>
{/snippet}
