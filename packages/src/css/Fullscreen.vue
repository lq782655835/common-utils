/*https://css.30secondsofcode.org/snippet/fullscreen/*/
<template>
  <div class="container">
    <p>
      <em
        >Click the button below to enter the element into fullscreen mode.
      </em>
    </p>
    <div class="element" id="element">
      <p>I change color in fullscreen mode!</p>
    </div>
    <br />
    <button
      onclick="var el = document.getElementById('element'); el.requestFullscreen();"
    >
      Go Full Screen!
    </button>
  </div>
</template>

<style>
.container {
  margin: 40px auto;
  max-width: 700px;
}

.element {
  padding: 20px;
  height: 300px;
  width: 100%;
  background-color: skyblue;
  box-sizing: border-box;
}

.element p {
  text-align: center;
  color: white;
  font-size: 3em;
}

.element:-ms-fullscreen p {
  visibility: visible;
}

.element:fullscreen {
  background-color: #e4708a;
  width: 100vw;
  height: 100vh;
}
</style>
