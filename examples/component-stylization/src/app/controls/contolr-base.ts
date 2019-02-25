import { Input, HostBinding } from "@angular/core";
import { UseControlAs } from "./use-control-as.enum";

/** базовый класс контролов */
export class BaseControl {
  /**
   * Принимает назначение контрола и прикрепляем к хост-элементу как атрибут useas
   * Если назначение не указано, то атрибут не появляется
   */
  @HostBinding("attr.useas")
  @Input()
  useControlAs: UseControlAs;
}
