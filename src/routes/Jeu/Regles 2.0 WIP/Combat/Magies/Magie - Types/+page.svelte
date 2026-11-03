<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "magies-de-base",
          "text": "Magies de Base",
          "level": 2
      },
      {
          "id": "fusion",
          "text": "Fusion",
          "level": 2
      },
      {
          "id": "ractions",
          "text": "Réactions",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Magie - Types"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Magie - Types"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render magiesDeBase()}
		{@render fusion()}
		{@render ractions()}
  </div>
</article>

<LinkPreview />

{#snippet magiesDeBase()}
	<section>
		<h2 id="magies-de-base">{@html "Magies de Base"}</h2>
	{@html "<p>Les types de magie ne sont pas limités à ces exemples, mais ce sont leurs utilisations les plus fréquentes.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Air</th><th>Eau</th><th>Terre</th><th>Feu</th><th>Foudre</th><th>Lumière</th><th>Ténèbres</th></tr></thead><tbody><tr><td>Effets (HP, DR, AC)</td><td>Soins</td><td>Dégâts</td><td>Dégâts</td><td>Dégâts</td><td>Dévoiler les entités planaires</td><td>Attirer les entités planaires</td></tr><tr><td>Perception</td><td>Mobilité</td><td>Protection (AC/ couverture)</td><td></td><td>Vitesse (AC)</td><td>Buffs des Attributs</td><td>Débuffs des Attributs</td></tr><tr><td></td><td></td><td>Terrain</td><td></td><td>Immobilisation</td><td>Mental</td><td>Perception</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td>Soins</td><td>Discrétion</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet fusion()}
	<section>
		<h2 id="fusion">{@html "Fusion"}</h2>
	{@html "<blockquote>Prendre la moyenne des niveau de magie utilisée pour la fusion afin de déterminer le dé à utiliser.<br>Le caster du sort est celui avec le plus gros niveau dans sa magie.</blockquote>\n<p>Il est possible de fusionner des types de magie ensemble pour obtenir des effets différents.<br>\nFusionner des magies soi-même nécessitent :</p>\n<ul><li>d'utiliser 2 mains (1 par magie),</li><li>ou de demander à quelqu'un (avec désavantage).</li></ul>\n<p>Fusionner 2 magies donne un résultat différents si un élément est plus fort que l'autre ou inversément.</p>\n<blockquote>Pour lire le tableau, la première ligne est l'élément le plus fort, et il dicte la fusion qui va avoir lieu avec l'élément de la première colonne.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Ligne supérieure<br>à colonne</th><th>Air</th><th>Eau</th><th>Terre</th><th>Feu</th><th>Foudre</th><th>Lumière</th><th>Ténèbres</th></tr></thead><tbody><tr><td><strong>Air</strong></td><td>-</td><td>Bilzzard</td><td></td><td>Explosif</td><td>Son</td><td></td><td>Invisibilité</td></tr><tr><td><strong>Eau</strong></td><td>Brume</td><td>-</td><td>Newtonien</td><td>Magma</td><td></td><td>Soin</td><td>Sang</td></tr><tr><td><strong>Terre</strong></td><td>Poussière</td><td>Glace</td><td>-</td><td>Métal</td><td>Magnétisme</td><td>Cristal</td><td>Portail</td></tr><tr><td><strong>Feu</strong></td><td>Explosif</td><td>Magma</td><td>Métal</td><td>-</td><td>Plasma</td><td>Feu Céleste</td><td>Feu d'Ames</td></tr><tr><td><strong>Foudre</strong></td><td>Orage</td><td></td><td>Séisme</td><td>Plasma</td><td>-</td><td></td><td></td></tr><tr><td><strong>Lumière</strong></td><td>Mirage</td><td>Purification</td><td>Plantes</td><td>Feu Céleste</td><td>Vitesse</td><td>-</td><td>Invocations</td></tr><tr><td><strong>Ténèbres</strong></td><td></td><td>Poison</td><td>Corruption</td><td>Feu d'Ames</td><td>Paralysie</td><td>Illusions</td><td>-</td></tr></tbody></table></div>\n<pre><code class=\"language-Exemple\">Eau (8) + Air (4) = Blizzard\nEau (6) + Air (9) = Vapeur</code></pre>"}

	</section>
{/snippet}

{#snippet ractions()}
	<section>
		<h2 id="ractions">{@html "Réactions"}</h2>
	{@html "<blockquote>Si un type de magie en recontre un autre sans être mélangé, une réaction immédiate se produit.</blockquote>\n<p>Si la réaction est une AOE, toutes les cibles, alliées et ennemies, dans un rayon de 5m subissent les effets.</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Air</th><th>Eau</th><th>Terre</th><th>Feu</th><th>Foudre</th></tr></thead><tbody><tr><td><strong>Air</strong></td><td>-</td><td>Glissant<br><em>Désarmement</em></td><td>Érosion<br><em>Annule les résistances</em></td><td>Attisement<br><em>DMG du tour +50%</em></td><td>Éblouissant<br>AOE<br><em>La prochaine cible est aléatoire</em></td></tr><tr><td><strong>Eau</strong></td><td>Glissant<br><em>Désarmement</em></td><td>-</td><td>Enlisement<br><em>AC -4</em></td><td>Vapeur<br>AOE<br><em>Désavantage</em></td><td>Propagation<br>AOE<br><em>DMG 50% aux cibles proches</em></td></tr><tr><td><strong>Terre</strong></td><td>Érosion<br><em>Annule les résistances</em></td><td>Enlisement<br><em>AC -4</em></td><td>-</td><td>Fragmentation<br>AOE<br><em>3d4 DMG aux cibles proches</em></td><td>Paratonnerre<br><em>Les attaques magiques sont redirigées dessus</em></td></tr><tr><td><strong>Feu</strong></td><td>Attisement<br><em>DMG du tour +50%</em></td><td>Vapeur<br>AOE<br><em>Désavantage</em></td><td>Fragmentation<br>AOE<br><em>3d4 DMG aux cibles proches</em></td><td>-</td><td>Surcharge<br>AOE<br><em>Magie impossible</em></td></tr><tr><td><strong>Foudre</strong></td><td>Éblouissant<br>AOE<br><em>La prochaine cible est aléatoire</em></td><td>Propagation<br>AOE<br><em>DMG 50% aux cibles proches</em></td><td>Paratonnerre<br><em>Les attaques magiques sont redirigées dessus</em></td><td>Surcharge<br>AOE<br><em>Magie impossible</em></td><td>-</td></tr></tbody></table></div>\n<p>La Lumière avec un élément confère une résistance à cet élément pendant 2 tours.<br>\nLes Ténèbres avec un élément confère une faiblesse à cet élément pendant 2 tours.<br>\nChacun ne peuvent s'appliquer à une cible qu'une fois par combat.</p>\n<pre><code class=\"language-Exemple\">Cible couverte d'Eau + magie de Foudre = Propagation\nCible électrocuté + magie d'Eau = Propagation</code></pre>"}

	</section>
{/snippet}
