const form = document.forms[0];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const container = document.getElementById('container');
    let testobject = document.getElementById('testobject');
    // Replacing the node so the CSS refreshes
    // Not sure if this is the best way to do this ¯\_(ツ)_/¯
    const replacementNode = testobject.cloneNode(true);
    container.replaceChild(replacementNode, testobject);

    testobject = document.getElementById('testobject');
    testobject.style.animationName = form.elements.animationName.value;
    testobject.style.animationDuration = form.elements.animationDuration.value + 's';
    testobject.style.animationTimingFunction = form.elements.animationTimingFunction.value;
    testobject.style.animationDelay = form.elements.animationDelay.value + 's';
    testobject.style.animationIterationCount 
        = form.elements.infinite.checked ? 'infinite' : form.elements.animationIterationCount.value;
    testobject.style.animationDirection = form.elements.animationDirection.value;
});