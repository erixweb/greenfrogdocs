const viewTransitionSupported = () => {
  return Boolean(document.startViewTransition)
}

const fetchView = async (url) => {
  const response = await fetch(url)
  const text = await response.text()

  const data = text.match(/<body>([\s\S]*)<\/body>/i)[1]

  return data
}
const updateDOM = (content) => {
  document.body.innerHTML = content
}
window.navigation.addEventListener("navigate", (event) => {
  if (!viewTransitionSupported()) return

  const url = new URL(event.destination.url)

  if (location.origin !== url.origin) return

  event.intercept({
    async handler() {
      const data = await fetchView(url.pathname)

      document.startViewTransition(async () => {
        await updateDOM(data)
        document.documentElement.scrollTop = 0
        if (url.pathname.startsWith("/docs/")) {
          const fetchScript = await fetch("/js/highlight.js")
          const script = await fetchScript.text()

          eval(script)
        }
      })
    },
  })
})
