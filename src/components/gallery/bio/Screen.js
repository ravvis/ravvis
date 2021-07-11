import {baseImageGalleryPath} from "../../../Utils";
import {Typography} from "@material-ui/core";
import Image from "next/image";

const Screen = ({ path, location, time }) => {
    return <div>
        <div
            style={{
                background: '#0e0e0e',
                width: "100%",
                height: "400px",
            }}
            className="d-flex align-items-center justify-content-center position-relative"
        ><img
            style={{
                maxHeight: "100%",
                maxWidth: "100%"
            }}
            src={baseImageGalleryPath("LE", path)}
            alt="GALLERY - LE"
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