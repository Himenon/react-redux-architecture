import type { BasePage } from "../../components";
import type * as Types from "../types/bootstrap";

export class Store {
  constructor(private stores: Types.Stores) {
  }

  public generateProps = (): BasePage.Navigation.Props => {
    return {
      brand: {
        linkText: "Design Pattern",
        onClick: () => {
          this.stores.browser.router.push(this.stores.domain.site.getUrl("root"));
          return false;
        },
      },
      items: [
        {
          linkText: "Button Behavior",
          onClick: () => {
            this.stores.browser.router.push(this.stores.domain.site.getUrl("design-pattern/button-behavior"));
          },
        },
      ],
    };
  };
}
