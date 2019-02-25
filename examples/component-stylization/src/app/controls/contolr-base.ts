import { Input, HostBinding } from "@angular/core";
import { UseElementAs } from "./custom-contexts.enum";

/** базовый класс контролов */
export class BaseControl {
  /**
   * Принимаем контексты и прикрепляем их к хост-элементу как атрибуты
   * Если назначение не указано, то атрибут не появляется
   */
  @HostBinding("attr.useas")
  @Input()
  protected useElementAs: UseElementAs;
}
