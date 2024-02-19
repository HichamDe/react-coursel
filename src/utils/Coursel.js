

export function moveToLeft(slider) {
    // get children
    const children = slider.children;
    // remove first one
    const removedChild = slider.removeChild(children[0]);
    // replace to end
    slider.append(removedChild);


}
export function moveToRight(slider) {
    // get children
    const children = slider.children;
    // remove first one
    const removedChild = slider.removeChild(children[children.length-1]);
    // replace to start
    slider.prepend(removedChild);

}

