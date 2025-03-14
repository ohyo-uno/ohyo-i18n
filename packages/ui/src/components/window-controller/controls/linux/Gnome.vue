<script setup lang="ts">
import { twMerge } from "tailwind-merge"
import Button from "../../components/Button.vue"
import Icons from "../../components/Icons.vue"

const props = defineProps<{
  onClose?: () => void
  onMinimize?: () => void
  onMaximize?: () => void
}>()
</script>

<template>
  <div
    :class="
      twMerge(
        'mr-[10px] h-auto items-center space-x-[13px]',
        $attrs.class as string
      )
    "
  >
    <Button
      class="m-0 aspect-square h-6 w-6 cursor-default rounded-full bg-[#dadada] p-0 text-[#3d3d3d] hover:bg-[#d1d1d1] active:bg-[#bfbfbf] dark:bg-[#373737] dark:text-white dark:hover:bg-[#424242] dark:active:bg-[#565656]"
      @click="props.onMinimize && props.onMinimize()"
    >
      <Icons icon="minimizeWin" class="h-[9px] w-[9px]" />
    </Button>
    <Button
      class="m-0 aspect-square h-6 w-6 cursor-default rounded-full bg-[#dadada] p-0 text-[#3d3d3d] hover:bg-[#d1d1d1] active:bg-[#bfbfbf] dark:bg-[#373737] dark:text-white dark:hover:bg-[#424242] dark:active:bg-[#565656]"
      @click="props.onMaximize && props.onMaximize()"
    >
      <!-- <Icons
        icon="maximizeRestoreWin"
        class="h-[9px] w-[9px]"
      /> -->
      <Icons icon="maximizeWin" class="h-2 w-2" />
    </Button>
    <Button
      class="m-0 aspect-square h-6 w-6 cursor-default rounded-full bg-[#dadada] p-0 text-[#3d3d3d] hover:bg-[#d1d1d1] active:bg-[#bfbfbf] dark:bg-[#373737] dark:text-white dark:hover:bg-[#424242] dark:active:bg-[#565656]"
      @click="props.onClose && props.onClose()"
    >
      <Icons icon="closeWin" class="h-2 w-2" />
    </Button>
  </div>
</template>