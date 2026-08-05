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
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).\n>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).\n\n| Compétence | Situation                           |\n| ---------- | ----------------------------------- |\n| Acrobatie  | Mobilité et AC                      |\n| Assassin   | Attaque surprise                    |\n| Ranger     | Combat                              |\n| Voleur     | Larcin (pickpocket, crochetage, ..) |\n")}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html applyBase("Secondaires")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\n\n| **Principale** | Secondaire    | Description                                                                                                           |\n| -------------- | ------------- | --------------------------------------------------------------------------------------------------------------------- |\n| **Acrobatie**  | Matrix        | Peut esquiver les attaques magiques<br>*1d20 +Dextérité(Acrobatie) >= 1d20 +Mental(Arcaniste\\|Intelligence\\|Sagesse)* |\n|                | Parade        | Si le dé d'une attaque ennemie est inférieur à la Dextérité(Acrobatie), le joueur peut le désarmer                    |\n| **Assassin**   | Coup précis   | Ignore la DR s'il s'agit d'une attaque surprise                                                                       |\n|                | Rapide        | Permet d'ajouter sa Dextérité(Assassin) à ses dés de dégâts pour les armes courtes ou légères                         |\n| **Ranger**     | Ambidextre    | Permet d'utiliser une arme à 1 main dans chaque main                                                                  |\n|                | Point faible  | Attaquer génère une blessure pendant 1 tour qui ajoute 1 dé à la prochaine attaque à cet endroit                      |\n| **Voleur**     | Dissimulation | Les petits objets (bourses, bijoux, clefs, couteau, crochet, ..) ne peuvent pas être trouvé lors de fouille           |\n|                | Discrétion    | Rater Larcin ne révèle pas la position                                                                                |\n")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).\n\n| Compétence       | Description                                                                                                                                                                                                                                                                                                                                  |\n| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Sixième sens** | + Evite les attaques surprises et d'opportunité<br>- Les armes à distance touchent toujours le joueur                                                                                                                                                                                                                                        |\n| **Money**        | + Tenir des pièces en main permet d'augmenter les dégâts (1po = 1 dégât) (max : combien de pièces le joueur peut tenir)<br>1 seule main peut tenir les pièces, et elle ne peut pas tenir d'arme en conséquence<br>- A chaque coup reçu, lancer 1d10 pour savoir combien de pièces sont perdues (impossible de les récupérer après le combat) |")}

	</section>
{/snippet}
