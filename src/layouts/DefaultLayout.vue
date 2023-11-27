<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Trees</router-link></li>
          <li><router-link to="/users">Table</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
nav {
  background-color: rebeccapurple;
  padding: 15px 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  & > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    & > li {
      margin-right: 25px;
    }

    & > li > a {
      text-decoration: none;
      color: white;
      font-weight: bold;
      font-size: 18px;
      &:hover {
        color: #ffcc00;
      }
    }
  }
}
</style>
