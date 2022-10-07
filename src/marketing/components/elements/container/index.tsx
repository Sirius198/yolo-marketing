import clsx from "clsx";
import React from "react"

export const Container: React.FC<{
  className?: string;
  children: React.ReactNode;
  [x: string]: any;
}> = ({ className, children, ...rest }) => {
  const clsname = clsx('w-full lg:max-w-[1080px] mx-auto', className)
  return (
    <div className={clsname} {...rest}>
      {children}
    </div>
  )
}