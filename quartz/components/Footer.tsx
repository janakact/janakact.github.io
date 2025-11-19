import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const links = {
      GitHub: "https://github.com/janakact",
      "Google Scholar": "https://scholar.google.com/citations?user=E7r7hTUAAAAJ&hl=en",
      "LinkedIn": "https://www.linkedin.com/in/janakachathuranga/",
      "Blog": "https://medium.com/@janakachathuranga",
      "Instagram": "https://www.instagram.com/janakact/",
      "ORCID": "https://orcid.org/0000-0002-7267-6136"
    }
    const year = new Date().getFullYear()


    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
        </p>
        {
          Object.entries(links).map(([text, link], i) => (
            <>
              {i == 0 ? "" : " | "}
              <a href={link}>{text}</a>
            </>
          )
          )
        }
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
