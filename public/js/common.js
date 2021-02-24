document.getElementById("postTextarea").addEventListener('keyup', event => {
    if (event.code == 'ArrowDown' && (!event.ctrlKey || !event.metaKey)) {
      let textBox = alert('ArroDown key is just up!!')
    }
  });