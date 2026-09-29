<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
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
  <title>Charisme - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Charisme - New</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
		{@render principales()}
		{@render secondaires()}
		{@render finales()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html renderMarkdown("---\r\npointsProperty: \"5\"\r\n---\r")}
{/snippet}

{#snippet principales()}
	<section>
		<h2 id="principales">{@html applyBase("Principales")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).\r\n>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).\r\n\r\n| Compétence | Situation                   |\r\n| ---------- | --------------------------- |\r\n| Diplomate  | Persuasion et négociation   |\r\n| Intimidant | Intimidation et domination  |\r\n| Meneur     | Commandement et inspiration |\r\n| Trompeur   | Mensonge et tromperie       |\r\n\r")}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html applyBase("Secondaires")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).\r\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\r\n\r\n| **Principale** | Secondaire    | Type         | Description                                                                                                                                                                            |\r\n| -------------- | ------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\r\n| **Diplomate**  | Apaisement    | Action Bonus | Une entité perd son état agressif jusqu'à son prochain tour ou subit un désavantage sur sa prochaine action offensive (non cumulable avec Encouragement).                              |\r\n|                | Encouragement | Action Bonus | Donner un avantage à 1 entité (non cumulable avec Apaisement)                                                                                                                          |\r\n|                | Médiation     | Réaction     | Lorsqu'une créature attaque, s'il y a une autre créature proche, vous pouvez détourner son attaque vers celle-ci.<br>Si `1d10 + Charisme(Diplomate) >= Mental(Résistance) de la cible` |\r\n|                | Trêve         | Action       | Deux créatures ne peuvent pas s'attaquer jusqu'au début de votre prochain tour.<br>Si `1d10 + Charisme(Diplomate) >= Mental(Résistance) de la cible`.                                  |\r\n| **Intimidant** | Défi          | Action Bonus | Si la créature désignée attaque une autre cible que vous, elle subit un désavantage sur son attaque.                                                                                   |\r\n|                | Terreur       | Passif       | Les créatures dont `Mental(Résistance)` est inférieur à votre `Charisme(Intimidant)` ne vous choisissent pas comme première cible tant qu'une autre menace existe.                     |\r\n|                | Soumission    | Passif       | Lorsqu'un ennemi meurt ou abandonne, les créatures proches de niveau inférieur fuient ou se rendent.<br>Si `leur Mental(Résistance) < votre Charisme(Intimidant)`.                     |\r\n|                | Regard noir   | Action Bonus | Une créature proche perd son Action Bonus.<br>Si `1d10 + Charisme(Intimidant) >= Mental(Résistance) de la cible`.                                                                      |\r\n| **Meneur**     | Coordination  | Réaction     | Lorsqu'un allié proche rate une action, vous pouvez ajouter votre `Charisme(Meneur)` à son jet pour tenter de le faire réussir.                                                        |\r\n|                | Formation     | Passif       | Pour chaque allié adjacent à vous (< 2m), vous et ces alliés gagnez `+2 AC`.                                                                                                           |\r\n|                | Inspiration   | Action       | Une condition négative que vous subissez peut être convertie en un bonus équivalent jusqu'à la fin de votre prochain tour.                                                             |\r\n|                | Ralliement    | Action Bonus | Vous pouvez transférer une condition négative d'un allié vers vous.                                                                                                                    |\r\n| **Trompeur**   | Diversion     | Action Bonus | Une créature détourne son attention de vous vers un allié de votre choix jusqu'au prochain tour.                                                                                       |\r\n|                | Faux espoir   | Action Bonus | Une cible croit momentanément qu'une action ou un événement lui est favorable, réduisant l'efficacité de sa prochaine action offensive.                                                |\r\n|                | Manipulation  | Action       | Une fois par tour, vous pouvez transférer une condition entre deux entités consentantes ou non, si la situation le permet.                                                             |\r\n|                | Mortel        | Réaction     | Une fois par combat, le joueur peut simuler son comas/ sa mort pour perdre l'attention des ennemis.<br>Il se relève lorsqu'il le souhaite.                                             |\r\n\r")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">Au niveau 10, s'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\r\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà.\r\n\r\n| Compétence    | Description                                                                                                                                                                                                                                                                                                                      |\r\n| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\r\n| **Veinard**   | + Peut utiliser **1 token** pour le transformer en réussite.<br>- Impossible d'utilises ses tokens pour éviter le comas.                                                                                                                                                                                                         |\r\n| **Epicentre** | + Les alliés proches bénéficient de vos réussites critiques.<br>- Les effets négatifs que vous subissez sont doublés.                                                                                                                                                                                                            |\r\n| **Tyran**     | Par défaut, les créatures faibles évitent de vous attaquer, et les créatures puissantes vous prennent pour cible.<br>Utiliser **1 token** pour inverser cet effet pour le combat en cours.                                                                                                                                       |\r\n| **Symbole**   | Votre parole peut créer un engagement magique/social (serment, promesse, pacte).<br>Celui qui demande le pacte subit une pénalité s'il le rompt de par ses actions volontaires.<br>*(s'il est attaché contre son gré et ne peut pas tenir sa parole, il n'est pas pénalisé)*<br>Utiliser **4 tokens** pour créer cet engagement. |")}

	</section>
{/snippet}
