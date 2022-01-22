
import {dolce,supreme,gucci,louis,chanel,zara,} from "./imports.js";

const Design = () => {
    const designs = [
      { name: louis },
      { name: gucci },
      { name: zara },
      { name: chanel },
      { name: supreme },
      { name: dolce },
    ];
    return (
      <>
        <div className="designs section-padding">
          {designs.map((item, i) => (
            <div key={item.name + i}>
              <img  className="design-img" src={item.name} alt="logo" />
            </div>
          ))}
        </div>
      </>
    );
  };

export default Design