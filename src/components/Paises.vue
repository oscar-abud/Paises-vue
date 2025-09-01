<script setup>
//Importamos el useQuery para hacer la consulta
import { useQuery } from '@vue/apollo-composable'

// Importamos gpl para definir la consulta
import { gql } from '@apollo/client/core'

// Definimos la consulta
const GET_PAISES = gql`
  query GetPaises {
    countries {
      code
      name
    }
  }
`

// Ejecutamos la consulta y obtenemos las variables reactivas
const { result, loading, error } = useQuery(GET_PAISES)
</script>

<template>
  <section>
    <h1>🌍 Paises del mundo</h1>
    <h2 v-if="loading">Cargando...</h2>
    <h2 v-if="error">Cargando...</h2>
    <div class="cardPais">
      <div v-for="pais in result?.countries" :key="pais.code">
        <p>{{ pais.name }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
  text-align: center;
  margin: 20px 0;
  gap: 10px;
}

section h1 {
  font-size: 3rem;
}
</style>
