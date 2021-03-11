window.onload = () => {
  console.log('window loaded!')
  const buttons = document.querySelectorAll('.btn')
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', (e) => {
      const x = e.pageX - button.offsetLeft
      const y = e.pageY - button.offsetTop
      const span = button.querySelector('span')
      span.style.left = x + 'px'
      span.style.top = y + 'px'
    })
    button.addEventListener('mouseleave', (e) => {
      const x = e.pageX - button.offsetLeft
      const y = e.pageY - button.offsetTop
      const span = button.querySelector('span')
      span.style.left = x + 'px'
      span.style.top = y + 'px'
    })
  })
}
