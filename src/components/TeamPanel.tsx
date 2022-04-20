import { Avatar, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { Color, Team } from "../shared/types";

import Button from "./Button";

interface Props {
  team: Team;
  addScore: (value: number) => void;
  initializeTeam: (color: Color, name: string) => void;
}

const TeamPanel: React.FC<Props> = ({ team, addScore, initializeTeam }) => {
  const [newColor, setNewColor] = useState<Color>({ r: 255, g: 255, b: 255 });
  const [newName, setNewName] = useState<string>("");

  const isTeamInitialized: boolean = Boolean(team.name);

  return (
    <Grid container item xs={2} justifyContent="center" spacing={2}>
      <Grid container item xs={12} justifyContent="center">
        {isTeamInitialized ? (
          <Avatar
            sx={{
              bgcolor: `rgb(${team.color.r}, ${team.color.g}, ${team.color.b})`,
            }}
          />
        ) : (
          <SketchPicker
            color={newColor}
            onChangeComplete={(e) =>
              setNewColor({ r: e.rgb.r, g: e.rgb.g, b: e.rgb.b })
            }
          />
        )}
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        {isTeamInitialized ? (
          <Typography variant="h5">
            {team.name}: {team.score}
          </Typography>
        ) : (
          <TextField
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        )}
      </Grid>
      <Grid
        container
        item
        xs={12}
        justifyContent={!isTeamInitialized ? "center" : "space-around"}
      >
        {!isTeamInitialized ? (
          <Grid item>
            <Button
              text="Set Team"
              disabled={!Boolean(newName)}
              onClick={() => initializeTeam(newColor, newName)}
            />
          </Grid>
        ) : null}

        {isTeamInitialized ? (
          <Grid item>
            <Button text="Add 1" onClick={() => addScore(1)} />
          </Grid>
        ) : null}

        {isTeamInitialized ? (
          <Grid item>
            <Button text="Add 100" onClick={() => addScore(100)} />
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default TeamPanel;
