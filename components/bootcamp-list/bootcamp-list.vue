<template>
<ul>
  <li v-for="(item, key) in itemsList" :key="key">
    {{ `${item.text} - ${item.status}` }}
    <span class="options">
      <button @click="actionItemList('delete', item.id, item.status)">
        -
      </button>
      <button @click="actionItemList('changeState', item.id, item.status == 1 ? '2' : '1')">
        v
      </button>
    </span>
  </li>
</ul>
</template>
<script src="./components.js" />
