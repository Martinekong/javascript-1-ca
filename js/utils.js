export function createElement(elementType) {
  return document.createElement(elementType)
}

export function createElementWithClass(elementType, className = "") {
  const element = document.createElement(elementType);
  if (className) {
    element.className = className
  };
  return element;
}