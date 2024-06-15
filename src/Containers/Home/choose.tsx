import React from "react";
import { CHOOSE_DATA, ChooseDataItem } from "../../Constants";

const Choose: React.FC = () => {
  return (
    <section className="wrapper choose-wrapper">
      <h2>Why Choose us?</h2>
      <div className="choose-card-wrapper">
        {CHOOSE_DATA.map((item: ChooseDataItem, index: number) => {
          return (
            <div className="choose-card" key={index}>
              <div>
                <img src={item.img} alt={item.name} />
              </div>
              <div>
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Choose;
