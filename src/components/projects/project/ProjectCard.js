import ReactMarkdown from 'react-markdown'
import Link from "next/link";

const ProjectCard = ({ title, content, image_src, image, description, technologies = [], time, url }) => {
  return (
    <>
      <div>
        <div className="p-sm-3 my-1">
          <Link href={url} target="_blank">
            <div className="d-flex justify-content-between flex-nowrap">
              <div
                title={title}
                subheader={description}
                titleTypographyProps={{ className: "fs-3 pb-1" }}
              />
              <div className="p-3 d-none d-sm-block">
                { !!image && image }
                { !!image_src && <img src={image_src} width="60px" alt="img"/> }
              </div>
            </div>
          </Link>
          <div>
            {
              content &&
              <div variant="subtitle2" display="block" gutterBottom>
                <ReactMarkdown>{ content }</ReactMarkdown>
              </div>
            }
            <div variant="caption" display="block" gutterBottom>
              { time }
            </div>
            <div variant="caption" display="block" gutterBottom>
              <div className="d-flex">
                {technologies.map((tech, index) => <div className="pe-2" key={index}>{tech}{index !== technologies.length - 1 ? ", " : ""}</div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2"/>
    </>
  )
}
export default ProjectCard;
