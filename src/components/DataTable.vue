<template>
  <div class="data-table">
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.key" class="header-text">{{ header.text }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td v-for="header in headers" :key="header.key">
            <slot :name="header.key" :item="item">{{ item[header.key] }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { ITableHeaders } from '@/types'

defineProps<{
  headers: ITableHeaders[]
  items: Record<string, any>[]
}>()
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

thead > tr > th {
  background: #7777;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #e9e9e9;
}
.header-text {
  font-weight: 600;
}
</style>
