#!/bin/bash

# Função para gerar um número real aleatório entre 0 e 100
generate_random_number() {
  awk -v seed="$(date +%N)" 'BEGIN { srand(seed); printf("%.2f\n", rand() * 100) }'
}

# Preenche a matriz com números reais aleatórios
for ((i = 0; i < 15; i++)); do
  for ((j = 0; j < 20; j++)); do
    matrix[$i,$j]=$(generate_random_number)
  done
done

# # Exibe a matriz
# for ((i = 0; i < 15; i++)); do
#   for ((j = 0; j < 20; j++)); do
#     printf "%.2f " "${matrix[$i,$j]}"
#   done
#   echo ""
# done
