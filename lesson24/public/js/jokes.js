document.querySelectorAll('div.delete')
  .forEach(db => db.addEventListener('click', handleDelete))


async function handleDelete(e) {
  console.log(this.id)
  const jokeId = this.id.replace('delete-', '')
  console.log(jokeId)
  const options = {
    headers: {
      Authorization: 'Bearer 0b115b6e-8fcd-4b66-ac26-33392dcb9340'
    },
    method: 'DELETE'

  }
  
  const rsp = await fetch(`/api/jokes/${jokeId}`, options)
  if(rsp.status == 200) {
    //window.location.reload()
    // Instead of reload, delete the joke HTML in the current page
    const jokeHtml = document.querySelector(`#joke-${jokeId}`)
    jokeHtml.parentElement.removeChild(jokeHtml)

  } else {
    const jokeName = document.querySelector(`#joke-name-${jokeId}`).innerHTML
    document.querySelector('#status').innerHTML = `It was not possible to delete joke '${jokeName}'`
  }
}
