#!bin/bash
CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
ORANGE='\033[0;33m'
RED='\033[1;31m'
NC='\033[0m'

echo $YELLOW"[$PURPLE INTERAÇÃO DO TERMUX $YELLOW] $ORANGE- $YELLOW[$PURPLE 1 / 2 / 3 / 4 / 5 $YELLOW]$CYAN
1 ➙ FAZER DOWNLOAD DAS DEPENDÊNCIAS 
2 ➙ GERAR CONEXÃO POR CÓDIGO
3 ➙ GERAR CONEXÃO POR QR-CODE
4 ➙ CRIADOR DESSE SYSTEM
5 ➙ LIMPAR MENSAGENS DO TERMUX$PURPLE
 \n\nDIGITE A ESCOLHA: $RED"
read inp
if [ "$inp" = "1" ]; then
sh iniciar.sh
fi
if [ "$inp" = "2" ]; then
clear && node node connect.js sim
echo $CYAN "DIGITE sh iniciar.sh"
fi
if [ "$inp" = "3" ]; then
clear && node start.js
echo $CYAN "DIGITE sh iniciar.sh"
fi
if [ "$inp" = "4" ]; then
clear
echo $CYAN "@07.regis, agora digita sh iniciar.sh"
fi
if [ "$inp" = "5" ]; then
clear && sh iniciar.sh
fi
