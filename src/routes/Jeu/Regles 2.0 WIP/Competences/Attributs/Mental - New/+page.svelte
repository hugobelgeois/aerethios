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
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 3 points d'attribut (3, 6, 9, 12, 15, 18).\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\n\n| **Principale**   | Secondaire      | Type         | Description                                                                                                                                                                                             |\n| ---------------- | --------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Arcaniste**    | Amplification   | Action       | Permet de cumuler ses crystaux avec ceux d'une autre entité pour augmenter la puissance d'un sort.<br>Les dés utilisés sont ceux du lanceur.                                                            |\n|                  | Résonance       | Passif       | Permet de fusionner les magies avec autre chose que le feu.                                                                                                                                             |\n|                  | Ancrage         | Action Bonus | Fait persister un sort pendant 1 tour de plus afin que ces effets soient appliqués une seconde fois.                                                                                                    |\n| **Intelligence** | Efficacité      | Passif       | Les faibles résultats ne consomment pas de crystaux.<br>Si `jet de magie <= 20% de leur maximum`.                                                                                                       |\n|                  | Redirection     | Réaction     | Redirige un sort vers une autre entité proche. <br>`1d20 + Mental(Intelligence) >= Crystaux + Maîtrise`.                                                                                                |\n|                  | Ricochet        | Action       | Lorsqu'un sort touche, vous pouvez immédiatement le propager sur une cible à portée.<br>Si `nouveau jet de magie >= 50% de l'ancien jet de magie`, le sort est propagé et peut être de nouveau propagé. |\n| **Sagesse**      | Insensible      | Passif       | Ignore la douleur et les malus associés.                                                                                                                                                                |\n|                  | Méditation      | Action       | Se concentrer régénère `Mental(Sagesse)` crystaux.                                                                                                                                                      |\n|                  | Sérénité        | Passif       | Rien ne rompt votre concentration.                                                                                                                                                                      |\n| **Volonté**      | Imperturbable   | Passif       | Permet de se déplacer et d'esquiver sans perdre sa concentration.                                                                                                                                       |\n|                  | Résistance      | Réaction     | Avantage contre les effets mentaux.                                                                                                                                                                     |\n|                  | Dernier souffle | Réaction     | Lorsque vous vous faîtes toucher, vous pouvez conserver votre concentration en échange de `1d10 HP`.                                                                                                    |\n")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).\n\n| Compétence     | Description                                                                                                                                                                                                                                                                                                                                                                                                  |\n| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |\n| **Potter**     | + Les dés de magie qui tombent sous la moitié sont remplacés par la moitié (arrondie vers le haut).<br>- Si la cible a une résistance à la magie utilisée, tous les dégâts sont annulés.                                                                                                                                                                                                                     |\n| **Plus ultra** | + Pouvoir faire une attaque avec les dés et les dégâts maximum auxquels vous avez accès.<br>`2d10 -> 3(DMG de base) + 8 (nombre de paliers entre 2d10 et 1d4) /Crystal`.<br>- Votre Limite Magique est de 0 lors de cette attaque -> Vous subissez les dégâts que vous infligez aux HP de la cible (vos résistances magiques rentrent en compte).<br>Vous ne pouvez pas mourir directement de cette attaque. |\n| **Archimage**  | + Vous pouvez faire des magies de fusion seul. <br>- Vous ne pouvez rien faire d'autre pendant votre tour.                                                                                                                                                                                                                                                                                                   |")}

	</section>
{/snippet}
