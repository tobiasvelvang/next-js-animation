import { useState } from "react"
import { CloseIcon, CommentIcon, ExpandIcon } from "../public/icons"

export default function Home() {
  const [expanded, setExpanded] = useState(false)
  const expandImage = () => {
    setExpanded(!expanded)
  }
  return (
    <div className="container">
        <div className="card">
          <button onClick={expandImage} hidden={!expanded} className="card__close-button"><CloseIcon /></button>
          <div className="card__header" ><strong>Shared</strong> by you</div>
          <div className="card__image-container">
            <img className={`card__image ${expanded ? "card__image--expanded":""}`} src="https://images.squarespace-cdn.com/content/v1/5a532d3af6576e6248d17b34/1588502320418-62XT7UVZC59FPZYWL8R6/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/image-asset.jpeg" alt="Tokyo street" />
          </div>
          <div className={`card__info ${expanded ? "card__info--expanded":""}`}>
            <h1 className="card__title">Lost in Tokyo</h1>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ut neque eget urna finibus ultrices.
            </p>
          </div>
          <button onClick={expandImage} hidden={expanded} className="card__expand-image-button"><ExpandIcon/></button>
          <div className={`card__floating-info ${expanded ? "card__floating-info--expanded" : ""}`}>
            <div className="card__floating-title">Lost in Tokyo</div>
            <div className="card__author-name">By Jonathan Vik</div>
            <div className="card__comment-icon"><span className="u-padding-small-h">8</span> <CommentIcon /></div>
          </div>
        </div>
    </div>
  )
}
