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
  <title>Force</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Force</h1>
  </header>
  <div class="markdown-rendered">
		{@render principales()}
  </div>
</article>

<LinkPreview />

{#snippet principales()}
	<section>
		<h1 id="principales">{@html applyBase("Principales")}</h1>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).\r\n>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).\r\n\r\n| Compétence    | Situation                                                               |\r\n| ------------- | ----------------------------------------------------------------------- |\r\n| Athlétisme    | Effort physique prolongé (escalade, nage, lutte, …)                     |\r\n| Barbare       | Combat basé sur la puissance<br>(soulever, pousser, porter, bloquer, …) |\r\n| Brutalité     | Force appliquée directement (soulever, pousser, casser)                 |\r\n| Endurance     | Résister aux dégâts et contraintes physiques                            |\r\n| Lutteur       | Immobiliser, contrôler physiquement                                     |\r\n\r")}
	{@render secondaires()}
	{@render finales()}
	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html applyBase("Secondaires")}</h2>
	{@html renderMarkdown(">Le joueur en choisi 1 tous les 1 point de modificateur (1, 2, 3, 4, 5).\r\n>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.\r\n\r\n| **Principale** | Secondaire   | Description                                                                                                                                               |\r\n| -------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |\r\n| **Athlétisme** | Mule         | Ajoute `10 × Force(Athlétisme)` à la charge maximale.                                                                                                     |\r\n|                | Momentum     | Charger un ennemi lui inflige `(5% × Force(Athlétisme))` de votre poids total. Les créatures sur la trajectoire sont touchées sur un jet réussi.          |\r\n| **Barbare**    | Bagarre      | Pour chaque point de Force, augmente le dé de dégâts à mains nues (`1d4 → 1d6 → 1d8 → 1d10 → 1d12`). Ajoute également le matériau de l'armure aux dégâts. |\r\n|                | Bourrin      | Même si la DR absorbe l'attaque, la cible perd des HP égaux à `(dés + Force(Barbare))`.                                                                   |\r\n| **Brutalité**  | Destructeur  | Permet de casser ce qui ne devrait pas l'être (avec confirmation du MJ)                                                                                   |\r\n|                | Fracasseur   | Les attaques contre les objets, boucliers, portes et constructions infligent des dégâts doublés à leur intégrité                                          |\r\n| **Endurance**  | Impénétrable | DR + (2 * Force(Paladin))                                                                                                                                 |\r\n|                | Inébranlable | Les déplacements forcés, renversements et immobilisations sont ignorés si `Force(Endurance)` est supérieure à celle de l'adversaire                       |\r\n| **Lutteur**    | Étreinte     | Une cible immobilisée subit automatiquement `(Force(Lutteur))` dégâts au début de chacun de ses tours tant que la prise est maintenue.                    |\r\n|                | Projection   | Après une lutte réussie, vous pouvez projeter la cible sur une courte distance. Elle subit des dégâts si elle percute un obstacle ou une autre créature.  |\r\n\r")}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html applyBase("Finales")}</h2>
	{@html renderMarkdown(">S'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.\r\n>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà (si c'est toujours son attribut le plus élevé).\r\n\r\n| Compétence       | Description                                                                                                                                      |\r\n| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |\r\n| **Cafard**       | + Tant que vous êtes conscient, vous pouvez rester debout jusqu'à -50 HP.<br>- Désavantage à tous ses jets jusqu'au prochain repos sécurisé      |\r\n| **Matérialiste** | + Les dégâts font descendre la DR avant les HP<br>- Impossible d'achever une entité                                                              |\r\n| **Colosse**      | + Votre taille effective augmente pour les interactions physiques (charge, lutte, contrôle). <br>- Vous avez des désavantages sur la discrétion. |")}

	</section>
{/snippet}
