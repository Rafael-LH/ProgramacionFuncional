/**
 * FUNCION MUTABLE
 * En esta primer funcion estamos mutando nuestro objeto list esto pudiera ser un poco
 * arriesgado ya que podriamos utilizar este mismo objeto en otra parte del codigo
 * entonces al estarlo mutando alteramos sus valores
 * 
 */
const addToList = (list, item, quantity) => {
  list.push({
    item,
    quantity,
  })

  return list
}
/**
 * FUNCION INMUTABLE
 * en nuestra siguiente funcion lo que hacemos es crear una copia de "list" y gracias a que utilizamos JSON.parse
 * y JSON.stringify estamos haciendo que newList se guarde en un nuevo espacio en memoria
 * de nuestro Memory Heap y de esta manera ya no se almacenaria por referencia
 */
const addToList = (list, item, quantity) => {
  const newList = JSON.parse(JSON.stringify(list))
  newList.push({
    item,
    quantity,
  })

  return newList
} 