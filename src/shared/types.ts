export interface Color {
    r: number;
    g: number;
    b: number;
  }
  
export  interface Team {
    name: string;
    score: number;
    color: Color;
  }

export  interface Teams {
    right: Team;
    left: Team;
  }