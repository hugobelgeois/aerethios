<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Magie - New"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Magie - New"}</h1>
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
	{@html "<p>La magie se canalyse dans les mains sous formes d'élément avant d'être utilisée.<br>\nCertains utilisent deux mains pour augmenter la puissance d'un élément, ou le mélanger avec un autre pour donner un autre effet.</p>"}
{/snippet}

{#snippet crystaux()}
	<section>
		<h2 id="crystaux">{@html "Crystaux"}</h2>
	{@html "<blockquote>Les crystaux ne sont pas exploitables tels quels, il faut d'abord les traiter.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Utilisation</th><th>Durée</th><th>Effets</th><th>Effets secondaires</th><th>Prix/ unité</th></tr></thead><tbody><tr><td>Implanter<br>(à la place des os)</td><td>---</td><td>+1 crystal (cumulable jusqu'à 10 par main.)<br>Régénération des crystaux.</td><td>Risque de nécrose.</td><td>5 po</td></tr><tr><td>Bijoux</td><td>---</td><td>Permet d'utiliser une magie non maîtrisée.</td><td>---</td><td>10-50 po</td></tr><tr><td>Manger</td><td>1 combat</td><td>+1 crystal \"gratuit\" par sort (cumulable).</td><td>-2 aux jets de magie (cumulable).</td><td>40 pa</td></tr><tr><td>Inhaler</td><td>1 combat</td><td>Dégâts magiques x1.5.</td><td>-2HP par crystal utilisé.</td><td>80 pa</td></tr><tr><td>Injecter</td><td>Tant que le mental tient</td><td>Utiliser tous ses crystaux dans 1 attaque magique.<br>L'attaque continue à chaque tour sans consommer plus de crystaux.</td><td>+20 nécrose par tour.<br>Chaque tour, le joueur lance `1d20 <= HP + Mental(Volonté)`.<br>Il retire le résultat du jet de ses HP.<br>S'il rate, son sort s'arrête et il tombe inconscient.<br>S'il n'a plus de HP, il peut continuer tant que son mental tient.</td><td>2 po</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet base()}
	<section>
		<h2 id="base">{@html "Base"}</h2>
	{@html "<blockquote>Dé + Modificateur >= AC → Dégâts aux HP</blockquote>\n<p>Pour lancer un sort, le joueur doit utiliser un catalyseur (sceptre, grimoire, ..) ou ses mains, ce qui consomme des crystaux.</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>Catalyseur (déchet)</th><th>1 Main/ 2 Mains</th></tr></thead><tbody><tr><td><strong>Dés</strong></td><td>2d8</td><td>2d4</td></tr><tr><td><strong>Modificateur</strong></td><td>Mental(Intelligence|Sagesse)</td><td>---</td></tr><tr><td><strong>Modificateur/ crystal</strong></td><td>---</td><td>+2</td></tr><tr><td><strong>Dégâts/ crystal</strong></td><td>2</td><td>Magie</td></tr><tr><td><strong>Mètres/ crystal</strong></td><td>0</td><td>+2</td></tr><tr><td><strong>Dégâts/ mètres</strong></td><td>---</td><td>-Magie</td></tr><tr><td><strong>Crystal max</strong></td><td></td><td>---</td></tr></tbody></table></div>\n<p>Lorsqu'il utilise ses mains, pour chaque crystal dépensé, le joueur peut</p>\n<ul><li>augmenter les dégâts,</li><li>ou augmenter le diamètre du sort.</li></ul>\n<p>\tA chaque augmentation du diamètre, les dégâts diminuent.</p>\n<p>S'il utilise 1 magie par main en même temps pour faire une fusion, les dégâts sont la moyenne de ces 2 magies.</p>\n<p>Pour une magie d'effet, le MJ donnera un DC en corrélation avec l'objectif magique du joueur.<br>\nLe tableau ci-dessous peut servir d'exemple :</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Difficulté</th><th>Trivial</th><th>Simple</th><th>Moyen</th><th>Difficile</th><th>Extrême</th><th>Impossible</th></tr></thead><tbody><tr><td><strong>DC</strong></td><td>5</td><td>10</td><td>15</td><td>20</td><td>25</td><td>30</td></tr></tbody></table></div>"}
	{@render catalyseur()}
	{@render dangers()}
	</section>
{/snippet}

{#snippet catalyseur()}
	<section>
		<h3 id="catalyseur">{@html "Catalyseur"}</h3>
	{@html "<blockquote>La façon dont les catalyseurs lancent leur sort ne peut pas être modifiée par l'utilisateur.</blockquote>\n<p>Selon sa rareté, un catalyseur aura plus ou moins de points répartis différemment dans ses attributs, le rendant unique.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Déchet</th><th>Commun</th><th>Peu Commun</th><th>Rare</th><th>Légendaire</th></tr></thead><tbody><tr><td>2</td><td>5</td><td>9</td><td></td><td></td></tr></tbody></table></div>\n<pre><code class=\"language-Exemple\"></code></pre>"}

	</section>
{/snippet}

{#snippet dangers()}
	<section>
		<h3 id="dangers">{@html "Dangers"}</h3>
	{@html "<blockquote>La magie est mauvaise pour un corps non entraîné. Dépasser ses limites peut être dangereux.</blockquote>\n<p>Pour chaque main :<br>\nLa nécrose augmente de 1 pour chaque crystal utilisé.<br>\nElle diminue de <code>5 - crystaux implantés</code> par long repos.<br>\nUne fois à 100, les tissus ne peuvent plus être soignés et le joueur aura toujours un désavantage pour les armes qui utilisent cette main.</p>"}

	</section>
{/snippet}

{#snippet types()}
	<section>
		<h2 id="types">{@html "Types"}</h2>
	{@html "<blockquote>La liste des sorts est exhaustive. Parlez à votre MJ de vos idées d'utilisation et il les ajoutera s'il considère que cela fait sens avec la magie de base.</blockquote>"}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Magies/Magie - Types"} fragment={"Magies de Base"} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Magies/Magie - Types"} fragment={"Fusion"} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Magies/Magie - Types"} fragment={"Réactions"} />

	</section>
{/snippet}

{#snippet apprentissage()}
	<section>
		<h2 id="apprentissage">{@html "Apprentissage"}</h2>
	{@html "<blockquote>Tout le monde possède une magie en venant au monde, et peut en avoir jusqu'à 7.`</blockquote>\n<p>Quand le joueur monte d'un niveau, il gagne 0.5 points par magie qu'il possède (valeur finale arrondie vers le bas).<br>\nIl peut uniquement placer ses points dans la moitié des magies les plus faibles qu'il possède (arrondies vers le bas).</p>\n<pre><code class=\"language-Exemple\">J'ai 5 magies de niveaux différents (1, 2, 5, 6, 9).\nJe ne peux améliorer que celles de niveaux inférieurs (1, 2).</code></pre>\n<p>Un joueur peut passer du temps pour améliorer sa magie :<br>\n<code>Niveau de magie * 10 jours</code></p>\n<p>Pour débloquer une nouvelle magie, le joueur ne doit pas avoir de magie en dessous du niveau 4.</p>"}

	</section>
{/snippet}
