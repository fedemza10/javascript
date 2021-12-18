export const renderList = (listaId, lista) => {
for (const  item of lista) { 
    const listacontainer = document.getElementById (listaId)
    const itemList = document.createElement ('li')
    
    itemList.innerHTML = `<span> 
     
                               ${ item.nombre }
                             $ ${ item.precio}
                               
                               </span>`
 
    listacontainer.appendChild (itemList)



}
}


