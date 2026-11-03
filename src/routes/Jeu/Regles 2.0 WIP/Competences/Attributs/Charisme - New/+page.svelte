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
  <title>{"Charisme - New"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Charisme - New"}</h1>
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
	{@html "<blockquote>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Situation</th></tr></thead><tbody><tr><td>Diplomate</td><td>Persuasion et négociation</td></tr><tr><td>Intimidant</td><td>Intimidation et domination</td></tr><tr><td>Meneur</td><td>Commandement et inspiration</td></tr><tr><td>Trompeur</td><td>Mensonge et tromperie</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html "Secondaires"}</h2>
	{@html "<blockquote>Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).<br>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th><strong>Principale</strong></th><th>Secondaire</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>Diplomate</strong></td><td>Apaisement</td><td>Action Bonus</td><td>Une entité perd son état agressif jusqu'à son prochain tour ou subit un désavantage sur sa prochaine action offensive (non cumulable avec Encouragement).</td></tr><tr><td></td><td>Encouragement</td><td>Action Bonus</td><td>Donner un avantage à 1 entité (non cumulable avec Apaisement)</td></tr><tr><td></td><td>Médiation</td><td>Réaction</td><td>Lorsqu'une créature attaque, s'il y a une autre créature proche, vous pouvez détourner son attaque vers celle-ci.<br>Si <code>1d10 + Charisme(Diplomate) >= Mental(Résistance) de la cible</code></td></tr><tr><td></td><td>Trêve</td><td>Action</td><td>Deux créatures ne peuvent pas s'attaquer jusqu'au début de votre prochain tour.<br>Si <code>1d10 + Charisme(Diplomate) >= Mental(Résistance) de la cible</code>.</td></tr><tr><td><strong>Intimidant</strong></td><td>Défi</td><td>Action Bonus</td><td>Si la créature désignée attaque une autre cible que vous, elle subit un désavantage sur son attaque.</td></tr><tr><td></td><td>Terreur</td><td>Passif</td><td>Les créatures dont <code>Mental(Résistance)</code> est inférieur à votre <code>Charisme(Intimidant)</code> ne vous choisissent pas comme première cible tant qu'une autre menace existe.</td></tr><tr><td></td><td>Soumission</td><td>Passif</td><td>Lorsqu'un ennemi meurt ou abandonne, les créatures proches de niveau inférieur fuient ou se rendent.<br>Si <code>leur Mental(Résistance) < votre Charisme(Intimidant)</code>.</td></tr><tr><td></td><td>Regard noir</td><td>Action Bonus</td><td>Une créature proche perd son Action Bonus.<br>Si <code>1d10 + Charisme(Intimidant) >= Mental(Résistance) de la cible</code>.</td></tr><tr><td><strong>Meneur</strong></td><td>Coordination</td><td>Réaction</td><td>Lorsqu'un allié proche rate une action, vous pouvez ajouter votre <code>Charisme(Meneur)</code> à son jet pour tenter de le faire réussir.</td></tr><tr><td></td><td>Formation</td><td>Passif</td><td>Pour chaque allié adjacent à vous (< 2m), vous et ces alliés gagnez <code>+2 AC</code>.</td></tr><tr><td></td><td>Inspiration</td><td>Action</td><td>Une condition négative que vous subissez peut être convertie en un bonus équivalent jusqu'à la fin de votre prochain tour.</td></tr><tr><td></td><td>Ralliement</td><td>Action Bonus</td><td>Vous pouvez transférer une condition négative d'un allié vers vous.</td></tr><tr><td><strong>Trompeur</strong></td><td>Diversion</td><td>Action Bonus</td><td>Une créature détourne son attention de vous vers un allié de votre choix jusqu'au prochain tour.</td></tr><tr><td></td><td>Faux espoir</td><td>Action Bonus</td><td>Une cible croit momentanément qu'une action ou un événement lui est favorable, réduisant l'efficacité de sa prochaine action offensive.</td></tr><tr><td></td><td>Manipulation</td><td>Action</td><td>Une fois par tour, vous pouvez transférer une condition entre deux entités consentantes ou non, si la situation le permet.</td></tr><tr><td></td><td>Mortel</td><td>Réaction</td><td>Une fois par combat, le joueur peut simuler son comas/ sa mort pour perdre l'attention des ennemis.<br>Il se relève lorsqu'il le souhaite.</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html "Finales"}</h2>
	{@html "<blockquote>Au niveau 10, s'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Description</th></tr></thead><tbody><tr><td><strong>Veinard</strong></td><td>+ Peut utiliser <strong>1 token</strong> pour le transformer en réussite.<br>- Impossible d'utilises ses tokens pour éviter le comas.</td></tr><tr><td><strong>Epicentre</strong></td><td>+ Les alliés proches bénéficient de vos réussites critiques.<br>- Les effets négatifs que vous subissez sont doublés.</td></tr><tr><td><strong>Tyran</strong></td><td>Par défaut, les créatures faibles évitent de vous attaquer, et les créatures puissantes vous prennent pour cible.<br>Utiliser <strong>1 token</strong> pour inverser cet effet pour le combat en cours.</td></tr><tr><td><strong>Symbole</strong></td><td>Votre parole peut créer un engagement magique/social (serment, promesse, pacte).<br>Celui qui demande le pacte subit une pénalité s'il le rompt de par ses actions volontaires.<br><em>(s'il est attaché contre son gré et ne peut pas tenir sa parole, il n'est pas pénalisé)</em><br>Utiliser <strong>4 tokens</strong> pour créer cet engagement.</td></tr></tbody></table></div>"}

	</section>
{/snippet}
