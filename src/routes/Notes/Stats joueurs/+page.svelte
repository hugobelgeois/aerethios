<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";
  import EmbedBlock from "$lib/EmbedBlock.svelte";

  tocHeadings.set([]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Stats joueurs"}</title>
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Stats joueurs"}</h1>
  </header>
  <div class="markdown-rendered">
		{@render preamble()}
  </div>
</article>

<LinkPreview />

{#snippet preamble()}
	{@html "<div class=\"table-scroll\"><table><thead><tr><th></th><th>Force</th><th>Dextérité</th><th>Mental</th><th>Perception</th><th>Charisme</th></tr></thead><tbody><tr><td><strong>Arek</strong></td><td><strong>16</strong></td><td><strong>10</strong></td><td><strong>15</strong></td><td><strong>10</strong></td><td><strong>8</strong></td></tr><tr><td></td><td>+3</td><td>0</td><td>+2</td><td>0</td><td>-1</td></tr><tr><td><strong>Dara</strong></td><td><strong>6</strong></td><td><strong>17</strong></td><td><strong>14</strong></td><td><strong>13</strong></td><td><strong>7 (+1 wasabi)</strong></td></tr><tr><td></td><td>-2</td><td>+3</td><td>+2</td><td>+1</td><td>-1</td></tr><tr><td><strong>Haelrak</strong></td><td><strong>8</strong></td><td><strong>15</strong></td><td><strong>16</strong></td><td><strong>12</strong></td><td><strong>6</strong></td></tr><tr><td></td><td>-1</td><td>+2</td><td>+3</td><td>+1</td><td>-2</td></tr><tr><td><strong>Hazdaim</strong></td><td><strong>9</strong></td><td><strong>14</strong></td><td><strong>10</strong></td><td><strong>12</strong></td><td><strong>12</strong></td></tr><tr><td></td><td>-1</td><td>+2</td><td>0</td><td>+1</td><td>+1</td></tr><tr><td><strong>Léoric</strong></td><td><strong>11</strong></td><td><strong>11</strong></td><td><strong>13</strong></td><td><strong>11</strong></td><td><strong>11</strong></td></tr><tr><td></td><td>0</td><td>0</td><td>+1</td><td>0</td><td>0</td></tr></tbody></table></div>"}
{/snippet}
