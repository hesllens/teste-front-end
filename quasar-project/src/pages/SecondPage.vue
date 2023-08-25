<template>
  <div class="q-pa-md">
    <q-table
      class="tableDivide"
      title=""
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { date } from "quasar";
const { addToDate } = date;

export default defineComponent({
  name: "SecondPage",
  setup() {
    const columns = [
      {
        name: "name",
        label: "NOME",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "surname",
        label: "SOBRENOME",
        align: "left",
        field: (row) => row.surname,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "data",
        align: "left",
        label: "DATA",
        field: "birthdate",
        format: (val) => formatDate(val),
        sortable: true,
      },
      {
        name: "email",
        align: "left",
        label: "E-MAIL",
        field: "email",
        sortable: true,
      },
      {
        name: "cpf",
        align: "left",
        label: "CPF",
        field: "cpf",
        sortable: true,
      },
    ];
    const rows = JSON.parse(localStorage.form);

    const formatDate = (val) => {
      let newDate = addToDate(new Date(val), { days: 1 });
      newDate = date.formatDate(new Date(newDate), "DD/MM/YYYY");
      return newDate;
    };

    return {
      formatDate,
      columns,
      rows,
    };
  },
});
</script>
