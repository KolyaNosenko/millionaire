/* eslint-disable @typescript-eslint/no-empty-interface */
import {} from "styled-components";

import { CustomTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
