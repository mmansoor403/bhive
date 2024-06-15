import React from "react";
import direction from "../../Assets/Images/direction.svg";
import arrow from "../../Assets/Images/arrow.svg";
import work from "../../Assets/Images/work.svg";
import { useAppSelector } from "../../hooks";
import { DayPassDiscount, SpaceData } from "../../Constants";

const Space: React.FC = () => {
  const spaceList = useAppSelector((state) => state.spaces.space_list);

  const calculateBulkPassPrice = (price: number, discount: DayPassDiscount) => {
    const discountAmount = (price * discount.value) / 100;
    return price * 10 - discountAmount * 10;
  };

  return (
    <section className="wrapper space-wrapper">
      <h2>Our Space Overview</h2>
      <div className="space-card-wrapper">
        {spaceList.length === 0 ? (
          <p>No spaces found</p>
        ) : (
          spaceList.map((item: SpaceData, index: number) => {
            const bulkPassPrice = item.day_pass_discounts_percentage["10"]
              ? calculateBulkPassPrice(
                  item.day_pass_price,
                  item.day_pass_discounts_percentage["10"]
                )
              : item.day_pass_price * 10;

            return (
              <div className="space-card" key={index}>
                <div className="header">
                  <h3>{item.name}</h3>
                  <div>
                    <img src={direction} alt="direction" />
                    <h4>6 kms</h4>
                  </div>
                </div>
                <div className="space-body">
                  <div>
                    <img src={work} alt="workspace" />
                    <p>Workspace</p>
                  </div>
                  <img
                    src={`https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/${item.images[0]}`}
                    alt={item?.name}
                  />
                </div>
                <div className="space-footer">
                  <button>
                    <div>
                      <p>Day Pass</p>
                      <h4>
                        ₹ {item?.day_pass_price} <span>/ Day</span>
                      </h4>
                    </div>
                    <div>
                      <img src={arrow} alt="arrow" />
                    </div>
                  </button>
                  <button>
                    <label>
                      {item.day_pass_discounts_percentage["10"]?.value}%
                      Discount
                    </label>
                    <div>
                      <p>Bulk Pass</p>
                      <h4>
                        ₹ {bulkPassPrice.toFixed(0)}
                        <span> / 10 Days</span>
                      </h4>
                    </div>
                    <div>
                      <img src={arrow} alt="arrow" />
                    </div>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Space;
