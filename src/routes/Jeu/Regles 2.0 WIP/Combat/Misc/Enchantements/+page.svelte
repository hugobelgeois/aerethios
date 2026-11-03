<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Enchantements"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Enchantements"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render enchantements()}
  </div>
</article>

<LinkPreview />

{#snippet enchantements()}
	<section>
		<h3 id="enchantements">{@html "Enchantements"}</h3>
	{@html applyBase("<blockquote>Fait par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition#enchanteur\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"Enchanteur\">Enchanteur</a> pour ajouter des effets uniques sur un accessoire.</blockquote>\n<p>Si une condition est remplie pour 2 enchantements, celui avec la rareté la plus haute l'emporte.</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Simple</th><th>Avancé</th><th>Incroyable</th></tr></thead><tbody><tr><td><strong>Valeur</strong></td><td>1</td><td>2</td><td>3</td></tr></tbody></table></div>\n<div class=\"table-scroll\"><table><thead><tr><th>Enchantement</th><th>Effet</th><th>Prérequis</th><th>Rareté</th></tr></thead><tbody><tr><td>Vampirique</td><td>Récupère <code>3 * rareté</code>HP par coup.</td><td>-</td><td>-</td></tr><tr><td>Crystallique</td><td>Récupère <code>2 * rareté</code>MP par coup.</td><td>-</td><td>-</td></tr><tr><td>Ellipse</td><td>Réduit le DC de couverture de <code>rareté</code>.<br>La couverture à 100% passe de <code>Impossible</code> à <code>12 - (2 * rareté)</code>.</td><td>Distance</td><td>-</td></tr><tr><td>Recharge rapide</td><td>Après un tir, si `1d6 <= rareté`, réduit le temps de recharge de l'arme.<br>(Action -> Action Bonus -> Rien)</td><td>Distance</td><td>-</td></tr><tr><td>Surcharge</td><td>Consomme 1 crystal pour faire perdre <code>1d4 + rareté</code>MP à la cible.</td><td>-</td><td>-</td></tr><tr><td>Brutalité</td><td>Si les dés forment une petite suite (la somme des valeurs ne dépassent pas la plus grande face du dé), la petite valeur s'ajoute aux dégâts pour le reste du combat.</td><td>-</td><td>Simple</td></tr><tr><td>Précision</td><td>Si les dés forment une grande suite (la somme des valeurs dépassent la plus grande face du dé), la petite valeur devient un bonus pour toucher et diminue de 1 (jusqu'à 0 ou la fin du combat) à chaque attaque.</td><td>-</td><td>Simple</td></tr><tr><td></td><td>Si les dés font une somme paire, ??</td><td>-</td><td>Simple</td></tr><tr><td></td><td>Si les dés font une somme impaire, ??</td><td>-</td><td>Simple</td></tr><tr><td>Opposition</td><td>Si les dés tombent sur des faces opposées (ex : 2d6: 2 et 5), le joueur peut doubler la plus grande valeur pour toucher, et doubler la plus petite pour les dégâts, ou inversement.</td><td>-</td><td>Simple</td></tr><tr><td>Balance</td><td>Si les dés font 1 et la valeur max, ??</td><td>-</td><td>Avancé</td></tr><tr><td>Malchance</td><td>Si les dés font 1 et 3, donne un malus de 13 aux jets de la cible.<br>La cible peut transférer sa malchance si elle fait 7 à ses jets.</td><td>-</td><td>Avancé</td></tr><tr><td>L'oeil</td><td>Si les dés font 4 et 2, le point faible de la cible est dévoilé.<br>Cibler ce point faible augmente l'AC de de la cible de 3 mais quadruple les dégâts bruts qu'elle subit.</td><td>-</td><td>Avancé</td></tr><tr><td>Distraction</td><td>Si les dés font 6 et 7, l'action rate, mais la cible passe son tour.</td><td>-</td><td>Avancé</td></tr><tr><td>Séduction</td><td>Si les dés font 6 et 9, la cible ne vous attaquera plus tant que vous ne l'attaquerez plus.</td><td>-</td><td>Avancé</td></tr><tr><td>Explosif</td><td>Faire le même chiffre sur les dés permet de relancer un dé qui s'ajoute aux dégâts.<br>(Explosif fonctionne toujours entre le nouveau dé et ceux jetés avant pour la même action)</td><td>-</td><td>Avancé</td></tr><tr><td>??</td><td>Si les dés font la valeur minimale, ??.</td><td>-</td><td>Incroyable</td></tr><tr><td>Critique</td><td>Pour chaque dé qui fait la valeur maximale, le joueur relance ce dé et ajoute le résultat au jet précédent.</td><td>-</td><td>Incroyable</td></tr></tbody></table></div>")}

	</section>
{/snippet}
