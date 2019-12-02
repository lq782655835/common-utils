/* https://css.30secondsofcode.org/snippet/border-with-top-triangle/
思路：before/after分别构造两个小三角形，相差1px，叠加造成空心三角形 */
<template>
  <div class="container">
    Border with top triangle
  </div>
</template>

<style>
.container {
  position: relative;
  background: #ffffff;
  padding: 15px;
  border: 1px solid #dddddd;
  margin-top: 20px;
}

.container:before,
.container:after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 19px;
  border: 11px solid transparent;
  border-bottom-color: #dddddd;
}

.container:after {
  /* 白色底覆盖：left多1px，border改小1px */
  left: 20px;
  border: 10px solid transparent;
  border-bottom-color: #ffffff;
}
</style>
