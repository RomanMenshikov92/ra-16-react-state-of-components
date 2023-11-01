import { Component } from "react";
import projectsJson from "./projects.json";
import ToolbarChild from "./ToolbarChild.jsx";
import ProjectListChild from "./ProjectListChild.jsx";
import "./portfolio.css";

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.projectsJson = projectsJson;
    this.state = {
      projects: this.projectsJson,
      selected: "All",
      animate: false,
    };
    this.onSelectFilter = this.onSelectFilter.bind(this);
  }

  onSelectFilter(filter) {
    let projectsJson = this.projectsJson;

    if (filter !== "All") {
      projectsJson = this.projectsJson.filter((projectsJson) => projectsJson.category === filter);
    }

    this.setState({
      projects: projectsJson,
      selected: filter,
      animate: true,
    });

    setTimeout(() => {
      this.setState({
        animate: false,
      });
    }, 1000);
  }

  render() {
    const { selected, projects, animate } = this.state;
    return (
      <>
        <ToolbarChild filters={["All", "Websites", "Flayers", "Business Cards"]} selected={selected} onSelectFilter={this.onSelectFilter} />
        <ProjectListChild projects={projects} animate={animate}></ProjectListChild>
      </>
    );
  }
}
