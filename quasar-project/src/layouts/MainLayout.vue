<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-toolbar-title>
          <a href="/">
            <img
              src="../assets/bird-lorem.png"
              alt="Logo da Empresa"
              style="max-width: 8%"
            />
          </a>
        </q-toolbar-title>

        <div>
          {{ formValue[formValue.length - 1].name }}
          {{ formValue[formValue.length - 1].surname }}
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const formValue = JSON.parse(localStorage.form);
    return {
      formValue,
    };
  },
});
</script>
