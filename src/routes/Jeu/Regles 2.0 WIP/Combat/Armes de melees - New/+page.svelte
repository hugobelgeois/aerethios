<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "base",
          "text": "Base",
          "level": 2
      },
      {
          "id": "matriaux",
          "text": "Matériaux",
          "level": 2
      },
      {
          "id": "infusions",
          "text": "Infusions",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Armes de mêlées - New"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Armes de mêlées - New"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render base()}
		{@render matriaux()}
		{@render infusions()}
  </div>
</article>

<LinkPreview />

{#snippet base()}
	<section>
		<h2 id="base">{@html "Base"}</h2>
	{@html "<blockquote>Dé + Modificateur >= AC → Dégâts aux HP</blockquote>\n<p>Si les dés jetés + modificateur (=résultat) passent l'AC de la cible, on ajoute ses dégâts au résultat pour savoir ce que la cible subit.</p>\n<div class=\"table-scroll\"><table><thead><tr><th></th><th>1 Main</th><th>2 Mains</th></tr></thead><tbody><tr><td><strong>Dés</strong></td><td>2d10</td><td>2d6</td></tr><tr><td><strong>Dégâts</strong></td><td>x 1</td><td>x 2</td></tr><tr><td><strong>Matériaux</strong></td><td>2</td><td>3</td></tr></tbody></table></div>\n<p>Une arme doit ensuite être un des trois types suivants, ce qui changera son modificateur.<br>\nLe modificateur n'est pas toujours actif selon l'infusion.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Modificateurs</th><th>Contondant</th><th>Perforant</th><th>Tranchant</th></tr></thead><tbody><tr><td><strong>1 Main</strong></td><td>Dextérité(Moine)</td><td>Dextérité(Bretteur)</td><td>Dextérité(Assassin)</td></tr><tr><td><strong>2 Mains</strong></td><td>Force(Barbare)</td><td>Force()</td><td>Force(Paladin)</td></tr></tbody></table></div>\n<blockquote>Cela est important pour les résistances et faiblesses des ennemis.<br>Certaines armes rares peuvent posséder plusieurs types. Le joueur doit alors préciser celui qu'il utilise à chaque attaque.</blockquote>"}

	</section>
{/snippet}

{#snippet matriaux()}
	<section>
		<h2 id="matriaux">{@html "Matériaux"}</h2>
	{@html applyBase("<blockquote>Fait par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New#forgeron\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Artisanat - New\" data-wiki-fragment=\"Forgeron\">Forgeron</a> pour rendre les armes efficaces contre certaines créatures.<br>La propriété VS ne concerne que les armes Tranchantes et Perforantes.<br>La propriété VS confère un malus non cumulable au prochain tour de la cible.</blockquote>\n<p>VS 1 = Désavantage pour la cible<br>\nVS 2 = Désavantage pour la cible + Résistance -1<br>\n\tDiminue la résistance d'un rang pour cette attaque (Absorption → Immunisé → Résistance → Rien → Faiblesse)</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Matériau</th><th>Effet</th><th>Prix/ unité</th><th>Poids/ unité</th><th>Rareté</th></tr></thead><tbody><tr><td>Cuivre</td><td>VS 1 - Plantes</td><td>50 pc</td><td>2 kg</td><td>Déchet</td></tr><tr><td>Argent</td><td>VS 1 - Hybrides</td><td>50 pa</td><td>2 kg</td><td>Commun</td></tr><tr><td>Electrum</td><td>VS 1 - Magiques</td><td>10 po</td><td>2 kg</td><td>Peu Commun</td></tr><tr><td>Or</td><td>VS 1 - Mythiques</td><td>50 po</td><td>4 kg</td><td>Rare</td></tr><tr><td>Platine</td><td>VS 1 - Humanoïdes</td><td>500 po</td><td>3 kg</td><td>Légendaire</td></tr><tr><td>Fonte</td><td>VS 2 - Nécrophages</td><td>2 pa</td><td>1.5 kg</td><td>Déchet</td></tr><tr><td>Fer</td><td>VS 2 - VS Bêtes</td><td>10 pa</td><td>1 kg</td><td>Commun</td></tr><tr><td>Bronze</td><td>VS 2 - VS Insectoïdes</td><td>25 pa</td><td>1.5 kg</td><td>Commun</td></tr><tr><td>Acier</td><td>VS 2 - VS Mutants</td><td>50 pa</td><td>1 kg</td><td>Commun</td></tr><tr><td>Titane</td><td>VS 2 - VS Invocations</td><td>1 po</td><td>1.5 kg</td><td>Peu Commun</td></tr><tr><td>Mythril</td><td>VS 2 - VS Elementaires</td><td>5 po</td><td>1 kg</td><td>Rare</td></tr><tr><td>Adamantite</td><td>VS 2 - VS Draconides</td><td>7 po</td><td>2 kg</td><td>Rare</td></tr><tr><td>Palladium</td><td>VS 2 - VS Anges</td><td>7 po</td><td>2 kg</td><td>Rare</td></tr><tr><td>Orichalque</td><td>VS 2 - VS Démons</td><td>10 po</td><td>2.5 kg</td><td>Légendaire</td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet infusions()}
	<section>
		<h2 id="infusions">{@html "Infusions"}</h2>
	{@html applyBase("<blockquote>Fait par un <a href=\"%%BASE%%/Jeu/Regles 2.0 WIP/Apprentissages/Erudition#joaillier\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles 2.0 WIP/Apprentissages/Erudition\" data-wiki-fragment=\"Joaillier\">Joaillier</a> pour déterminer leur dégâts (DMG [1 - 4]).<br>Utilise 1 Gemme pour altérer la structure de l'arme, et donc son utilisation.<br>Les dégâts d'une arme ne peuvent pas être négatif.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Matériau</th><th>Dégâts</th><th>Modificateur</th><th>Effets</th></tr></thead><tbody><tr><td>Rien</td><td>8</td><td>Modificateur</td><td>---</td></tr><tr><td>Gemme Brute</td><td>+DMG</td><td>---</td><td>---</td></tr><tr><td>Gemme Puissante</td><td>+2DMG</td><td>Diminue les dés de 1 niveau</td><td>---</td></tr><tr><td>Gemme d'Equilibre</td><td>-DMG</td><td>Modificateur(Compétence)<br><em>valeur max : Rareté de la gemme</em></td><td>Huiles</td></tr><tr><td>Gemme de Balance</td><td>-2DMG</td><td>Augmente les dés de 1 niveau<br>Modificateur(Compétence)<br><em>valeur max : 2 × Rareté de la gemme</em></td><td>Huiles</td></tr><tr><td>Gemme de Crystal<br><em>Peu Commune</em></td><td>-2</td><td>Modificateur</td><td>Magie :<br>1 Magie (Feu, Foudre, ..)</td></tr><tr><td>Gemme de Crystal<br><em>Rare</em></td><td>-4</td><td>Modificateur</td><td>Magie :<br>Croitiste ou Eletiste</td></tr><tr><td>Gemme de Crystal<br><em>Légendaire</em></td><td>-8</td><td>---</td><td>Magie :<br>Universelle</td></tr></tbody></table></div>")}
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Huiles"} fragment={""} />
	<EmbedBlock route={"/Jeu/Regles 2.0 WIP/Combat/Misc/Magies"} fragment={""} />

	</section>
{/snippet}
