import {baseImageGalleryPath, isMobile} from "../../../Utils";
import {Typography} from "@material-ui/core";

const Screen = ({ path, location, time }) => {
    return <div>
        <div
            style={{
                // margin: '0' ,
                background: '#0e0e0e',
                width: "100%",
                height: isMobile() ? "400px" : "640px",
            }}
            className="d-flex align-items-center justify-content-center position-relative"
        ><img
            style={{
                maxHeight: "100%",
                maxWidth: "100%"
            }}
            src={baseImageGalleryPath("LE", path)}
        />
            <Typography
                variant="caption"
                className="position-absolute bottom-0 end-0 p-2"
                style={{ color: "rgba(255, 255, 255, 0.7)"}}
            >
                <div>{ location }</div>
                <div>{ time }</div>
            </Typography>
        </div>
    </div>
}

export default Screen;