<template>
  <div>
    <form
      id="todolistbootcamp"
      @submit.prevent="addItemList"
    >
      <bootcamp-input
        :state="stateInput"
        :errorMessageBehavior="true"
        :indexMessageError="indexMessageError"
        autocomplete="on"
        :createButtton="true"
        :translations="{
          label: 'What will you do?',
          placeholder: 'Type some fanny tasks!',
          errorWarning: 'errorWarning',
          errorAlert: 'errorAlert',
        }"
        @valueInput="addValueInput"
      />
    </form>
    <!-- :itemsList="itemsList" -->
    <bootcamp-list
      v-if="itemsList.length"
      :itemsList="itemsList"
      :statusItemList="statusItemList"
      @actionItemList="actionItemList"
    />
  </div>
</template>
<script src="./todolistcomponentization.js"></script>
