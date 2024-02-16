import {message as exampleMessage} from "./example.module.scss";
import {message as commonMessage} from "./common.module.scss";

document.body.insertAdjacentHTML("afterbegin", `
    <div class="${exampleMessage} ${commonMessage}">Hello World</div>
`);