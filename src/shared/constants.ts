import { Teams } from "./types";

const teamsInitialState: Teams = {
    right: { name: "", score: 0, color: { r: 0, g: 0, b: 0 } },
    left: { name: "", score: 0, color: { r: 0, g: 0, b: 0 } },
  };
  
  export { teamsInitialState }