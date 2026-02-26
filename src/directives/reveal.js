export default {
  mounted(el, binding) {
    const delay = (binding?.value && Number(binding.value.delay)) || 0
    el.style.opacity = '0'
    el.style.transform = 'translateY(18px)'
    el.style.transition = `opacity 650ms ease ${delay}ms, transform 650ms ease ${delay}ms`

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          io.disconnect()
        }
      },
      { threshold: 0.14 }
    )

    io.observe(el)
  },
}
