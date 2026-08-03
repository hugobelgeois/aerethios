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
  <title>Mental</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Mental</h1>
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
		<h2 id="principales">{@html applyBase("Principales")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).\r\n>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).\r\n\r\n| Compétence   | Situation                                  |\r\n| ------------ | ------------------------------------------ |\r\n| Arcaniste    | Magie de Fusion et modification des magies |\r\n| Erudit       | Connaissances et apprentissage             |\r\n| Intelligence | Magies Elétistes et efficacité magique     |\r\n| Sagesse      | Magies Croitistes et contrôle intérieur    |\r\n| Volonté      | Résistance mentale                         |\r\n\r")}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html applyBase("Secondaires")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).\r\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\r\n\r\n| **Principale**   | Secondaire    | Description                                                                                                                                            |\r\n| ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |\r\n| **Arcaniste**    | Amplification | Permet de cumuler ses cristaux avec ceux d'une autre entité pour augmenter la puissance d'un sort. Les dés utilisés sont ceux du lanceur.              |\r\n|                  | Résonance     | Permet de fusionner les magies avec autre chose que le feu.                                                                                            |\r\n| **Érudit**       | Encyclopédie  | Une fois par sujet, le joueur peut demander au MJ si son personnage possède une connaissance théorique pertinente. Si oui, aucun jet n'est nécessaire. |\r\n| **Intelligence** | Efficacité    | Les dés de magie dont le résultat est inférieur ou égal à 20 % de leur maximum ne consomment pas de cristaux.                                          |\r\n|                  | Redirection   | Concentre sa magie pour rediriger un sort vers une autre entité proche. <br>`1d20 + Mental(Intelligence) > Cristaux + Maîtrise`                        |\r\n| **Sagesse**      | Insensible    | Ignore la douleur et les malus associés.                                                                                                               |\r\n|                  | Méditation    | Utilise une Action Bonus pour récupérer 1d4 crystaux.                                                                                                  |\r\n|                  | Sérénité      | Les blessures, la peur et les provocations ne peuvent pas interrompre une action nécessitant de la concentration.                                      |\r\n| **Volonté**      | Imperturbable | Permet de se déplacer et d'esquiver sans perdre sa concentration                                                                                       |\r\n|                  | Résistance    | Résister à des situations affectant l'esprit                                                                                                           |\r\n\r")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\r\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).\r\n\r\n| Compétence     | Description                                                                                                                                                                                      |\r\n| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |\r\n| **Potter**     | + Les dés de magie qui tombent sous la moitié sont remplacés par la moitié (arrondie vers le haut)<br>- Si la cible a une résistance à la magie utilisée, tous les dégâts sont annulés           |\r\n| **Plus ultra** | + Vos dés font toujours les dégâts maximums<br>- Vous lancez 1d6+1 pour savoir combien de crystaux vous consommez<br>Si vous dépassez votre réserve, vous perdez 10HP par crystal supplémentaire |\r\n| **Archimage**  | + Vous pouvez faire des magies de fusion seul. <br>- Les sorts demandent davantage de concentration.                                                                                             |")}

	</section>
{/snippet}
