


function onMouseDown(elem, component, interval) {
    elem.addEventListener('mousedown', _.throttle(e => {
        component.invokeMethodAsync('HandleMouseDown', e.offsetX, e.offsetY);
    }, interval));
};

function onMouseUp(elem, component, interval) {
    elem.addEventListener('mousemove', kk);
};

function onMouseMoveOninit(elem, component, interval) {
    elem.addEventListener('mousemove', _.throttle(e => {
        component.invokeMethodAsync('HandleMouseMove', e.clientX, e.clientY);
    }, interval));
};
