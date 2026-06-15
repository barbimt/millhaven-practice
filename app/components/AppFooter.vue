<template>
  <footer class="mx-auto w-full max-w-mobile">
    <div class="relative h-[204px] w-full">
      <svg
        class="block h-full w-full"
        viewBox="0 0 390 204"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <clipPath :id="clipId">
            <path
              d="M315.152 142.288C347 142.288 378.838 110.889 390 92.7115V204H0V44.7878C7.22222 30.4657 30.3333 1.49096 65 0.168927C108.333 -1.48362 137.879 8.43166 181.212 54.7029C224.545 100.974 273.21 142.288 315.152 142.288Z"
            />
          </clipPath>
          <filter
            :id="filterId"
            x="0"
            y="0"
            width="390"
            height="208"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_166_544" />
          </filter>
        </defs>

        <g :clip-path="`url(#${clipId})`" :filter="`url(#${filterId})`">
          <path
            d="M315.152 142.288C347 142.288 378.838 110.889 390 92.7115V204H0V44.7878C7.22222 30.4657 30.3333 1.49096 65 0.168927C108.333 -1.48362 137.879 8.43166 181.212 54.7029C224.545 100.974 273.21 142.288 315.152 142.288Z"
            fill="#028B9C"
          />
        </g>
      </svg>

      <img
        src="/images/footer/person-laptop.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        width="95"
        height="233"
        class="pointer-events-none absolute -left-0.5 bottom-0 z-10 h-[232.55px] w-[95.48px] max-h-none max-w-none object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
      >

      <img
        src="/images/footer/person-tablet.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        width="104"
        height="121"
        class="pointer-events-none absolute bottom-3 right-3 z-10 h-[121px] w-[104px] max-h-none max-w-none object-contain"
      >

      <img
        src="/images/footer/logo-newham.png"
        alt="Newham London — Justice for All"
        width="128"
        height="57"
        class="pointer-events-none absolute bottom-5 left-1/2 z-10 h-[57px] w-[128px] max-h-none max-w-none -translate-x-1/2 object-contain"
      >
    </div>
  </footer>
</template>

<script setup>
const filterId = `filter_footer_${useId()}`
const clipId = `clip_footer_${useId()}`
</script>
