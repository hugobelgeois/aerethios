<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "magies-de-base",
          "text": "Magies de Base",
          "level": 2
      },
      {
          "id": "fusion",
          "text": "Fusion",
          "level": 2
      },
      {
          "id": "ractions",
          "text": "Réactions",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Magie - Types</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Magie - Types</h1>
  </header>
  <div class="markdown-rendered">
		{@render magiesDeBase()}
		{@render fusion()}
		{@render ractions()}
  </div>
</article>

<LinkPreview />

{#snippet magiesDeBase()}
	<section>
		<h2 id="magies-de-base">{@html applyBase("Magies de Base")}</h2>
	{@html renderMarkdown("Les types de magie ne sont pas limités à ces exemples, mais ce sont leurs utilisations les plus fréquentes.\n\n| Air                 | Eau      | Terre                       |  Feu   |         Foudre |                        Lumière |                      Ténèbres |\n| ------------------- | -------- | --------------------------- | :----: | -------------: | -----------------------------: | ----------------------------: |\n| Effets (HP, DR, AC) | Soins    | Dégâts                      | Dégâts |         Dégâts | Dévoiler les entités planaires | Attirer les entités planaires |\n| Perception          | Mobilité | Protection (AC/ couverture) |        |   Vitesse (AC) |            Buffs des Attributs |         Débuffs des Attributs |\n|                     |          | Terrain                     |        | Immobilisation |                         Mental |                    Perception |\n|                     |          |                             |        |                |                          Soins |                    Discrétion |\n")}

	</section>
{/snippet}

{#snippet fusion()}
	<section>
		<h2 id="fusion">{@html applyBase("Fusion")}</h2>
	{@html renderMarkdown("> Prendre la moyenne des niveau de magie utilisée pour la fusion afin de déterminer le dé à utiliser.\n> Le caster du sort est celui avec le plus gros niveau dans sa magie.\n\nIl est possible de fusionner des types de magie ensemble pour obtenir des effets différents.\nFusionner des magies soi-même nécessitent :\n- d'utiliser 2 mains (1 par magie),\n- ou de demander à quelqu'un (avec désavantage).\nFusionner 2 magies donne un résultat différents si un élément est plus fort que l'autre ou inversément.\n\n> Pour lire le tableau, la première ligne est l'élément le plus fort, et il dicte la fusion qui va avoir lieu avec l'élément de la première colonne.\n\n| Ligne supérieure<br>à colonne |    Air    |     Eau      |   Terre    |     Feu     |   Foudre   |   Lumière   |   Ténèbres   |\n| ----------------------------- | :-------: | :----------: | :--------: | :---------: | :--------: | :---------: | :----------: |\n| **Air**                       |     -     |   Bilzzard   |            |  Explosif   |    Son     |             | Invisibilité |\n| **Eau**                       |   Brume   |      -       | Newtonien  |    Magma    |            |    Soin     |     Sang     |\n| **Terre**                     | Poussière |    Glace     |     -      |    Métal    | Magnétisme |   Cristal   |   Portail    |\n| **Feu**                       | Explosif  |    Magma     |   Métal    |      -      |   Plasma   | Feu Céleste |  Feu d'Ames  |\n| **Foudre**                    |   Orage   |              |   Séisme   |   Plasma    |     -      |             |              |\n| **Lumière**                   |  Mirage   | Purification |  Plantes   | Feu Céleste |  Vitesse   |      -      | Invocations  |\n| **Ténèbres**                  |           |    Poison    | Corruption | Feu d'Ames  | Paralysie  |  Illusions  |      -       |\n\n```Exemple\nEau (8) + Air (4) = Blizzard\nEau (6) + Air (9) = Vapeur\n```\n")}

	</section>
{/snippet}

{#snippet ractions()}
	<section>
		<h2 id="ractions">{@html applyBase("Réactions")}</h2>
	{@html renderMarkdown("> Si un type de magie en recontre un autre sans être mélangé, une réaction immédiate se produit.\n\nSi la réaction est une AOE, toutes les cibles, alliées et ennemies, dans un rayon de 5m subissent les effets.\n\n|            |                           Air                            |                        Eau                         |                             Terre                              |                         Feu                          |                             Foudre                             |\n| ---------- | :------------------------------------------------------: | :------------------------------------------------: | :------------------------------------------------------------: | :--------------------------------------------------: | :------------------------------------------------------------: |\n| **Air**    |                            -                             |             Glissant<br>*Désarmement*              |              Érosion<br>*Annule les résistances*               |           Attisement<br>*DMG du tour +50%*           |    Éblouissant<br>AOE<br>*La prochaine cible est aléatoire*    |\n| **Eau**    |                Glissant<br>*Désarmement*                 |                         -                          |                     Enlisement<br>*AC -4*                      |            Vapeur<br>AOE<br>*Désavantage*            |       Propagation<br>AOE<br>*DMG 50% aux cibles proches*       |\n| **Terre**  |           Érosion<br>*Annule les résistances*            |               Enlisement<br>*AC -4*                |                               -                                | Fragmentation<br>AOE<br>*3d4 DMG aux cibles proches* | Paratonnerre<br>*Les attaques magiques sont redirigées dessus* |\n| **Feu**    |             Attisement<br>*DMG du tour +50%*             |           Vapeur<br>AOE<br>*Désavantage*           |      Fragmentation<br>AOE<br>*3d4 DMG aux cibles proches*      |                          -                           |             Surcharge<br>AOE<br>*Magie impossible*             |\n| **Foudre** | Éblouissant<br>AOE<br>*La prochaine cible est aléatoire* | Propagation<br>AOE<br>*DMG 50% aux cibles proches* | Paratonnerre<br>*Les attaques magiques sont redirigées dessus* |        Surcharge<br>AOE<br>*Magie impossible*        |                               -                                |\n\nLa Lumière avec un élément confère une résistance à cet élément pendant 2 tours.\nLes Ténèbres avec un élément confère une faiblesse à cet élément pendant 2 tours.\nChacun ne peuvent s'appliquer à une cible qu'une fois par combat.\n\n```Exemple\nCible couverte d'Eau + magie de Foudre = Propagation\nCible électrocuté + magie d'Eau = Propagation\n```\n")}

	</section>
{/snippet}
