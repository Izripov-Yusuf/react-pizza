import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return (
    <ContentLoader 
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="130" r="130" /> 
      <rect x="10" y="267" rx="0" ry="0" width="260" height="29" /> 
      <rect x="10" y="312" rx="6" ry="6" width="260" height="84" /> 
      <rect x="10" y="409" rx="6" ry="6" width="102" height="35" /> 
      <rect x="138" y="409" rx="6" ry="6" width="130" height="35" />
    </ContentLoader>
  )
}

export default LoadingBlock
