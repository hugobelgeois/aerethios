<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "principales",
          "text": "Principales",
          "level": 2
      },
      {
          "id": "secondaires",
          "text": "Secondaires",
          "level": 2
      },
      {
          "id": "finales",
          "text": "Finales",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Dextérité"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Dextérité"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render principales()}
		{@render secondaires()}
		{@render finales()}
  </div>
</article>

<LinkPreview />

{#snippet principales()}
	<section>
		<h2 id="principales">{@html "Principales"}</h2>
	{@html "<blockquote>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Situation</th></tr></thead><tbody><tr><td>Acrobatie</td><td>Mobilité et AC</td></tr><tr><td>Assassin</td><td>Attaque surprise</td></tr><tr><td>Ranger</td><td>Combat</td></tr><tr><td>Voleur</td><td>Larcin (pickpocket, crochetage, ..)</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html "Secondaires"}</h2>
	{@html "<blockquote>Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).<br>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th><strong>Principale</strong></th><th>Secondaire</th><th>Description</th></tr></thead><tbody><tr><td><strong>Acrobatie</strong></td><td>Matrix</td><td>Peut esquiver les attaques magiques<br><em>1d20 +Dextérité(Acrobatie) >= 1d20 +Mental(Arcaniste|Intelligence|Sagesse)</em></td></tr><tr><td></td><td>Parade</td><td>Si le dé d'une attaque ennemie est inférieur à la Dextérité(Acrobatie), le joueur peut le désarmer</td></tr><tr><td><strong>Assassin</strong></td><td>Coup précis</td><td>Ignore la DR s'il s'agit d'une attaque surprise</td></tr><tr><td></td><td>Rapide</td><td>Permet d'ajouter sa Dextérité(Assassin) à ses dés de dégâts pour les armes courtes ou légères</td></tr><tr><td><strong>Ranger</strong></td><td>Ambidextre</td><td>Permet d'utiliser une arme à 1 main dans chaque main</td></tr><tr><td></td><td>Point faible</td><td>Attaquer génère une blessure pendant 1 tour qui ajoute 1 dé à la prochaine attaque à cet endroit</td></tr><tr><td><strong>Voleur</strong></td><td>Dissimulation</td><td>Les petits objets (bourses, bijoux, clefs, couteau, crochet, ..) ne peuvent pas être trouvé lors de fouille</td></tr><tr><td></td><td>Discrétion</td><td>Rater Larcin ne révèle pas la position</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html "Finales"}</h2>
	{@html "<blockquote>S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Description</th></tr></thead><tbody><tr><td><strong>Sixième sens</strong></td><td>+ Evite les attaques surprises et d'opportunité<br>- Les armes à distance touchent toujours le joueur</td></tr><tr><td><strong>Money</strong></td><td>+ Tenir des pièces en main permet d'augmenter les dégâts (1po = 1 dégât) (max : combien de pièces le joueur peut tenir)<br>1 seule main peut tenir les pièces, et elle ne peut pas tenir d'arme en conséquence<br>- A chaque coup reçu, lancer 1d10 pour savoir combien de pièces sont perdues (impossible de les récupérer après le combat)</td></tr></tbody></table></div>"}

	</section>
{/snippet}
