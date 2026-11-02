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
	{@html renderMarkdown("Les types de magie ne sont pas limités à ces exemples, mais ce sont leurs utilisations les plus fréquentes.\r\n\r\n| Air                 | Eau      | Terre                       |  Feu   |         Foudre |                        Lumière |                      Ténèbres |\r\n| ------------------- | -------- | --------------------------- | :----: | -------------: | -----------------------------: | ----------------------------: |\r\n| Effets (HP, DR, AC) | Soins    | Dégâts                      | Dégâts |         Dégâts | Dévoiler les entités planaires | Attirer les entités planaires |\r\n| Perception          | Mobilité | Protection (AC/ couverture) |        |   Vitesse (AC) |            Buffs des Attributs |         Débuffs des Attributs |\r\n|                     |          | Terrain                     |        | Immobilisation |                         Mental |                    Perception |\r\n|                     |          |                             |        |                |                          Soins |                    Discrétion |\r\n\r")}

	</section>
{/snippet}

{#snippet fusion()}
	<section>
		<h2 id="fusion">{@html applyBase("Fusion")}</h2>
	{@html renderMarkdown("> Prendre la moyenne des niveau de magie utilisée pour la fusion afin de déterminer le dé à utiliser.\r\n> Le caster du sort est celui avec le plus gros niveau dans sa magie.\r\n\r\nIl est possible de fusionner des types de magie ensemble pour obtenir des effets différents.\r\nFusionner des magies soi-même nécessitent :\r\n- d'utiliser 2 mains (1 par magie),\r\n- ou de demander à quelqu'un (avec désavantage).\r\nFusionner 2 magies donne un résultat différents si un élément est plus fort que l'autre ou inversément.\r\n\r\n> Pour lire le tableau, la première ligne est l'élément le plus fort, et il dicte la fusion qui va avoir lieu avec l'élément de la première colonne.\r\n\r\n| Ligne supérieure<br>à colonne |    Air    |     Eau      |   Terre    |     Feu     |   Foudre   |   Lumière   |   Ténèbres   |\r\n| ----------------------------- | :-------: | :----------: | :--------: | :---------: | :--------: | :---------: | :----------: |\r\n| **Air**                       |     -     |   Bilzzard   |            |  Explosif   |    Son     |             | Invisibilité |\r\n| **Eau**                       |   Brume   |      -       | Newtonien  |    Magma    |            |    Soin     |     Sang     |\r\n| **Terre**                     | Poussière |    Glace     |     -      |    Métal    | Magnétisme |   Cristal   |   Portail    |\r\n| **Feu**                       | Explosif  |    Magma     |   Métal    |      -      |   Plasma   | Feu Céleste |  Feu d'Ames  |\r\n| **Foudre**                    |   Orage   |              |   Séisme   |   Plasma    |     -      |             |              |\r\n| **Lumière**                   |  Mirage   | Purification |  Plantes   | Feu Céleste |  Vitesse   |      -      | Invocations  |\r\n| **Ténèbres**                  |           |    Poison    | Corruption | Feu d'Ames  | Paralysie  |  Illusions  |      -       |\r\n\r\n```Exemple\r\nEau (8) + Air (4) = Blizzard\r\nEau (6) + Air (9) = Vapeur\r\n```\r\n\r")}

	</section>
{/snippet}

{#snippet ractions()}
	<section>
		<h2 id="ractions">{@html applyBase("Réactions")}</h2>
	{@html renderMarkdown("> Si un type de magie en recontre un autre sans être mélangé, une réaction immédiate se produit.\r\n\r\nSi la réaction est une AOE, toutes les cibles, alliées et ennemies, dans un rayon de 5m subissent les effets.\r\n\r\n|            |                           Air                            |                        Eau                         |                             Terre                              |                         Feu                          |                             Foudre                             |\r\n| ---------- | :------------------------------------------------------: | :------------------------------------------------: | :------------------------------------------------------------: | :--------------------------------------------------: | :------------------------------------------------------------: |\r\n| **Air**    |                            -                             |             Glissant<br>*Désarmement*              |              Érosion<br>*Annule les résistances*               |           Attisement<br>*DMG du tour +50%*           |    Éblouissant<br>AOE<br>*La prochaine cible est aléatoire*    |\r\n| **Eau**    |                Glissant<br>*Désarmement*                 |                         -                          |                     Enlisement<br>*AC -4*                      |            Vapeur<br>AOE<br>*Désavantage*            |       Propagation<br>AOE<br>*DMG 50% aux cibles proches*       |\r\n| **Terre**  |           Érosion<br>*Annule les résistances*            |               Enlisement<br>*AC -4*                |                               -                                | Fragmentation<br>AOE<br>*3d4 DMG aux cibles proches* | Paratonnerre<br>*Les attaques magiques sont redirigées dessus* |\r\n| **Feu**    |             Attisement<br>*DMG du tour +50%*             |           Vapeur<br>AOE<br>*Désavantage*           |      Fragmentation<br>AOE<br>*3d4 DMG aux cibles proches*      |                          -                           |             Surcharge<br>AOE<br>*Magie impossible*             |\r\n| **Foudre** | Éblouissant<br>AOE<br>*La prochaine cible est aléatoire* | Propagation<br>AOE<br>*DMG 50% aux cibles proches* | Paratonnerre<br>*Les attaques magiques sont redirigées dessus* |        Surcharge<br>AOE<br>*Magie impossible*        |                               -                                |\r\n\r\nLa Lumière avec un élément confère une résistance à cet élément pendant 2 tours.\r\nLes Ténèbres avec un élément confère une faiblesse à cet élément pendant 2 tours.\r\nChacun ne peuvent s'appliquer à une cible qu'une fois par combat.\r\n\r\n```Exemple\r\nCible couverte d'Eau + magie de Foudre = Propagation\r\nCible électrocuté + magie d'Eau = Propagation\r\n```\r\n")}

	</section>
{/snippet}
