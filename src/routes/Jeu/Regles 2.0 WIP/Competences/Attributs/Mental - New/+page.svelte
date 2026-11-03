<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
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
  <title>{"Mental - New"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Mental - New"}</h1>
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
		<h2 id="principales">{@html "Principales"}</h2>
	{@html "<blockquote>Le joueur en choisi 1 tous les 5 points d'attribut (5, 10, 15, 20).<br>Double le modificateur des jets selon la situation (le modificateur devient 0 s'il était négatif).</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Situation</th></tr></thead><tbody><tr><td>Arcaniste</td><td>Magie de Fusion et modification des magies</td></tr><tr><td>Intelligence</td><td>Magies Elétistes et efficacité magique</td></tr><tr><td>Sagesse</td><td>Magies Croitistes et contrôle intérieur</td></tr><tr><td>Volonté</td><td>Résistance mentale</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet secondaires()}
	<section>
		<h2 id="secondaires">{@html "Secondaires"}</h2>
	{@html "<blockquote>Le joueur en choisi 1 tous les 3 points d'attribut (3, 6, 9, 12, 15, 18).<br>Il est nécessaire de posséder la compétence principale pour débloquer les compétences secondaires liées.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th><strong>Principale</strong></th><th>Secondaire</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>Arcaniste</strong></td><td>Amplification</td><td>Action</td><td>Permet de cumuler ses crystaux avec ceux d'une autre entité pour augmenter la puissance d'un sort.<br>Les dés utilisés sont ceux du lanceur.</td></tr><tr><td></td><td>Ancrage</td><td>Action Bonus</td><td>Fait persister un sort pendant 1 tour de plus afin que ces effets soient appliqués une seconde fois.</td></tr><tr><td></td><td>Résonance</td><td>Passif</td><td>Permet de fusionner les magies avec autre chose que le feu.</td></tr><tr><td><strong>Intelligence</strong></td><td>Efficacité</td><td>Passif</td><td>Les faibles résultats ne consomment pas de crystaux.<br>Si <code>jet de magie <= 20% de leur maximum</code>.</td></tr><tr><td></td><td>Redirection</td><td>Réaction</td><td>Redirige un sort vers une autre entité proche. <br><code>1d20 + Mental(Intelligence) >= Niveau Magique + Maîtrise</code>.</td></tr><tr><td></td><td>Ricochet</td><td>Passif</td><td>Lorsqu'un sort touche, vous pouvez immédiatement le propager sur une cible à portée.<br>Si <code>nouveau jet de magie >= 50% de l'ancien jet de magie</code>, le sort est propagé et peut être de nouveau propagé.</td></tr><tr><td><strong>Sagesse</strong></td><td>Insensible</td><td>Passif</td><td>Ignore la douleur et les malus associés.</td></tr><tr><td></td><td>Méditation</td><td>Action</td><td>Se concentrer régénère <code>Mental(Sagesse)</code> crystaux.</td></tr><tr><td></td><td>Sérénité - WIP</td><td>Passif</td><td>Rien ne rompt votre concentration. (prend le dessus sur Dernier souffle et Imperturbable)</td></tr><tr><td><strong>Volonté</strong></td><td>Dernier souffle</td><td>Réaction</td><td>Lorsque vous vous faîtes toucher, vous pouvez conserver votre concentration en échange de <code>1d10 HP</code>.</td></tr><tr><td></td><td>Imperturbable</td><td>Passif</td><td>Permet de se déplacer et d'esquiver sans perdre sa concentration.</td></tr><tr><td></td><td>Résistance</td><td>Réaction</td><td>Avantage contre les effets mentaux.</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet finales()}
	<section>
		<h2 id="finales">{@html "Finales"}</h2>
	{@html "<blockquote>Au niveau 10, s'il s'agit de son attribut le plus élevé, le joueur peut en choisir 1.<br>Au niveau 20, il peut en choisir un deuxième ou annuler 1 effet négatif de celui qu'il a déjà.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Compétence</th><th>Description</th></tr></thead><tbody><tr><td><strong>Archimage</strong></td><td>+ Vous pouvez faire des magies de fusion seul. <br>- Vous ne pouvez rien faire d'autre pendant votre tour.</td></tr><tr><td><strong>Plus ultra</strong></td><td>+ Pouvoir faire une attaque avec les dés et les dégâts maximum auxquels vous avez accès.<br><code>2d10 -> 3(DMG de base) + 8 (nombre de paliers entre 2d10 et 1d4) /Crystal</code>.<br>- Votre Limite Magique est de 0 lors de cette attaque -> Vous subissez les dégâts que vous infligez aux HP de la cible (vos résistances magiques rentrent en compte).<br>Vous ne pouvez pas mourir directement de cette attaque.</td></tr><tr><td><strong>Potter</strong></td><td>+ Les dés de magie qui tombent sous la moitié sont remplacés par la moitié (arrondie vers le haut).<br>- Si la cible a une résistance à la magie utilisée, tous les dégâts sont annulés.</td></tr></tbody></table></div>"}

	</section>
{/snippet}
