import { Component } from "react";
import productJson from "./products.json";
import IconSwitchChild from "./IconSwitchChild.jsx";
import CardsViewChild from "./CardsViewChild.jsx";
import ListViewChild from "./ListViewChild.jsx";
import "./store.css";

export class Store extends Component {
  constructor(props) {
    super(props);
    this.state = { icon: "view_module" };

    this.onSwitch = this.onSwitch.bind(this);
  }

  onSwitch() {
    const { icon } = this.state;
    if (icon === "view_list") {
      this.setState({ icon: "view_module" });
    } else {
      this.setState({ icon: "view_list" });
    }
  }

  render() {
    const { icon } = this.state;

    return (
      <>
        <IconSwitchChild icon={icon} onSwitch={this.onSwitch} />
        {icon === "view_module" ? <CardsViewChild cards={productJson} /> : <ListViewChild cards={productJson} />}
      </>
    );
  }
}
