import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  image: string;
}

function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <div 
      className="h-[50vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="pt-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            {description && (
              <p className="text-xl text-neutral-300 max-w-2xl">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;