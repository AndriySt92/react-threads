import React from "react"

type ContainerProps = {
  children: React.ReactElement[] | React.ReactElement
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="flex max-w-screen-xl mx-auto mt-10">{children}</div>
}