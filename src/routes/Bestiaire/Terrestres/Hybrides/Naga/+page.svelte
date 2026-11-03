<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Naga"}</title>
  <meta name="description" content={"Ne maîtrise qu'une seule magie, qu'ils peuvent imprégner dans un artefact d'invocation d'élémentaire Grandit infiniment, les plus grands ont été obligé de se retirer dans les océans Après 100 ans, la…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Naga"} />
  <meta property="og:description" content={"Ne maîtrise qu'une seule magie, qu'ils peuvent imprégner dans un artefact d'invocation d'élémentaire Grandit infiniment, les plus grands ont été obligé de se retirer dans les océans Après 100 ans, la…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Naga"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<p dir=\"auto\">Ne maîtrise qu'une seule magie, qu'ils peuvent imprégner dans un artefact d'invocation d'élémentaire</p>\n<p dir=\"auto\">Grandit infiniment, les plus grands ont été obligé de se retirer dans les océans</p>\n<p dir=\"auto\">Après 100 ans, la partie humaine de leur corps devient plus massive qu'un humain normal</p>\n<p dir=\"auto\">De ce fait, ils font peur et sont souvent chassés, ce qui les force à vivre en petits groupes souvent en mouvement</p>\n<p dir=\"auto\">Ils vivaient dans une communauté avant la Grande Fracture mais la magie a rendu les hommes plus forts et ils ont été chassés à partir de ce moment là</p>\n<div class=\"table-scroll\"><table>\n<thead>\n<tr>\n<th><span alt=\"naga-water.png\" src=\"naga-water.png\" class=\"internal-embed media-embed image-embed is-loaded\"><img alt=\"naga-water.png\" src=\"%%BASE%%/Images/naga-water.png\"></span></th>\n<th><span alt=\"naga-sand.png\" src=\"naga-sand.png\" class=\"internal-embed media-embed image-embed is-loaded\"><img alt=\"naga-sand.png\" src=\"%%BASE%%/Images/naga-sand.png\"></span></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><span alt=\"naga-warrior.png\" src=\"naga-warrior.png\" class=\"internal-embed media-embed image-embed is-loaded\"><img alt=\"naga-warrior.png\" src=\"%%BASE%%/Images/naga-warrior.png\"></span></td>\n<td><span alt=\"naga-adult.png\" src=\"naga-adult.png\" class=\"internal-embed media-embed image-embed is-loaded\"><img alt=\"naga-adult.png\" src=\"%%BASE%%/Images/naga-adult.png\"></span></td>\n</tr>\n</tbody>\n</table></div>")}
  </div>
</article>

<LinkPreview />
