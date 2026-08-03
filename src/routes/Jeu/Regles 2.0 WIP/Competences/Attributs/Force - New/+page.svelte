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
          "level": 1
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
  <title>Force - New</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Force - New</h1>
  </header>
  <div class="markdown-rendered">
		{@render principales()}
  </div>
</article>

<LinkPreview />

{#snippet principales()}
	<section>
		<h1 id="principales">{@html applyBase("Principales")}</h1>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).\n>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).\n\n| Compétence | Situation                                      |\n| ---------- | ---------------------------------------------- |\n| Athlétisme | Déplacement de soi-même                        |\n| Barbare    | Puissance des coups portés                     |\n| Brutalité  | Capacité de destruction                        |\n| Endurance  | Résistance aux dégâts et contraintes physiques |\n| Lutteur    | Contrôle de créatures                          |\n")}
	{@render secondaires()}
	{@render finales()}
	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html applyBase("Secondaires")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 3 points d'attribut (3, 6, 9, 12, 15, 18).\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\n\n| **Principale** | Secondaire    | Type         | Description                                                                                                                                                                                                                                                                              |\n| -------------- | ------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Athlétisme** | Mule          | Passif       | Ajoute `10 × Force(Athlétisme)` à la charge maximale.                                                                                                                                                                                                                                    |\n|                | Momentum      | Action       | Charger une créature lui inflige `(50% × votre poids)` en dégâts et peut renverser les créatures sur la trajectoire.<br>S'arrêter sans prendre de dégâts est une Action Bonus.<br>Sinon subit 50% des dégâts qu'il inflige.                                                              |\n|                | Rattrapage    | Réaction     | Lorsque vous tombez ou êtes poussé, vous pouvez tenter de vous rattraper avant la chute.                                                                                                                                                                                                 |\n| **Barbare**    | Bagarre       | Passif       | Pour chaque point de Force, augmente le dé de dégâts à mains nues (`1d4 → 1d6 → 1d8 → 1d10 → 1d12`). Ajoute également le matériau de l'armure aux dégâts.                                                                                                                                |\n|                | Bourrin       | Passif       | Même si la DR absorbe l'attaque, la cible perd des HP égaux à `(dés + Force(Barbare))`.                                                                                                                                                                                                  |\n|                | Riposte       | Réaction     | Lorsqu'une attaque ennemie vous touche au corps-à-corps, vous pouvez immédiatement porter une attaque à mains nues.                                                                                                                                                                      |\n| **Brutalité**  | Destructeur   | Passif       | Permet de casser ce qui ne devrait pas l'être (avec confirmation du MJ).                                                                                                                                                                                                                 |\n|                | Fracasseur    | Passif       | Double les dégâts contre les objets et structures.                                                                                                                                                                                                                                       |\n|                | Anti-Blindage | Action       | Ouvre la garde du bouclier si le matériau de l'arme lui est supérieur.<br>La DR du bouclier n'est plus prise en compte jusqu'au prochain tour.                                                                                                                                           |\n| **Endurance**  | Impénétrable  | Action Bonus | Augmente la DR de `2 * Force(Endurance)` pour le reste du tour.                                                                                                                                                                                                                          |\n|                | Inébranlable  | Passif       | Les déplacements forcés et renversements sont ignorés si `Force(Endurance)` est supérieure à celle de l'adversaire.                                                                                                                                                                      |\n|                | Encaisser     | Réaction     | Une fois pas combat, les dégâts subis sont pris en compte à la fin du tour suivant.                                                                                                                                                                                                      |\n| **Lutteur**    | Étreinte      | Action Bonus | Maintient une créature et lui inflige `Force(Lutteur)` dégâts au début de chacun de ses tours.<br>Ne peut plus rien faire à part se déplacer une fois une créature maintenue.<br>Sortir de l'étreinte nécessite `1d20 + Force(Athlétisme) >= 2 * Force(Lutteur) de celui qui nous tient` |\n|                | Projection    | Action       | Lancer une créature immobilisée pour `1d20 + Force(Lutteur)` de dégâts.<br>S'il touche une autre créature, celle-ci subit 50% des dégâts.                                                                                                                                                |\n|                | Contre-Lutte  | Réaction     | Lorsqu'une créature tente de vous agripper, vous pouvez directement utiliser Projection pour l'éloigner sans que cela lui fasse des dégâts.                                                                                                                                              |\n")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).\n\n| Compétence       | Description                                                                                                                                                                                                                                                          |\n| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| **Cafard**       | + Tant que vous êtes conscient, vous pouvez rester debout jusqu'à -50 HP.<br>- Désavantage à tous ses jets jusqu'au prochain repos sécurisé.                                                                                                                         |\n| **Matérialiste** | + Les dégâts font descendre la DR avant les HP (et sont réduits de 50% ?).<br>- Si votre armure perd de sa DR, vous perdez le double en HP.                                                                                                                          |\n| **Titan**        | + Toutes les valeurs basées sur `Force` sont doublées (charge, dégâts des compétences, poussée, lutte, destruction...).<br>- Toutes les actions utilisant `Force` coûtent une Action complète (impossible d'utiliser une Action Bonus liée à la Force le même tour). |")}

	</section>
{/snippet}
