<script lang="ts">
  import { applyBase } from "$lib/basePath";
</script>

<svelte:head>
  <title>{"Afflictions"}</title>
  <meta name="description" content={"Saignement La cible perd Xd4 HP par tour jusqu'à être soignée. X représente le nombre de saignement appliqués. Soin : - kit de soin, - sort de soutien de DC 20. Poison La cible prend 1d6 HP par tour…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Afflictions"} />
  <meta property="og:description" content={"Saignement La cible perd Xd4 HP par tour jusqu'à être soignée. X représente le nombre de saignement appliqués. Soin : - kit de soin, - sort de soutien de DC 20. Poison La cible prend 1d6 HP par tour…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Afflictions"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h2 data-heading=\"Saignement\" dir=\"auto\" id=\"saignement\">Saignement</h2>\n<p dir=\"auto\">La cible perd Xd4 HP par tour jusqu'à être soignée.<br>\n<em>X représente le nombre de saignement appliqués.</em></p>\n<p dir=\"auto\">Soin :<br>\n- kit de soin,<br>\n- sort de soutien de DC 20.</p>\n<h2 data-heading=\"Poison\" dir=\"auto\" id=\"poison\">Poison</h2>\n<p dir=\"auto\">La cible prend 1d6 HP par tour pendant 3 tours ou jusqu'à être soigné.</p>\n<p dir=\"auto\">Chaque nouvelle application ajoute 3 tours.</p>\n<p dir=\"auto\">Soin :<br>\n- antidote,<br>\n- sort de soutien de DC 15.</p>\n<h2 data-heading=\"Surcharge\" dir=\"auto\" id=\"surcharge\">Surcharge</h2>\n<p dir=\"auto\">La cible perd 1d4 crystaux et perd 4 HP par crystal perdu.</p>\n<p dir=\"auto\">Une fois atteinte de Surcharge, la cible est immunisé pour le reste du combat.</p>"}
  </div>
</article>
