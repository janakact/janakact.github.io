import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  // fileData.slug == "index" ?
  //: null

  return (
    <div>
      <image src="/static/photo.jpeg" width="80px" />
      <h1 class={`page-title ${displayClass ?? ""}`}>
        <a href={baseDir}>{title}</a>
      </h1>
    </div>

  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
