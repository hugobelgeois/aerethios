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
  <title>Mental - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Mental - New</h1>
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
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).\n>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).\n\n| Compétence   | Situation                                  |\n| ------------ | ------------------------------------------ |\n| Arcaniste    | Magie de Fusion et modification des magies |\n| Intelligence | Magies Elétistes et efficacité magique     |\n| Sagesse      | Magies Croitistes et contrôle intérieur    |\n| Volonté      | Résistance mentale                         |\n")}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html applyBase("Secondaires")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 3 points d'attribut (3, 6, 9, 12, 15, 18).\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\n\n| **Principale**   | Secondaire    | Type         | Description                                                                                                                                                                                                                                        |\n| ---------------- | ------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Arcaniste**    | Amplification | Action       | Permet de cumuler ses crystaux avec ceux d'une autre entité pour augmenter la puissance d'un sort.<br>Les dés utilisés sont ceux du lanceur.                                                                                                       |\n|                  | Résonance     | Passif       | Permet de fusionner les magies avec autre chose que le feu.                                                                                                                                                                                        |\n|                  | ?             |              |                                                                                                                                                                                                                                                    |\n| **Intelligence** | Efficacité    | Passif       | Les faibles résultats ne consomment pas de crystaux.<br>Si `dé de magie <= 20% de leur maximum`.                                                                                                                                                   |\n|                  | Redirection   | Réaction     | Redirige un sort vers une autre entité proche. <br>`1d20 + Mental(Intelligence) >= Crystaux + Maîtrise`.                                                                                                                                           |\n|                  | Ricochet      | Action       | Lorsqu'un sort touche, il peut être propagé sur une ou plusieurs cibles proches pour 50% de ses dégâts.<br>Le joueur doit relancer les dés à chaque fois qu'il veut propager le sort.<br>Il peut le faire tant que le sort fait plus de 10 dégâts. |\n| **Sagesse**      | Insensible    | Passif       | Ignore la douleur et les malus associés.                                                                                                                                                                                                           |\n|                  | Méditation    | Action Bonus | Régénère 1d4 crystaux.                                                                                                                                                                                                                             |\n|                  | Sérénité      | Passif       | Rien ne rompt votre concentration.                                                                                                                                                                                                                 |\n| **Volonté**      | Imperturbable | Passif       | Permet de se déplacer et d'esquiver sans perdre sa concentration                                                                                                                                                                                   |\n|                  | Résistance    | Réaction     | Avantage contre les effets mentaux.                                                                                                                                                                                                                |\n|                  | Détermination | Action Bonus |                                                                                                                                                                                                                                                    |\n")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).\n\n| Compétence     | Description                                                                                                                                                                                      |\n| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |\n| **Potter**     | + Les dés de magie qui tombent sous la moitié sont remplacés par la moitié (arrondie vers le haut)<br>- Si la cible a une résistance à la magie utilisée, tous les dégâts sont annulés           |\n| **Plus ultra** | + Vos dés font toujours les dégâts maximums<br>- Vous lancez 1d6+1 pour savoir combien de crystaux vous consommez<br>Si vous dépassez votre réserve, vous perdez 10HP par crystal supplémentaire |\n| **Archimage**  | + Vous pouvez faire des magies de fusion seul. <br>- Les sorts demandent davantage de concentration.                                                                                             |")}

	</section>
{/snippet}
