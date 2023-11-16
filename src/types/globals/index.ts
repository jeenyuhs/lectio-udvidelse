import LectioUser from "../../models/lectioUser";
import BaseLectioPage from "../../models/baseLectioPage";

export let lectioUser: LectioUser;
export const regex = {
    URL_GROUPING: /.*.lectio.dk\/lectio\/(?<schoolID>\d*)\/(?<site>.*).aspx/gm
};

export const allRewrittenLectioPages: (typeof BaseLectioPage)[] = [];