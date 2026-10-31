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
          "id": "base",
          "text": "Base",
          "level": 2
      },
      {
          "id": "catalyseur",
          "text": "Catalyseur",
          "level": 3
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
          "id": "apprentissage",
          "text": "Apprentissage",
          "level": 2
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
		{@render preamble()}
		{@render crystaux()}
		{@render base()}
		{@render types()}
		{@render apprentissage()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("La magie se canalyse dans les mains sous formes d'élément avant d'être utilisée.\nCertains utilisent deux mains pour augmenter la puissance d'un élément, ou le mélanger avec un autre pour donner un autre effet.\n")}
{/snippet}

{#snippet crystaux()}
	<section>
		<h2 id="crystaux">{@html applyBase("Crystaux")}</h2>
	{@html renderMarkdown("> Les crystaux ne sont pas exploitables tels quels, il faut d'abord les traiter.\n\n| Utilisation                      | Durée                    | Effets                                                                                                                  | Effets secondaires                                                                                                                                                                                                                                             | Prix/ unité |\n| -------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------: |\n| Implanter<br>(à la place des os) | ---                      | +1 crystal (cumulable jusqu'à 10 par main.)<br>Régénération des crystaux.                                               | Risque de nécrose.                                                                                                                                                                                                                                             |        5 po |\n| Bijoux                           | ---                      | Permet d'utiliser une magie non maîtrisée.                                                                              | ---                                                                                                                                                                                                                                                            |    10-50 po |\n| Manger                           | 1 combat                 | +1 crystal \"gratuit\" par sort (cumulable).                                                                              | -2 aux jets de magie (cumulable).                                                                                                                                                                                                                              |       40 pa |\n| Inhaler                          | 1 combat                 | Dégâts magiques x1.5.                                                                                                   | -2HP par crystal utilisé.                                                                                                                                                                                                                                      |       80 pa |\n| Injecter                         | Tant que le mental tient | Utiliser tous ses crystaux dans 1 attaque magique.<br>L'attaque continue à chaque tour sans consommer plus de crystaux. | +20 nécrose par tour.<br>Chaque tour, le joueur lance `1d20 <= HP + Mental(Volonté)`.<br>Il retire le résultat du jet de ses HP.<br>S'il rate, son sort s'arrête et il tombe inconscient.<br>S'il n'a plus de HP, il peut continuer tant que son mental tient. |        2 po |\n")}

	</section>
{/snippet}

{#snippet base()}
	<section>
		<h2 id="base">{@html applyBase("Base")}</h2>
	{@html renderMarkdown("> Dé + Modificateur >= AC → Dégâts aux HP\n\nPour lancer un sort, le joueur doit utiliser un catalyseur (sceptre, grimoire, ..) ou ses mains, ce qui consomme des crystaux.\n\n|                           | Catalyseur (déchet)           | 1 Main/ 2 Mains |\n| ------------------------- | ----------------------------- | --------------- |\n| **Dés**                   | 2d8                           | 2d4             |\n| **Modificateur**          | Mental(Intelligence\\|Sagesse) | ---             |\n| **Modificateur/ crystal** | ---                           | +2              |\n| **Dégâts/ crystal**       | 2                             | Magie           |\n| **Mètres/ crystal**       | 0                             | +2              |\n| **Dégâts/ mètres**        | ---                           | -Magie          |\n| **Crystal max**           |                               | ---             |\n\nLorsqu'il utilise ses mains, pour chaque crystal dépensé, le joueur peut\n- augmenter les dégâts,\n- ou augmenter le diamètre du sort.\n\tA chaque augmentation du diamètre, les dégâts diminuent.\n\nS'il utilise 1 magie par main en même temps pour faire une fusion, les dégâts sont la moyenne de ces 2 magies.\n\nPour une magie d'effet, le MJ donnera un DC en corrélation avec l'objectif magique du joueur.\nLe tableau ci-dessous peut servir d'exemple :\n\n| Difficulté | Trivial | Simple | Moyen | Difficile | Extrême | Impossible |\n| ---------- | :-----: | :----: | :---: | :-------: | :-----: | :--------: |\n| **DC**     |    5    |   10   |  15   |    20     |   25    |     30     |\n")}
	{@render catalyseur()}
	{@render dangers()}
	</section>
{/snippet}

{#snippet catalyseur()}
	<section>
		<h3 id="catalyseur">{@html applyBase("Catalyseur")}</h3>
	{@html renderMarkdown("> La façon dont les catalyseurs lancent leur sort ne peut pas être modifiée par l'utilisateur.\n\nSelon sa rareté, un catalyseur aura plus ou moins de points répartis différemment dans ses attributs, le rendant unique.\n\n| Déchet | Commun | Peu Commun | Rare | Légendaire |\n| :----: | :----: | :--------: | :--: | :--------: |\n|   2    |   5    |     9      |      |            |\n\n```Exemple\n\n```\n")}

	</section>
{/snippet}

{#snippet dangers()}
	<section>
		<h3 id="dangers">{@html applyBase("Dangers")}</h3>
	{@html renderMarkdown("> La magie est mauvaise pour un corps non entraîné. Dépasser ses limites peut être dangereux.\n\nPour chaque main :\nLa nécrose augmente de 1 pour chaque crystal utilisé.\nElle diminue de `5 - crystaux implantés` par long repos.\nUne fois à 100, les tissus ne peuvent plus être soignés et le joueur aura toujours un désavantage pour les armes qui utilisent cette main.\n")}

	</section>
{/snippet}

{#snippet types()}
	<section>
		<h2 id="types">{@html applyBase("Types")}</h2>
	{@html renderMarkdown("> La liste des sorts est exhaustive. Parlez à votre MJ de vos idées d'utilisation et il les ajoutera s'il considère que cela fait sens avec la magie de base.\n\n")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Magies/Magie - Types"} fragment={"Magies de Base"} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Magies/Magie - Types"} fragment={"Fusion"} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Magies/Magie - Types"} fragment={"Réactions"} />

	</section>
{/snippet}

{#snippet apprentissage()}
	<section>
		<h2 id="apprentissage">{@html applyBase("Apprentissage")}</h2>
	{@html renderMarkdown("> Tout le monde possède une magie en venant au monde, et peut en avoir jusqu'à 7.`\n\nQuand le joueur monte d'un niveau, il gagne 0.5 points par magie qu'il possède (valeur finale arrondie vers le bas).\nIl peut uniquement placer ses points dans la moitié des magies les plus faibles qu'il possède (arrondies vers le bas).\n```Exemple\nJ'ai 5 magies de niveaux différents (1, 2, 5, 6, 9).\nJe ne peux améliorer que celles de niveaux inférieurs (1, 2).\n```\n\nUn joueur peut passer du temps pour améliorer sa magie :\n`Niveau de magie * 10 jours`\n\nPour débloquer une nouvelle magie, le joueur ne doit pas avoir de magie en dessous du niveau 4.")}

	</section>
{/snippet}
