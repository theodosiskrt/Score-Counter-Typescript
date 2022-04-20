import { useState } from "react";
import { Grid } from "@mui/material";

import TeamPanel from "./components/TeamPanel";
import { Color, Teams } from "./shared/types";
import { teamsInitialState } from "./shared/constants";

type Side = "right" | "left";

const App: React.FC = () => {
  const [teams, setTeams] = useState<Teams>(teamsInitialState);

  const getInitializeTeam = (side: Side) => (color: Color, name: string) =>
    setTeams({ ...teams, [side]: { ...teams[side], color, name } });

  const getAddScore = (side: Side) => (value: number) =>
    setTeams({
      ...teams,
      [side]: { ...teams[side], score: teams[side].score + value },
    });

  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          container
          item
          xs={12}
          justifyContent="space-around"
          sx={{ minHeight: "400px" }}
        >
          <TeamPanel
            team={teams.left}
            addScore={getAddScore("left")}
            initializeTeam={getInitializeTeam("left")}
          />
          <TeamPanel
            team={teams.right}
            initializeTeam={getInitializeTeam("right")}
            addScore={getAddScore("right")}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
