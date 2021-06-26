import {Card, CardContent, CardHeader, Link, Typography} from "@material-ui/core";
import ReactMarkdown from 'react-markdown'

const ProjectCard = ({ title, content, image_src, image, description, technologies = [], time, url }) => {
  return (
    <>
      <Card>
        <div className="d-flex justify-content-between p-sm-3 my-1">
          <div>
            <Link href={url} target="_blank">
              <CardHeader title={title} subheader={description}/>
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
          <div className="p-3">
            { !!image && image }
            { !!image_src && <img src={image_src} width="60px" alt="img"/> }
          </div>
        </div>
      </Card>
      <div className="py-2"/>
    </>
  )
}
export default ProjectCard;
