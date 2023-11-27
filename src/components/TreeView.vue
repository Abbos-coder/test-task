<template>
  <ul class="tree">
    <li v-for="tree in data" :key="tree.id">
      <details>
        <summary class="tree__wrap">
          <input
            type="checkbox"
            class="tree__wrap-checkbox"
            v-model="tree.checked"
            @change="onCheckboxChange(tree)"
          />
          <span class="tree__wrap-label">{{ tree.label }}</span>
        </summary>
        <TreeView v-if="tree.children" :data="tree.children" @checkbox-change="onCheckboxChange" />
      </details>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { ITreeParent } from '@/types'

defineProps(['data'])
const emits = defineEmits(['checkbox-change'])

const onCheckboxChange = (tree: ITreeParent) => {
  const updateChildTree = (tree: ITreeParent) => {
    if (tree.children) {
      tree.children.forEach((child) => {
        child.checked = tree.checked
        updateChildTree(child)
      })
    }
  }

  updateChildTree(tree)
  emits('checkbox-change', tree)
}
</script>

<style lang="scss" scoped>
.tree {
  list-style: none;
  &__wrap-label {
    padding: 5px 10px;
    display: inline-block;
  }
}
</style>
