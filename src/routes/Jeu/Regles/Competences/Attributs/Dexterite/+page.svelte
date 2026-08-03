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
  <title>Dextérité</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Dextérité</h1>
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
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).\r\n>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).\r\n\r\n| Compétence | Situation                                              |\r\n| ---------- | ------------------------------------------------------ |\r\n| Acrobatie  | Mobilité et esquive                                    |\r\n| Assassin   | Attaque surprise                                       |\r\n| Bretteur   | Combat précis et technique                             |\r\n| Éclaireur  | Déplacement discret                                    |\r\n| Voleur     | Larcin et manipulation<br>(pickpocket, crochetage, ..) |\r\n\r")}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html applyBase("Secondaires")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).\r\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\r\n\r\n| **Principale** | Secondaire    | Description                                                                                                                                                                        |\r\n| -------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\r\n| **Acrobatie**  | Matrix        | Peut esquiver les attaques magiques. <br>`1d20 + Dextérité(Acrobatie) >= 1d20 + Mental(...)`                                                                                       |\r\n|                | Voltige       | Se relever, grimper ou franchir un obstacle ne coûte pas d'action de déplacement. Les dégâts de chute sont réduits de `10 × Dextérité(Acrobatie)` HP.                              |\r\n| **Assassin**   | Coup précis   | Une attaque surprise ignore la DR.                                                                                                                                                 |\r\n|                | Rapide        | Ajoute `Dextérité(Assassin)` aux dés de dégâts des armes courtes ou légères.                                                                                                       |\r\n| **Bretteur**   | Ambidextre    | Permet de manier une arme à une main dans chaque main sans pénalité.                                                                                                               |\r\n|                | Parade        | Si le résultat du dé d'une attaque ennemie est inférieur à `Dextérité(Bretteur)`, vous pouvez désarmer l'adversaire au lieu d'infliger des dégâts.                                 |\r\n|                | Point faible  | Attaquer génère une blessure pendant 1 tour qui ajoute 1 dé à la prochaine attaque à cet endroit                                                                                   |\r\n| **Éclaireur**  | Silencieux    | Vos déplacements ne produisent aucun bruit perceptible tant que vous ne courez pas ou n'attaquez pas.                                                                              |\r\n|                | Traque        | Vous pouvez suivre des traces ou retrouver le passage d'une créature sans jet si les conditions sont favorables ; sinon, vous bénéficiez d'un bonus égal à `Dextérité(Éclaireur)`. |\r\n| **Voleur**     | Dissimulation | Les petits objets cachés sur vous ne peuvent pas être découverts lors d'une fouille classique.                                                                                     |\r\n|                | Main légère   | Un échec à une tentative de larcin ne révèle pas automatiquement votre identité ou votre position.                                                                                 |\r\n\r")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\r\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).\r\n\r\n| Compétence        | Description                                                                                                                                                                                                                                                   |\r\n| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\r\n| **Fantôme**       | + Les attaques surprises et d'opportunité contre vous échouent automatiquement. <br>Vous pouvez traverser les espaces occupés par des ennemis. <br>- Vous ne pouvez pas bénéficier d'une armure lourde et la DR des armures intermédiaires est divisée par 2. |\r\n| **Lame parfaite** | + Vos attaques critiques arrivent sur un résultat inférieur de 2 au seuil normal.<br> + 1d20 >= 19<br> + 2dx --> 1 seul des dés fait x au lieu des 2.<br>- Vos dégâts bruts diminuent de 25%.                                                                 |")}

	</section>
{/snippet}
