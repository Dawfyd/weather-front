import React from "react";
import icon_location_white from "../../../assets/icon_location_white.svg";
import avatar_1 from "../../../assets/avatars/ava1.png";
import avatar_2 from "../../../assets/avatars/ava2.png";
import avatar_3 from "../../../assets/avatars/ava3.png";
import { Avatar } from "antd";

const Places = () => (
  <div className="container_places">
    <div className="container_places_flexbox">
      <p className="text_places_title">Place to</p>
      <p className="text_places">Visit</p>
      <div className="item_reviews">
        <p className="text_add_review">+</p>
        <p className="text_reviews">Top Reviews</p>
        <div className="item_reviews_avatars">
          <Avatar shape="square" className="avatar" src={avatar_1} />
          <Avatar shape="square" className="avatar" src={avatar_2} />
          <Avatar shape="square" className="avatar" src={avatar_3} />
          <Avatar
            shape="square"
            className="avatar"
            style={{
              backgroundColor: "#b5a8f8",
            }}
          >
            +3
          </Avatar>
        </div>
      </div>
      <div className="container_img_places">
        <img
          src={icon_location_white}
          className="icon_location_white"
          alt="icon_location"
        />
        <span className="text_location_visit">Arab Street Singapore</span>
      </div>
      <div className="container_flex_img">
        <div className="container_img_places_short">
          <img
            src={icon_location_white}
            className="icon_location_white_short"
            alt="icon_location"
          />
          <span className="text_location_visit_short">Art Science Museum</span>
        </div>
        <div className="container_new_places">
          <img
            src={icon_location_white}
            className="icon_location_white_new"
            alt="icon_location"
          />
          <span className="text_location_visit_new">Fountain of Wealth</span>
          <button className="button_new_location">+</button>
        </div>
      </div>
    </div>
  </div>
);

export default Places;
