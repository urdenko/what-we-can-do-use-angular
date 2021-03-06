/**
 * Задаем собственные контексты для компонент.
 *
 * Здесь нужно описывать именно контексты,
 * без прямого приказа для компонент.
 * Например, ParentColorScheme вместо ColorStyle.
 *
 * Смысл контекста в том, что через него родители информируют дочку об её окружении,
 * и уже дочка сама определяет свое поведение в этой среде
 */

/** Контекст назначения элемента */
export enum UseElementAs {
  cancel = "cancel",
  required = "required"
}
