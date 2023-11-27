<template>
  <div>
		<h1 class="title">Dynamic table component with slots. Task-2.1/2.2</h1>
    <DataTable :headers="tableHeaders" :items="tableItems">
      <template #name="{ item }">
        <i>{{ item.name }}</i>
      </template>
      <template #actions="{ item }">
        <div class="actions">
          <div @click="editRow(item)" class="actions__btn">
            <img src="../assets/icons/edit.svg" alt="edit icon" />
          </div>
          <div @click="deleteRow(item)" class="actions__btn">
            <img src="../assets/icons/trash.svg" alt="trash icon" />
          </div>
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DataTable from '@/components/DataTable.vue'

const tableHeaders = ref([
  { key: 'id', text: 'ID' },
  { key: 'name', text: 'Name' },
  { key: 'age', text: 'Age' },
  { key: 'country', text: 'Country' },
  { key: 'city', text: 'City' },
  { key: 'actions', text: 'Actions' }
])
const tableItems = ref([
  { id: 1, name: 'John Doe', country: 'USA', age: 25, city: 'New York' },
  { id: 2, name: 'Doe Jane', country: 'Uzbekistan', age: 17, city: 'Tashkent' },
  { id: 3, name: 'Abbos Khamidullaev', country: 'Russia', age: 30, city: 'Maskva' }
])
const editRow = (item: Record<string, any>) => {
  console.log('Edit this row: ', item)
}
const deleteRow = (item: Record<string, any>) => {
  console.log('Delete this row: ', item)
}
</script>

<style lang="scss" scoped>
.actions {
	display: flex;
	align-items: center;
	justify-content: center;
  &__btn {
    cursor: pointer;
		margin-left: 15px;

    > img {
      width: 25px;
    }
  }
}
</style>
