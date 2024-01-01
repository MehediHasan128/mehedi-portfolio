import { Box, Typography } from "@mui/material";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const ProjectCard = (items) => {

    const {image, title, description, projectLink} = items;

    return (
        <>
            <Box className="mb-10">
            <div className="bg-gradient-to-r from-[#df4018] to-[#af3db8] px-3 pt-3 rounded-t-lg">
              <div className="overflow-hidden">
                <img
                  className="rounded-t-lg hover:scale-125 duration-700"
                  src={image}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <Typography variant="h5" className="flex items-center gap-2">
                  <GoDotFill />
                  <p className="font-semibold">{title}</p>
                </Typography>
                <Typography variant="body1">
                  <p className="font-medium ml-8">{description}</p>
                </Typography>
              </div>
              <div className="mr-3">
                <Typography variant="h5" className="cursor-pointer">
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </Typography>
              </div>
            </div>
          </Box>   
        </>
    );
};

export default ProjectCard;