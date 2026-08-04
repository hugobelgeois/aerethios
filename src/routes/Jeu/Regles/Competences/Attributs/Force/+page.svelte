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
  <title>Force</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Force</h1>
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
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).\r\n>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).\r\n\r\n| Compétence | Situation                                           |\r\n| ---------- | --------------------------------------------------- |\r\n| Athlétisme | Effort physique prolongé (escalade, nage, lutte, …) |\r\n| Barbare    | Puissance (soulever, pousser, porter, bloquer, …)   |\r\n| Monk       | Combat                                              |\r\n| Paladin    | Résistance et contrôle de zone                      |\r\n\r")}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html applyBase("Secondaires")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).\r\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\r\n\r\n| **Principale** | Secondaire   | Description                                                                                                                                                                                                                                            |\r\n| -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |\r\n| **Athlétisme** | Mule         | Ajoute 10 * Force(Athlétisme) à la charge maximale                                                                                                                                                                                                     |\r\n|                | Momentum     | Charger un ennemi lui inflige (5% * Force(Athlétisme)) de votre poids total<br>Lancer 1d20 par cible qui se trouve sur le chemin pour savoir si elle se fait toucher<br>Les dégâts de la charge peuvent être atténués si le joueur se prend des dégâts |\r\n| **Barbare**    | Destructeur  | Permet de casser ce qui ne devrait pas l'être (avec confirmation du MJ)                                                                                                                                                                                |\r\n|                | Bagarre      | Pour chaque point de Force, augmente le dé de dégâts à mains nues<br>Ajoute le matériau de l'armure aux dégâts finaux<br>*1d4 -> 1d6 -> 1d8 -> 1d10 -> 1d12 (double les dés si Force(Barbare) = [6-10]*                                                |\r\n| **Monk**       | Martial      | Permet d'utiliser la maîtrise à 1 main avec les armes à 2 mains, et inversément                                                                                                                                                                        |\r\n|                | Bourrin      | Même si la DR n'est pas atteinte, la cible perd des HP valant (dés + Force(Monk))                                                                                                                                                                      |\r\n| **Paladin**    | Impénétrable | DR + (2 * Force(Paladin))                                                                                                                                                                                                                              |\r\n|                | Muraille     | Les ennemis s'attaquent au joueur<br>Pour chaque attaque reçue, augmente les dégâts finaux de sa prochaine attaque par sa Force(Paladin)                                                                                                               |\r\n\r")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\r\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).\r\n\r\n| Compétence       | Description                                                                                                                                                                                                                                              |\r\n| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\r\n| **Cafard**       | + 1x par repos sécurisé, si sa vie tombe entre -50 et 0 HP, lui permet de récupérer (1d4 * 10) HP<br>Le joueur peut choisir quand il récupère ses HP et perdre l'attention de l'ennemi<br>- Désavantage à tous ses jets jusqu'au prochain repos sécurisé |\r\n| **Matérialiste** | + Les dégâts font descendre la DR avant les HP<br>- Impossible d'achever une entité                                                                                                                                                                      |")}

	</section>
{/snippet}
