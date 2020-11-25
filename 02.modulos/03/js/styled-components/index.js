function createStyleAPI(tag) {
  return (styles) => (content) =>
    `<${tag} style="${styles}">${content}</${tag}>`;
}

const tags = ['h1', 'h2', 'h3', 'p', 'div'];
function ObjectStyled(tags) {
  return tags.reduce(
    (acc, tag) => ({ ...acc, [tag]: createStyleAPI(tag) }),
    {}
  );
}

const styled = ObjectStyled(tags);

export default styled;
