export const TABBABLE_SELECTOR = [

'a[href]',

'button:not([disabled])',

'input:not([disabled])',

'select:not([disabled])',

'textarea:not([disabled])',

'[tabindex]:not([tabindex="-1"])',

].join(',');

export function getTabbableElements(
container: HTMLElement,
) {

return Array.from(

container.querySelectorAll<HTMLElement>(
TABBABLE_SELECTOR,
),

).filter(

element =>

!element.hasAttribute(
"disabled",
),

);

}
