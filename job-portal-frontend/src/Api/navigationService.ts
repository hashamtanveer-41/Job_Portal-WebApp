import { NavigateFunction } from "react-router-dom";

let navigator: NavigateFunction | null = null;

export const setNavigator = (nav: NavigateFunction) => {
    navigator = nav;
};

export const redirectTo = (path: string) => {
    if (navigator) {
        navigator(path);
    } else {
        window.location.href = path;
    }
};