export type TBuildMode = "development" | "production";

export interface IBuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
}

export interface IBuildOptions {
  mode: TBuildMode;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string
}

export interface IBuildEnv {
  mode?: TBuildMode;
  port?: number;
  apiUrl?: string
}
