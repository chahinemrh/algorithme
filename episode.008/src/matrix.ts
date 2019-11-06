interface matrix {
  columns: number[][];
  rows : number[][];
}
export default function strToMatrix(matrixStr: string): matrix
  {
    let rowMatrix = matrixStr.split("\n")
    .map(r => r.split(" ")
    .map(Number))
    let mat:matrix =
    {
      rows: rowMatrix,
      columns: rowMatrix[0].map((_, i) => rowMatrix.map(row => row[i]))
    }
    return (mat)
 }
