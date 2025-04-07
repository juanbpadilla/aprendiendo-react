/**
 * Esta es una función que revisa si hay un ganador en el tablero de juego sin usar
 * ninguna constante externa, como WINNER_COMBOS.
 * Recibe un tablero como argumento y verifica si hay una combinación ganadora.
 * Si hay un ganador, devuelve el símbolo del ganador ('X' o 'O').
 * Si no hay ganador, devuelve null.
 * 
 * @param {*} boardToCheck 
 * @returns 
 */
export const checkWinnerFrom = (boardToCheck) => {
  
  // convertimos el tablero en un arreglo de arreglos para poder revisar las filas y columnas
  // y las diagonales
  const boardRows = Array.from({ length: 3 }, (_, i) => boardToCheck.slice(i * 3, (i * 3) + 3));
  
  // revisamos las diagonales (principal e inversa) para ver si hay un ganador
  const checkDiagonal = (boardRowsToCheck, isInverted = false) => {
    const result = boardRowsToCheck.every((items, row) => items[row] !== null && items[row] === boardRowsToCheck[0][0]) ? boardRowsToCheck[0][0] : null

    if (result || isInverted) return result
    return checkDiagonal(boardRowsToCheck.reverse(), true)
  }
  
  // Llamamos la función checkDiagonal para revisar la diagonal principal y la inversa
  const checkMainDiagonal = checkDiagonal(boardRows)
  if (checkMainDiagonal) return checkMainDiagonal
  
  for (const row in boardRows) {
    const items = boardRows[row]
    const checkRow = items.every(item => item === items[0] && item !== null) ? items[0] : null
    if (checkRow) return checkRow
    const checkCol = boardRows.every(item => item[row] !== null && item[row] === items[row]) ? items[row] : null
    if (checkCol) return checkCol
  }
  return null
}

// import { WINNER_COMBOS } from "../constants"

/**
 * Esta función revisa si hay un ganador en el tablero de juego.
 * Recibe un tablero como argumento y verifica si hay una combinación ganadora.
 * Si hay un ganador, devuelve el símbolo del ganador ('X' o 'O').
 * Si no hay ganador, devuelve null.
 * Para ello revisa todas las combinaciones ganadoras definidas en WINNER_COMBOS.
 * 
 * @param {*} newBoard 
 * @returns 
 */
// export const checkWinnerFrom = (boardToCheck) => {
//   // revisamos todas las combinaciones ganadoras
//   // para ver si X u O ganó

//   for (const combo of WINNER_COMBOS) {
//     const [a, b, c] = combo
//     if (
//       boardToCheck[a] && // 0 -> x u o
//       boardToCheck[a] === boardToCheck[b] && // 0 y 3 -> x -> x u o -> o
//       boardToCheck[a] === boardToCheck[c]
//     ) {
//       return boardToCheck[a] // x u o
//     }
//   }
//   // si no hay ganador
//   return null
// }

export const checkEndGame = (newBoard) => {
  // revisamos si hay un empate
  // si no hay mas espacios vacíos
  // en el tablero
  return newBoard.every((square) => square != null)
}