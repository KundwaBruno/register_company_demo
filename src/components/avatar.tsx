import React from "react";

interface IAvatarProps {
  name: string;
}

function Avatar({ name }: IAvatarProps) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-blue-100">
      <span className="font-medium uppercase text-primary">{name}</span>
    </div>
  );
}

export default Avatar;
