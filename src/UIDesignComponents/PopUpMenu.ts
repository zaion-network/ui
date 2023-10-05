import { UIDesign } from "../UIDesign";

interface PopUpMenuValue {
  classes: {
    closeIcon: string;
    chatWindow: string;
    inputContainer: string;
    input: string;
    popUpMenu: string;
    button: string;
  };
}

export class PopUpMenu {
  value: PopUpMenuValue;
  constructor(value: PopUpMenuValue) {
    this.value = value;
  }

  get tree() {
    return PopUpMenu.createpopupmenu(this.value);
  }
  get element() {
    return PopUpMenu.createpopupmenu(this.value).element;
  }
  static createpopupmenu = ({ classes }: PopUpMenuValue) => {
    const closeIcon = new UIDesign({
      tag: "div",
      id: "close-icon",
      className: classes.closeIcon,
    }).setInnerText("✖︎");
    const chatWindow = new UIDesign({
      tag: "div",
      id: "chat-window",
      className: classes.chatWindow,
    });
    const input = new UIDesign({
      tag: "input",
      id: "message-input",
      className: classes.input,
    })
      .setHtmlAttribute("type", "text")
      .setHtmlAttribute("placeholder", "Scrivi un messaggio...");
    const button = new UIDesign({
      tag: "button",
      id: "chat-send",
      className: classes.button,
    }).setInnerText("Invia");
    const inputContainer = new UIDesign({
      tag: "div",
      id: "input-container",
      className: classes.inputContainer,
    });
    const popUpMenu = new UIDesign({
      tag: "div",
      id: "pop-up-menu",
      className: classes.popUpMenu,
    })
      .addChild(closeIcon)
      .addChild(chatWindow)
      .addChild(inputContainer);
    inputContainer.addChild(input).addChild(button);
    return popUpMenu;
  };
}
