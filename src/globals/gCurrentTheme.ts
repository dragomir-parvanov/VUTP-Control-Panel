import { BehaviorSubject } from "rxjs";
import { Theme, createMuiTheme } from "@material-ui/core";

const gCurrentTheme = new BehaviorSubject<Theme>(createMuiTheme());

export default gCurrentTheme;
