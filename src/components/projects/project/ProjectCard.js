import {Card, CardContent, CardHeader, Link, Typography} from "@material-ui/core";
import ReactMarkdown from 'react-markdown'

const ProjectCard = ({ title, content, image_src, image, description, technologies = [], time, url }) => {
  return (
    <>
      <Card>
        <div className="p-sm-3 my-1">
          <Link href={url} target="_blank">
            <div className="d-flex justify-content-between flex-nowrap">
              <CardHeader
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
          <CardContent>
            {
              content &&
              <Typography variant="subtitle2" display="block" gutterBottom>
                <ReactMarkdown>{ content }</ReactMarkdown>
              </Typography>
            }
            <Typography variant="caption" display="block" gutterBottom>
              { time }
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              <div className="d-flex">
                {technologies.map((tech, index) => <div className="pe-2">{tech}{index !== technologies.length - 1 ? ", " : ""}</div>)}
              </div>
            </Typography>
          </CardContent>
        </div>
      </Card>
      <div className="py-2"/>
    </>
  )
}
export default ProjectCard;
