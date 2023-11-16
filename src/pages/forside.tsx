// import { register } from "../common/decorators";
import BaseLectioPage from "../models/baseLectioPage";

// @register("forside")
export default class Forside extends BaseLectioPage {
    constructor() {
        super("forside");
    }

    parse() {
        // TODO: parsing
        console.log("parsing part...");
    }

    render() {
        console.log("rendering part...");
    }
}