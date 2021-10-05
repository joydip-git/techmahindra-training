import { createElement } from "react";
export function Hello() {
    const data = 'hello everyone...'
    const design = createElement('p', { id: 'p1' }, data)
    return design;
}