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
const Lazy = target => {
  const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(async entry => {
          if (entry.isIntersecting) {
            const req = await fetch(
              "https://api.github.com/repos/andriycraft/GreenFrogMCBE/contributors"
            )
            const contributors = await req.json()
            let DOMUpdate = ""

            contributors.forEach(contributor => {
              DOMUpdate += `
                <a href="${contributor.html_url}" target="_blank" class="contributor-card" rel="nofollow">
                  <img src="${contributor.avatar_url}" alt="${contributor.login}'s github profile picture">
                </a>
              `
            })

            document.querySelector(".github-contributors").innerHTML = DOMUpdate
          }
      })
  })
  io.observe(target)
}

document.querySelectorAll(".github-contributors").forEach(Lazy)
