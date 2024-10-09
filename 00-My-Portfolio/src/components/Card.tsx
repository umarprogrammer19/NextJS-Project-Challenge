import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  buttonOnClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  buttonLink,
  buttonOnClick
}) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden max-w-sm mx-auto">
        <div className="relative h-40">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-full"
            layout="fill"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          {buttonText && (
            <div className="my-6">
              <Button text={buttonText} href={buttonLink} onClick={buttonOnClick} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
