<template>
  <div class="page">
    <div class="row shadow-16 background">
      <div
        class="col-6 column-1"
        style="border-top-left-radius: 20px; border-bottom-left-radius: 20px"
      >
        <img
          class="logo"
          src="../assets/bird-lorem.png"
          alt="Logo da Empresa"
        />
      </div>
      <div
        class="col-6 column-2"
        style="border-top-right-radius: 20px; border-bottom-right-radius: 20px"
      >
        <div class="form q-pa-md">
          <h1 class="title">Cadastro</h1>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <label class="hint-label">Nome:</label>
            <q-input
              filled
              v-model="form.name"
              label="Escreva seu nome"
              :maxlength="30"
            />

            <label class="hint-label">Sobrenome:</label>
            <q-input
              filled
              v-model="form.surname"
              label="Escreva seu sobrenome"
              :maxlength="30"
            />

            <label class="hint-label">Data de Nascimento:</label>
            <q-input
              filled
              type="date"
              v-model="form.birthdate"
              lazy-rules
              :rules="[(val) => !!val || '', (val) => testBirthdate(val)]"
            />

            <label class="hint-label">E-mail:</label>
            <q-input
              filled
              v-model="form.email"
              label="Escreva seu email"
              type="email"
              :maxlength="40"
            />

            <label class="hint-label">CPF:</label>
            <q-input
              filled
              v-model="form.cpf"
              label="000.000.000-00"
              mask="###.###.###-##"
              :maxlength="14"
            />

            <div>
              <q-btn class="button" label="Enviar" type="submit" />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const form = ref({});
    const router = useRouter();

    const onSubmit = () => {
      if (localStorage.form) {
        const storageObject = JSON.parse(localStorage.form);
        storageObject.push(form.value);
        localStorage.setItem("form", JSON.stringify(storageObject));
      } else {
        localStorage.setItem("form", JSON.stringify([form.value]));
      }
      router.push("/tabela");
    };

    const testBirthdate = (val) => {
      const ano = val.substring(0, 4);
      return ano < 2023 || "Data de nascimento inválida";
    };
    return {
      form,
      onSubmit,
      testBirthdate,
    };
  },
});
</script>
