import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {RESUME_URL} from "../../../Utils";
import {Description} from "@material-ui/icons";

export const GET_IN_TOUCH_PLATFORMS = [
  {
    icon: <GitHubIcon/>,
    url: "https://github.com/ravvis",
    label: "Github",
  },
  {
    icon: <LinkedInIcon/>,
    url: "https://www.linkedin.com/in/ravindra-sisodiya/",
    label: "LinkedIn",
  },
  {
    icon: <Description/>,
    url: RESUME_URL(),
    label: "Resume"
  }
];
