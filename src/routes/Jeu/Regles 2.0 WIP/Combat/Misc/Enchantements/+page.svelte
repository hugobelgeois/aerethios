<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "enchantements",
          "text": "Enchantements",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Enchantements</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Enchantements</h1>
  </header>
  <div class="markdown-rendered">
		{@render enchantements()}
  </div>
</article>

<LinkPreview />

{#snippet enchantements()}
	<section>
		<h3 id="enchantements">{@html applyBase("Enchantements")}</h3>
	{@html renderMarkdown("> Fait par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition#enchanteur\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"Enchanteur\">Enchanteur</a> pour ajouter des effets uniques sur un accessoire.\n\nSi une condition est remplie pour 2 enchantements, celui avec la rareté la plus haute l'emporte.\n\n|            | Simple | Avancé | Incroyable |\n| ---------- | :----: | :----: | :--------: |\n| **Valeur** |   1    |   2    |     3      |\n\n| Enchantement    | Effet                                                                                                                                                                                                            | Prérequis | Rareté     |\n| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- |\n| Vampirique      | Récupère `3 * rareté`HP par coup.                                                                                                                                                                                | -         | -          |\n| Crystallique    | Récupère `2 * rareté`MP par coup.                                                                                                                                                                                | -         | -          |\n| Ellipse         | Réduit le DC de couverture de `rareté`.<br>La couverture à 100% passe de `Impossible` à `12 - (2 * rareté)`.                                                                                                     | Distance  | -          |\n| Recharge rapide | Après un tir, si `1d6 <= rareté`, réduit le temps de recharge de l'arme.<br>(Action -> Action Bonus -> Rien)                                                                                                     | Distance  | -          |\n| Surcharge       | Consomme 1 crystal pour faire perdre `1d4 + rareté`MP à la cible.                                                                                                                                                | -         | -          |\n| Brutalité       | Si les dés forment une petite suite (la somme des valeurs ne dépassent pas la plus grande face du dé), la petite valeur s'ajoute aux dégâts pour le reste du combat.                                             | -         | Simple     |\n| Précision       | Si les dés forment une grande suite (la somme des valeurs dépassent la plus grande face du dé), la petite valeur devient un bonus pour toucher et diminue de 1 (jusqu'à 0 ou la fin du combat) à chaque attaque. | -         | Simple     |\n|                 | Si les dés font une somme paire, ??                                                                                                                                                                              | -         | Simple     |\n|                 | Si les dés font une somme impaire, ??                                                                                                                                                                            | -         | Simple     |\n| Opposition      | Si les dés tombent sur des faces opposées (ex : 2d6: 2 et 5), le joueur peut doubler la plus grande valeur pour toucher, et doubler la plus petite pour les dégâts, ou inversement.                              | -         | Simple     |\n| Balance         | Si les dés font 1 et la valeur max, le joueur décide si lui et la cible font une réussite critique ou un échec critique.                                                                                         | -         | Avancé     |\n| Malchance       | Si les dés font 1 et 3, donne un malus de 3 aux jets de la cible.<br>La cible peut transférer sa malchance si elle fait 7 à ses jets.                                                                            | -         | Avancé     |\n| L'oeil          | Si les dés font 4 et 2, le point faible de la cible est dévoilé.<br>Cible : +3AC mais dégâts bruts subits x2.                                                                                                    | -         | Avancé     |\n| Distraction     | Si les dés font 6 et 7, l'action rate, mais la cible passe son tour.                                                                                                                                             | -         | Avancé     |\n| Séduction       | Si les dés font 6 et 9, la cible ne vous attaquera plus au tour suivant.                                                                                                                                         |           | Avancé     |\n| Explosif        | Faire le même chiffre sur les dés permet de relancer un dé qui s'ajoute aux dégâts.<br>(Explosif fonctionne toujours entre le nouveau dé et ceux jetés avant pour la même action)                                | -         | Avancé     |\n| ??              | Si les dés font la valeur minimale, le joueur ne fait qu'un échec.                                                                                                                                               | -         | Incroyable |\n| Critique        | Si les dés font la valeur maximale, le joueur peut refaire une attaque.                                                                                                                                          | -         | Incroyable |")}

	</section>
{/snippet}
