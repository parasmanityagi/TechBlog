import React,{ useState, useEffect } from 'react'
import Card from '../SubComponents/Card'
import data from '../SubComponents/Data'

const Main = () => {
  const[width , setWidth] = useState(window.width);
  const justify = (width >= 920)? "between" : "around";

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  
  return (
    <main style={{maxWidth :"1100px"}} className={`m-auto py-5 d-flex justify-content-${justify} flex-wrap`}>
      {data.map((item, index) => (
        <Card
          key={item.id}
          img={item.img}
          tag={item.tag}
          title={item.title}
          description={item.description}
          author={item.author}
          duration={item.duration}
        />
      ))}
    </main>
  )
}

export default Main