const stack: HTMLElement[] = [];

export function pushScope(
    element: HTMLElement,
) {
    stack.push(element);
}

export function popScope(
    element: HTMLElement,
) {

    const index =
        stack.indexOf(element);

    if (index >= 0) {

        stack.splice(index, 1);

    }

}

export function topScope() {

    return stack[
        stack.length - 1
    ];

}
