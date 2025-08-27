import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails.jsx";
import { useMediaQuery } from "react-responsive";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-5  sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className={isMobile ? `flex  justify-between gap-2 mt-2 text-sand` : `flex gap-5 mt-2 text-sand`}>
            {tags.map((tag) => (
              <span className={isMobile ? `text-[12px]` : ``} key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
