<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase, renderMarkdown } from "$lib/markdownRenderer";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([
      {
          "id": "mle",
          "text": "Mêlée",
          "level": 2
      },
      {
          "id": "distance",
          "text": "Distance",
          "level": 2
      },
      {
          "id": "arme--corde",
          "text": "Arme à corde",
          "level": 3
      },
      {
          "id": "arme--feu",
          "text": "Arme à feu",
          "level": 3
      },
      {
          "id": "final",
          "text": "Final",
          "level": 3
      },
      {
          "id": "magie",
          "text": "Magie",
          "level": 2
      },
      {
          "id": "rsum",
          "text": "Résumé",
          "level": 1
      },
      {
          "id": "moyennes",
          "text": "Moyennes",
          "level": 2
      },
      {
          "id": "armures",
          "text": "Armures",
          "level": 2
      },
      {
          "id": "final",
          "text": "Final",
          "level": 1
      },
      {
          "id": "chances-de-toucher",
          "text": "Chances de toucher",
          "level": 2
      },
      {
          "id": "dgts-moyens-aprs-toucher-et-dr",
          "text": "Dégâts moyens après toucher et DR",
          "level": 2
      },
      {
          "id": "dgts-moyens-aprs-toucher-et-rsistances--dr",
          "text": "Dégâts moyens après toucher et Résistances + DR",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>Dégâts</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>Dégâts</h1>
  </header>
  <div class="markdown-rendered">
		{@render mle()}
		{@render distance()}
		{@render magie()}
		{@render rsum()}
		{@render final_2()}
  </div>
</article>

<LinkPreview />

{#snippet mle()}
	<section>
		<h2 id="mle">{@html applyBase("Mêlée")}</h2>
	{@html renderMarkdown("\n| Base           | Court     | 1 Main     | 2 Mains    |\n| -------------- | --------- | ---------- | ---------- |\n| **Contondant** | 6 [7-16]  | 12 [13-20] | 16 [17-22] |\n| **Tranchant**  | 4 [5-14]  | 8 [9-16]   | 12 [13-18] |\n| **Perforant**  | 3 [4-13]  | 6 [7-14]   | 9 [10-15]  |\n|                | +[1 - 10] | +[1 - 8]   | +[1 - 6]   |\n\n| Infusions | Huiles<br>(sauf contondant) | Magie     |\n| --------- | --------------------------- | --------- |\n| +[2 - 16] | -                           | -         |\n| -[1 - 6]  | +[1 - 5]                    | -         |\n| -[2 - 10] | -                           | +[1 - 15] |\n\n| Base           | Maniement |       Base | Ligne 1 : Infusion | Ligne 2 : Huile | Ligne 3 : Magie | Moyenne |\n| -------------- | --------- | ---------: | -----------------: | --------------: | --------------: | :-----: |\n| **Contondant** | Court     |   6 [7–16] |             [9–32] |          [2–20] |         [-2–29] | **14**  |\n| **Contondant** | 1 Main    | 12 [13–20] |            [15–36] |          [8–24] |          [3–33] | **19**  |\n| **Contondant** | 2 Mains   | 16 [17–22] |            [19–38] |         [12–26] |          [7–35] | **22**  |\n| **Tranchant**  | Court     |   4 [5–14] |             [7–30] |          [0–18] |         [-5–27] | **12**  |\n| **Tranchant**  | 1 Main    |   8 [9–16] |            [11–32] |          [4–20] |         [-1–29] | **15**  |\n| **Tranchant**  | 2 Mains   | 12 [13–18] |            [15–34] |          [8–22] |          [3–31] | **18**  |\n| **Perforant**  | Court     |   3 [4–13] |             [6–29] |         [-1–17] |         [-6–26] | **11**  |\n| **Perforant**  | 1 Main    |   6 [7–14] |             [8–30] |          [2–18] |         [-3–27] | **13**  |\n| **Perforant**  | 2 Mains   |  9 [10–15] |            [12–31] |          [5–19] |          [0–28] | **15**  |\n| dés Modif      |           |         +0 |                  - |         +[0-10] |               - |         |\n\n+VS\n+Surprise [1-10]\n+Cuisine [1-4] -> [0-2]\n+Compétence [0-14]\n\n= [0 - 24]\n\nDégâts max : Contondant 2 Mains : 62 DMG\n\nNote\n- Perforant est globalement plus faible que le reste\n- Contondant 1/2 Mains est plus fort que le reste\n")}

	</section>
{/snippet}

{#snippet distance()}
	<section>
		<h2 id="distance">{@html applyBase("Distance")}</h2>
	{@html renderMarkdown("\n| Base       | Arme Courte | Arme à Corde | Arme à Feu | Autre |\n| ---------- | :---------: | :----------: | :--------: | :---: |\n| **Petit**  |      -      |   4 [5-12]   |  6 [7-18]  |   2   |\n| **Normal** | 0-11 [1-15] |   8 [9-16]   | 12 [13-24] |   4   |\n| **Grand**  |      -      |  16 [17-24]  | 24 [25-36] |   8   |\n|            |  +[1 - 4]   |   +[1 - 8]   | +[1 - 12]  |   -   |")}
	{@render arme_Corde()}
	{@render arme_Feu()}
	{@render final()}
	</section>
{/snippet}

{#snippet arme_Corde()}
	<section>
		<h3 id="arme--corde">{@html applyBase("Arme à corde")}</h3>
	{@html renderMarkdown("\n+[1 - 5]\n")}

	</section>
{/snippet}

{#snippet arme_Feu()}
	<section>
		<h3 id="arme--feu">{@html applyBase("Arme à feu")}</h3>
	{@html renderMarkdown("\n| Poudre | Air  | Magnétique | Magique |\n| ------ | ---- | ---------- | ------- |\n| x1     | x0.5 | x1.5       | x0.75   |\n")}

	</section>
{/snippet}

{#snippet final()}
	<section>
		<h3 id="final">{@html applyBase("Final")}</h3>
	{@html renderMarkdown("\n| Base   | Maniement |    Base | Corde   | Poudre  | Air     | Magnétique | Magique | Moyenne |\n| ------ | --------- | ------: | ------- | ------- | ------- | ---------- | ------- | :-----: |\n| Courte | Normal    |  [1-15] | -       | -       | -       | -          | -       |  **8**  |\n| Corde  | Petit     |  [5-12] | [6-17]  | -       | -       | -          | -       | **10**  |\n| Corde  | Normal    |  [9-16] | [10-21] | -       | -       | -          | -       | **12**  |\n| Corde  | Grand     | [17-24] | [18-29] | -       | -       | -          | -       | **22**  |\n| Feu    | Petit     |  [7-18] | -       | [7-18]  | [3-9]   | [10-27]    | [5-13]  | **12**  |\n| Feu    | Normal    | [13-24] | -       | [13-24] | [6-12]  | [19-36]    | [9-18]  | **19**  |\n| Feu    | Grand     | [25-36] | -       | [25-36] | [12-18] | [27-54]    | [19-27] | **27**  |\n\n+VS\n+Surprise [1-10]\n\nDégâts max : Grande Arme à Feu : 64\n\nNote\n- Les armes courtes ne sont pas faites pour être lancées de base -> Dégâts inférieurs normaux\n- Autre sont des objets en tout genre pas fait pour faire mal\n- Les armes à feu peuvent se casser à tout moment et prennent 1 action/ action bonus pour se recharger -> Justifie les dégâts supérieurs ?\n")}

	</section>
{/snippet}

{#snippet magie()}
	<section>
		<h2 id="magie">{@html applyBase("Magie")}</h2>
	{@html renderMarkdown("\n20 MP max ?\n2d12 -> 3dmg/MP = [3 - 60] dmg -> Touche plus mais - de dégâts\n1d4 -> 13dmg/MP = [13 - 260] dmg -> Touche moins mais + de dégâts\n\nDoppée : 20MP + 30(bonus)\n2d12 -> 3x50 = [3 - 150] dmg\n1d4 -> 13x50 = [13-650] dmg\n")}

	</section>
{/snippet}

{#snippet rsum()}
	<section>
		<h1 id="rsum">{@html applyBase("Résumé")}</h1>
	{@html renderMarkdown("\nDégâts bruts max | Moyenne\n\nMêlée = 62 | 15.1\nDistance = 64 | 15.7\nMagie = 260 | 84\n")}
	{@render moyennes()}
	{@render armures()}
	</section>
{/snippet}

{#snippet moyennes()}
	<section>
		<h2 id="moyennes">{@html applyBase("Moyennes")}</h2>
	{@html renderMarkdown("\n| Mêlée          | Court | 1 main | 2 mains |\n| -------------- | :---: | :----: | :-----: |\n| **Contondant** |  14   |   19   |   22    |\n| **Tranchant**  |  12   |   15   |   18    |\n| **Perforant**  |  11   |   13   |   15    |\n|                | 2d10  |  2d8   |   2d6   |\n\n| Distance   | Arme Courte | Arme à Corde | Arme à Feu |\n| ---------- | :---------: | :----------: | :--------: |\n| **Petit**  |      -      |      10      |     12     |\n| **Normal** |      8      |      12      |     19     |\n| **Grand**  |      -      |      22      |     27     |\n|            |     2d4     |     2d8      |    2d12    |\n\n| Magie précise | Magie Puissante | Magie Doppée |\n| :-----------: | :-------------: | :----------: |\n|      31       |       136       |  71 \\| 331   |\n|     2d12      |       1d4       | 2d12 \\| 1d4  |\n")}

	</section>
{/snippet}

{#snippet armures()}
	<section>
		<h2 id="armures">{@html applyBase("Armures")}</h2>
	{@html renderMarkdown("> Les dés doivent atteindre l'AC (>=) avant de pouvoir faire des dégâts\n\n|                | Légère |      Intermédiaire      |       Lourde       |\n| -------------- | :----: | :---------------------: | :----------------: |\n| **AC**         |   12   |            9            |         0          |\n| **Résistance** | Magie  | Contondant<br>Tranchant | Tranchant<br>Corde |\n| **DR**         |   1    |            6            |         16         |\n")}

	</section>
{/snippet}

{#snippet final_2()}
	<section>
		<h1 id="final">{@html applyBase("Final")}</h1>

	{@render chancesDeToucher()}
	{@render dgtsMoyensAprsToucherEtDr()}
	{@render dgtsMoyensAprsToucherEtRsistances_Dr()}
	</section>
{/snippet}

{#snippet chancesDeToucher()}
	<section>
		<h2 id="chances-de-toucher">{@html applyBase("Chances de toucher")}</h2>
	{@html renderMarkdown("\n| Arme     | Légère | Intermédiaire | Lourde |\n| -------- | :----: | :-----------: | :----: |\n| Court    |  45%   |      72%      |  100%  |\n| 1 Main   |  23%   |      56%      |  100%  |\n| 2 Mains  |   2%   |      27%      |  100%  |\n| Dist Cou |   0%   |      0%       |  100%  |\n| Corde    |  23%   |      56%      |  100%  |\n| Feu      |  61%   |      80%      |  100%  |\n| Mag Pré  |  61%   |      80%      |  100%  |\n| Mag Pui  |   0%   |      0%       |  100%  |\n")}

	</section>
{/snippet}

{#snippet dgtsMoyensAprsToucherEtDr()}
	<section>
		<h2 id="dgts-moyens-aprs-toucher-et-dr">{@html applyBase("Dégâts moyens après toucher et DR")}</h2>
	{@html renderMarkdown("\n| Arme             | Légère | Intermédiaire | Lourde |\n| ---------------- | -----: | ------------: | -----: |\n| Contondant Court |    5.4 |             5 |      0 |\n| Contondant 1M    |    3.9 |           6.7 |      2 |\n| Contondant 2M    |    0.4 |             4 |      5 |\n| Tranchant Court  |    4.9 |           4.3 |      0 |\n| Tranchant 1M     |    3.2 |             5 |      0 |\n| Tranchant 2M     |    0.3 |           3.2 |      2 |\n| Perforant Court  |    4.5 |           3.6 |      0 |\n| Perforant 1M     |    2.7 |           3.9 |      0 |\n| Perforant 2M     |    0.2 |           2.4 |      0 |\n| Arme courte      |      0 |             0 |      0 |\n| Corde Petite     |      2 |           2.2 |      0 |\n| Corde Normale    |    2.5 |           3.3 |      0 |\n| Corde Grande     |    4.8 |           8.9 |      6 |\n| Feu Petit        |    6.7 |           4.8 |      0 |\n| Feu Normal       |   10.9 |          10.4 |      3 |\n| Feu Grand        |   21.8 |          17.6 |     11 |\n| Magie précise    |   18.9 |          24.8 |     15 |\n| Magie puissante  |      0 |             0 |    120 |\n")}

	</section>
{/snippet}

{#snippet dgtsMoyensAprsToucherEtRsistances_Dr()}
	<section>
		<h2 id="dgts-moyens-aprs-toucher-et-rsistances--dr">{@html applyBase("Dégâts moyens après toucher et Résistances + DR")}</h2>
	{@html renderMarkdown("\n| Arme                 | Légère | Intermédiaire | Lourde |\n| -------------------- | -----: | ------------: | -----: |\n| Contondant Court     |   5,40 |          0,45 |      0 |\n| Contondant 1M        |   3,91 |          0,81 |   0,46 |\n| Contondant 2M        |   0,40 |          0,10 |   0,10 |\n| Tranchant Court      |   4,95 |          0,23 |      0 |\n| Tranchant 1M         |   3,22 |          0,46 |      0 |\n| Tranchant 2M         |   0,34 |          0,07 |      0 |\n| Perforant Court      |   4,50 |          2,48 |      0 |\n| Perforant 1M         |   2,76 |          1,73 |      0 |\n| Perforant 2M         |   0,28 |          0,19 |      0 |\n| Arme courte distance |      0 |             0 |      0 |\n| Corde Petite         |   2,07 |          1,04 |      0 |\n| Corde Normale        |   6,16 |          3,64 |      0 |\n| Corde Grande         |  11,76 |          9,24 |      0 |\n| Feu Petit            |   6,71 |          3,96 |      0 |\n| Feu Normal           |  14,40 |         10,80 |   2,40 |\n| Feu Grand            |  20,80 |         17,20 |   8,80 |\n| Magie précise        |   9,00 |         15,86 |   9,46 |\n| Magie puissante      |      0 |             0 | 120,50 |")}

	</section>
{/snippet}
