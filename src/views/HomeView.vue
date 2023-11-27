<template>
  <div>
    <h1 class="title">Tree View with Checkboxes. Task-1</h1>
    <TreeComp :data="treeData" @checkbox-change="handleCheckboxChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TreeComp from '@/components/TreeView.vue'
import type { Ref } from 'vue'
import type { ITreeParent } from '@/types/index'

const treeData: Ref<ITreeParent[]> = ref([
  {
    id: 1,
    label: 'Document-1:',
    checked: false,
    children: [
      {
        id: 2,
        label: 'Typescript:',
        checked: false
      },
      {
        id: 3,
        label: 'Vue 3:',
        checked: false,
        children: [
          {
            id: 4,
            label: 'Pinia:',
            checked: false
          },
          {
            id: 5,
            label: 'Composition API:',
            checked: false
          }
        ]
      }
    ]
  },
  {
    id: 6,
    label: 'Document-2:',
    checked: false
  }
])

const handleCheckboxChange = (tree: ITreeParent) => {
  console.log('Checkbox status changed :) ', tree)
}
</script>
