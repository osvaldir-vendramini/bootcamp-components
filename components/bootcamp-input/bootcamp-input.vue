<template>
  <div>
    <label>{{ `${translations.label}` }}</label>
    <input
      v-model="valueInput"
      :type="typeInput"
      :placeholder="txtPlaceholder"
      :autocomplete="autocomplete"
    >
    <button
      v-show="showButtonInput"
    >
      +
    </button>
    <span v-if="getStateError() && !errorMessageBehavior" >
      {{ errorMessage }}
    </span>
  </div>
</template>
<script src="./components.js" />
