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
		{@render utilisation()}
		{@render types()}
		{@render apprentissage()}
  </div>
</article>

<LinkPreview />

{#snippet crystaux()}
	<section>
		<h2 id="crystaux">{@html applyBase("Crystaux")}</h2>
	{@html renderMarkdown("> Les crystaux ne sont pas exploitables tels quels, il faut d'abord les traiter.\n\n| Utilisation                                       | Durée                    | Effets                                                                                                                  | Effets secondaires                                                                                                                                                                                                                                   | Prix/ unité |\n| ------------------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------: |\n| Implanter<br>(à la place des phalanges des mains) | ---                      | +1 crystal (cumulable)<br>Régénération des crystaux.                                                                    | Si 5 crystaux sur 1/2 main : Désavantage.<br>Si 10 crystaux sur 1/2 main : -1 dé d'armes.<br>Si sur 1 main : courtes et 1 main.<br>Si sur 2 mains : 2 mains.                                                                                         |        5 po |\n| Bijoux                                            | ---                      | Permet d'utiliser une magie non maîtrisée.                                                                              | ---                                                                                                                                                                                                                                                  |    10-50 po |\n| Manger                                            | 1 combat                 | +1 crystal \"gratuit\" par sort (cumulable).                                                                              | -2 aux jets de magie (cumulable).                                                                                                                                                                                                                    |       40 pa |\n| Inhaler                                           | 1 combat                 | +1 dégât par crystal (cumulable).                                                                                       | -2HP par crystal utilisé (cumulable).                                                                                                                                                                                                                |       80 pa |\n| Injecter                                          | Tant que le mental tient | Utiliser tous ses crystaux dans 1 attaque magique.<br>L'attaque continue à chaque tour sans consommer plus de crystaux. | +1 nécrose.<br>Chaque tour, le joueur lance `1d20 <= HP + Mental(Volonté)`.<br>Il retire le résultat du jet de ses HP.<br>S'il rate, son sort s'arrête et il tombe inconscient.<br>S'il n'a plus de HP, il peut continuer tant que son mental tient. |        2 po |\n")}

	</section>
{/snippet}

{#snippet utilisation()}
	<section>
		<h2 id="utilisation">{@html applyBase("Utilisation")}</h2>
	{@html renderMarkdown("> Dé + Modificateur >= AC → Dégâts aux HP\n\n|                 | 1 Main (précise) | 1 Main      | 2 Mains            | 2 Mains (puissantes) |\n| --------------- | ---------------- | ----------- | ------------------ | -------------------- |\n| Dés             | 2d8 + Magie      | 2d6 + Magie | 2d6 + Magie(max 5) | 2d4 + Magie(max 5)   |\n| Dégâts/ crystal | 2                | 3           | 2                  | 3                    |\n| Mètres/ crystal | -                | -           | +2                 | +4                   |\n\nLe joueur peut utiliser des crystaux pour augmenter les dégâts OU le diamètre du sort (1m par défaut).\nA chaque augmentation du diamètre, les dégâts sont divisés par 2.\n\nSi le sort cible plusieurs ennemis sans être un sort de zone, les dégâts sont divisés par le nombre de cibles.\n\nPour une magie d'effet, le MJ donnera un DC en corrélation avec l'objectif magique du joueur.\nLe tableau ci-dessous peut servir d'exemple :\n\n| Difficulté | Trivial | Simple | Moyen | Difficile | Extrême | Légendaire |\n| ---------- | :-----: | :----: | :---: | :-------: | :-----: | :--------: |\n| DC         |    5    |   10   |  15   |    20     |   25    |     30     |\n")}
	{@render dangers()}
	</section>
{/snippet}

{#snippet dangers()}
	<section>
		<h3 id="dangers">{@html applyBase("Dangers")}</h3>
	{@html renderMarkdown("> La magie est mauvaise pour un corps non entraîné. Dépasser ses limites peut être dangereux.\n> `1d20 >= nombre de crystaux consommés`\n\nA la fin d'un combat, les joueurs lancent `1d20 >= nombre de crystaux consommés`.\nS'ils ratent, les tissus de leur main se dégrade et ils accumulent `1 nécrose`.\nUne fois à `5 nécroses`, les tissus ne peuvent plus être soignés et le joueur aura toujours un désavantage pour les armes qui utilisent cette/ces main(s).\n")}

	</section>
{/snippet}

{#snippet types()}
	<section>
		<h2 id="types">{@html applyBase("Types")}</h2>
	{@html renderMarkdown("> La liste des sorts est exhaustive. Parlez à votre MJ de vos idées d'utilisation et il les ajoutera s'il considère que cela fait sens avec la magie de base.\n\nLes types de magie ne sont pas limités à ces exemples, mais ce sont leurs utilisations les plus fréquentes.\n\n| Gazeux              | Liquide  | Solide                      |  Feu   |         Foudre |                        Lumière |                      Ténèbres |\n| ------------------- | -------- | --------------------------- | :----: | -------------: | -----------------------------: | ----------------------------: |\n| Effets (HP, DR, AC) | Soins    | Dégâts                      | Dégâts |         Dégâts | Dévoiler les entités planaires | Attirer les entités planaires |\n| Perception          | Mobilité | Protection (AC/ couverture) |        |   Vitesse (AC) |            Buffs des Attributs |         Débuffs des Attributs |\n|                     |          | Terrain                     |        | Immobilisation |                         Mental |                    Perception |\n|                     |          |                             |        |                |                          Soins |                    Discrétion |\n")}
	{@render fusion()}
	</section>
{/snippet}

{#snippet fusion()}
	<section>
		<h3 id="fusion">{@html applyBase("Fusion")}</h3>
	{@html renderMarkdown("> Prendre la moyenne des niveau de magie utilisée pour la fusion afin de déterminer le dé à utiliser.\n> Le caster du sort est celui avec le plus gros niveau dans sa magie.\n\nIl est possible de fusionner des types de magie ensemble pour obtenir des effets différents.\nSeulement, cela requiert la participation de plusieurs personnes en même temps.\nFusionner des magies soi-même requiert des compétences spécifiques.\n\nLes magies fusionnent principalement avec le feu, mais d'autres compétences permettent de fusionner tous les types de magie ensemble.\n")}
	{@render fusionsAvecLeFeu()}
	{@render autresFusions()}
	</section>
{/snippet}

{#snippet fusionsAvecLeFeu()}
	<section>
		<h4 id="fusions-avec-le-feu">{@html applyBase("Fusions avec le feu")}</h4>
	{@html renderMarkdown("\n|  Gazeux  | Liquide | Solide | Foudre |   Lumière   |  Ténèbres  |\n| :------: | :-----: | :----: | :----: | :---------: | :--------: |\n| Explosif |  Magma  | Métal  | Plasma | Feu Céleste | Feu d'Ames |\n\n> Feu Céleste : Feu qui se déplace très lentement mais qui brûle comme un soleil ce qu'il touche.\n> Feu d'Ames : Feu qu'on ne peut pas lancer, mais qui ne s'éteint, ni ne se répand, une fois qu'il touche une cible dotée d'une âme.\n")}

	</section>
{/snippet}

{#snippet autresFusions()}
	<section>
		<h4 id="autres-fusions">{@html applyBase("Autres fusions")}</h4>
	{@html renderMarkdown("> Celles-ci ne servent que d'exemples et peuvent être étendues avec la validation de votre MJ (avant la session de préférence).\n\n| Fusion             | Résultat                       |\n| ------------------ | ------------------------------ |\n| Solide + Liquide   | Glace<br>Liquide Newtonien     |\n| Liquide + Gazeux   | Zone de brume qui buff/ débuff |\n| Liquide + Ténèbres | Sang                           |\n| Lumière + Ténèbres | Illusions                      |\n")}

	</section>
{/snippet}

{#snippet apprentissage()}
	<section>
		<h2 id="apprentissage">{@html applyBase("Apprentissage")}</h2>
	{@html renderMarkdown("> Tout le monde possède 1 magie en venant au monde, et peut en avoir jusqu'à 7.\n> `1d20 + Mental(Arcane|Intelligence|Sagesse)`\n\nQuand le joueur monte d'un niveau, il gagne 0.5 points par magie qu'il possède (valeur finale arrondie vers le bas).\nIl peut uniquement placer ses points dans la moitié des magies les plus faibles qu'il possède (arrondies vers le bas).\n```Exemple\nJ'ai 5 magies de niveaux différents (1, 4, 10, 12, 18).\nJe ne peux améliorer que celles de niveaux inférieurs (1, 4).\n```\n")}
	{@render amliorer()}
	</section>
{/snippet}

{#snippet amliorer()}
	<section>
		<h3 id="amliorer">{@html applyBase("Améliorer")}</h3>
	{@html renderMarkdown("\nL’amélioration de sa magie prend 1 jour par entrainement (jet de dé).\n\tSauf pour passer une magie de 0 à 1, auquel cas le joueur doit prendre 15 jours de leçons (30 pour apprendre le Feu).\n\nPour débloquer une nouvelle magie, le joueur ne doit pas avoir de magie en dessous du niveau 5.\n\n| Leçon                        |                 Résultat |\n| :--------------------------- | -----------------------: |\n| 1 réussite critique          | 2 réussites consécutives |\n| 3 réussites consécutives     |                +2 points |\n| 3 réussites non consécutives |                 +1 point |\n| niveau actuel +1 PO          |                        - |\n\n| Niveau de la Magie | 0   |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |\n| ------------------ | --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |\n| **DC**             | 8   | 10  | 12  | 14  | 16  | 18  | 20  | 22  | 24  | 27  |\n\n```Exemple\nPour améliorer une magie de niveau 3, le jet doit être supérieur à 14 et le joueur doit payer 3po par jet.\n```")}

	</section>
{/snippet}
