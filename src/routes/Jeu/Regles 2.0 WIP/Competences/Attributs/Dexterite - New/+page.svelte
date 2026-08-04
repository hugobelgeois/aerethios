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
  <title>Dextérité - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Dextérité - New</h1>
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
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).\n>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).\n\n| Compétence | Situation                  |\n| ---------- | -------------------------- |\n| Acrobatie  | Mobilité et esquive        |\n| Assassin   | Attaque surprise           |\n| Bretteur   | Combat précis et technique |\n| Éclaireur  | Déplacement discret        |\n| Voleur     | Larcin et manipulation     |\n")}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html applyBase("Secondaires")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 3 points d'attribut (3, 6, 9, 12, 15, 18).\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\n\n| **Principale** | Secondaire    | Type         | Description                                                                                                                                                                                     |\n| -------------- | ------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Acrobatie**  | Esquive       | Action Bonus | Jusqu'au début de votre prochain tour, les attaques d'opportunité contre vous échouent.                                                                                                         |\n|                | Réception     | Réaction     | Après avoir été projeté ou être tombé, vous retombez sur vos pieds et ignorez les effets de renversement.                                                                                       |\n|                | Voltige       | Passif       | Se relever, grimper ou franchir un obstacle ne coûte pas de déplacement supplémentaire.<br>Les dégâts de chute sont réduits de `10 × Dextérité(Acrobatie)` HP.                                  |\n| **Assassin**   | Coup précis   | Passif       | Une attaque surprise ignore la DR.                                                                                                                                                              |\n|                | Exécution     | Action Bonus | Contre une cible surprise, effectuez immédiatement une seconde attaque si la première touche.<br>Cette seconde attaque ne bénificie plus de l'effet de surprise.                                |\n|                | Rapide        | Passif       | Ajoute `Dextérité(Assassin)` aux dés de dégâts des armes courtes ou légères.                                                                                                                    |\n| **Bretteur**   | Ambidextre    | Passif       | Donne la propriété Ambidextre aux armes à 1 main.                                                                                                                                               |\n|                | Point faible  | Action Bonus | Crée une blessure exploitée par la prochaine attaque d'arme à corde ou d'arme courte qui ignore la DR.                                                                                          |\n|                | Riposte       | Réaction     | Lorsqu'un adversaire vous manque au corps à corps, effectuez immédiatement une attaque.                                                                                                         |\n| **Éclaireur**  | Embuscade     | Réaction     | Si un ennemi s'approche de vous, vous pouvez lui faire une attaque d'opportunité.                                                                                                               |\n|                | Repli         | Action Bonus | Après une attaque, vous pouvez immédiatement vous déplacer de quelques mètres sans déclencher d'attaque d'opportunité.                                                                          |\n|                | Silencieux    | Passif       | Vos déplacements ne produisent aucun bruit perceptible tant que vous ne courez pas ou n'attaquez pas.                                                                                           |\n| **Voleur**     | Dissimulation | Passif       | Les petits objets cachés sur vous ne peuvent pas être découverts.                                                                                                                               |\n|                | Main légère   | Passif       | Un échec de larcin ne révèle pas automatiquement votre présence.                                                                                                                                |\n|                | Opportuniste  | Réaction     | Echange l'arme d'une créature proche qui a raté son jet avce une arme de même type.<br>Si `1d20 + Dextérité(Voleur) >= AC + dé ennemi` et si l'arme n'est pas à 2 mains, ou à distance (lourd). |\n")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">Au niveau 10, s'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà.\n\n| Compétence        | Description                                                                                                                                                                                                                                                                                                                                                       |\n| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Fantôme**       | + Les attaques surprises et d'opportunité contre vous échouent automatiquement. <br>+ Vous pouvez traverser les espaces occupés par des ennemis. <br>- Vous ne pouvez pas bénéficier d'une armure lourde et la DR des armures intermédiaires est divisée par 2.                                                                                                   |\n| **Fatality**      | + Après avoir porter le coup de grâce à un ennemi, la prochaine attaque dans ce combat devient critique.<br>Si elle ne touche pas, le critique est perdu.<br>- Tant que vous n'avez pas porté le coup de grâce à une créature durant ce combat, vous ne pouvez plus bénéficier des bonus d'attaque surprise, d'opportunité ou dans le dos après avoir été repéré. |\n| **Lame parfaite** | + Vos attaques critiques arrivent sur un résultat inférieur de 2 au seuil normal.<br>`1d20 >= 19`<br> `2dx -> 1 seul des dés fait x au lieu des 2`<br>- Vos dégâts bruts diminuent de 25%.                                                                                                                                                                        |")}

	</section>
{/snippet}
