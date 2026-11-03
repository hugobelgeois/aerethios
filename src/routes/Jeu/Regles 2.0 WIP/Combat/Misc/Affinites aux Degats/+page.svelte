<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "dfense",
          "text": "Défense",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Affinités aux Dégâts"}</title>
  <meta name="description" content={"Défense Amplifie ou réduit les dégâts selon le type d'attaque. Défense Effet Vulnérable Double les dégâts subits Résistant Réduit les dégâts de moitié Immunisé Ne prend aucun dégâts Absorbant…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Affinités aux Dégâts"} />
  <meta property="og:description" content={"Défense Amplifie ou réduit les dégâts selon le type d'attaque. Défense Effet Vulnérable Double les dégâts subits Résistant Réduit les dégâts de moitié Immunisé Ne prend aucun dégâts Absorbant…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Affinités aux Dégâts"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h3 data-heading=\"Défense\" dir=\"auto\" id=\"dfense\">Défense</h3>\n<blockquote dir=\"auto\">\n<p>Amplifie ou réduit les dégâts selon le type d'attaque.</p>\n</blockquote>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th>Défense</th>\n<th>Effet</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Vulnérable</td>\n<td>Double les dégâts subits</td>\n</tr>\n<tr>\n<td>Résistant</td>\n<td>Réduit les dégâts de moitié</td>\n</tr>\n<tr>\n<td>Immunisé</td>\n<td>Ne prend aucun dégâts</td>\n</tr>\n<tr>\n<td>Absorbant</td>\n<td>Transforme les dégâts subits en HP récupérés</td>\n</tr>\n</tbody>\n</table></div>"}
  </div>
</article>

<LinkPreview />
