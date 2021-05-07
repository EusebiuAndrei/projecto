import {Theme} from '@material-ui/core/styles/createMuiTheme';
import {createMuiTheme, responsiveFontSizes} from "@material-ui/core";

import {themeOptions} from "./themeOptions";
import {colors} from "./colors";

const customThemeOptions = {
    colors
}

export type DefaultTheme = {
    custom: typeof customThemeOptions
} & Theme;

const theme = createMuiTheme({
    ...themeOptions,
    custom: {...customThemeOptions}
}) as DefaultTheme;

const themeWithResponsiveFontSizes = responsiveFontSizes(theme) as DefaultTheme;

export default themeWithResponsiveFontSizes;

/*
    WHY?
    - performant CSS in JS solution
    - can use either js or sass syntax
    - can use either useStyles or styled or withStyles (just pick your favorite)
    - can use interpolation easily to apply styles depending on props
    - can modify their theme + extend it with your own properties
 */