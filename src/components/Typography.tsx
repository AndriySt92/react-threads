import React from "react"

type TypegraphyProps = {
  children: string
  size?: string
}

export const Typography: React.FC<TypegraphyProps> = ({ children, size = "text-xl" }) => {
  return <p className={`${size}`}>{children}</p>
}