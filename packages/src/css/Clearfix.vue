/*https://css.30secondsofcode.org/snippet/clearfix/*/
<template>
  <div class="clearfix">
    <div class="floated">float a</div>
    <div class="floated">float b</div>
    <div class="floated">float c</div>
  </div>
</template>

<style>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.floated {
  float: left;
}
</style>
