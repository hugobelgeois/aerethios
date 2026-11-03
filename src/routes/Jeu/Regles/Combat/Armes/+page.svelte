<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "dgts",
          "text": "Dégâts",
          "level": 2
      },
      {
          "id": "armes",
          "text": "Armes",
          "level": 3
      },
      {
          "id": "modifications",
          "text": "Modifications",
          "level": 3
      },
      {
          "id": "enchantements",
          "text": "Enchantements",
          "level": 3
      },
      {
          "id": "spcificits",
          "text": "Spécificités",
          "level": 3
      },
      {
          "id": "matriaux",
          "text": "Matériaux",
          "level": 2
      },
      {
          "id": "principaux",
          "text": "Principaux",
          "level": 3
      },
      {
          "id": "revtements",
          "text": "Revêtements",
          "level": 4
      },
      {
          "id": "munitions",
          "text": "Munitions",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Armes"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Armes"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render dgts()}
		{@render matriaux()}
  </div>
</article>

<LinkPreview />

{#snippet dgts()}
	<section>
		<h2 id="dgts">{@html "Dégâts"}</h2>
	{@html "<blockquote>L'arme permet de se focaliser sur les dégâts rapides (vs AC) ou les dégâts lourds (vs DR).<br>Utiliser la faiblesse de l'ennemi ne prend en compte que 50% de sa DR.</blockquote>\n<p>Exemple avec X = 12 (Orichalque)</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Modifications</th><th>Courte</th><th>1 Main</th><th>2 Mains</th><th>Haste</th><th>Arcs</th><th>Arbalètes</th><th>Armes à feu</th></tr></thead><tbody><tr><td>Léger/ Petit</td><td>-</td><td>3d8 +12<br>[15-36 -> 22-60]</td><td>4d4 +18<br>[22-34 -> 25-50]</td><td>4d6 +6<br>[10-30 -> 15-54]</td><td>-</td><td>3d8 +12<br>[15-36 -> 22-60]</td><td>4d4 +18<br>[22-34 -> 25-50]</td></tr><tr><td>Normal</td><td>2d12 +12<br>[14-36 -> 25-60]</td><td>2d8 +24<br>[26-40 -> 33-56]</td><td>3d4 +36<br>[39-48 -> 42-60]</td><td>3d6 +12<br>[15-30 -> 20-48]</td><td>2d12 +12<br>[14-36 -> 25-60]</td><td>2d8 +24<br>[26-40 -> 33-56]</td><td>3d4 +36<br>[39-48 -> 42-60]</td></tr><tr><td>Lourd/ Grand</td><td>1d12 +24<br>[25-36 -> 38-60]</td><td>1d8 +36<br>[37-44 -> 45-52]</td><td>2d4 +48<br>[50-56 -> 53-64]</td><td>2d6 +24<br>[26-36 -> 31-48]</td><td>1d12 +24<br>[25-36 -> 38-60]</td><td>1d8 +36<br>[37-44 -> 45-52]</td><td>2d4 +48<br>[50-56 -> 53-64]</td></tr><tr><td>Colossal</td><td>-</td><td>-</td><td>1d4 +72<br>[73-76 -> 77-80]</td><td>1d6 + 48<br>[49-54 -> 55-60]</td><td>-</td><td>-</td><td>1d4 +72<br>[73-76 -> 77-80]</td></tr></tbody></table></div>\n<p>Critiques -> Permet de relancer un dé qui a fait le maximum pour cumuler les points<br>\nLe nombre de relance disponible de l'enchantement de Nirina<br>\nLe maximum de relance est égal au nombre de dés disponibles (ex: 3d4 = 3dés de relance max)</p>"}
	{@render armes()}
	{@render modifications()}
	{@render enchantements()}
	{@render spcificits()}
	</section>
{/snippet}

{#snippet armes()}
	<section>
		<h3 id="armes">{@html "Armes"}</h3>
	{@html applyBase("<blockquote>Mêlée: Dé >= AC -> DR - (dé +X) = Dégâts au HP<br>? Distance ? : 1d20 +Dex +Maîtrise >= AC -> DR - dégâts = Dégâts au HP<br>X = Matériau</blockquote>\n<p>Si le dé de dégâts atteint l'AC de la cible, on déduit de DR la somme du dé et de X, et ce qui reste réduit les HP.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Catégorie</th><th>Dégâts</th><th>Prix main d'œuvre</th><th>Propriétés</th><th>Matériaux</th></tr></thead><tbody><tr><td>Courte</td><td>2d12 +X</td><td>5 pa</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lger\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"L%C3%A9ger%5C\">Léger</a><br><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#critique\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Critique%5C\">Critique</a></td><td>1</td></tr><tr><td>1 Main</td><td>2d8 +2X</td><td>10 pa</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lger\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"L%C3%A9ger%5C\">Léger</a></td><td>2</td></tr><tr><td>2 Mains</td><td>3d4 +3X</td><td>20 pa</td><td>---</td><td>3</td></tr><tr><td>Haste</td><td>3d6 +X</td><td>40 pa</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#porte\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Port%C3%A9e%5C\">Portée</a></td><td>5</td></tr><tr><td>Arcs</td><td>2d12 +X</td><td>5 * Puissance pa</td><td>---</td><td>1</td></tr><tr><td>Arbalètes</td><td>2d8 +2X</td><td>20 * Puissance pa</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lent\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lent%5C\">Lent</a></td><td>2</td></tr><tr><td>Armes à feu</td><td>3d4 +3X</td><td>1 * Puissance po</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#instable\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Instable%5C\">Instable</a></td><td>3</td></tr></tbody></table></div>")}

	</section>
{/snippet}

{#snippet modifications()}
	<section>
		<h3 id="modifications">{@html "Modifications"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th>Léger/ Petit</th><th>Normal</th><th>Lourd/ Grand</th><th>Colossal</th></tr></thead><tbody><tr><td>-1 Matériau</td><td>---</td><td>+1 Matériaux</td><td>+3 Matériaux</td></tr><tr><td>Dextérité > 14 pour s'en servir</td><td>---</td><td>Force > 14 pour s'en servir</td><td>Force > 17 pour s'en servir</td></tr><tr><td>+1 dé +Dextérité(Ranger), X/2</td><td>---</td><td>-1 dé, +X +Force(Monk)</td><td>-2 dés, +3(X +Force(Monk))</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet enchantements()}
	<section>
		<h3 id="enchantements">{@html "Enchantements"}</h3>
	{@html applyBase("<p>Enchanter une arme permet d'augmenter son dé de dégâts.</p>\n<p>Si une arme est en métal, seuls les <a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#nirina\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Nirina\">Enchantements de Nirina</a> sont efficaces. -> Permettent de faire des coups critiques</p>\n<p>Si une arme est en os, seul les <a href=\"%%BASE%%/Jeu/Regles/Apprentissages/Artisanat/Enchanteur#ovliin\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Apprentissages/Artisanat/Enchanteur\" data-wiki-fragment=\"Ovliin\">Enchantements d'Ovliin</a> sont efficaces (en plus de lui ajouter un effet magique).</p>")}

	</section>
{/snippet}

{#snippet spcificits()}
	<section>
		<h3 id="spcificits">{@html "Spécificités"}</h3>
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Styles</th><th>Précision</th></tr></thead><tbody><tr><td><strong>Type d'arme</strong></td><td>Armes de mêlée</td><td>Armes à distance</td></tr><tr><td><strong>Condition</strong></td><td>Niveau de maîtrise</td><td>Jet supérieur au double de l'AC</td></tr><tr><td><strong>Résultat</strong></td><td>Multiplicateur du style</td><td>Double les dégâts</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet matriaux()}
	<section>
		<h2 id="matriaux">{@html "Matériaux"}</h2>
	{@html "<blockquote>La propriété VS (il faudra choisir) :<br>- [ ] ajoute un dé de dégâts lorsque l'attaque touche le bon type de cible (ne s'applique pas sur les armes à distance),<br>- [ ] double les dégâts finaux,<br>- [ ] annule la DR,<br>- [ ] divise la DR par 2.</blockquote>"}
	{@render principaux()}
	{@render munitions()}
	</section>
{/snippet}

{#snippet principaux()}
	<section>
		<h3 id="principaux">{@html "Principaux"}</h3>
	{@html "<p><strong>Effets</strong></p>\n<ul><li>Se répare dans une forge/ avec la magie de métal</li></ul>\n<div class=\"table-scroll\"><table><thead><tr><th>Matériau</th><th>Prix/ unité</th><th>Dégâts</th><th>Propriétés</th><th>Poids/ unité</th></tr></thead><tbody><tr><td>Os</td><td>5 ^ rareté pa</td><td>rareté (1-5) + 2</td><td>Enchantements élémentaires x2</td><td>0.75 kg</td></tr><tr><td>Fonte</td><td>2 pa</td><td>3</td><td>VS Nécrophages</td><td>1.5 kg</td></tr><tr><td>Fer</td><td>10 pa</td><td>4</td><td>VS Bêtes</td><td>1 kg</td></tr><tr><td>Bronze</td><td>25 pa</td><td>5</td><td>VS Insectoides</td><td>1.5 kg</td></tr><tr><td>Acier</td><td>50 pa</td><td>6</td><td>VS Mutants</td><td>1 kg</td></tr><tr><td>Titane</td><td>1 po</td><td>7</td><td>VS Invocations</td><td>1.5 kg</td></tr><tr><td>Mythril</td><td>5 po</td><td>8</td><td>VS Elementaires</td><td>1 kg</td></tr><tr><td>Palladium</td><td>7 po</td><td>10</td><td>VS Anges</td><td>2 kg</td></tr><tr><td>Adamantite</td><td>7 po</td><td>10</td><td>VS Draconides</td><td>2 kg</td></tr><tr><td>Orichalque</td><td>10 po</td><td>12</td><td>VS Démons</td><td>2.5 kg</td></tr></tbody></table></div>"}
	{@render revtements()}
	</section>
{/snippet}

{#snippet revtements()}
	<section>
		<h4 id="revtements">{@html "Revêtements"}</h4>
	{@html "<blockquote>Le revêtement retire les propriétés du matériau principal et applique le sien à la place.</blockquote>\n<div class=\"table-scroll\"><table><thead><tr><th>Matériau</th><th>Prix/ unité</th><th>Propriétés</th><th>Poids/ unité</th></tr></thead><tbody><tr><td>Cuivre</td><td>50 pc</td><td>VS Plantes</td><td>2 kg</td></tr><tr><td>Argent</td><td>50 pa</td><td>VS Hybrides</td><td>2 kg</td></tr><tr><td>Sombronce</td><td>1 po</td><td>VS Naturels</td><td>1 kg</td></tr><tr><td>Electrum</td><td>10 po</td><td>VS Magiques</td><td>2 kg</td></tr><tr><td>Or</td><td>50 po</td><td>VS Mythiques</td><td>4 kg</td></tr><tr><td>Platine</td><td>500 po</td><td>Vs Humanoides</td><td>3 kg</td></tr></tbody></table></div>"}

	</section>
{/snippet}

{#snippet munitions()}
	<section>
		<h3 id="munitions">{@html "Munitions"}</h3>
	{@html applyBase("<p>Les munitions utilisées avec une arme à distance possèdent leur propre propriété.</p>\n<div class=\"table-scroll\"><table><thead><tr><th>Type</th><th>Prix/ unité</th><th>Arme</th><th>Propriétés</th><th>Nombre de munition/ matériau</th></tr></thead><tbody><tr><td>Minerai</td><td>--</td><td>Tout</td><td>---</td><td>2d4 +12</td></tr><tr><td>Plomb</td><td>5 pa</td><td>Tout</td><td>Antimagie</td><td>2d6 + 8</td></tr><tr><td>Crystal</td><td>1 po</td><td>Tout</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Afflictions#surcharge\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Afflictions\" data-wiki-fragment=\"Surcharge%5C\">Surcharge</a><br>5 munitions</td><td>2d4 + 2</td></tr><tr><td>Potion</td><td>--</td><td>Tout</td><td>Zone d'effet de 5ft de rayon</td><td>1</td></tr><tr><td>Tissu</td><td>10 pa</td><td>Armes à corde</td><td>Enflammé</td><td>2d6 + 8</td></tr><tr><td>Obsidienne</td><td></td><td>Armes à corde</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lacration\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lac%C3%A9ration%5C\">Lacération</a></td><td>2d6 + 8</td></tr><tr><td>Shrapnel</td><td>20 pa</td><td>Armes à feu</td><td><a href=\"%%BASE%%/Jeu/Regles/Statuts/Proprietes#lacration\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Proprietes\" data-wiki-fragment=\"Lac%C3%A9ration%5C\">Lacération</a><br>Portée Max = 10ft</td><td>2d4 +4</td></tr><tr><td>Boulet</td><td>50 pa</td><td>Armes à feu<br>(lourde)</td><td>La cible touchée est <a href=\"%%BASE%%/Jeu/Regles/Statuts/Conditions#couch\" class=\"wiki-link internal-link\" data-wiki-href=\"/Jeu/Regles/Statuts/Conditions\" data-wiki-fragment=\"Couch%C3%A9%5C\">Couchée</a></td><td>1</td></tr></tbody></table></div>")}

	</section>
{/snippet}
