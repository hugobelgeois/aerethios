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
  <title>Perception - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Perception - New</h1>
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
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).\r\n>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).\r\n\r\n| Compétence  | Situation                           |\r\n| ----------- | ----------------------------------- |\r\n| Chasseur    | Détection proche                    |\r\n| Spiritisme  | Perception des phénomènes planaires |\r\n| Observateur | Exploiter les faiblesses            |\r\n| Voyageur    | Exploiter le terrain                |\r\n\r")}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html applyBase("Secondaires")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 3 points d'attribut (3, 6, 9, 12, 15, 18).\r\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\r\n\r\n| **Principale**  | Secondaire       | Type         | Description                                                                                                                                                               |\r\n| --------------- | ---------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\r\n| **Chasseur**    | Menace           | Passif       | Pas besoin de jet pour savoir qu'un danger immédiat vous menace.                                                                                                          |\r\n|                 | Pièges           | Passif       | Impossible de tomber dans un piège physique.                                                                                                                              |\r\n|                 | Vigilance        | Réaction     | Lorsqu'une créature entre dans votre champ de vision, vous agissez avant le premier tour et avez l'effet de surprise.                                                     |\r\n| **Spiritisme**  | Exorciste        | Action       | Renvoie une entité planaire dans l'ombre pendant 1 tour, où elle ne pourra plus vous faire de mal.<br>Si `1d20 + Perception(Spiritisme) >= Puissance de l'entité [5-30]`. |\r\n|                 | Pactisant        | Action       | Vous pouvez invoquer une entité planaire avec laquelle vous avez conclu un pacte.<br>Elle peut refuser si elle est plus puissante que vous.                               |\r\n|                 | Pièges Magiques  | Passif       | Impossible de tomber dans un piège magique.                                                                                                                               |\r\n| **Observateur** | Anticipation     | Réaction     | Une créature a un désavantage contre vous pour ce tour si vous venez de l'analyser.                                                                                       |\r\n|                 | Chemin parfait   | Action Bonus | Après avoir analyser une créature, celle-ci ne peut plus vous faire d'attaques surprise, dans le dos ou d'opportunité pour le reste du combat.                            |\r\n|                 | Faiblesse        | Passif       | Augmente les dégâts sur une créature analysée de `Perception(Observateur)`                                                                                                |\r\n| **Voyageur**    | Ami de la nature | Action Bonus | Utiliser un élément de décor exploitable pendant une attaque pour augmenter vos dégâts de `Perception(Voyageur)`.                                                         |\r\n|                 | Grand pas        | Passif       | Après avoir passé un tour sur un terrain, vous ignorez ensuite tous ses malus.                                                                                            |\r\n|                 | High Ground      | Passif       | Etre plus haut qu'une créature augmente vos dégâts de `Perception(Voyageur)` contre cette créature.                                                                       |\r\n\r")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">Au niveau 10, s'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\r\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà.\r\n\r\n| Compétence        | Description                                                                                                                                                                                                                       |\r\n| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\r\n| **Oeil absolu**   | + Une fois par tour, après avoir analysé une cible, vous pouvez ignorer entièrement sa DR ou une de ses résistances.<br>- Vous ne pouvez attaquer que des cibles analysées.                                                       |\r\n| **Prémonition**   | + Une fois par repos, vous pouvez demander au MJ un événement important qui s'est ou va se dérouler dans le monde. <br>- Si vous agissez contre cette information, vous subissez un malus.                                        |\r\n| **Troisième œil** | + Analyse toutes les créatures en début de combat.<br>- En début de combat, le joueur annonce les HP qu'il lui restera à la fin.<br>S'il se trompe (avec une marge de 5), il perd les HP qu'il vient de perdre pendant ce combat. |")}

	</section>
{/snippet}
