<script setup lang="ts">
import { twMerge } from "tailwind-merge"

import Gnome from "./controls/linux/Gnome.vue"
import MacOs from "./controls/MacOs.vue"
import Windows from "./controls/Windows.vue"
import type { WindowControlsProps } from "./types"

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<WindowControlsProps>(), {
  justify: false,
  hide: false,
  hideMethod: "display",
  className: "",
})

const customClass = twMerge(
  "flex",
  props.className,
  props.hide && (props.hideMethod === "display" ? "hidden" : "invisible")
)
</script>

<template>
  <Windows
    v-if="platform === 'windows'"
    @close="props.onClose && props.onClose()"
    @minimize="props.onMinimize && props.onMinimize()"
    @maximize="props.onMaximize && props.onMaximize()"
    :class="twMerge(customClass, props.justify && 'ml-0')"
  />
  <MacOs
    v-else-if="platform === 'macos'"
    @close="props.onClose && props.onClose()"
    @minimize="props.onMinimize && props.onMinimize()"
    @maximize="props.onMaximize && props.onMaximize()"
    :class="twMerge(customClass, props.justify && 'ml-0')"
  />
  <Gnome
    v-else-if="platform === 'gnome'"
    @close="props.onClose && props.onClose()"
    @minimize="props.onMinimize && props.onMinimize()"
    @maximize="props.onMaximize && props.onMaximize()"
    :class="twMerge(customClass, props.justify && 'ml-auto')"
  />
  <Windows v-else :class="twMerge(customClass, props.justify && 'ml-auto')" />
</template>